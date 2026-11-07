<div align="center">

# Chanopy

**Organize your YouTube subscriptions into groups and subgroups.**

[English](#english) · [Українська](#українською)

</div>

## English

Chanopy is a Chrome extension for organizing YouTube subscriptions into groups and subgroups. It adds channel search, import and export, synchronization, and channel activity checks to YouTube. The interface is available in Ukrainian, English, Spanish, Portuguese, German, French, Polish, and Italian.

The built-in sorting catalog contains **11,829 Ukrainian YouTube channels**. You can create a catalog for another language or community. See [`db/README.md`](db/README.md) for the format and instructions.

### Features

- Organize subscriptions into groups and nested subgroups.
- Browse and search channels from YouTube.
- Import and export subscriptions and backups.
- Synchronize subscriptions and check channel activity.
- Use the interface in eight languages.

### Install from source

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome and enable **Developer mode**.
3. Choose **Load unpacked** and select the repository directory containing `manifest.json`.
4. Open YouTube and refresh the tab.

### Development and packaging

Node.js is required to run the regression suite:

```sh
npm test
```

Create a distributable ZIP with:

```sh
npm run package
```

The current Chanopy JavaScript and CSS are maintained in `dist/`. The packaging script uses those files directly. Locale JSON files and `tools/build-locales.cjs` generate `dist/locales.js`. The original TubeStack 0.2.1 source and build configuration are preserved in [`upstream/`](upstream/README-CHANOPY.md) as a historical snapshot. They do not build Chanopy 0.6.0.

### Origin and license

Chanopy is based on and extends [TubeStack](https://github.com/TubeStack/TubeStack). The original repository identifies its license as **GNU General Public License v3.0 (GPL-3.0)**. Chanopy is also distributed under GPL-3.0. See [`LICENSE`](LICENSE) and [`NOTICE.md`](NOTICE.md). TubeStack authors are not represented as authors of or endorsers of Chanopy.

### Privacy

Subscription data is stored in Chrome extension storage. Review the permissions in `manifest.json` before installation.

## Українською

Chanopy — розширення для Chrome, яке допомагає впорядкувати підписки YouTube у групи та підгрупи. Воно додає пошук каналів, імпорт та експорт, синхронізацію й перевірку активності каналів безпосередньо в YouTube. Інтерфейс доступний українською, англійською, іспанською, португальською, німецькою, французькою, польською та італійською.

Вбудована база для сортування містить **11 829 каналів українського YouTube**. Можна створити базу для іншої мови або спільноти. Формат і інструкція — у [`db/README.md`](db/README.md).

### Можливості

- Об’єднання підписок у групи та вкладені підгрупи.
- Перегляд і пошук каналів безпосередньо в YouTube.
- Імпорт та експорт підписок і резервних копій.
- Синхронізація підписок і перевірка активності каналів.
- Інтерфейс вісьмома мовами.

### Встановлення з вихідних файлів

1. Завантажте або клонуйте цей репозиторій.
2. Відкрийте `chrome://extensions` у Chrome та ввімкніть **Режим розробника**.
3. Натисніть **Завантажити розпаковане розширення** й виберіть папку репозиторію, де розташований `manifest.json`.
4. Відкрийте YouTube та оновіть вкладку.

### Перевірка та пакування

Для запуску тестів потрібен Node.js:

```sh
npm test
```

Щоб створити ZIP-пакет розширення:

```sh
npm run package
```

Актуальні файли JavaScript і CSS Chanopy містяться у `dist/`. Скрипт пакування використовує їх безпосередньо. JSON-файли перекладів разом із `tools/build-locales.cjs` створюють `dist/locales.js`. Оригінальні вихідники TubeStack 0.2.1 та конфігурацію збирання збережено в [`upstream/`](upstream/README-CHANOPY.md) як історичний знімок. Вони не збирають Chanopy 0.6.0.

### Походження та ліцензія

Chanopy створено на основі [TubeStack](https://github.com/TubeStack/TubeStack) та розвинуто далі. В оригінальному репозиторії вказана ліцензія **GNU General Public License версії 3.0 (GPL-3.0)**. Chanopy також поширюється за GPL-3.0. Див. [`LICENSE`](LICENSE) і [`NOTICE.md`](NOTICE.md). Автори TubeStack не заявляються як автори чи прихильники Chanopy.

### Приватність

Дані підписок зберігаються у сховищі Chrome для розширень. Перед встановленням перегляньте дозволи у `manifest.json`.
