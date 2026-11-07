# Channel sorting catalog

`channels.json` is the catalog used by automatic sorting. The extension reads it at runtime; it does not copy catalog rules into the user's saved group tree until the user runs a sorting action.

## Schema version 2

Keep category IDs stable when adding translations or correcting display names. Channel IDs are the primary match; a unique normalized channel name is used only as a fallback.

```json
{
  "schemaVersion": 2,
  "catalogId": "example-uk-catalog",
  "version": 1,
  "defaultLocale": "uk",
  "categories": [
    { "id": "games", "parentId": null, "names": { "uk": "Ігри", "en": "Games" } },
    { "id": "minecraft", "parentId": "games", "names": { "uk": "Minecraft", "en": "Minecraft" } }
  ],
  "channels": [
    { "youtube_id": "UCxxxxxxxxxxxxxxxxxxxxxx", "name": "Channel name", "categoryId": "minecraft" }
  ]
}
```

- `categories` defines both groups and subgroups. A category with `parentId: null` becomes a group; one with a `parentId` becomes a subgroup under that group. Only one subgroup level is supported.
- `names` contains display names by locale code. Missing translations fall back to `defaultLocale`, then Ukrainian or English. Existing catalog-managed groups are localized in the UI by stable category ID; saved group names and custom names are left intact.
- `channels` assigns each channel to exactly one category. Use the stable YouTube channel ID whenever possible.
- `legacyGroupNames` is an optional list of group names from an older catalog. Keep it when replacing the built-in catalog so the explicit replacement action can recognize and clean up old automatic assignments.
- `version` should increase whenever the catalog rules change. `catalogId` identifies the catalog across updates.

## Add a language or a different channel set

1. Add localized names under the locale code, keeping category IDs unchanged.
2. To sort a different set of channels, replace the `channels` array with that set and point each channel to an existing or newly defined `categoryId`.
3. Validate the JSON, replace `channels.json`, then reload the unpacked extension.
4. In Chanopy, use **Replace sort with catalog**. The preview shows how many subscribed channels match. The catalog replaces the entire saved group tree and all old assignments. Matched channels receive the group and subgroup from the file; channels absent from the file stay in the channel list without a group. Empty old groups are removed.
5. Chanopy saves a backup of the previous groups and assignments. Use **Undo catalog replacement** to restore that snapshot.

Legacy array files containing `{ "youtube_id", "name", "label" }` are still accepted as flat, Ukrainian-only catalogs. New catalogs should use schema version 2.

`overrides.json` can use `{ "youtube_id", "categoryId" }`. The legacy `{ "youtube_id", "label" }` form is also accepted when the label matches one unambiguous category name or alias.
