# Chanopy locales

Each language lives in one JSON file named by its locale code, for example `uk.json` or `pl.json`. `en.json` is the source catalog and defines the stable message keys and English fallback text.

## Add a language

1. Copy `en.json` to a new file such as `it.json`.
2. Set `code`, `name`, `languageLabel`, and an unused `order` value. Lower `order` values appear first in the language selector.
3. Translate the values in `messages`, `patterns`, `sync`, `audit`, and `autoGroup`. Keep the message keys unchanged. `patterns.signedInAs` must retain its `{username}` placeholder.
4. Translate every plural form used by your language. Use `pluralRule: "one-other"` for a one/other language, `"slavic"` for Ukrainian or Polish-style one/few/many rules, or `"intl"` for the categories returned by `Intl.PluralRules`.
5. Keep placeholders exactly as written, such as `{count}`, `{done}`, `{total}`, `{username}`, `{added}`, and `{renamed}`. The locale builder checks the dynamic placeholders.
6. Run `node tools/build-locales.cjs`. This generates `dist/locales.js`, which supplies translations to the popup, YouTube dashboard, and sync tab.

Missing `messages` entries fall back to English. The builder rejects unknown message keys and missing required sync or plural fields.

## Add a new UI string

Add a stable key and its English text to `en.json` under `messages`, then add that same key with translated text to each maintained locale file. Use a descriptive key such as `groups.empty.title`; avoid using the English sentence as the key.
