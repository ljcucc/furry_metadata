# furtracker-data

Shared metadata lists for FurTracker: species and furry event editions, consumed by front-end projects (e.g. [`20U12_furtracker_ui`](https://github.com/ljcucc/furtracker_metadata_list)) as a GitHub dependency.

**English** | [繁體中文（台灣）](./README.zh-TW.md)

## Contributing

Want to add a species, add an event edition, or fix/change a name? **Please [open an issue](https://github.com/ljcucc/furtracker_metadata_list/issues) instead of editing the data directly**, so entries stay consistent (naming, keywords, formats) across languages. Direct PRs for typo-level fixes are still welcome if an issue exists or is referenced.

Guidelines:

- Species: use a kebab-case English `value` (e.g. `fennec-fox`); display names in `en` / `zh` / `ja`.
- Events: one entry per edition; reuse the existing `series` ID across editions of the same event (e.g. `utfg`); dates in ISO `YYYY-MM-DD`.
- Japanese display names follow `en` as the source (see the translation rules in the UI project's AGENTS.md); for event names without an official Japanese translation, keep the official English name and put aliases in `keywords`.

## events data format

Events are stored per edition (one entry per edition of the same event):

| Field | Description |
| --- | --- |
| `value` | Stored value (`series` + edition, kebab-case, e.g. `utfg-2026`) |
| `series` | Event series ID shared across editions (e.g. `utfg`) |
| `year` | Edition year |
| `en` / `zh` / `ja` | Display names per language |
| `startDate` / `endDate` | Event dates (ISO `YYYY-MM-DD`, including check-in / setup days) |
| `location` | Venue `{ en, zh, ja }` (optional) |
| `theme` | Edition theme `{ en, zh, ja? }` (optional; fall back to English when no official Japanese translation exists) |
| `website` | Official website (optional) |
| `keywords` | Extra terms for classification matching (aliases, theme names, etc., optional) |

### Event classification matching

Event classification is driven by this list: feed an event name into `matchEvent()`; once matched, pull the display data (name, dates, venue, etc.) from that entry:

```js
const event = matchEvent('獸無限2026') // exact match (case-insensitive, punctuation-insensitive)
// => { value: 'infurnity-2026', zh: '獸無限 2026', startDate: '2026-10-30', ... }
matchEvent('Furnity 2026 Taiwan') // substring matching works too
```

## species data format

Each species entry:

| Field | Description |
| --- | --- |
| `value` | Stored value (kebab-case English ID) |
| `en` / `zh` / `ja` | Display names per language |
| `keywords` | Extra search terms (optional) |

Japanese display names are translated based on `en`: common animals use standard Japanese names, foreign breeds use katakana, and fandom-specific species (Protogen / Sergal, etc.) use the community's common katakana names.

## Usage

Reference directly from GitHub in the front-end project's `package.json`:

```json
{
  "dependencies": {
    "furtracker-data": "github:ljcucc/furtracker_metadata_list"
  }
}
```

## API

```js
import { speciesList, speciesOptions, findSpecies } from 'furtracker-data'
import { eventsList, eventOptions, findEvent, findEventsBySeries, matchEvent } from 'furtracker-data'

// Full lists
speciesList // 126 species
eventsList // event editions (sorted by start date)

// Picker options (label per locale; value / en / zh / ja all go into keywords)
const speciesOpts = speciesOptions('zh-TW')
// => [{ value: 'wolf', label: '狼', keywords: ['Wolf', '狼', 'オオカミ', 'werewolf', '狼人'] }, ...]
const eventOpts = eventOptions('ja')

// Look up by value (null when not found)
findSpecies('wolf')
findEvent('utfg-2026')

// All editions of a series (newest first)
findEventsBySeries('utfg') // => [UTFG 2027, UTFG 2026]

// Event name classification matching (see "Event classification matching" above)
matchEvent('獸無限2026') // => infurnity-2026
```
