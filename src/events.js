// 活動清單：資料本體在 data/events.json（furry 活動的屆次資料，供活動分類比對使用）。
// 這裡只提供選項組合、查詢與比對功能；要新增／修改活動請改 data/events.json。
// JSON 每個項目：
// - value：存檔用的值（活動系列 + 屆次，kebab-case）
// - series：活動系列 ID（同一活動跨屆共用），新增同系列屆次時沿用
// - year：屆次年份（取開始日所在年份）
// - en / zh / ja：各語系顯示名
// - startDate / endDate：活動日期（含報到／佈置日，ISO 格式 YYYY-MM-DD）。
//   日期慣例：多日連續活動若最後一天落在週日，endDate 一律延至下一個週一。
// - location：地點（選填；{ en, zh, ja }）
// - theme：當屆主題（選填；{ en, zh, ja }，日文缺官方譯名時沿用英文）
// - website：官網（選填）
// - keywords：分類比對用的額外對照詞（別名、英文名、主題名等）
// 分類流程：把活動名稱丟進 matchEvent()，比對到清單內的項目就從該項目抓顯示資料。
// 日文顯示名依 en 為基準翻譯（見 AGENTS.md 日文翻譯守則）；活動官方名多以英文為主，
// 日文 label 直接沿用官方英文名，別名（漢字名、片假名音譯）放 keywords。

import eventsList from '../data/events.json' with { type: 'json' }

export { eventsList }

function normalize(text) {
  return String(text).trim().toLowerCase()
}

/** 去掉空白與符號只留英數（比對「UTFG2026」這種沒有分隔的寫法） */
function squash(text) {
  return normalize(text).replace(/[^a-z0-9]+/g, '')
}

/**
 * 產生選擇器用的選項清單：依語系選顯示名，value / en / zh / ja 都放進 keywords，
 * 讓使用者不管打中文、英文或日文（甚至別名）都搜得到。
 */
export function eventOptions(locale = 'en-US') {
  const tag = String(locale).toLowerCase()
  const useZh = tag.startsWith('zh')
  const useJa = tag.startsWith('ja')
  return eventsList.map((event) => ({
    value: event.value,
    label: useZh ? event.zh : useJa ? event.ja : event.en,
    keywords: [event.en, event.zh, event.ja, ...(event.keywords ?? [])],
  }))
}

/** 依 value 找回活動資料（找不到回 null） */
export function findEvent(value) {
  return eventsList.find((event) => event.value === value) ?? null
}

/** 依 series 找出同系列的所有屆次（新到舊） */
export function findEventsBySeries(series) {
  return eventsList
    .filter((event) => event.series === series)
    .sort((a, b) => (a.startDate < b.startDate ? 1 : -1))
}

/**
 * 分類比對：輸入活動名稱字串，比對清單內的活動（找不到回 null）。
 * 比對順序：
 * 1. 完全一致（value / en / zh / ja / keywords，不分大小寫）
 * 2. 去符號後完全一致（「UTFG2026」對「UTFG 2026」）
 * 3. 雙向子字串比對，取比對到的候選詞最長者（避免短別名誤中）
 */
export function matchEvent(text) {
  const q = normalize(text)
  if (!q) return null
  const sq = squash(text)

  for (const event of eventsList) {
    const candidates = [event.value, event.en, event.zh, event.ja, ...(event.keywords ?? [])]
    if (candidates.some((c) => normalize(c) === q)) return event
  }
  if (sq) {
    for (const event of eventsList) {
      const candidates = [event.value, event.en, event.zh, event.ja, ...(event.keywords ?? [])]
      if (candidates.some((c) => squash(c) === sq)) return event
    }
  }

  let best = null
  let bestScore = 0
  for (const event of eventsList) {
    const candidates = [event.value, event.en, event.zh, event.ja, ...(event.keywords ?? [])]
    for (const candidate of candidates) {
      const c = normalize(candidate)
      if (c && (c.includes(q) || q.includes(c)) && c.length > bestScore) {
        best = event
        bestScore = c.length
      }
    }
  }
  return best
}
