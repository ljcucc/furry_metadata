// 物種清單：furry fandom 常見物種，供可搜尋的物種選擇器使用。
// 每個項目：value（存檔用的值）、en / zh / ja（各語系顯示名）、keywords（搜尋額外對照詞）。
// 靜態清單先放在前端；之後接後端 API 時再替換成 fetch。
// 日文顯示名依 en 為基準翻譯（見 AGENTS.md 日文翻譯守則）：常見動物用日文慣用名，
// 外來種／品種用片假名，furry 圈固有物種（Protogen / Sergal 等）用圈內通用的片假名。

export const speciesList = [
  // 犬科
  { value: 'wolf', en: 'Wolf', zh: '狼', ja: 'オオカミ', keywords: ['werewolf', '狼人'] },
  { value: 'arctic-wolf', en: 'Arctic Wolf', zh: '北極狼', ja: 'ホッキョクオオカミ' },
  { value: 'fox', en: 'Fox', zh: '狐狸', ja: 'キツネ', keywords: ['kitsune', 'vixen', '狐'] },
  { value: 'fennec-fox', en: 'Fennec Fox', zh: '耳廓狐', ja: 'フェネック', keywords: ['fennec'] },
  { value: 'arctic-fox', en: 'Arctic Fox', zh: '北極狐', ja: 'ホッキョクギツネ' },
  { value: 'coyote', en: 'Coyote', zh: '郊狼', ja: 'コヨーテ' },
  { value: 'jackal', en: 'Jackal', zh: '胡狼', ja: 'ジャッカル' },
  { value: 'dingo', en: 'Dingo', zh: '澳洲野犬', ja: 'ディンゴ' },
  { value: 'african-wild-dog', en: 'African Wild Dog', zh: '非洲野犬', ja: 'リカオン', keywords: ['painted dog'] },
  { value: 'maned-wolf', en: 'Maned Wolf', zh: '鬃狼', ja: 'タテガミオオカミ' },
  { value: 'dog', en: 'Dog', zh: '狗', ja: '犬', keywords: ['pup'] },
  { value: 'husky', en: 'Husky', zh: '哈士奇', ja: 'ハスキー', keywords: ['siberian husky'] },
  { value: 'shiba-inu', en: 'Shiba Inu', zh: '柴犬', ja: '柴犬', keywords: ['shibe'] },
  { value: 'corgi', en: 'Corgi', zh: '柯基', ja: 'コーギー', keywords: ['welsh corgi'] },
  { value: 'german-shepherd', en: 'German Shepherd', zh: '德國狼犬', ja: 'ジャーマンシェパード', keywords: ['gsd', 'shepherd'] },
  { value: 'golden-retriever', en: 'Golden Retriever', zh: '黃金獵犬', ja: 'ゴールデンレトリバー' },
  { value: 'samoyed', en: 'Samoyed', zh: '薩摩耶', ja: 'サモエド' },
  { value: 'border-collie', en: 'Border Collie', zh: '邊境牧羊犬', ja: 'ボーダーコリー', keywords: ['collie'] },

  // 貓科
  { value: 'cat', en: 'Cat', zh: '貓', ja: '猫', keywords: ['kitty', 'feline'] },
  { value: 'tiger', en: 'Tiger', zh: '老虎', ja: 'トラ' },
  { value: 'lion', en: 'Lion', zh: '獅子', ja: 'ライオン' },
  { value: 'leopard', en: 'Leopard', zh: '花豹', ja: 'ヒョウ' },
  { value: 'snow-leopard', en: 'Snow Leopard', zh: '雪豹', ja: 'ユキヒョウ' },
  { value: 'clouded-leopard', en: 'Clouded Leopard', zh: '雲豹', ja: 'ウンピョウ' },
  { value: 'cheetah', en: 'Cheetah', zh: '獵豹', ja: 'チーター' },
  { value: 'jaguar', en: 'Jaguar', zh: '美洲豹', ja: 'ジャガー' },
  { value: 'caracal', en: 'Caracal', zh: '獰貓', ja: 'カラカル' },
  { value: 'serval', en: 'Serval', zh: '藪貓', ja: 'サーバル' },
  { value: 'lynx', en: 'Lynx', zh: '猞猁', ja: 'オオヤマネコ', keywords: ['bobcat', '山貓'] },
  { value: 'ocelot', en: 'Ocelot', zh: '豹貓', ja: 'オセロット' },
  { value: 'maine-coon', en: 'Maine Coon', zh: '緬因貓', ja: 'メインクーン' },

  // 鼬科 / 貂科
  { value: 'otter', en: 'Otter', zh: '水獺', ja: 'カワウソ', keywords: ['sea otter', '海獺'] },
  { value: 'ferret', en: 'Ferret', zh: '雪貂', ja: 'フェレット' },
  { value: 'weasel', en: 'Weasel', zh: '鼬', ja: 'イタチ' },
  { value: 'stoat', en: 'Stoat', zh: '白鼬', ja: 'オコジョ', keywords: ['ermine'] },
  { value: 'badger', en: 'Badger', zh: '獾', ja: 'アナグマ' },
  { value: 'wolverine', en: 'Wolverine', zh: '貂熊', ja: 'クズリ' },
  { value: 'mink', en: 'Mink', zh: '水貂', ja: 'ミンク' },
  { value: 'skunk', en: 'Skunk', zh: '臭鼬', ja: 'スカンク' },

  // 熊科
  { value: 'bear', en: 'Bear', zh: '熊', ja: 'クマ' },
  { value: 'brown-bear', en: 'Brown Bear', zh: '棕熊', ja: 'ヒグマ', keywords: ['grizzly'] },
  { value: 'polar-bear', en: 'Polar Bear', zh: '北極熊', ja: 'シロクマ' },
  { value: 'panda', en: 'Panda', zh: '貓熊', ja: 'パンダ', keywords: ['giant panda', '熊貓'] },
  { value: 'red-panda', en: 'Red Panda', zh: '小熊貓', ja: 'レッサーパンダ', keywords: ['firefox'] },

  // 小型哺乳類
  { value: 'rabbit', en: 'Rabbit', zh: '兔子', ja: 'ウサギ', keywords: ['bunny'] },
  { value: 'hare', en: 'Hare', zh: '野兔', ja: 'ノウサギ' },
  { value: 'squirrel', en: 'Squirrel', zh: '松鼠', ja: 'リス' },
  { value: 'chipmunk', en: 'Chipmunk', zh: '花栗鼠', ja: 'シマリス' },
  { value: 'mouse', en: 'Mouse', zh: '老鼠', ja: 'マウス' },
  { value: 'rat', en: 'Rat', zh: '大鼠', ja: 'ラット' },
  { value: 'hamster', en: 'Hamster', zh: '倉鼠', ja: 'ハムスター' },
  { value: 'guinea-pig', en: 'Guinea Pig', zh: '天竺鼠', ja: 'モルモット' },
  { value: 'chinchilla', en: 'Chinchilla', zh: '龍貓', ja: 'チンチラ', keywords: ['毛絲鼠'] },
  { value: 'beaver', en: 'Beaver', zh: '河狸', ja: 'ビーバー' },
  { value: 'porcupine', en: 'Porcupine', zh: '豪豬', ja: 'ヤマアラシ' },
  { value: 'hedgehog', en: 'Hedgehog', zh: '刺蝟', ja: 'ハリネズミ' },
  { value: 'bat', en: 'Bat', zh: '蝙蝠', ja: 'コウモリ' },

  // 其他哺乳類
  { value: 'raccoon', en: 'Raccoon', zh: '浣熊', ja: 'アライグマ', keywords: ['trash panda'] },
  { value: 'tanuki', en: 'Tanuki', zh: '狸貓', ja: 'タヌキ', keywords: ['raccoon dog', '貉'] },
  { value: 'hyena', en: 'Hyena', zh: '鬣狗', ja: 'ハイエナ' },
  { value: 'deer', en: 'Deer', zh: '鹿', ja: 'シカ' },
  { value: 'moose', en: 'Moose', zh: '駝鹿', ja: 'ヘラジカ' },
  { value: 'reindeer', en: 'Reindeer', zh: '馴鹿', ja: 'トナカイ', keywords: ['caribou'] },
  { value: 'meerkat', en: 'Meerkat', zh: '狐獴', ja: 'ミーアキャット' },
  { value: 'lemur', en: 'Lemur', zh: '狐猴', ja: 'キツネザル' },
  { value: 'monkey', en: 'Monkey', zh: '猴子', ja: 'サル' },
  { value: 'gorilla', en: 'Gorilla', zh: '猩猩', ja: 'ゴリラ' },
  { value: 'sloth', en: 'Sloth', zh: '樹懶', ja: 'ナマケモノ' },
  { value: 'anteater', en: 'Anteater', zh: '食蟻獸', ja: 'アリクイ' },
  { value: 'armadillo', en: 'Armadillo', zh: '犰狳', ja: 'アルマジロ' },
  { value: 'kangaroo', en: 'Kangaroo', zh: '袋鼠', ja: 'カンガルー' },
  { value: 'wallaby', en: 'Wallaby', zh: '小袋鼠', ja: 'ワラビー' },
  { value: 'koala', en: 'Koala', zh: '無尾熊', ja: 'コアラ' },
  { value: 'opossum', en: 'Opossum', zh: '負鼠', ja: 'オポッサム', keywords: ['possum'] },
  { value: 'tasmanian-devil', en: 'Tasmanian Devil', zh: '袋獾', ja: 'タスマニアデビル' },
  { value: 'sugar-glider', en: 'Sugar Glider', zh: '蜜袋鼯', ja: 'フクロモモンガ' },

  // 有蹄類
  { value: 'horse', en: 'Horse', zh: '馬', ja: 'ウマ' },
  { value: 'pony', en: 'Pony', zh: '小馬', ja: 'ポニー' },
  { value: 'unicorn', en: 'Unicorn', zh: '獨角獸', ja: 'ユニコーン' },
  { value: 'donkey', en: 'Donkey', zh: '驢', ja: 'ロバ' },
  { value: 'zebra', en: 'Zebra', zh: '斑馬', ja: 'シマウマ' },
  { value: 'cow', en: 'Cow', zh: '牛', ja: 'ウシ', keywords: ['bull', 'cattle'] },
  { value: 'goat', en: 'Goat', zh: '山羊', ja: 'ヤギ' },
  { value: 'sheep', en: 'Sheep', zh: '綿羊', ja: 'ヒツジ' },
  { value: 'pig', en: 'Pig', zh: '豬', ja: 'ブタ' },
  { value: 'boar', en: 'Boar', zh: '野豬', ja: 'イノシシ', keywords: ['wild boar'] },
  { value: 'giraffe', en: 'Giraffe', zh: '長頸鹿', ja: 'キリン' },
  { value: 'elephant', en: 'Elephant', zh: '大象', ja: 'ゾウ' },
  { value: 'rhino', en: 'Rhino', zh: '犀牛', ja: 'サイ' },
  { value: 'hippo', en: 'Hippo', zh: '河馬', ja: 'カバ' },
  { value: 'camel', en: 'Camel', zh: '駱駝', ja: 'ラクダ' },
  { value: 'alpaca', en: 'Alpaca', zh: '羊駝', ja: 'アルパカ' },

  // 海洋 / 爬蟲 / 兩棲
  { value: 'shark', en: 'Shark', zh: '鯊魚', ja: 'サメ' },
  { value: 'orca', en: 'Orca', zh: '虎鯨', ja: 'シャチ', keywords: ['killer whale'] },
  { value: 'dolphin', en: 'Dolphin', zh: '海豚', ja: 'イルカ' },
  { value: 'whale', en: 'Whale', zh: '鯨魚', ja: 'クジラ' },
  { value: 'seal', en: 'Seal', zh: '海豹', ja: 'アザラシ' },
  { value: 'octopus', en: 'Octopus', zh: '章魚', ja: 'タコ' },
  { value: 'snake', en: 'Snake', zh: '蛇', ja: 'ヘビ', keywords: ['serpent'] },
  { value: 'lizard', en: 'Lizard', zh: '蜥蜴', ja: 'トカゲ' },
  { value: 'crocodile', en: 'Crocodile, Alligator', zh: '鱷魚', ja: 'ワニ', keywords: ['alligator'] },
  { value: 'turtle', en: 'Turtle', zh: '烏龜', ja: 'カメ', keywords: ['tortoise'] },
  { value: 'axolotl', en: 'Axolotl', zh: '六角恐龍', ja: 'ウーパールーパー', keywords: ['美西螈'] },
  { value: 'frog', en: 'Frog', zh: '青蛙', ja: 'カエル' },

  // 鳥類
  { value: 'bird', en: 'Bird', zh: '鳥', ja: 'トリ', keywords: ['avian'] },
  { value: 'owl', en: 'Owl', zh: '貓頭鷹', ja: 'フクロウ' },
  { value: 'eagle', en: 'Eagle', zh: '老鷹', ja: 'イーグル' },
  { value: 'raven', en: 'Raven', zh: '渡鴉', ja: 'ワタリガラス', keywords: ['crow', '烏鴉'] },
  { value: 'penguin', en: 'Penguin', zh: '企鵝', ja: 'ペンギン' },
  { value: 'parrot', en: 'Parrot', zh: '鸚鵡', ja: 'オウム' },

  // 恐龍 / 幻想 / furry 圈常見物種
  { value: 'dragon', en: 'Dragon', zh: '龍', ja: 'ドラゴン', keywords: ['drake'] },
  { value: 'wyvern', en: 'Wyvern', zh: '雙足飛龍', ja: 'ワイバーン' },
  { value: 'griffin', en: 'Griffin', zh: '獅鷲', ja: 'グリフィン', keywords: ['gryphon'] },
  { value: 'dinosaur', en: 'Dinosaur', zh: '恐龍', ja: '恐竜' },
  { value: 'raptor', en: 'Raptor', zh: '迅猛龍', ja: 'ラプター', keywords: ['velociraptor'] },
  { value: 'protogen', en: 'Protogen', zh: '吐司機 (Protogen)', ja: 'プロトゲン', keywords: ['proto'] },
  { value: 'sergal', en: 'Sergal', zh: '鯊格魯（Sergal）', ja: 'セルガル' },
  { value: 'avali', en: 'Avali', zh: '阿瓦利', ja: 'アヴァリ' },
  { value: 'angel', en: 'Angel', zh: '天使', ja: '天使' },
  { value: 'demon', en: 'Demon', zh: '惡魔', ja: '悪魔', keywords: ['imp'] },
  { value: 'alien', en: 'Alien', zh: '外星人', ja: 'エイリアン' },
  { value: 'robot', en: 'Robot', zh: '機器人', ja: 'ロボット', keywords: ['cyborg', 'android', '機械'] },
  { value: 'hybrid', en: 'Hybrid', zh: '混血（不限物種）', ja: 'ハイブリッド', keywords: ['mixed species'] },
  { value: 'kemonomimi', en: 'Kemonomimi', zh: '獸耳人（Kemonomimi）', ja: '獣耳（ケモミミ）', keywords: ['animal ears', 'ケモミミ'] },
  { value: 'human', en: 'Human', zh: '人類', ja: '人間' },

  { value: 'other', en: 'Other', zh: '其他', ja: 'その他' },
]

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
