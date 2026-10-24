// 物種清單：資料本體在 data/species.json（furry fandom 常見物種，供可搜尋的物種選擇器使用）。
// 這裡只提供選項組合與查詢功能；要新增／修改物種請改 data/species.json。
// JSON 每個項目：value（存檔用的值）、en / zh / ja（各語系顯示名）、keywords（搜尋額外對照詞，選填）。
// 日文顯示名依 en 為基準翻譯（見 AGENTS.md 日文翻譯守則）：常見動物用日文慣用名，
// 外來種／品種用片假名，furry 圈固有物種（Protogen / Sergal 等）用圈內通用的片假名。

import speciesList from '../data/species.json' with { type: 'json' }

export { speciesList }

/**
 * 產生選擇器用的選項清單：依語系選顯示名，value / en / zh / ja 都放進 keywords，
 * 讓使用者不管打中文、英文或日文（甚至別名）都搜得到。
 */
export function speciesOptions(locale = 'en-US') {
  const tag = String(locale).toLowerCase()
  const useZh = tag.startsWith('zh')
  const useJa = tag.startsWith('ja')
  return speciesList.map((species) => ({
    value: species.value,
    label: useZh ? species.zh : useJa ? species.ja : species.en,
    keywords: [species.en, species.zh, species.ja, ...(species.keywords ?? [])],
  }))
}

/** 依 value 找回物種資料（找不到回 null） */
export function findSpecies(value) {
  return speciesList.find((species) => species.value === value) ?? null
}
