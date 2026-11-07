importScripts("locales.js");

/**
 * Chanopy — Background Service Worker
 * Handles storage, message routing, PocketTube import detection.
 * 
 * Storage strategy:
 *  - chrome.storage.local for everything (no sync quota limits)
 *  - Auto-migrates from sync to local on first run
 */

// ─── Default Data ─────────────────────────────────────────────────────────────

const DEFAULT_STORAGE = {
  groups: [],
  channelMap: {},
  watchedVideos: {},
  settings: {
    hideWatchedDefault: false,
    defaultFetchVolume: 100,
    defaultLayout: 'grid',
    defaultGridColumns: 4,
  },
  exportVersion: 3,
};
const MAX_WATCHED_VIDEOS = 50000;
const WATCHED_TRIM_BATCH = 1000;

// ─── Install & Migration ──────────────────────────────────────────────────────

chrome.runtime.onInstalled.addListener((details) => withStorageLock(async () => {
  try { await chrome.storage.session?.remove('tsCatalogCacheV1'); } catch (e) {}
  if (details.reason === 'install') {
    const existing = await chrome.storage.local.get(null);
    if (!existing.groups) {
      await chrome.storage.local.set({
        groups: DEFAULT_STORAGE.groups,
        channelMap: DEFAULT_STORAGE.channelMap,
        watchedVideos: DEFAULT_STORAGE.watchedVideos,
        settings: DEFAULT_STORAGE.settings,
        exportVersion: DEFAULT_STORAGE.exportVersion,
      });
    }
    console.log('[YTSM:SW] Extension installed, storage initialized.');
  }

  if (details.reason === 'update') {
    // Migrate from sync to local if needed
    try {
      const syncData = await chrome.storage.sync.get(['groups', 'settings']);
      if (syncData.groups && syncData.groups.length > 0) {
        const localData = await chrome.storage.local.get('groups');
        if (!localData.groups || localData.groups.length === 0) {
          await chrome.storage.local.set({
            groups: syncData.groups,
            settings: { ...DEFAULT_STORAGE.settings, ...syncData.settings },
          });
          console.log('[YTSM:SW] Migrated groups from sync to local storage.');
        }
      }
    } catch (e) {
      console.warn('[YTSM:SW] Migration check failed:', e);
    }

    // One-time recovery requested after a failed catalog replacement. Restore
    // its pre-change snapshot, then apply the bundled catalog as the sole tree.
    try {
      const replacement = await chrome.storage.local.get([TS_CATALOG_REPLACE_UNDO_KEY, TS_CATALOG_RECOVERY_MARKER]);
      const snapshot = replacement[TS_CATALOG_REPLACE_UNDO_KEY];
      if (snapshot && snapshot.before && !replacement[TS_CATALOG_RECOVERY_MARKER]) {
        await tsLoadCatalog(true);
        await chrome.storage.local.set(snapshot.before);
        const result = await tsCatalogReplace();
        if (!result.success) throw new Error(result.error || 'catalog-recovery-failed');
        await chrome.storage.local.set({ [TS_CATALOG_RECOVERY_MARKER]: true });
        console.info('[Chanopy] Restored the previous snapshot and applied the updated catalog.', result);
      }
    } catch (e) {
      console.error('[Chanopy] Catalog recovery failed:', e);
    }
  }
}));

// ─── Message Router ───────────────────────────────────────────────────────────

// All read/modify/write jobs share one queue, including imports and background jobs.
let storageQueue = Promise.resolve();
function withStorageLock(job) {
  const result = storageQueue.then(job);
  storageQueue = result.catch(() => {});
  return result;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const handler = message && Object.hasOwn(messageHandlers, message.type) && messageHandlers[message.type];
  if (handler) {
    withStorageLock(() => handler(message.payload || {}, sender))
      .then(sendResponse)
      .catch((err) => {
        console.error(`[YTSM:SW] Handler error for ${message.type}:`, err);
        sendResponse({ error: err.message });
      });
    return true;
  }
  return false;
});

const messageHandlers = {
  GET_LOCALIZED_GROUP_NAMES: async ({ locale = 'uk' }) => {
    const catalog = await tsLoadCatalog();
    const byId = {};
    const aliasesById = {};
    const candidatesByUkName = new Map();
    for (const category of catalog.categories.values()) {
      byId[category.id] = tsCategoryName(category, locale, catalog.defaultLocale);
      aliasesById[category.id] = [...new Set(Object.values(category.names).map(name => String(name).trim().toLocaleLowerCase()))];
      const ukName = String(category.names.uk || '').trim().toLocaleLowerCase();
      if (ukName) candidatesByUkName.set(ukName, [...(candidatesByUkName.get(ukName) || []), category.id]);
    }
    const byUkName = {};
    for (const [name, ids] of candidatesByUkName) if (ids.length === 1) byUkName[name] = byId[ids[0]];
    return { byId, aliasesById, byUkName };
  },

  GET_GROUPS: async () => {
    const data = await chrome.storage.local.get('groups');
    return { groups: data.groups || [] };
  },

  SAVE_GROUPS: async (payload) => {
    validateNativeData({ groups: payload.groups });
    const current = await chrome.storage.local.get('groups');
    if (!Array.isArray(payload.expectedGroups) || JSON.stringify(current.groups || []) !== JSON.stringify(payload.expectedGroups)) {
      throw new Error('Групи вже змінено в іншій вкладці. Повторіть дію.');
    }
    await chrome.storage.local.set({ groups: payload.groups });
    return { success: true };
  },

  DELETE_GROUP: async ({ groupId }) => {
    const data = await chrome.storage.local.get(['groups', 'channelMap']);
    const removed = new Set();
    function collect(g) { removed.add(g.id); (g.children || []).forEach(collect); }
    function prune(list) {
      return list.filter(g => { if (g.id === groupId) { collect(g); return false; } return true; })
        .map(g => ({ ...g, children: prune(g.children || []) }));
    }
    const groups = prune(data.groups || []);
    const channelMap = data.channelMap || {};
    for (const entry of Object.values(channelMap)) {
      entry.groups = (entry.groups || []).filter(id => !removed.has(id));
    }
    await chrome.storage.local.set({ groups, channelMap });
    return { success: true };
  },

  PATCH_CHANNEL_MAP: async ({ changes = {}, removeIds = [] }) => {
    const data = await chrome.storage.local.get(['groups', 'channelMap']);
    const map = data.channelMap || {};
    const validGroups = new Set();
    (function walk(list) { for (const g of list) { validGroups.add(g.id); walk(g.children || []); } })(data.groups || []);
    for (const [id, patch] of Object.entries(changes)) {
      if (patch.existingOnly && !map[id]) continue;
      const { addGroups = [], removeGroups = [], existingOnly, ...fields } = patch;
      const prev = map[id] || { name: id, groups: [] };
      // Groups are deltas, so unrelated changes from other tabs survive.
      delete fields.groups;
      map[id] = { ...prev, ...fields, groups: [...new Set([...(prev.groups || []).filter(g => !removeGroups.includes(g)), ...addGroups])].filter(g => validGroups.has(g)) };
    }
    for (const id of removeIds) delete map[id];
    await chrome.storage.local.set({ channelMap: map });
    return { success: true, channelMap: map };
  },

  SET_LOCAL_DATA: async ({ data }) => {
    if (!isRecord(data) || Object.keys(data).some(k => ['groups', 'channelMap', 'watchedVideos', 'settings'].includes(k))) {
      throw new Error('Use the dedicated storage operation');
    }
    await chrome.storage.local.set(data);
    return { success: true };
  },

  GET_CHANNEL_MAP: async () => {
    const data = await chrome.storage.local.get('channelMap');
    return { channelMap: data.channelMap || {} };
  },

  SAVE_CHANNEL_MAP: async (payload) => {
    throw new Error('Use PATCH_CHANNEL_MAP to avoid overwriting concurrent changes');
  },

  GET_SETTINGS: async () => {
    const data = await chrome.storage.local.get('settings');
    return { settings: { ...DEFAULT_STORAGE.settings, ...data.settings } };
  },

  SAVE_SETTINGS: async (payload) => {
    validateNativeData({ settings: payload.settings });
    const existing = await chrome.storage.local.get('settings');
    const merged = { ...DEFAULT_STORAGE.settings, ...existing.settings, ...payload.settings };
    await chrome.storage.local.set({ settings: merged });
    return { success: true };
  },

  GET_WATCHED: async () => {
    const data = await chrome.storage.local.get('watchedVideos');
    return { watchedVideos: data.watchedVideos || {} };
  },

  TOGGLE_WATCHED: async (payload) => {
    const data = await chrome.storage.local.get('watchedVideos');
    const watched = data.watchedVideos || {};
    if (watched[payload.videoId]) {
      delete watched[payload.videoId];
    } else {
      watched[payload.videoId] = Date.now();
      const ids = Object.keys(watched);
      if (ids.length > MAX_WATCHED_VIDEOS + WATCHED_TRIM_BATCH) {
        ids.sort((a, b) => (Number(watched[a]) || 0) - (Number(watched[b]) || 0));
        for (const id of ids.slice(0, ids.length - MAX_WATCHED_VIDEOS)) delete watched[id];
      }
    }
    await chrome.storage.local.set({ watchedVideos: watched });
    return { watchedVideos: watched };
  },

  PATCH_ACTIVITY_AUDIT: async ({ changes = {}, removeIds = [] }) => {
    const data = await chrome.storage.local.get('activityAudit');
    const activityAudit = { ...(data.activityAudit || {}) };
    for (const [id, entry] of Object.entries(changes)) activityAudit[id] = entry;
    for (const id of removeIds) delete activityAudit[id];
    await chrome.storage.local.set({ activityAudit });
    return { success: true, activityAudit };
  },

  APPEND_UNSUB_HISTORY: async ({ entries = [] }) => {
    const data = await chrome.storage.local.get('unsubHistory');
    const history = [...(data.unsubHistory || []), ...entries];
    const deduped = new Map(history.map(entry => [JSON.stringify([entry.id, entry.date || '']), entry]));
    const unsubHistory = [...deduped.values()].slice(-5000);
    await chrome.storage.local.set({ unsubHistory });
    return { success: true, unsubHistory };
  },

  CLEAR_UNSUB_HISTORY: async () => {
    await chrome.storage.local.set({ unsubHistory: [] });
    return { success: true };
  },

  CLAIM_WEEKLY_BACKUP: async () => {
    const now = Date.now();
    const { lastBackupAt = 0, backupLeaseUntil = 0 } = await chrome.storage.local.get(['lastBackupAt', 'backupLeaseUntil']);
    if (now - lastBackupAt < 7 * 24 * 60 * 60 * 1000 || backupLeaseUntil > now) return { claimed: false };
    await chrome.storage.local.set({ backupLeaseUntil: now + 2 * 60 * 1000 });
    return { claimed: true };
  },

  FINISH_WEEKLY_BACKUP: async ({ success = false } = {}) => {
    const update = { backupLeaseUntil: 0 };
    if (success) update.lastBackupAt = Date.now();
    await chrome.storage.local.set(update);
    return { success: true };
  },

  EXPORT_DATA: async () => {
    const data = await chrome.storage.local.get(null);
    return {
      exportData: {
        ...data,
        exportTimestamp: new Date().toISOString(),
      },
    };
  },

  IMPORT_DATA: async (payload) => {
    const data = payload.data;
    if (!isRecord(data)) throw new Error('Import must be a JSON object');
    
    // Detect format: our native format vs PocketTube/third-party
    if (data.groups && Array.isArray(data.groups)) {
      // Native format — direct import
      return await importNativeFormat(data);
    }
    
    if (data.ysc_collection || isPocketTubeFormat(data)) {
      // PocketTube format detected
      return await importPocketTubeFormat(data);
    }

    // Unknown format — try native as fallback
    return await importNativeFormat(data);
  },
};

// ─── Import Handlers ──────────────────────────────────────────────────────────

function isRecord(value) { return value !== null && typeof value === 'object' && !Array.isArray(value); }
function validateNativeData(data) {
  if (!isRecord(data)) throw new Error('Import must be a JSON object');
  if (!['groups', 'channelMap', 'settings', 'watchedVideos', 'unsubHistory', 'activityAudit', 'tsLang'].some(k => Object.hasOwn(data, k))) {
    throw new Error('Unknown backup format');
  }
  const ids = new Set();
  function groups(list, depth = 0) {
    if (!Array.isArray(list) || depth > 50) throw new Error('Invalid group tree');
    for (const g of list) {
      if (!isRecord(g) || typeof g.name !== 'string' || !g.name.trim()) throw new Error('Invalid group name');
      if (g.id !== undefined) {
        if (typeof g.id !== 'string' || !g.id || ids.has(g.id)) throw new Error('Invalid or duplicate group ID');
        ids.add(g.id);
      }
      if (g.children !== undefined) groups(g.children, depth + 1);
    }
  }
  if (Object.hasOwn(data, 'groups')) groups(data.groups);
  for (const k of ['channelMap', 'settings', 'watchedVideos', 'activityAudit']) {
    if (Object.hasOwn(data, k) && !isRecord(data[k])) throw new Error('Invalid ' + k);
  }
  for (const entry of Object.values(data.channelMap || {})) {
    if (!isRecord(entry) || (entry.name !== undefined && typeof entry.name !== 'string') ||
        (entry.groups !== undefined && (!Array.isArray(entry.groups) || entry.groups.some(g => typeof g !== 'string')))) {
      throw new Error('Invalid channel entry or group membership');
    }
  }
  const settings = data.settings || {};
  for (const k of ['defaultFetchVolume', 'defaultGridColumns']) {
    if (Object.hasOwn(settings, k) && (!Number.isInteger(settings[k]) || settings[k] < 1)) throw new Error('Invalid setting: ' + k);
  }
  if (Object.hasOwn(settings, 'hideWatchedDefault') && typeof settings.hideWatchedDefault !== 'boolean') throw new Error('Invalid hideWatchedDefault');
  for (const k of ['defaultLayout', 'sidebarPosition']) {
    if (Object.hasOwn(settings, k) && typeof settings[k] !== 'string') throw new Error('Invalid setting: ' + k);
  }
  for (const value of Object.values(data.watchedVideos || {})) {
    if (typeof value !== 'number' || !Number.isFinite(value)) throw new Error('Invalid watched timestamp');
  }
  for (const value of Object.values(data.activityAudit || {})) {
    if (!isRecord(value)) throw new Error('Invalid activity entry');
  }
  if (Object.hasOwn(data, 'unsubHistory') && (!Array.isArray(data.unsubHistory) || data.unsubHistory.some(e =>
    !isRecord(e) || typeof e.id !== 'string' ||
    ['groups', 'groupNames'].some(k => e[k] !== undefined && (!Array.isArray(e[k]) || e[k].some(g => typeof g !== 'string')))))) {
    throw new Error('Invalid unsubscribe history');
  }
  if (Object.hasOwn(data, 'tsLang') && !globalThis.TUBESTACK_LOCALES.order.includes(data.tsLang)) throw new Error('Invalid language');
}

async function importNativeFormat(data) {
  validateNativeData(data);
  const existing = await chrome.storage.local.get(['groups', 'channelMap', 'watchedVideos', 'settings', 'unsubHistory', 'activityAudit']);
  const existingGroups = existing.groups || [];
  const update = {};

  // Збираємо всі наявні id, щоб імпортовані групи не конфліктували за id
  const usedIds = new Set();
  (function collect(list) {
    for (const g of list) { usedIds.add(g.id); if (Array.isArray(g.children)) collect(g.children); }
  })(existingGroups);

  // idMap: id із файлу імпорту -> id, який реально буде в сховищі
  const idMap = new Map();

  // Рекурсивне злиття: групи з тією самою назвою на одному рівні зливаються,
  // решта додаються (з новим id, якщо старий уже зайнятий).
  function mergeLevel(current, incoming) {
    const result = [...current];
    for (const g of incoming || []) {
      if (!g || typeof g !== 'object') continue;
      const match = result.find((x) => x.name === g.name);
      if (match) {
        if (g.id !== undefined) idMap.set(g.id, match.id);
        if (Array.isArray(g.children) && g.children.length) {
          match.children = mergeLevel(match.children || [], g.children);
        }
      } else {
        let id = g.id;
        if (id === undefined || usedIds.has(id)) id = generateId();
        usedIds.add(id);
        if (g.id !== undefined) idMap.set(g.id, id);
        result.push({ ...g, id, children: mergeLevel([], g.children) });
      }
    }
    return result;
  }

  if (Array.isArray(data.groups)) {
    update.groups = mergeLevel(existingGroups, data.groups);
  }
  if (data.channelMap && typeof data.channelMap === 'object') {
    const merged = { ...(existing.channelMap || {}) };
    for (const [chId, info] of Object.entries(data.channelMap)) {
      const mappedGroups = (info?.groups || []).map((gid) => idMap.get(gid) ?? gid);
      const prev = merged[chId];
      merged[chId] = {
        ...(prev || {}),
        ...info,
        groups: [...new Set([...(prev?.groups || []), ...mappedGroups])],
      };
    }
    update.channelMap = merged;
  }
  if (data.settings) {
    update.settings = { ...DEFAULT_STORAGE.settings, ...existing.settings, ...data.settings };
  }
  if (data.watchedVideos) {
    const merged = { ...(existing.watchedVideos || {}), ...data.watchedVideos };
    update.watchedVideos = merged;
  }
  if (data.activityAudit) update.activityAudit = { ...(existing.activityAudit || {}), ...data.activityAudit };
  if (data.tsLang) update.tsLang = data.tsLang;
  if (data.unsubHistory) {
    const history = new Map();
    for (const entry of [...(existing.unsubHistory || []), ...data.unsubHistory]) {
      const mapped = { ...entry, groups: (entry.groups || []).map(id => idMap.get(id) ?? id) };
      history.set(JSON.stringify([entry.id, entry.date || '']), mapped);
    }
    update.unsubHistory = [...history.values()].slice(-5000);
  }
  // Validate and prepare everything before the first write; quota failures leave no partial import.
  await chrome.storage.local.set(update);

  console.log('[YTSM:SW] Native import complete.');
  return { success: true, format: 'native' };
}

function isPocketTubeFormat(data) {
  // Check if the data has group-name keys whose values are arrays of UC IDs
  for (const [key, value] of Object.entries(data)) {
    if (key.startsWith('ysc_')) continue;
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string' && value[0].startsWith('UC')) {
      return true;
    }
  }
  return false;
}

async function importPocketTubeFormat(data) {
  const existing = await chrome.storage.local.get(['groups', 'channelMap']);
  const existingGroups = existing.groups || [];
  const existingChannelMap = existing.channelMap || {};
  const existingNames = new Set(existingGroups.map(g => g.name));
  
  const newGroups = [];
  const newChannelMap = { ...existingChannelMap };

  // Extract group names from ysc_collection or from top-level keys
  const groupEntries = {};
  
  for (const [key, value] of Object.entries(data)) {
    // Skip PocketTube metadata keys
    if (key.startsWith('ysc_') || key === 'exportTimestamp' || key === 'exportVersion') continue;
    
    if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
      groupEntries[key] = value;
    }
  }

  for (const [groupName, channelIds] of Object.entries(groupEntries)) {
    // Skip if group already exists
    if (existingNames.has(groupName)) {
      // But still add channels to the existing group's channel map
      const existingGroup = existingGroups.find(g => g.name === groupName);
      if (existingGroup) {
        for (const chId of channelIds) {
          if (!newChannelMap[chId]) {
            newChannelMap[chId] = { name: chId, groups: [existingGroup.id] };
          } else if (!newChannelMap[chId].groups?.includes(existingGroup.id)) {
            newChannelMap[chId].groups = [...(newChannelMap[chId].groups || []), existingGroup.id];
          }
        }
      }
      continue;
    }

    // Create new group
    const groupId = generateId();
    const group = {
      id: groupId,
      name: groupName,
      children: [],
    };
    newGroups.push(group);
    existingNames.add(groupName);

    // Map channels to this group
    for (const chId of channelIds) {
      if (!newChannelMap[chId]) {
        newChannelMap[chId] = { name: chId, groups: [groupId] };
      } else {
        newChannelMap[chId].groups = [...(newChannelMap[chId].groups || []), groupId];
      }
    }
  }

  const mergedGroups = [...existingGroups, ...newGroups];
  await chrome.storage.local.set({ groups: mergedGroups, channelMap: newChannelMap });
  
  console.log(`[YTSM:SW] PocketTube import complete: ${newGroups.length} new groups, ${Object.keys(groupEntries).length} total groups processed.`);
  return { success: true, format: 'pockettube', newGroups: newGroups.length };
}

function generateId() {
  // crypto.randomUUID not available in service workers on all browsers
  return 'g_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
}

// ─── Chanopy local patch: proxied unsubscribe (SW fetch carries cookies) ────
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== 'TS_UNSUB') return false;
  (async () => {
    try {
      const senderUrl = new URL(sender.url || '');
      if (!sender.tab || sender.frameId !== 0 || !['https://www.youtube.com', 'https://youtube.com'].includes(senderUrl.origin)) {
        throw new Error('unsubscribe-request-not-from-youtube-main-frame');
      }
      const key = String(message.key || '');
      if (!key || key.length > 256 || !isRecord(message.body)) throw new Error('invalid-unsubscribe-request');
      const results = await chrome.scripting.executeScript({
        target: { tabId: sender.tab.id, frameIds: [0] },
        world: 'MAIN',
        func: async ({ apiKey, requestHeaders, requestBody }) => {
          try {
            const url = `${location.origin}/youtubei/v1/subscription/unsubscribe?key=${encodeURIComponent(apiKey)}&prettyPrint=false`;
            const response = await fetch(url, { method: 'POST', headers: requestHeaders, credentials: 'same-origin', body: JSON.stringify(requestBody) });
            let text = '';
            try { text = await response.text(); } catch (e) {}
            return { ok: response.ok, status: response.status, body: String(text).slice(0, 500) };
          } catch (e) {
            return { ok: false, status: 0, body: String((e && e.message) || e) };
          }
        },
        args: [{ apiKey: key, requestHeaders: isRecord(message.headers) ? message.headers : { 'Content-Type': 'application/json' }, requestBody: message.body }],
      });
      return results[0]?.result || { ok: false, status: 0, body: 'No result from YouTube page' };
    } catch (e) {
      return { ok: false, status: 0, body: String((e && e.message) || e) };
    }
  })().then(sendResponse).catch((e) => sendResponse({ ok: false, status: 0, body: String(e) }));
  return true;
});

// ─── Chanopy local patch: PocketTube share page fetch (host permission) ─────
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== 'TS_SHARE_FETCH') return false;
  (async () => {
    try {
      const id = String(message.id || '').replace(/[^\w-]/g, '');
      const resp = await fetch('https://pockettube.io/share?id=' + encodeURIComponent(id), { credentials: 'omit' });
      const text = await resp.text();
      return { ok: resp.ok, status: resp.status, html: String(text).slice(0, 4000000) };
    } catch (e) {
      return { ok: false, status: 0, html: '', error: String((e && e.message) || e) };
    }
  })().then(sendResponse).catch((e) => sendResponse({ ok: false, status: 0, html: '', error: String(e) }));
  return true;
});

// ─── Chanopy local patch: subscriptions harvest orchestrator ────────────────
// Creates a feed/channels tab, injects the validated v5 scroll-harvester into the
// page MAIN world, merges the result into channelMap, closes the tab.
function tsHarvestStatusFn(message) {
  var title = message.statusTitle;
  var body = message.statusBody;
  var dark = document.documentElement.hasAttribute("dark");
  var banner = document.createElement("div");
  banner.id = "ts-harvest-status";
  banner.setAttribute("role", "status");
  banner.setAttribute("aria-live", "polite");
  banner.setAttribute("aria-atomic", "true");
  banner.style.cssText = "position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:2147483647;display:flex;align-items:center;gap:14px;width:min(760px,calc(100vw - 32px));box-sizing:border-box;padding:14px 18px;border:1px solid " + (dark ? "#3ea6ff" : "#065fd4") + ";border-radius:12px;background:" + (dark ? "#0f0f0f" : "#fff") + ";color:" + (dark ? "#f1f1f1" : "#0f0f0f") + ";box-shadow:0 4px 24px rgba(0,0,0,.24);font:14px/1.45 Roboto,Arial,sans-serif;pointer-events:none;";
  var style = document.createElement("style");
  style.id = "ts-harvest-status-style";
  style.textContent = "@keyframes ts-harvest-spin{to{transform:rotate(360deg)}}#ts-harvest-status .ts-harvest-spinner{width:20px;height:20px;flex:0 0 20px;border:2px solid " + (dark ? "rgba(62,166,255,.25)" : "rgba(6,95,212,.2)") + ";border-top-color:" + (dark ? "#3ea6ff" : "#065fd4") + ";border-radius:50%;animation:ts-harvest-spin .9s linear infinite}@media(prefers-reduced-motion:reduce){#ts-harvest-status .ts-harvest-spinner{animation:none;border-right-color:" + (dark ? "#3ea6ff" : "#065fd4") + "}}";
  var spinner = document.createElement("span");
  spinner.className = "ts-harvest-spinner";
  spinner.setAttribute("aria-hidden", "true");
  var text = document.createElement("span");
  text.textContent = title + ". " + body;
  banner.appendChild(spinner);
  banner.appendChild(text);
  (document.head || document.documentElement).appendChild(style);
  document.documentElement.appendChild(banner);
}

function tsHarvestFn() {
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var byId = new Map();
  function addId(id, name) {
    if (id && /^UC[\w-]{22}$/.test(id)) {
      var nm = (name || "").trim();
      if (!byId.has(id) || nm.length > (byId.get(id) || "").length) byId.set(id, nm);
    }
  }
  function harvest() {
    document.querySelectorAll("ytd-channel-renderer, ytd-grid-channel-renderer").forEach(function (el) {
      var d = el.data || (el.__data && el.__data.data);
      if (d && d.channelId) {
        var t = d.title || {};
        addId(d.channelId, t.simpleText || (t.runs && t.runs[0] && t.runs[0].text) || "");
      }
    });
    document.querySelectorAll("yt-lockup-view-model").forEach(function (el) {
      var vm = el.viewModel || (el.__data && el.__data.viewModel);
      var lv = vm && vm.lockupViewModel;
      if (lv && /^UC/.test(lv.contentId || "")) {
        var m = lv.metadata && lv.metadata.lockupMetadataViewModel;
        addId(lv.contentId, (m && m.title && m.title.content) || "");
      }
    });
    document.querySelectorAll('a[href*="/channel/UC"]').forEach(function (a) {
      var m2 = a.href.match(/\/channel\/(UC[\w-]{22})/);
      if (m2) addId(m2[1], (a.textContent || "").trim().split("\n")[0]);
    });
  }
  async function scrollPass(pass) {
    var last = -1, stable = 0, i = 0;
    while (stable < 5 && i < 250) {
      i++;
      window.scrollTo(0, document.documentElement.scrollHeight);
      await sleep(1500);
      harvest();
      var c = byId.size;
      if (c === last) stable++; else stable = 0;
      last = c;
      document.title = "[" + c + "] " + document.title.replace(/^\[\d+\]\s*/, "");
    }
  }
  return (async function () {
    var prevTitle = document.title;
    window.scrollTo(0, 0);
    await sleep(1000);
    harvest();
    await scrollPass(1);
    window.scrollTo(0, 0);
    await sleep(1500);
    await scrollPass(2);
    window.scrollTo(0, 0);
    document.title = prevTitle;
    var out = [];
    byId.forEach(function (name, id) { out.push({ id: id, name: name }); });
    return { channels: out };
  })();
}

let tsHarvestRunning = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || message.type !== 'TS_HARVEST_START') return false;
  if (tsHarvestRunning) {
    sendResponse({ ok: false, error: 'already-running' });
    return false;
  }
  tsHarvestRunning = true;
  (async () => {
    let tab = null;
    let ping = null;
    try {
      tab = await chrome.tabs.create({ url: 'https://www.youtube.com/feed/channels', active: true });
      await new Promise((resolve) => {
        const listener = (tabId, info) => {
          if (tabId === tab.id && info.status === 'complete') {
            chrome.tabs.onUpdated.removeListener(listener);
            resolve();
          }
        };
        chrome.tabs.onUpdated.addListener(listener);
        setTimeout(() => { try { chrome.tabs.onUpdated.removeListener(listener); } catch (e) {} resolve(); }, 30000);
      });
      // Перевіряємо, що вкладка справді на сторінці підписок (не логін/consent)
      const cur = await chrome.tabs.get(tab.id);
      let pathOk = false;
      try {
        const u = new URL(cur.url || cur.pendingUrl || '');
        pathOk = (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') && u.pathname === '/feed/channels';
      } catch (e) {}
      if (!pathOk) throw new Error('not-on-subscriptions-page (sign in to YouTube?)');

      let language = globalThis.TUBESTACK_LOCALES.order.includes('uk') ? 'uk' : globalThis.TUBESTACK_LOCALES.order[0];
      try {
        const languageData = await chrome.storage.local.get(['tsLang']);
        if (languageData && globalThis.TUBESTACK_LOCALES.order.includes(languageData.tsLang)) language = languageData.tsLang;
      } catch (e) {}
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          world: 'MAIN',
          func: tsHarvestStatusFn,
          args: [globalThis.TUBESTACK_LOCALES.sync[language] || globalThis.TUBESTACK_LOCALES.sync.uk]
        });
      } catch (e) {} // Status UI must never prevent subscription collection.
      await new Promise((r) => setTimeout(r, 2500));

      // keep the service worker alive during the multi-minute page-side harvest
      ping = setInterval(() => { try { chrome.runtime.getPlatformInfo(); } catch (e) {} }, 20000);
      // hard limit: 2 passes x 250 scrolls x 1.5 s is ~12.5 min worst case; stop at 15 min and close the tab
      let hTimer = null;
      const timeoutP = new Promise((_, reject) => {
        hTimer = setTimeout(() => reject(new Error("harvest-timeout (15 min)")), 15 * 60 * 1000);
      });
      const execP = chrome.scripting.executeScript({
        target: { tabId: tab.id },
        world: 'MAIN',
        func: tsHarvestFn
      });
      execP.catch(() => {}); // late rejection after the tab is closed
      let results;
      try { results = await Promise.race([execP, timeoutP]); } finally { clearTimeout(hTimer); }
      let channels = [];
      if (results && results[0] && results[0].result && Array.isArray(results[0].result.channels)) {
        channels = results[0].result.channels;
      }
      if (!channels.length) throw new Error('no-channels-found');

      return await withStorageLock(async () => {
      // join with channelMap: new -> ungrouped, placeholder names refreshed
      let added = 0, renamed = 0;
      const stored = await chrome.storage.local.get(['channelMap']);
      const map = stored.channelMap || {};
      for (const ch of channels) {
        const ex = map[ch.id];
        if (!ex) { map[ch.id] = { name: ch.name || ch.id, groups: [] }; added++; }
        else if (ch.name && (!ex.name || (ex.name.indexOf('UC') === 0 && ch.name.length > ex.name.length))) {
          map[ch.id] = { ...ex, name: ch.name };
          renamed++;
        }
      }
      await chrome.storage.local.set({ channelMap: map });
      return { ok: true, total: channels.length, added, renamed };
      });
    } finally {
      if (ping) clearInterval(ping);
      if (tab && tab.id !== undefined) { try { await chrome.tabs.remove(tab.id); } catch (e) {} }
      tsHarvestRunning = false;
    }
  })().then(sendResponse).catch((e) => sendResponse({ ok: false, error: String((e && e.message) || e) }));
  return true;
});


// ─── Chanopy: auto-sort channels into groups from the bundled catalog ───────
// db/channels.json: [{ youtube_id, name, label }] (label = group name).
// Only channels WITHOUT a group are touched; matching: youtube_id first, then a
// normalized name that maps to exactly one label. Last run can be undone.
const TS_AG_UNDO_KEY = 'autoGroupUndo';
const TS_CATALOG_REPLACE_UNDO_KEY = 'catalogReplaceUndo';
const TS_CATALOG_RECOVERY_MARKER = 'catalogRecoveryV2Applied';
let tsCatalog = null;
const TS_CATALOG_CACHE_KEY = 'tsCatalogCacheV1';
const TS_CATALOG_CACHE_REVISION = 1;
let tsAgBusy = false;

function tsSerializeCatalog(catalog) {
  return {
    revision: TS_CATALOG_CACHE_REVISION,
    extensionVersion: chrome.runtime.getManifest?.().version || '',
    schemaVersion: catalog.schemaVersion,
    catalogId: catalog.catalogId,
    version: catalog.version,
    defaultLocale: catalog.defaultLocale,
    categories: [...catalog.categories],
    categoryByName: [...catalog.categoryByName],
    byId: [...catalog.byId],
    byName: [...catalog.byName],
    legacyGroupNames: catalog.legacyGroupNames,
    size: catalog.size,
    overrides: catalog.overrides,
  };
}

function tsDeserializeCatalog(cached) {
  if (!cached || cached.revision !== TS_CATALOG_CACHE_REVISION || !Array.isArray(cached.categories) || !Array.isArray(cached.categoryByName) || !Array.isArray(cached.byId) || !Array.isArray(cached.byName)) return null;
  const extensionVersion = chrome.runtime.getManifest?.().version || '';
  if (cached.extensionVersion !== extensionVersion) return null;
  return {
    schemaVersion: cached.schemaVersion,
    catalogId: cached.catalogId,
    version: cached.version,
    defaultLocale: cached.defaultLocale,
    categories: new Map(cached.categories),
    categoryByName: new Map(cached.categoryByName),
    byId: new Map(cached.byId),
    byName: new Map(cached.byName),
    legacyGroupNames: Array.isArray(cached.legacyGroupNames) ? cached.legacyGroupNames : [],
    size: Number(cached.size) || 0,
    overrides: Number(cached.overrides) || 0,
  };
}

async function tsCacheCatalog(catalog) {
  try { await chrome.storage.session?.set({ [TS_CATALOG_CACHE_KEY]: tsSerializeCatalog(catalog) }); }
  catch (e) { console.warn('[Chanopy] session catalog cache unavailable:', e); }
}

function tsNorm(str) {
  return String(str || '').toLowerCase().replace(/[^0-9a-z\u0400-\u04FF]/g, '');
}

function tsCategoryName(category, locale, fallbackLocale = 'uk') {
  const names = category && category.names && typeof category.names === 'object' ? category.names : {};
  const language = String(locale || fallbackLocale || 'uk').toLowerCase();
  const baseLanguage = language.split('-')[0];
  return names[language] || names[baseLanguage] || names[fallbackLocale] || names.uk || names.en || Object.values(names)[0] || category.id;
}

function tsLegacyCatalog(list) {
  const categories = new Map();
  const byId = new Map();
  const byName = new Map();
  const ambiguous = new Set();
  for (const item of list) {
    if (!item || !item.label) continue;
    const categoryId = 'legacy:' + String(item.label).trim();
    if (!categories.has(categoryId)) categories.set(categoryId, { id: categoryId, parentId: null, names: { uk: String(item.label) } });
    if (item.youtube_id && !byId.has(item.youtube_id)) byId.set(item.youtube_id, categoryId);
    const normalized = tsNorm(item.name);
    if (normalized.length < 3 || (normalized.length < 8 && String(item.name || '').trim().split(/\s+/).length < 2)) continue;
    if (!byName.has(normalized)) byName.set(normalized, categoryId);
    else if (byName.get(normalized) !== categoryId) ambiguous.add(normalized);
  }
  for (const name of ambiguous) byName.delete(name);
  const names = new Map([...categories.values()].map(category => [String(tsCategoryName(category, 'uk')).trim().toLowerCase(), category.id]));
  return { schemaVersion: 1, catalogId: 'legacy-array', version: 1, defaultLocale: 'uk', categories, byId, byName, categoryByName: names, legacyGroupNames: [...names.keys()], size: list.length, overrides: 0 };
}

async function tsLoadCatalog(force = false) {
  if (tsCatalog && !force) return tsCatalog;
  if (!force) {
    try {
      const cachedData = await chrome.storage.session?.get(TS_CATALOG_CACHE_KEY);
      const cached = tsDeserializeCatalog(cachedData && cachedData[TS_CATALOG_CACHE_KEY]);
      if (cached) { tsCatalog = cached; return tsCatalog; }
    } catch (e) { /* Session cache is an optimization; bundled catalog remains authoritative. */ }
  }
  const resp = await fetch(chrome.runtime.getURL('db/channels.json'));
  if (!resp.ok) throw new Error('catalog-not-found');
  const raw = await resp.json();
  if (Array.isArray(raw)) {
    tsCatalog = tsLegacyCatalog(raw);
    await tsCacheCatalog(tsCatalog);
    return tsCatalog;
  }
  if (!raw || raw.schemaVersion !== 2 || !Array.isArray(raw.categories) || !Array.isArray(raw.channels)) throw new Error('catalog-invalid-schema');
  const categories = new Map();
  const categoryByName = new Map();
  const ambiguousCategoryNames = new Set();
  for (const category of raw.categories) {
    if (!category || typeof category.id !== 'string' || !category.id.trim() || categories.has(category.id)) throw new Error('catalog-invalid-category');
    const names = category.names && typeof category.names === 'object' ? category.names : {};
    if (!Object.keys(names).length || Object.values(names).some(name => typeof name !== 'string' || !name.trim())) throw new Error('catalog-category-needs-names');
    categories.set(category.id, { id: category.id, parentId: category.parentId || null, names, aliases: Array.isArray(category.aliases) ? category.aliases : [] });
  }
  for (const category of categories.values()) {
    if (category.parentId && (!categories.has(category.parentId) || categories.get(category.parentId).parentId)) throw new Error('catalog-invalid-parent');
    for (const name of [...Object.values(category.names), ...category.aliases]) {
      const normalized = String(name).trim().toLowerCase();
      if (!categoryByName.has(normalized)) categoryByName.set(normalized, category.id);
      else if (categoryByName.get(normalized) !== category.id) ambiguousCategoryNames.add(normalized);
    }
  }
  for (const name of ambiguousCategoryNames) categoryByName.delete(name);
  const byId = new Map();
  const byName = new Map();
  const ambiguous = new Set();
  for (const item of raw.channels) {
    if (!item || !categories.has(item.categoryId)) continue;
    if (item.youtube_id && !byId.has(item.youtube_id)) byId.set(item.youtube_id, item.categoryId);
    const normalized = tsNorm(item.name);
    if (normalized.length < 3 || (normalized.length < 8 && String(item.name || '').trim().split(/\s+/).length < 2)) continue;
    if (!byName.has(normalized)) byName.set(normalized, item.categoryId);
    else if (byName.get(normalized) !== item.categoryId) ambiguous.add(normalized);
  }
  for (const name of ambiguous) byName.delete(name);

  const legacyGroupNames = new Set((Array.isArray(raw.legacyGroupNames) ? raw.legacyGroupNames : []).map(name => String(name).trim().toLowerCase()));
  for (const category of categories.values()) for (const name of Object.values(category.names)) legacyGroupNames.add(String(name).trim().toLowerCase());
  let overrides = 0;
  try {
    const o = await fetch(chrome.runtime.getURL('db/overrides.json'));
    if (o.ok) {
      const rules = await o.json();
      for (const rule of Array.isArray(rules) ? rules : []) {
        const labelKey = String(rule && (rule.categoryId || rule.category_id || rule.label) || '').trim().toLowerCase();
        const categoryId = categories.has(labelKey) ? labelKey : categoryByName.get(labelKey);
        if (rule && /^UC[\w-]{22}$/.test(rule.youtube_id || '') && categoryId) {
          byId.set(rule.youtube_id, categoryId);
          overrides++;
        } else console.warn('[Chanopy] overrides.json: skipped rule', rule && rule.youtube_id, rule && (rule.categoryId || rule.label));
      }
    }
  } catch (e) { /* no overrides file */ }

  tsCatalog = {
    schemaVersion: raw.schemaVersion,
    catalogId: raw.catalogId || 'custom-catalog',
    version: raw.version || 1,
    defaultLocale: raw.defaultLocale || 'uk',
    categories,
    categoryByName,
    byId,
    byName,
    legacyGroupNames: [...legacyGroupNames],
    size: raw.channels.length,
    overrides,
  };
  await tsCacheCatalog(tsCatalog);
  return tsCatalog;
}



function tsCatalogMatch(catalog, id, info) {
  const byId = catalog.byId.get(id);
  if (byId) return { categoryId: byId, via: 'id' };
  const byName = catalog.byName.get(tsNorm(info && info.name));
  return byName ? { categoryId: byName, via: 'name' } : null;
}

function tsWalkGroups(groups, visit) {
  for (const group of groups || []) {
    visit(group);
    tsWalkGroups(group.children || [], visit);
  }
}

function tsAutoGroup(repairParents = false) {
  return tsLoadCatalog().then(async catalog => {
    const data = await chrome.storage.local.get(['groups', 'channelMap', 'autoGroupAssignments', 'tsLang']);
    const groups = Array.isArray(data.groups) ? data.groups : [];
    const channelMap = data.channelMap && typeof data.channelMap === 'object' ? data.channelMap : {};
    const managed = data.autoGroupAssignments && typeof data.autoGroupAssignments === 'object' ? data.autoGroupAssignments : {};
    const locale = data.tsLang || catalog.defaultLocale;
    const keyOf = value => String(value || '').trim().toLowerCase();
    const createdIds = [];
    const createdTop = [];
    const assignments = [];
    const provenanceBefore = {};
    const ensureGroup = (list, category) => {
      const name = tsCategoryName(category, locale, catalog.defaultLocale);
      let group = list.find(item => item.catalogCategoryId === category.id) || list.find(item => keyOf(item.name) === keyOf(name));
      if (!group) {
        group = { id: generateId(), name, children: [], catalogCategoryId: category.id };
        list.push(group);
        createdIds.push(group.id);
        if (list === groups) createdTop.push(group);
      } else {
        if (group.catalogCategoryId === category.id) group.name = name;
        if (!Array.isArray(group.children)) group.children = [];
      }
      return group;
    };
    let targeted = 0, viaId = 0, viaName = 0, outside = 0;
    for (const [id, info] of Object.entries(channelMap)) {
      const previousGroups = info && Array.isArray(info.groups) ? info.groups : [];
      if (previousGroups.length && !repairParents) continue;
      targeted++;
      const match = tsCatalogMatch(catalog, id, info);
      if (!match) { outside++; continue; }
      const category = catalog.categories.get(match.categoryId);
      if (!category) { outside++; continue; }
      const ids = [];
      if (previousGroups.length) {
        if (!repairParents || !category.parentId || previousGroups.length !== 1) continue;
        const parentCategory = catalog.categories.get(category.parentId);
        let parentGroup = null;
        tsWalkGroups(groups, group => { if (!parentGroup && (group.catalogCategoryId === parentCategory.id || keyOf(group.name) === keyOf(tsCategoryName(parentCategory, locale, catalog.defaultLocale))) && group.id === previousGroups[0]) parentGroup = group; });
        if (!parentGroup) continue;
        ids.push(parentGroup.id, ensureGroup(parentGroup.children, category).id);
      } else if (category.parentId) {
        const parentCategory = catalog.categories.get(category.parentId);
        const parentGroup = ensureGroup(groups, parentCategory);
        ids.push(parentGroup.id, ensureGroup(parentGroup.children, category).id);
      } else ids.push(ensureGroup(groups, category).id);

      const nextGroups = [...new Set([...previousGroups, ...ids])];
      if (nextGroups.length === previousGroups.length && nextGroups.every(groupId => previousGroups.includes(groupId))) continue;
      provenanceBefore[id] = Object.prototype.hasOwnProperty.call(managed, id) ? managed[id] : null;
      channelMap[id] = { ...(info || {}), groups: nextGroups };
      managed[id] = { catalogId: catalog.catalogId, categoryId: category.id, groupIds: ids };
      for (const groupId of ids) if (!previousGroups.includes(groupId)) assignments.push({ id, groupId });
      if (match.via === 'id') viaId++; else viaName++;
    }
    if (assignments.length) {
      const collator = new Intl.Collator(locale || 'uk');
      if (createdTop.length) {
        const start = groups.length - createdTop.length;
        groups.splice(start, createdTop.length, ...createdTop.sort((a, b) => collator.compare(a.name, b.name)));
      }
      await chrome.storage.local.set({
        groups,
        channelMap,
        autoGroupAssignments: managed,
        [TS_AG_UNDO_KEY]: { ts: Date.now(), assignments, created: createdIds, provenanceBefore },
      });
    }
    return { success: true, total: Object.keys(channelMap).length, targeted, assigned: new Set(assignments.map(item => item.id)).size, byId: viaId, byName: viaName, outside, newGroups: createdIds.length };
  });
}

function tsCatalogPreview() {
  return tsLoadCatalog().then(async catalog => {
    const data = await chrome.storage.local.get(['groups', 'channelMap', 'autoGroupAssignments']);
    const groups = Array.isArray(data.groups) ? data.groups : [];
    const channelMap = data.channelMap && typeof data.channelMap === 'object' ? data.channelMap : {};
    const managed = data.autoGroupAssignments && typeof data.autoGroupAssignments === 'object' ? data.autoGroupAssignments : {};
    const groupById = new Map();
    tsWalkGroups(groups, group => groupById.set(group.id, group));
    const legacyNames = new Set(catalog.legacyGroupNames.map(name => String(name).trim().toLowerCase()));
    let matched = 0, alreadyGrouped = 0, legacyMemberships = 0, byId = 0, byName = 0;
    for (const [id, info] of Object.entries(channelMap)) {
      const match = tsCatalogMatch(catalog, id, info);
      if (!match) continue;
      matched++;
      if (match.via === 'id') byId++; else byName++;
      const memberships = info && Array.isArray(info.groups) ? info.groups : [];
      if (memberships.length) alreadyGrouped++;
      const autoIds = new Set((managed[id] && managed[id].groupIds) || []);
      for (const groupId of memberships) {
        const group = groupById.get(groupId);
        if (autoIds.has(groupId) || (group && (group.catalogCategoryId || legacyNames.has(String(group.name || '').trim().toLowerCase())))) legacyMemberships++;
      }
    }
    return { success: true, catalogId: catalog.catalogId, catalogVersion: catalog.version, catalogChannels: catalog.size, categories: catalog.categories.size, total: Object.keys(channelMap).length, matched, unmatched: Object.keys(channelMap).length - matched, alreadyGrouped, legacyMemberships, byId, byName };
  });
}

function tsStateFingerprint(groups, channelMap, autoGroupAssignments) {
  const value = JSON.stringify([groups, channelMap, autoGroupAssignments]);
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) { hash ^= value.charCodeAt(i); hash = Math.imul(hash, 16777619); }
  return value.length + ':' + (hash >>> 0).toString(16);
}

async function tsCatalogReplace() {
  const catalog = await tsLoadCatalog(true);
  const data = await chrome.storage.local.get(['groups', 'channelMap', 'autoGroupAssignments', 'tsLang']);
  const groups = Array.isArray(data.groups) ? data.groups : [];
  const channelMap = data.channelMap && typeof data.channelMap === 'object' ? data.channelMap : {};
  const previousManaged = data.autoGroupAssignments && typeof data.autoGroupAssignments === 'object' ? data.autoGroupAssignments : {};
  const managed = {};
  const locale = data.tsLang || catalog.defaultLocale;
  const before = { groups: structuredClone(groups), channelMap: structuredClone(channelMap), autoGroupAssignments: structuredClone(previousManaged) };
  const created = [];
  const ensureGroup = (list, category) => {
    const name = tsCategoryName(category, locale, catalog.defaultLocale);
    let group = list.find(item => item.catalogCategoryId === category.id) || list.find(item => String(item.name || '').trim().toLowerCase() === String(name).trim().toLowerCase());
    if (!group) {
      group = { id: generateId(), name, children: [], catalogCategoryId: category.id };
      list.push(group);
      created.push(group.id);
    } else {
      group.catalogCategoryId = category.id;
      group.name = name;
      if (!Array.isArray(group.children)) group.children = [];
    }
    return group;
  };
  let matched = 0, changed = 0, byId = 0, byName = 0;
  for (const [id, info] of Object.entries(channelMap)) {
    const match = tsCatalogMatch(catalog, id, info);
    if (!match) {
      if (info && Array.isArray(info.groups) && info.groups.length) {
        changed++;
        channelMap[id] = { ...info, groups: [] };
      }
      continue;
    }
    const category = catalog.categories.get(match.categoryId);
    if (!category) continue;
    matched++;
    if (match.via === 'id') byId++; else byName++;
    const targets = [];
    if (category.parentId) {
      const parentCategory = catalog.categories.get(category.parentId);
      const parent = ensureGroup(groups, parentCategory);
      targets.push(parent.id, ensureGroup(parent.children, category).id);
    } else targets.push(ensureGroup(groups, category).id);
    const previous = info && Array.isArray(info.groups) ? info.groups : [];
    const next = [...new Set(targets)];
    if (next.length !== previous.length || next.some(groupId => !previous.includes(groupId))) changed++;
    channelMap[id] = { ...(info || {}), groups: next };
    managed[id] = { catalogId: catalog.catalogId, categoryId: category.id, groupIds: targets };
  }
  if (!matched) return { success: false, error: 'catalog-no-matches' };
  const used = new Set();
  for (const entry of Object.values(channelMap)) for (const groupId of (entry && entry.groups) || []) used.add(groupId);
  let removedGroups = 0;
  const prune = list => list.filter(group => {
    group.children = prune(group.children || []);
    if (!used.has(group.id) && group.children.length === 0) { removedGroups++; return false; }
    return true;
  });
  const nextGroups = prune(groups);
  const afterFingerprint = tsStateFingerprint(nextGroups, channelMap, managed);
  await chrome.storage.local.set({
    groups: nextGroups,
    channelMap,
    autoGroupAssignments: managed,
    [TS_CATALOG_REPLACE_UNDO_KEY]: { createdAt: Date.now(), before, afterFingerprint, catalogId: catalog.catalogId, catalogVersion: catalog.version },
  });
  await chrome.storage.local.remove(TS_AG_UNDO_KEY);
  return { success: true, catalogId: catalog.catalogId, catalogVersion: catalog.version, matched, changed, unmatched: Object.keys(channelMap).length - matched, byId, byName, removedGroups, createdGroups: created.length };
}

async function tsCatalogReplaceUndo() {
  const data = await chrome.storage.local.get(['groups', 'channelMap', 'autoGroupAssignments', TS_CATALOG_REPLACE_UNDO_KEY]);
  const snapshot = data[TS_CATALOG_REPLACE_UNDO_KEY];
  if (!snapshot || !snapshot.before) return { success: false, error: 'nothing-to-undo' };
  await chrome.storage.local.set({
    groups: snapshot.before.groups,
    channelMap: snapshot.before.channelMap,
    autoGroupAssignments: snapshot.before.autoGroupAssignments,
  });
  await chrome.storage.local.remove(TS_CATALOG_REPLACE_UNDO_KEY);
  return { success: true };
}

async function tsAutoGroupUndo() {
  const data = await chrome.storage.local.get(['groups', 'channelMap', 'autoGroupAssignments', TS_AG_UNDO_KEY]);
  const snap = data[TS_AG_UNDO_KEY];
  if (!snap || !Array.isArray(snap.assignments)) return { success: false, error: 'nothing-to-undo' };
  const channelMap = data.channelMap || {};
  const managed = data.autoGroupAssignments && typeof data.autoGroupAssignments === 'object' ? data.autoGroupAssignments : {};
  const restoredIds = new Set();
  for (const a of snap.assignments) {
    const info = channelMap[a.id];
    if (!info || !Array.isArray(info.groups) || info.groups.indexOf(a.groupId) < 0) continue;
    info.groups = info.groups.filter((g) => g !== a.groupId);
    restoredIds.add(a.id);
  }
  for (const [id, previous] of Object.entries(snap.provenanceBefore || {})) {
    if (previous === null) delete managed[id];
    else managed[id] = previous;
  }
  const restored = restoredIds.size;
  // drop groups created by that run if nothing uses them (and none of their sub-groups survive)
  const used = new Set();
  Object.values(channelMap).forEach((i) => (i && i.groups || []).forEach((g) => used.add(g)));
  const drop = new Set((snap.created || []).filter((gid) => !used.has(gid)));
  let removedGroups = 0;
  const prune = (list) => list.filter((g) => {
    if (Array.isArray(g.children)) g.children = prune(g.children);
    if (drop.has(g.id) && (!g.children || g.children.length === 0)) { removedGroups++; return false; }
    return true;
  });
  const groups = prune(Array.isArray(data.groups) ? data.groups : []);
  await chrome.storage.local.set({ groups, channelMap, autoGroupAssignments: managed });
  await chrome.storage.local.remove(TS_AG_UNDO_KEY);
  return { success: true, restored, removedGroups };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || !['TS_AUTOGROUP', 'TS_AUTOGROUP_REPAIR', 'TS_AUTOGROUP_UNDO', 'TS_CATALOG_PREVIEW', 'TS_CATALOG_REPLACE', 'TS_CATALOG_REPLACE_UNDO'].includes(message.type)) return false;
  if (tsAgBusy) { sendResponse({ success: false, error: 'busy' }); return false; }
  tsAgBusy = true;
  const job = withStorageLock(() => {
    if (message.type === 'TS_AUTOGROUP_UNDO') return tsAutoGroupUndo();
    if (message.type === 'TS_CATALOG_PREVIEW') return tsCatalogPreview();
    if (message.type === 'TS_CATALOG_REPLACE') return tsCatalogReplace();
    if (message.type === 'TS_CATALOG_REPLACE_UNDO') return tsCatalogReplaceUndo();
    return tsAutoGroup(message.type === 'TS_AUTOGROUP_REPAIR');
  });
  job
    .then((r) => { tsAgBusy = false; sendResponse(r); })
    .catch((e) => { tsAgBusy = false; sendResponse({ success: false, error: String((e && e.message) || e) }); });
  return true;
});
