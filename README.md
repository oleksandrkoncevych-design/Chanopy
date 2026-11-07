<div align="center">

# Chanopy

**Organize your YouTube subscriptions into groups and subgroups.**

[English](#english) · [Українська](#українською) · [TubeStack origin](https://github.com/TubeStack/TubeStack) · [GPL-3.0](LICENSE)

</div>

## English

Chanopy is a Chrome extension that helps organize YouTube subscriptions into groups and subgroups. It adds subscription navigation and management to YouTube, with channel search, import and export, synchronization, and channel activity checks. The interface is available in Ukrainian, English, Spanish, Portuguese, German, French, Polish, and Italian.

The built-in sorting catalog contains 11,829 Ukrainian YouTube channels. You can create a catalog for another language or community. See [`db/README.md`](db/README.md) for the format and instructions.

Chanopy is based on and extends the open-source [TubeStack](https://github.com/TubeStack/TubeStack) extension. It is distributed under GPL-3.0.

## Українською

Chanopy — розширення для Chrome, яке допомагає впорядкувати підписки YouTube у групи та підгрупи. Воно додає навігацію й керування підписками безпосередньо в YouTube, підтримує пошук каналів, імпорт та експорт, синхронізацію й перевірку активності каналів. Інтерфейс доступний українською, англійською, іспанською, португальською, німецькою, французькою, польською та італійською.

Вбудована база для сортування містить 11 829 каналів українського YouTube. Можна створити базу для іншої мови або спільноти. Формат і інструкція — у [`db/README.md`](db/README.md).

Chanopy створено на основі відкритого розширення [TubeStack](https://github.com/TubeStack/TubeStack) та розвинуто далі. Ліцензія проєкту — GPL-3.0.

## Features

- Organize subscriptions into groups and nested subgroups.
- Browse and search channels from the YouTube interface.
- Import and export subscription data and backups.
- Synchronize subscriptions and check channel activity.
- Use the interface in Ukrainian, English, Spanish, Portuguese, German, French, Polish, and Italian.

## Можливості

- Об’єднання підписок у групи та вкладені підгрупи.
- Перегляд і пошук каналів безпосередньо в YouTube.
- Імпорт та експорт підписок і резервних копій.
- Синхронізація підписок і перевірка активності каналів.
- Інтерфейс українською, англійською, іспанською, португальською, німецькою, французькою, польською та італійською.

## Install from source

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome and enable **Developer mode**.
3. Choose **Load unpacked** and select the repository directory containing `manifest.json`.
4. Open YouTube and refresh the tab.

## Встановлення з вихідних файлів

1. Завантажте або клонуйте цей репозиторій.
2. Відкрийте `chrome://extensions` у Chrome та ввімкніть **Режим розробника**.
3. Натисніть **Завантажити розпаковане розширення** й виберіть папку репозиторію, де розташований `manifest.json`.
4. Відкрийте YouTube та оновіть вкладку.

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

## Перевірка та збирання

Для запуску тестів потрібен Node.js:

```sh
npm test
```

Щоб створити ZIP-пакет розширення:

```sh
npm run package
```

Поточний код Chanopy міститься у `dist/`. Скрипт `tools/package-extension.ps1` пакує ці файли без запуску Vite. Файли `locales/*.json` разом із `tools/build-locales.cjs` створюють `dist/locales.js`. Оригінальні вихідники TubeStack 0.2.1 та його конфігурація збирання збережені в [`upstream/`](upstream/README-CHANOPY.md).

## Lineage and licensing

Chanopy is a modified and extended version of [TubeStack](https://github.com/TubeStack/TubeStack). The upstream repository identifies its license as **GNU General Public License v3.0 (GPL-3.0)**. This repository is also distributed under GPL-3.0; see [`LICENSE`](LICENSE).

The original project and its authors retain their copyright in their contributions. Chanopy-specific changes are modifications to that project; no claim is made here that Chanopy is the original TubeStack project or that its upstream authors endorse Chanopy. See [`NOTICE.md`](NOTICE.md) for the project attribution and modification note.

For this version, the current working form of the modified extension is `dist/` together with `locales/`, `db/`, `assets/`, `manifest.json`, and the scripts in `tools/`. The upstream Vite project is historical source and does not rebuild Chanopy 0.6.0. To prepare the current extension package, run `npm run package`.

## Походження та ліцензія

Chanopy — змінена й розширена версія [TubeStack](https://github.com/TubeStack/TubeStack). В оригінальному репозиторії вказана ліцензія **GNU General Public License версії 3.0 (GPL-3.0)**. Цей проєкт також поширюється за GPL-3.0. Текст ліцензії міститься у [`LICENSE`](LICENSE).

Авторські права на внесок у початковий проєкт належать його авторам. Chanopy містить власні зміни, а автори TubeStack не заявляються як автори чи прихильники Chanopy. Деталі походження наведені у [`NOTICE.md`](NOTICE.md).

Актуальні файли Chanopy — це `dist/`, `locales/`, `db/`, `assets/`, `manifest.json` і сценарії у `tools/`. Історичні вихідники TubeStack у `upstream/` не збирають Chanopy 0.6.0. Щоб створити ZIP поточної версії, виконайте `npm run package`.

## Privacy

Subscription data is stored by the extension in Chrome extension storage. Review the extension permissions in `manifest.json` before installation.

## Приватність

Дані підписок розширення зберігає у сховищі Chrome для розширень. Перед встановленням перегляньте дозволи у `manifest.json`.
