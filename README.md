# furtracker-data

FurTracker 共用的資料 lib：目前包含 species（物種）清單與 events（活動屆次）清單，供前端專案（如 `20U12_furtracker_ui`）以 GitHub 依賴方式引用。

## events 資料格式

活動以「屆次」為單位（同一活動跨屆各一筆），每個項目：

| 欄位 | 說明 |
| --- | --- |
| `value` | 存檔用的值（活動系列 + 屆次，kebab-case，如 `utfg-2026`） |
| `series` | 活動系列 ID（同一活動跨屆共用，如 `utfg`） |
| `year` | 屆次年份 |
| `en` / `zh` / `ja` | 各語系顯示名 |
| `startDate` / `endDate` | 活動日期（ISO `YYYY-MM-DD`，含報到／佈置日） |
| `location` | 地點 `{ en, zh, ja }`（選填） |
| `theme` | 當屆主題 `{ en, zh, ja? }`（選填，日文缺官方譯名時沿用英文） |
| `website` | 官網（選填） |
| `keywords` | 分類比對用的額外對照詞（別名、主題名等，選填） |

### 活動分類比對

活動分類按此清單抓：把活動名稱丟進 `matchEvent()`，比對到就從該筆資料抓顯示資料（顯示名、日期、地點等）：

```js
const event = matchEvent('獸無限2026') // 完全一致（不分大小寫、去符號）
// => { value: 'infurnity-2026', zh: '獸無限 2026', startDate: '2026-10-30', ... }
matchEvent('Furnity 2026 Taiwan') // 子字串比對也可以
```

## species 資料格式

每個物種項目：

| 欄位 | 說明 |
| --- | --- |
| `value` | 存檔用的值（kebab-case 英文 ID） |
| `en` / `zh` / `ja` | 各語系顯示名 |
| `keywords` | 搜尋額外對照詞（選填） |

日文顯示名依 `en` 為基準翻譯（見 UI 專案 AGENTS.md 日文翻譯守則）：常見動物用日文慣用名，外來種／品種用片假名，furry 圈固有物種（Protogen / Sergal 等）用圈內通用的片假名。

## 使用方式

在前端專案的 `package.json` 直接從 GitHub 引用：

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

// 完整清單
speciesList // 126 筆物種
eventsList // 活動屆次（依開始日排序）

// 選擇器選項（依語系選顯示名，value / en / zh / ja 都放進 keywords）
const speciesOpts = speciesOptions('zh-TW')
// => [{ value: 'wolf', label: '狼', keywords: ['Wolf', '狼', 'オオカミ', 'werewolf', '狼人'] }, ...]
const eventOpts = eventOptions('ja')

// 依 value 找回資料（找不到回 null）
findSpecies('wolf')
findEvent('utfg-2026')

// 同系列的所有屆次（新到舊）
findEventsBySeries('utfg') // => [UTFG 2027, UTFG 2026]

// 活動名稱分類比對（見上方「活動分類比對」）
matchEvent('獸無限2026') // => infurnity-2026
```
