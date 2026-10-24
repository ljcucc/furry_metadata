# furtracker-data

FurTracker 共用的資料 lib：目前包含 species（物種）清單，供前端專案（如 `20U12_furtracker_ui`）以本地依賴方式引用。

## 資料格式

每個物種項目：

| 欄位 | 說明 |
| --- | --- |
| `value` | 存檔用的值（kebab-case 英文 ID） |
| `en` / `zh` / `ja` | 各語系顯示名 |
| `keywords` | 搜尋額外對照詞（選填） |

日文顯示名依 `en` 為基準翻譯（見 UI 專案 AGENTS.md 日文翻譯守則）：常見動物用日文慣用名，外來種／品種用片假名，furry 圈固有物種（Protogen / Sergal 等）用圈內通用的片假名。

## 使用方式

在前端專案的 `package.json` 以本地路徑引用：

```json
{
  "dependencies": {
    "furtracker-data": "file:../20V02_furtracker_data"
  }
}
```

或直接以相對路徑 import 原始碼：

```js
import { speciesList, speciesOptions, findSpecies } from '../../20V02_furtracker_data/src/index.js'
```

## API

```js
// 完整清單
import { speciesList } from 'furtracker-data'

// 產生選擇器用的選項清單：依語系選顯示名，value / en / zh / ja 都放進 keywords
const options = speciesOptions('zh-TW')
// => [{ value: 'wolf', label: '狼', keywords: ['Wolf', '狼', 'オオカミ', 'werewolf', '狼人'] }, ...]

// 依 value 找回物種資料（找不到回 null）
const wolf = findSpecies('wolf')
```
