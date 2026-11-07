// Run: node --test tools/regression-tests.cjs
// Executes the shipped scripts with isolated Chrome/DOM substitutes; never touches a browser profile.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const background = read('dist/background.js');
const content = read('dist/content-bundle.js');
const copy = value => structuredClone(value);
const quiet = { log() {}, warn() {}, error() {}, debug() {}, info() {} };
const group = (id, children = []) => ({ id, name: id, children });

function worker(initial = {}, sessionInitial = {}) {
  let data = copy(initial);
  let sessionData = copy(sessionInitial);
  let failure = false;
  let writes = 0;
  const fetchCounts = {};
  const scriptCalls = [];
  const listeners = [];
  const chrome = {
    runtime: {
      onInstalled: { addListener() {} },
      onMessage: { addListener(fn) { listeners.push(fn); } },
      getURL: file => file,
      getManifest: () => ({ version: '0.6.0' }),
    },
    scripting: { async executeScript(options) { scriptCalls.push(options); return [{ result: { ok: true, status: 204, body: '' } }]; } },
    storage: { session: {
      async get(keys) {
        const snapshot = copy(sessionData);
        if (keys === null) return snapshot;
        return Object.fromEntries((Array.isArray(keys) ? keys : [keys]).filter(k => k in snapshot).map(k => [k, snapshot[k]]));
      },
      async set(next) { Object.assign(sessionData, copy(next)); },
      async remove(key) { delete sessionData[key]; },
    }, local: {
      async get(keys) {
        const snapshot = copy(data);
        await new Promise(resolve => setImmediate(resolve));
        if (keys === null) return snapshot;
        return Object.fromEntries((Array.isArray(keys) ? keys : [keys]).filter(k => k in snapshot).map(k => [k, snapshot[k]]));
      },
      async set(next) {
        if (failure) throw Error('QUOTA_BYTES exceeded');
        writes++;
        Object.assign(data, copy(next));
      },
      async remove(key) { delete data[key]; },
    } },
  };
  const context = vm.createContext({ chrome, console: quiet, URL, setTimeout, clearTimeout, setInterval, clearInterval,
    fetch: async file => { fetchCounts[file] = (fetchCounts[file] || 0) + 1; return { ok: true, json: async () => JSON.parse(read(file)) }; } });
  context.importScripts = (...files) => { for (const file of files) vm.runInContext(read(path.join('dist', file)), context); };
  vm.runInContext(background, context);
  return {
    context,
    state: () => copy(data),
    sessionState: () => copy(sessionData),
    fetchCounts: () => copy(fetchCounts),
    writes: () => writes,
    scriptCalls: () => scriptCalls,
    failWrites: value => { failure = value; },
    requestMessage(message, sender = {}) {
      return new Promise((resolve, reject) => {
        let handled = false;
        for (const listener of listeners) {
          if (listener(message, sender, response => resolve(copy(response))) === true) { handled = true; break; }
        }
        if (!handled) reject(Error('Unhandled message: ' + message.type));
      });
    },
    request(type, payload = {}) { return this.requestMessage({ type, payload }); },
  };
}

test('shipped JavaScript parses and manifest assets exist', () => {
  function checkNames(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      assert.ok(!entry.name.startsWith('_'), 'Chrome reserves names starting with _: ' + entry.name);
      if (entry.isDirectory()) checkNames(path.join(dir, entry.name));
    }
  }
  checkNames(root);
  for (const name of ['background.js', 'content-bundle.js', 'popup.js']) new vm.Script(read('dist/' + name));
  const m = JSON.parse(read('manifest.json'));
  const assets = [m.background.service_worker, m.action.default_popup, ...Object.values(m.icons),
    ...m.content_scripts.flatMap(s => [...(s.js || []), ...(s.css || [])])];
  for (const file of assets) assert.ok(fs.existsSync(path.join(root, file)), file);
});

test('Takeout subscriptions CSV reads Channel Name by header instead of URL or ID', () => {
  const start = content.indexOf('\tfunction parseCsvLine(');
  const end = content.indexOf('\n\tfunction visibleGroups(', start);
  assert.ok(start >= 0 && end > start);
  const parser = vm.createContext({ Set });
  vm.runInContext(content.slice(start, end), parser);
  const idA = 'UC' + 'a'.repeat(22);
  const idB = 'UC' + 'b'.repeat(22);
  const csv = [
    'Channel handle,Channel ID,Channel Name,Channel URL',
    `@creator,${idA},"Channel, With Comma",https://www.youtube.com/channel/${idA}`,
    `@second,${idB},Actual Name,https://www.youtube.com/channel/${idB}`,
    `@creator,${idA},Duplicate Name,https://www.youtube.com/channel/${idA}`,
  ].join('\n');
  assert.deepEqual(JSON.parse(JSON.stringify(parser.parseTakeoutSubscriptionsCsv(csv))), [
    { id: idA, name: 'Channel, With Comma' },
    { id: idB, name: 'Actual Name' },
  ]);
  assert.deepEqual(JSON.parse(JSON.stringify(parser.parseTakeoutSubscriptionsCsv(`Readable Name,${idA},https://youtube.com/channel/${idA}`))), [
    { id: idA, name: 'Readable Name' },
  ]);
});

test('parsed catalog cache survives service worker restart without refetching catalog files', async () => {
  const first = worker();
  const catalog = await first.context.tsLoadCatalog();
  assert.ok(first.fetchCounts()['db/channels.json']);
  assert.ok(first.sessionState().tsCatalogCacheV1);
  const second = worker({}, first.sessionState());
  const restored = await second.context.tsLoadCatalog();
  assert.equal(second.fetchCounts()['db/channels.json'] || 0, 0);
  assert.equal(second.fetchCounts()['db/overrides.json'] || 0, 0);
  assert.equal(restored.size, catalog.size);
  assert.deepEqual(JSON.parse(JSON.stringify([...restored.byId])), JSON.parse(JSON.stringify([...catalog.byId])));
});

test('parallel watched mutations keep both IDs and repeated toggles cancel', async () => {
  const w = worker();
  await Promise.all(['A', 'B'].map(videoId => w.request('TOGGLE_WATCHED', { videoId })));
  assert.deepEqual(Object.keys(w.state().watchedVideos).sort(), ['A', 'B']);
  await Promise.all([w.request('TOGGLE_WATCHED', { videoId: 'A' }), w.request('TOGGLE_WATCHED', { videoId: 'A' })]);
  assert.deepEqual(Object.keys(w.state().watchedVideos).sort(), ['A', 'B']);
});

test('watched video history trims oldest marks in batches instead of growing forever', async () => {
  const watchedVideos = {};
  for (let i = 0; i < 51001; i++) watchedVideos['v' + i] = i + 1;
  const w = worker({ watchedVideos });
  const result = await w.request('TOGGLE_WATCHED', { videoId: 'newest' });
  assert.equal(Object.keys(result.watchedVideos).length, 50000);
  assert.equal(result.watchedVideos.v0, undefined);
  assert.equal(result.watchedVideos.v1001, undefined);
  assert.equal(result.watchedVideos.v1002, 1003);
  assert.ok(result.watchedVideos.newest > 51001);
});

test('parallel channel patches and settings merge without lost writes', async () => {
  const w = worker({ groups: [group('g1'), group('g2')], channelMap: {} });
  await Promise.all([
    w.request('PATCH_CHANNEL_MAP', { changes: { A: { name: 'A', addGroups: ['g1'] } } }),
    w.request('PATCH_CHANNEL_MAP', { changes: { B: { name: 'B', addGroups: ['g2'] } } }),
    w.request('SAVE_SETTINGS', { settings: { defaultGridColumns: 6 } }),
    w.request('SAVE_SETTINGS', { settings: { defaultFetchVolume: 200 } }),
  ]);
  assert.deepEqual(Object.keys(w.state().channelMap).sort(), ['A', 'B']);
  assert.equal(w.state().settings.defaultGridColumns, 6);
  assert.equal(w.state().settings.defaultFetchVolume, 200);
  await Promise.all([
    w.request('PATCH_CHANNEL_MAP', { changes: { A: { addGroups: ['g2'] } } }),
    w.request('PATCH_CHANNEL_MAP', { changes: { A: { avatar: 'image', existingOnly: true } } }),
  ]);
  assert.deepEqual(w.state().channelMap.A.groups, ['g1', 'g2']);
  await w.request('PATCH_CHANNEL_MAP', { removeIds: ['A'] });
  await w.request('PATCH_CHANNEL_MAP', { changes: { A: { avatar: 'late', existingOnly: true } } });
  assert.equal(w.state().channelMap.A, undefined);
});

test('weekly backup lease allows one tab and failed downloads can retry', async () => {
  const w = worker();
  const claims = await Promise.all([w.request('CLAIM_WEEKLY_BACKUP'), w.request('CLAIM_WEEKLY_BACKUP')]);
  assert.equal(claims.filter(x => x.claimed).length, 1);
  await w.request('FINISH_WEEKLY_BACKUP', { success: false });
  assert.equal(w.state().lastBackupAt, undefined);
  assert.equal((await w.request('CLAIM_WEEKLY_BACKUP')).claimed, true);
  await w.request('FINISH_WEEKLY_BACKUP', { success: true });
  assert.equal(typeof w.state().lastBackupAt, 'number');
  assert.equal((await w.request('CLAIM_WEEKLY_BACKUP')).claimed, false);
});

test('unsubscribe executes in YouTube MAIN world and rejects non YouTube senders', async () => {
  const w = worker();
  const message = { type: 'TS_UNSUB', key: 'api-key', headers: { Authorization: 'SAPISIDHASH test' }, body: { channelIds: ['UC123'] } };
  const rejected = await w.requestMessage(message, { tab: { id: 7 }, frameId: 0, url: 'https://evil.example/' });
  assert.equal(rejected.status, 0);
  assert.equal(w.scriptCalls().length, 0);
  const result = await w.requestMessage(message, { tab: { id: 7 }, frameId: 0, url: 'https://www.youtube.com/feed/subscriptions' });
  assert.equal(result.status, 204);
  assert.equal(w.scriptCalls().length, 1);
  assert.equal(w.scriptCalls()[0].world, 'MAIN');
  assert.deepEqual(JSON.parse(JSON.stringify(w.scriptCalls()[0].target)), { tabId: 7, frameIds: [0] });
});

test('stale whole-tree edits fail explicitly instead of overwriting new groups', async () => {
  const w = worker({ groups: [] });
  const result = await Promise.all([
    w.request('SAVE_GROUPS', { expectedGroups: [], groups: [group('A')] }),
    w.request('SAVE_GROUPS', { expectedGroups: [], groups: [group('B')] }),
  ]);
  assert.equal(result.filter(r => r.success).length, 1);
  assert.equal(result.filter(r => r.error).length, 1);
  assert.deepEqual(w.state().groups, [group('A')]);
});

test('delete subtree clears all descendant IDs, keeps other memberships and channels', async () => {
  const w = worker({ groups: [group('parent', [group('child', [group('grandchild')])]), group('other')],
    channelMap: { A: { name: 'A', groups: ['parent', 'child', 'grandchild', 'other'] }, B: { name: 'B', groups: ['child'] } } });
  await w.request('DELETE_GROUP', { groupId: 'parent' });
  assert.deepEqual(w.state().groups, [group('other')]);
  assert.deepEqual(w.state().channelMap.A.groups, ['other']);
  assert.deepEqual(w.state().channelMap.B.groups, []);
});

test('nested group deletion works and stale patches cannot revive a deleted group', async () => {
  const w = worker({ groups: [group('parent', [group('child')])], channelMap: { A: { groups: ['child'] } } });
  await w.request('DELETE_GROUP', { groupId: 'child' });
  await w.request('PATCH_CHANNEL_MAP', { changes: { A: { addGroups: ['child'] } } });
  assert.deepEqual(w.state().groups, [group('parent')]);
  assert.deepEqual(w.state().channelMap.A.groups, []);
});

test('native export/import restores durable data and repeated import deduplicates history', async () => {
  const backup = { groups: [group('g1')], channelMap: { A: { name: 'A', groups: ['g1'] } }, watchedVideos: { video: 123 },
    settings: { defaultGridColumns: 6 }, tsLang: 'de', activityAudit: { A: { checkedAt: 123 } },
    unsubHistory: [{ id: 'B', name: 'B', groups: ['g1'], groupNames: ['g1'], date: '2026-10-27' }] };
  const origin = worker(backup);
  const exported = (await origin.request('EXPORT_DATA')).exportData;
  const restored = worker();
  assert.equal((await restored.request('IMPORT_DATA', { data: exported })).success, true);
  for (const key of ['groups', 'channelMap', 'watchedVideos', 'tsLang', 'activityAudit', 'unsubHistory']) {
    assert.deepEqual(restored.state()[key], backup[key], key);
  }
  await restored.request('IMPORT_DATA', { data: exported });
  assert.equal(restored.state().unsubHistory.length, 1);
});

test('import collision remaps channel and history IDs while merging equal group names', async () => {
  const w = worker({ groups: [group('occupied')], channelMap: {} });
  await w.request('IMPORT_DATA', { data: { groups: [{ id: 'occupied', name: 'New', children: [] }],
    channelMap: { A: { groups: ['occupied'] } }, unsubHistory: [{ id: 'B', groups: ['occupied'] }] } });
  const id = w.state().groups.find(g => g.name === 'New').id;
  assert.notEqual(id, 'occupied');
  assert.deepEqual(w.state().channelMap.A.groups, [id]);
  assert.deepEqual(w.state().unsubHistory[0].groups, [id]);
});

test('invalid imports do not write anything; unknown JSON is rejected', async () => {
  for (const data of [null, [], {}, { groups: [group('g1')], channelMap: { A: { groups: 'g1' } } },
    { groups: [group('same'), group('same')] }, { groups: [group('valid')], unsubHistory: [{ id: 'A', groups: 'bad' }] },
    { groups: [group('valid')], activityAudit: [] }, { groups: [group('valid')], tsLang: 'invalid' }]) {
    const w = worker({ groups: [group('old')], channelMap: {} });
    const before = w.state();
    const response = await w.request('IMPORT_DATA', { data });
    assert.ok(response.error, JSON.stringify(data));
    assert.deepEqual(w.state(), before);
    assert.equal(w.writes(), 0);
  }
});

test('quota failure leaves import unchanged and the queue accepts subsequent jobs', async () => {
  const w = worker({ groups: [], channelMap: {} });
  w.failWrites(true);
  assert.match((await w.request('IMPORT_DATA', { data: { groups: [group('g1')], channelMap: { A: { groups: ['g1'] } } } })).error, /QUOTA/);
  assert.deepEqual(w.state(), { groups: [], channelMap: {} });
  w.failWrites(false);
  assert.equal((await w.request('SAVE_GROUPS', { expectedGroups: [], groups: [group('g2')] })).success, true);
});

test('autogroup and undo share the mutation queue with channel edits', async () => {
  const id = JSON.parse(read('db/overrides.json'))[0].youtube_id;
  const w = worker({ groups: [], channelMap: { [id]: { name: 'Music', groups: [] } } });
  const [sorted, patched] = await Promise.all([
    w.request('TS_AUTOGROUP'),
    w.request('PATCH_CHANNEL_MAP', { changes: { EXTRA: { name: 'Extra' } } }),
  ]);
  assert.equal(sorted.success, true);
  assert.equal(sorted.assigned, 1);
  assert.equal(patched.success, true);
  assert.equal(w.state().channelMap.EXTRA.name, 'Extra');
  assert.ok(w.state().channelMap[id].groups.length);
  await Promise.all([
    w.request('TS_AUTOGROUP_UNDO'),
    w.request('PATCH_CHANNEL_MAP', { changes: { EXTRA: { avatar: 'image' } } }),
  ]);
  assert.deepEqual(w.state().channelMap[id].groups, []);
  assert.equal(w.state().channelMap.EXTRA.avatar, 'image');
});

test('catalog creates persisted subgroups under existing parents, reload exposes them, repair preserves parent on undo', async () => {
  const catalog = JSON.parse(read('db/channels.json'));
  const category = catalog.categories.find(c => c.names.uk === 'Minecraft');
  const channel = catalog.channels.find(c => c.youtube_id && c.categoryId === category.id);
  assert.ok(channel, 'Catalog fixture for nested category');
  const w = worker({ groups: [{ id: 'games', name: 'Ігри', children: [] }], channelMap: {
    [channel.youtube_id]: { name: channel.name, groups: [] },
    MANUAL: { name: channel.name, groups: ['custom'] },
  } });
  assert.equal((await w.request('TS_AUTOGROUP')).success, true);
  const reloaded = (await w.request('GET_GROUPS')).groups;
  assert.equal(reloaded[0].children[0].name, 'Minecraft');
  const childId = reloaded[0].children[0].id;
  assert.deepEqual(w.state().channelMap[channel.youtube_id].groups, ['games', childId]);
  const ui = vm.createContext({});
  const start = content.indexOf('\tfunction flattenGroups(');
  vm.runInContext(content.slice(start, content.indexOf('\n\tconst MOD', start)), ui);
  const treeHelpers = content.indexOf('\tfunction editGroupTree(');
  vm.runInContext(content.slice(treeHelpers, content.indexOf('\n\tfunction Dashboard(', treeHelpers)), ui);
  assert.equal(ui.flattenGroups(reloaded)[1].depth, 1);
  // The dashboard must render this flattened list, not root-only groups.
  assert.match(content, /managementGroups\.map\(\(group\)/);
  assert.match(content, /Expand subgroups/);
  assert.match(content, /draggable: true/);
  assert.doesNotMatch(content, /ts-group-drag-handle/);
  assert.doesNotMatch(content, /title: "Move up"|title: "Move down"/);
  assert.match(content, /useMemo\(\(\) => flattenGroups\(groups\), \[groups\]\)/);
  assert.doesNotMatch(content, /if \(inactiveSel\)\s*\{\s*channelEntries\.sort/);
  for (const duplicate of ['flattenGroupsForSwitcher', 'visibleSidebarGroups', 'visibleWorkspaceGroups']) assert.doesNotMatch(content, new RegExp('function ' + duplicate));
  assert.match(content, /visibleGroups\(groups, expandedWorkspaceGroups\)/);
  assert.match(content, /getElementById\("ytsm-app-root"\) \|\| document\.body/);
  assert.match(background, /chrome\.scripting\.executeScript\([\s\S]*?world: 'MAIN'/);
  assert.doesNotMatch(JSON.stringify(JSON.parse(read('manifest.json'))), /main-world\.js/);
  assert.doesNotMatch(content, /sel\.innerHTML/);
  assert.doesNotMatch(read('dist/popup.js'), /sel\.innerHTML/);
  assert.match(read('dist/popup.js'), /Promise\.all\(tabs\.map\(tab => pingTab\(tab\.id\)\)\)/);
  assert.match(read('dist/popup.js'), /exportError && jsxRuntimeExports\.jsx/);
  const tree = [{ id: 'parent', children: [{ id: 'first' }, { id: 'second' }] }, { id: 'other', children: [] }];
  assert.deepEqual(JSON.parse(JSON.stringify(ui.moveGroupRelative(tree, 'second', 'first')))[0].children.map(g => g.id), ['second', 'first']);
  assert.deepEqual(JSON.parse(JSON.stringify(ui.moveGroupRelative(tree, 'other', 'first', true)))[0].children.map(g => g.id), ['first', 'other', 'second']);
  assert.deepEqual(JSON.parse(JSON.stringify(ui.moveGroupRelative(tree, 'parent', 'second'))), tree, 'A parent cannot be dragged inside its own child');
  const old = worker({ groups: [{ id: 'games', name: 'Ігри', children: [] }], channelMap: {
    [channel.youtube_id]: { name: channel.name, groups: ['games'] },
    MANUAL: { name: channel.name, groups: ['custom'] },
  } });
  await old.request('TS_AUTOGROUP');
  assert.equal(old.state().groups[0].children.length, 0);
  assert.equal((await old.request('TS_AUTOGROUP_REPAIR')).assigned, 1);
  assert.equal(old.state().groups[0].children[0].name, 'Minecraft');
  await old.request('TS_AUTOGROUP_REPAIR');
  assert.equal(old.state().groups[0].children.length, 1);
  await old.request('TS_AUTOGROUP_UNDO');
  assert.deepEqual(old.state().channelMap[channel.youtube_id].groups, ['games']);
  assert.deepEqual(old.state().channelMap.MANUAL.groups, ['custom']);
});

test('harvest commit merges with concurrent channel changes in the same queue', async () => {
  const w = worker({ groups: [group('g1')], channelMap: { A: { groups: ['g1'] } } });
  let complete;
  w.context.chrome.tabs = {
    create: async () => ({ id: 1 }),
    get: async () => ({ url: 'https://www.youtube.com/feed/channels' }),
    remove: async () => {},
    onUpdated: { addListener(fn) { complete = fn; queueMicrotask(() => complete(1, { status: 'complete' })); }, removeListener() {} },
  };
  w.context.chrome.scripting = { executeScript: async () => [{ result: { channels: [{ id: 'HARVESTED', name: 'Harvested' }] } }] };
  w.context.setTimeout = (fn, ms) => { if (ms < 30000) queueMicrotask(fn); return 1; };
  w.context.clearTimeout = () => {};
  w.context.setInterval = () => 1;
  w.context.clearInterval = () => {};
  const [harvest, edit] = await Promise.all([
    w.request('TS_HARVEST_START'),
    w.request('PATCH_CHANNEL_MAP', { changes: { A: { avatar: 'image' }, NEW: { name: 'New' } } }),
  ]);
  assert.equal(harvest.ok, true);
  assert.equal(edit.success, true);
  assert.equal(w.state().channelMap.HARVESTED.name, 'Harvested');
  assert.equal(w.state().channelMap.NEW.name, 'New');
  assert.deepEqual(w.state().channelMap.A, { groups: ['g1'], avatar: 'image' });
});

function storageClient(chrome) {
  const context = vm.createContext({ chrome, log: quiet, MOD$9: 'Storage', INVALIDATED: { error: 'context_invalidated' } });
  vm.runInContext(content.slice(content.indexOf('\tfunction isContextAlive()'), content.indexOf('\n\tconst StorageAPI =')), context);
  return context;
}

test('storage read errors reject and failed group writes never update the visible state', async () => {
  const chrome = { runtime: { id: 'test', lastError: null, sendMessage(msg, callback) { callback({ error: 'QUOTA_BYTES exceeded' }); } },
    storage: { local: { get(keys, callback) { chrome.runtime.lastError = { message: 'read failed' }; callback(); chrome.runtime.lastError = null; } } } };
  const c = storageClient(chrome);
  await assert.rejects(c.localGet(['groups']), /read failed/);
  let updates = 0;
  Object.assign(c, { reactExports: { useCallback: f => f }, groups: [], setGroups() { updates++; } });
  vm.runInContext(content.slice(content.indexOf('\t  const updateGroups ='), content.indexOf('\n\t  const updateChannelMap =')), c);
  await assert.rejects(vm.runInContext('updateGroups([{id:"A"}])', c), /QUOTA/);
  assert.equal(updates, 0);
});

test('active subscription filter handles appended/recycled cards and restores visibility on cleanup', () => {
  const card = id => ({ style: {}, querySelector(selector) { return selector.startsWith('a[') ? { getAttribute: () => '/channel/' + id } : { textContent: id }; } });
  const nodes = [card('OTHER')];
  let observer, pending, cleanup;
  const c = vm.createContext({
    useGroups: () => ({ groups: [group('g1')], channelMap: { WANTED: { name: 'WANTED', groups: ['g1'] } }, localizedGroupName: g => g.name }),
    reactExports: { useState: () => ['g1', () => {}], useCallback: f => f, useEffect: fn => { cleanup = fn(); } },
    jsxRuntimeExports: { jsx() {}, jsxs() {} },
    document: { body: {}, querySelector: () => ({}), querySelectorAll: () => nodes },
    MutationObserver: class { constructor(fn) { observer = this; this.callback = fn; } observe() {} disconnect() { this.disconnected = true; } },
    setTimeout: fn => { pending = fn; return 1; }, clearTimeout() {},
  });
  const start = content.indexOf('\tfunction SubscriptionsFilter()');
  const end = content.indexOf('\n\t/**', content.indexOf('\tfunction showAllSubscriptionVideos()', start));
  vm.runInContext(content.slice(start, end), c);
  c.SubscriptionsFilter();
  assert.equal(nodes[0].style.display, 'none');
  nodes.push(card('OTHER'), card('WANTED'));
  observer.callback(); pending();
  assert.equal(nodes[1].style.display, 'none');
  assert.equal(nodes[2].style.display, '');
  cleanup();
  assert.equal(observer.disconnected, true);
  assert.ok(nodes.every(n => n.style.display === ''));
  assert.match(content, /attributeFilter: \['href'\]/);
  assert.match(content, /item\.style\.display !== value/);
  assert.match(content, /const onNavigate = \(\) => scheduleRetry\(\)/);
  assert.match(content, /attempts >= 20\) stopRetry\(\)/);
  assert.doesNotMatch(content, /setInterval\(\(\) => \{\s*if \(location\.href !== currentUrl\)/);
  const mastheadInjector = content.slice(content.indexOf('\tfunction MastheadInjector('), content.indexOf('\tfunction ChannelPageInjector('));
  assert.match(mastheadInjector, /new MutationObserver\(records/);
  assert.match(mastheadInjector, /target\.closest\("ytd-masthead"\)/);
  assert.match(mastheadInjector, /node\.matches\("ytd-masthead"\)/);
});

test('weekly backup includes history, activity and language; download result commits through worker', async () => {
  const start = content.indexOf('(function () {\n  if (window.__TS_AUTO_BACKUP__)');
  const end = content.indexOf('\n})();', start) + '\n})();'.length;
  assert.ok(start >= 0);
  for (const failClick of [false, true]) {
    let saved;
    const finishes = [];
    const data = { groups: [group('g1')], channelMap: {}, tsLang: 'pl', unsubHistory: [{ id: 'A' }], activityAudit: { A: { last: '2020' } } };
    const c = vm.createContext({ window: {}, console: quiet,
      chrome: { runtime: { lastError: null, sendMessage(message, cb) {
        if (message.type === 'CLAIM_WEEKLY_BACKUP') cb({ claimed: true });
        else { finishes.push(message.payload.success); cb({ success: true }); }
      } }, storage: { local: { get(keys, cb) { cb(data); } } } },
      Blob: class { constructor(parts) { saved = JSON.parse(parts.join('')); } },
      URL: { createObjectURL: () => 'blob:test', revokeObjectURL() {} },
      document: { documentElement: { appendChild() {} }, createElement: () => ({ click() { if (failClick) throw Error('blocked'); }, remove() {} }) },
      setTimeout: fn => fn(),
    });
    vm.runInContext(content.slice(start, end), c);
    await new Promise(resolve => setImmediate(resolve));
    for (const key of ['tsLang', 'unsubHistory', 'activityAudit']) assert.deepEqual(saved[key], data[key]);
    assert.deepEqual(finishes, [!failClick]);
  }
});

test('browser: catalog → sort → reload → React subgroup display and workspace surfaces', { timeout: 10000 }, async t => {
  const runtime = path.join(process.env.USERPROFILE || '', '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
  const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
  if (!fs.existsSync(runtime) || !fs.existsSync(chromePath)) return t.skip('Optional local Chrome/Playwright runtime unavailable');
  const { chromium } = require(runtime);
  const catalog = JSON.parse(read('db/channels.json'));
  const category = catalog.categories.find(c => c.names.uk === 'Minecraft');
  const fixture = catalog.channels.find(c => c.youtube_id && c.categoryId === category.id);
  const w = worker({ groups: [{ id: 'games', name: 'Ігри', children: [] }], channelMap: {
    [fixture.youtube_id]: { name: fixture.name, groups: [] },
    OTHER: { name: 'Канал без групи', groups: [] },
  } });
  await w.request('TS_AUTOGROUP');
  const stored = { groups: (await w.request('GET_GROUPS')).groups, channelMap: (await w.request('GET_CHANNEL_MAP')).channelMap };
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
    page.setDefaultTimeout(2000);
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.setContent('<html dark><body style="margin:0;background:#0f0f0f"><div id="preview"></div></body></html>');
    for (const file of ['dist/content-bundle.css', 'dist/workspace.css']) await page.addStyleTag({ content: read(file) });
    await page.addScriptTag({ content: 'window.chrome={runtime:{id:"test"},storage:{local:{get(keys,cb){cb({})}}}};' });
    const core = content.slice(0, content.indexOf('\n})();', content.indexOf('function bootstrap()')) + 6)
      .replace('  bootstrap();', '  window.PREVIEW = { Dashboard, GroupsContext, jsxRuntimeExports, clientExports };');
    await page.addScriptTag({ content: core });
    await page.evaluate(stored => {
      const a = window.PREVIEW;
      const store = { ...stored, settings: {}, loading: false, localizedGroupName: g => g?.name || '', updateGroups: async () => {}, updateChannelMap: async () => {}, updateSettings: async () => {}, enrichChannels: async () => {} };
      a.clientExports.createRoot(document.getElementById('preview')).render(a.jsxRuntimeExports.jsx(a.GroupsContext.Provider, { value: store, children: a.jsxRuntimeExports.jsx(a.Dashboard, { onClose: () => {} }) }));
    }, stored);
    assert.equal(await page.locator('.ts-workspace-group').filter({ hasText: 'Minecraft' }).count(), 0);
    const disclosureCount = await page.locator('.ytsm-dash-tabs .ts-group-disclosure').count();
    assert.ok(disclosureCount, JSON.stringify({ groups: stored.groups, errors, preview: await page.locator('#preview').innerHTML() }));
    await page.locator('.ytsm-dash-tabs .ts-group-disclosure').first().click();
    await page.locator('.ts-workspace-group').filter({ hasText: 'Minecraft' }).getByRole('button').click();
    assert.equal(await page.locator('.ytsm-channel-row').count(), 1);
    await page.locator('.ytsm-dash-tabs .ts-group-disclosure').first().click();
    assert.equal(await page.locator('.ts-workspace-group').filter({ hasText: 'Minecraft' }).count(), 0);
    assert.equal(await page.locator('.ytsm-channel-row').count(), 1, 'Collapsing navigation preserves the selected group');
    assert.match(await page.locator('.ytsm-channel-name').textContent(), new RegExp(fixture.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    await page.getByRole('button', { name: 'Manage groups', exact: true }).click();
    assert.equal(await page.locator('.ytsm-group-row').count(), 1, 'Management subgroup starts collapsed');
    await page.locator('.ytsm-group-list .ts-management-disclosure').first().click();
    assert.equal(await page.locator('.ytsm-group-row').count(), 2, 'Management subgroup expands on demand');
    assert.equal(await page.getByTitle('Rename').count(), 2, 'Rename remains available for each visible group');
    assert.equal(await page.locator('.ytsm-group-row-header[draggable="true"]').count(), 2, 'Group name areas can start dragging');
    assert.equal(await page.locator('.ytsm-expand-chevron').count(), 0, 'The duplicate channel expander is removed from group titles');
    assert.equal(await page.locator('#ts-group-details-title').textContent(), 'Ігри', 'The first group is selected by default');
    const minecraftRow = page.locator('.ytsm-group-list .ytsm-group-row').filter({ hasText: 'Minecraft' });
    await minecraftRow.locator('.ytsm-group-row-header').click();
    assert.equal(await page.locator('#ts-group-details-title').textContent(), 'Minecraft', 'Selecting a tree row loads its detail panel');
    assert.equal(await page.locator('.ts-group-detail-channels .ytsm-group-channel-link').count(), 1, 'Selected group channels are shown in the detail panel');
    await page.locator('.ytsm-group-list .ts-management-disclosure').first().click();
    assert.equal(await page.locator('.ytsm-group-row').count(), 1);
    assert.equal(await page.locator('#ts-group-details-title').textContent(), 'Minecraft', 'Collapsing the tree keeps the selected details visible');
    for (const name of ['Settings', 'Import & backups', 'All channels']) {
      await page.getByRole('button', { name, exact: true }).click();
      assert.ok(await page.locator('.ts-workspace-title').isVisible());
    }
    for (const dark of [true, false]) {
      await page.evaluate(dark => document.documentElement.toggleAttribute('dark', dark), dark);
      for (const width of [1280, 800, 375]) {
        await page.setViewportSize({ width, height: 900 });
        const size = await page.locator('.ytsm-dashboard').evaluate(e => ({ w: e.clientWidth, s: e.scrollWidth }));
        assert.ok(size.s <= size.w + 1, 'No horizontal overflow at ' + width);
        const channelLayout = await page.locator('.ytsm-channel-list').evaluate(e => ({ display: getComputedStyle(e).display, contentWidth: e.closest('.ytsm-dash-body').clientWidth }));
        if (width === 1280) assert.equal(channelLayout.display, 'grid', 'Wide workspace uses a channel grid: ' + JSON.stringify(channelLayout));
        else assert.equal(channelLayout.display, 'flex', 'Narrow workspace keeps one channel column');
      }
    }
    await page.getByRole('button', { name: 'Manage groups', exact: true }).click();
    for (const width of [1280, 800, 375]) {
      await page.setViewportSize({ width, height: 900 });
      const size = await page.locator('.ytsm-dashboard').evaluate(e => ({ w: e.clientWidth, s: e.scrollWidth }));
      assert.ok(size.s <= size.w + 1, 'Group tree and details fit at ' + width);
    }
    await page.setViewportSize({ width: 1280, height: 900 });
    const scrollCheck = await page.locator('.ts-group-detail-channels').evaluate(list => {
      const row = list.firstElementChild;
      for (let i = 0; i < 40; i++) list.appendChild(row.cloneNode(true));
      return { client: list.clientHeight, scroll: list.scrollHeight, manager: list.closest('.ts-group-manager').clientHeight };
    });
    assert.ok(scrollCheck.client > 0 && scrollCheck.scroll > scrollCheck.client, 'Many subscriptions scroll inside their pane');
    assert.ok(scrollCheck.manager < 640, 'The group tree stays beside the independently scrolling subscriptions');
    if (process.env.TS_GROUP_SCROLL_SCREENSHOT) {
      await page.evaluate(() => document.documentElement.setAttribute('dark', ''));
      await page.screenshot({ path: process.env.TS_GROUP_SCROLL_SCREENSHOT });
    }
    if (process.env.TS_CHANNEL_GRID_SCREENSHOT) {
      await page.setViewportSize({ width: 1280, height: 900 });
      await page.evaluate(() => document.documentElement.setAttribute('dark', ''));
      await page.getByRole('button', { name: 'All channels', exact: true }).click();
      await page.screenshot({ path: process.env.TS_CHANNEL_GRID_SCREENSHOT });
    }
    if (process.env.TS_WORKSPACE_SCREENSHOT) {
      await page.setViewportSize({ width: 1280, height: 900 });
      await page.evaluate(() => document.documentElement.setAttribute('dark', ''));
      await page.getByRole('button', { name: 'Manage groups', exact: true }).click();
      const expandedManagement = page.locator('.ytsm-group-list .ts-management-disclosure[aria-expanded="true"]');
      if (await expandedManagement.count()) await expandedManagement.first().click();
      await page.locator('.ytsm-group-list .ytsm-group-row-header').filter({ hasText: 'Ігри' }).click();
      await page.screenshot({ path: process.env.TS_WORKSPACE_SCREENSHOT });
      if (process.env.TS_WORKSPACE_EXPANDED_SCREENSHOT) {
        await page.locator('.ytsm-group-list .ts-management-disclosure').first().click();
        await page.locator('.ytsm-group-list .ytsm-group-row-header').filter({ hasText: 'Minecraft' }).click();
        await page.screenshot({ path: process.env.TS_WORKSPACE_EXPANDED_SCREENSHOT });
      }
    }
    assert.deepEqual(errors, []);
  } finally { await browser.close(); }
});
