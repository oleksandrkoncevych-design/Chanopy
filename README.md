# Chanopy

Chanopy is a Chrome extension for organizing YouTube subscriptions into groups and subgroups.

## Features

- Organize subscriptions into groups and nested subgroups.
- Browse and search channels from the YouTube interface.
- Import and export subscription data and backups.
- Synchronize subscriptions and check channel activity.
- Use the interface in Ukrainian, English, Spanish, Portuguese, German, French, Polish, and Italian.

## Install from source

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome and enable **Developer mode**.
3. Choose **Load unpacked** and select the repository directory containing `manifest.json`.
4. Open YouTube and refresh the tab.

## Development checks

Requires Node.js. Run the regression suite with:

```sh
npm test
```

Build a distributable ZIP with:

```sh
npm run package
```

`dist/` contains the current editable Chanopy JavaScript and CSS. The project has been modified directly in these files since the TubeStack 0.2.1 base. `tools/package-extension.ps1` packages those files without running Vite. `locales/*.json` and `tools/build-locales.cjs` generate `dist/locales.js`. The original TubeStack 0.2.1 source tree and its build configuration are preserved in [`upstream/`](upstream/README-CHANOPY.md) for provenance.

## Lineage and licensing

Chanopy is a modified and extended version of [TubeStack](https://github.com/TubeStack/TubeStack). The upstream repository identifies its license as **GNU General Public License v3.0 (GPL-3.0)**. This repository is also distributed under GPL-3.0; see [`LICENSE`](LICENSE).

The original project and its authors retain their copyright in their contributions. Chanopy-specific changes are modifications to that project; no claim is made here that Chanopy is the original TubeStack project or that its upstream authors endorse Chanopy. See [`NOTICE.md`](NOTICE.md) for the project attribution and modification note.

For this version, the current working form of the modified extension is `dist/` together with `locales/`, `db/`, `assets/`, `manifest.json`, and the scripts in `tools/`. The upstream Vite project is historical source and does not rebuild Chanopy 0.6.0. To prepare the current extension package, run `npm run package`.

## Privacy

Subscription data is stored by the extension in Chrome extension storage. Review the extension permissions in `manifest.json` before installation.
