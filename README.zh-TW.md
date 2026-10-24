# Furry Metadata

Furry Metadata 共用的 metadata 清單：物種（species）與獸聚活動屆次（events），供 FurTracker 前端專案（如 `20U12_furtracker_ui`）以 GitHub 依賴方式引用。

[English](./README.md) | **繁體中文（台灣）**

## 協作方式

這份清單是 FurTracker 的共用資料來源，命名、keywords、資料格式由維護者把關，讓各語系維持一致。

想新增物種、新增活動場次，或修改名稱的話，最簡單的方式就是[開個 issue](https://github.com/ljcucc/furry_metadata/issues)跟我們說——不用會寫程式，把想要的內容描述一下就好，可以的話附上手邊有的資訊（官方名稱、日期、官網、大家實際在用的別名）。用英文或繁體中文（台灣）撰寫都可以，後續就交給維護者處理。

喜歡動 Git 的話，也歡迎先開（或先找一個）issue，再送 pull request——我們會檢查格式一致性後合併。

## 專案結構

- `data/species.json` — 物種清單（純 JSON）
- `data/events.json` — 活動屆次清單（純 JSON）
- `src/species.js` / `src/events.js` — 只放輔助函式（選項組合、查詢、活動名稱比對），不存放資料
- `src/index.js` — 統一轉出口

清單本體都是純 JSON，不懂程式也能直接閱讀與檢查；所有邏輯都在小小的 JS 模組裡。

## events 資料格式

活動以「屆次」為單位（同一活動跨屆各一筆），每個項目：

| 欄位 | 說明 |
| --- | --- |
| `value` | 存檔用的值（活動系列 + 屆次，kebab-case，如 `utfg-2026`） |
| `series` | 活動系列 ID（同一活動跨屆共用，如 `utfg`） |
| `year` | 屆次年份 |
| `en` / `zh` / `ja` | 各語系顯示名 |
| `startDate` / `endDate` | 活動日期（ISO `YYYY-MM-DD`，含報到／佈置日）。慣例：多日連續活動若最後一天落在週日，`endDate` 一律延至下一個週一。 |
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

日文顯示名依 `en` 為基準翻譯：常見動物用日文慣用名，外來種／品種用片假名，furry 圈固有物種（Protogen / Sergal 等）用圈內通用的片假名。

## 使用方式

在前端專案的 `package.json` 直接從 GitHub 引用：

```json
{
  "dependencies": {
    "furry_metadata": "github:ljcucc/furry_metadata"
  }
}
```

## API

```js
import { speciesList, speciesOptions, findSpecies } from 'furry_metadata'
import { eventsList, eventOptions, findEvent, findEventsBySeries, matchEvent } from 'furry_metadata'

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
