// Build the extension's runtime locale catalog from editable JSON files.
// Run after editing locale JSON files: node tools/build-locales.cjs
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const localeDir = path.join(root, 'locales');
const distFile = path.join(root, 'dist', 'locales.js');
function build() {
  const files = fs.readdirSync(localeDir).filter(name => name.endsWith('.json')).sort();
  if (!files.length) throw new Error('No locale JSON files found.');
  const locales = {};
  for (const file of files) {
    const locale = JSON.parse(fs.readFileSync(path.join(localeDir, file), 'utf8'));
    if (!locale.code || locale.code !== path.basename(file, '.json')) throw new Error(`Locale code does not match ${file}`);
    if (!locale.name || !locale.messages || typeof locale.messages !== 'object') throw new Error(`${file} needs a name and messages object.`);
    locales[locale.code] = locale;
  }
  if (!locales.en) throw new Error('locales/en.json is required as the source language.');
  const source = locales.en.messages;
  const order = Object.keys(locales).sort((a, b) => (locales[a].order ?? 999) - (locales[b].order ?? 999) || a.localeCompare(b));
  for (const [code, locale] of Object.entries(locales)) {
    const unknown = Object.keys(locale.messages).filter(key => !(key in source));
    if (unknown.length) throw new Error(`${code}.json has keys missing from en.json: ${unknown.slice(0, 5).join(', ')}`);
    if (!locale.languageLabel || !locale.plurals || !locale.plurals.one || !locale.plurals.other) throw new Error(`${code}.json needs languageLabel and one/other plural forms.`);
    if (!['one-other', 'slavic', 'intl'].includes(locale.pluralRule)) throw new Error(`${code}.json has an unsupported pluralRule.`);
    for (const [section, keys] of Object.entries({
      patterns: ['enriched', 'showing', 'signedInAs'],
      sync: ['button', 'waiting', 'busy', 'timeout', 'done', 'statusTitle', 'statusBody'],
      audit: ['confirmOne', 'confirmMany', 'done', 'removed', 'sum', 'more'],
      autoGroup: ['done', 'none', 'undone', 'error', 'replaceConfirm', 'replaceDone', 'replaceUndone', 'replaceStateChanged', 'replaceNoMatches']
    })) {
      for (const key of keys) if (typeof locale[section]?.[key] !== 'string' || !locale[section][key]) throw new Error(`${code}.json needs ${section}.${key}.`);
    }
    for (const [section, keys] of Object.entries({
      patterns: ['enriched', 'showing', 'signedInAs'],
      sync: ['done'],
      audit: ['confirmMany', 'done', 'removed', 'sum', 'more'],
      autoGroup: ['done', 'undone', 'error', 'replaceConfirm', 'replaceDone']
    })) {
      for (const field of keys) {
        const expected = [...(locales.en[section]?.[field] || '').matchAll(/\{([^}]+)\}/g)].map(match => match[1]).sort();
        const actual = [...locale[section][field].matchAll(/\{([^}]+)\}/g)].map(match => match[1]).sort();
        if (expected.join('|') !== actual.join('|')) throw new Error(`${code}.json ${section}.${field} must retain placeholders: ${expected.join(', ')}.`);
      }
    }
  }
  const dictionaries = {};
  const names = {};
  const languageLabels = {};
  const extra = {};
  const plurals = {};
  const sync = {};
  const audit = {};
  const autoGroup = {};
  for (const code of order) {
    const locale = locales[code];
    names[code] = locale.name;
    languageLabels[code] = locale.languageLabel || 'Language';
    dictionaries[code] = {};
    for (const [key, phrase] of Object.entries(source)) dictionaries[code][phrase] = locale.messages[key] || phrase;
    extra[code] = locale.patterns || {};
    plurals[code] = { rule: locale.pluralRule || 'one-other', ...(locale.plurals || {}) };
    sync[code] = locale.sync || {};
    audit[code] = locale.audit || {};
    autoGroup[code] = locale.autoGroup || {};
  }
  const payload = { order, names, languageLabels, dictionaries, extra, plurals, sync, audit, autoGroup };
  fs.writeFileSync(distFile, `globalThis.TUBESTACK_LOCALES = ${JSON.stringify(payload)};\n`, 'utf8');
  console.log(`Built ${path.relative(root, distFile)} from ${files.length} locale files (${Object.keys(source).length} message keys).`);
}

build();
