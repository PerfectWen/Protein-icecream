export type RecipeItem = {
  ingredientId: string
  amount: number
}

export type RecipePreset = {
  id: string
  emoji: string
  name: { zh: string; en: string }
  description: { zh: string; en: string }
  items: RecipeItem[]
  steps: { zh: string; en: string }[]
}

export const presets: RecipePreset[] = [
  {
    id: "banana-choco",
    emoji: "🍌🍫",
    name: { zh: "香蕉巧克力", en: "Banana Chocolate" },
    description: { zh: "更像冰淇淋的“可可奶昔感”。", en: "Creamy cocoa shake energy." },
    items: [
      { ingredientId: "banana", amount: 120 },
      { ingredientId: "whey", amount: 30 },
      { ingredientId: "greekYogurt", amount: 120 },
      { ingredientId: "cocoa", amount: 8 },
      { ingredientId: "water", amount: 30 },
    ],
    steps: [
      { zh: "把香蕉切片冷冻 3 小时以上。", en: "Freeze sliced banana for 3+ hours." },
      { zh: "把所有食材倒入搅拌机，先低速再高速。", en: "Blend everything: low speed → high speed." },
      { zh: "太稠加一点水/奶，太稀加一点冷冻水果。", en: "Too thick: add a splash. Too thin: add frozen fruit." },
      { zh: "想更像冰淇淋：装盒冷冻 30–60 分钟再挖球。", en: "For scoopable texture: freeze 30–60 min." },
    ],
  },
  {
    id: "strawberry-cheesecake",
    emoji: "🍓🧁",
    name: { zh: "草莓芝士", en: "Strawberry Cheesecake" },
    description: { zh: "清爽酸甜，口感更“慕斯”。", en: "Bright, tangy, mousse-like." },
    items: [
      { ingredientId: "strawberry", amount: 160 },
      { ingredientId: "whey", amount: 28 },
      { ingredientId: "greekYogurt", amount: 160 },
      { ingredientId: "milk", amount: 60 },
    ],
    steps: [
      { zh: "草莓洗净沥干，切半冷冻。", en: "Freeze strawberries (halved and dried)." },
      { zh: "搅拌时先加酸奶和奶，再加冷冻草莓。", en: "Blend yogurt + milk first, then add frozen berries." },
      { zh: "口感更细腻：中途停机刮壁，再继续搅。", en: "Pause to scrape sides for a smoother blend." },
      { zh: "装杯后撒一点草莓碎或可可点缀。", en: "Finish with berry bits or cocoa dust." },
    ],
  },
  {
    id: "mango-coconut",
    emoji: "🥭🌴",
    name: { zh: "芒果椰子", en: "Mango Coconut" },
    description: { zh: "热带气息，甜度更自然。", en: "Tropical, naturally sweet." },
    items: [
      { ingredientId: "mango", amount: 180 },
      { ingredientId: "plant", amount: 30 },
      { ingredientId: "oatMilk", amount: 90 },
      { ingredientId: "greekYogurt", amount: 90 },
    ],
    steps: [
      { zh: "芒果切块冷冻，越硬越“冰淇淋”。", en: "Freeze mango chunks for true ice-cream texture." },
      { zh: "先搅拌奶与蛋白粉，再加入芒果。", en: "Blend milk + protein first, then add mango." },
      { zh: "想更清爽：把酸奶换成水或更多燕麦奶。", en: "For a lighter bowl: swap yogurt for water/oat milk." },
      { zh: "想更香：加 5–10g 花生酱会很惊喜。", en: "Want more aroma? 5–10g peanut butter works." },
    ],
  },
  {
    id: "blueberry-velvet",
    emoji: "🫐🖤",
    name: { zh: "蓝莓天鹅绒", en: "Blueberry Velvet" },
    description: { zh: "颜色高级，酸甜平衡。", en: "Deep color, balanced sweetness." },
    items: [
      { ingredientId: "blueberry", amount: 160 },
      { ingredientId: "casein", amount: 30 },
      { ingredientId: "greekYogurt", amount: 140 },
      { ingredientId: "milk", amount: 40 },
    ],
    steps: [
      { zh: "蓝莓冷冻，想要更紫可以多放一点。", en: "Freeze blueberries; use more for a deeper purple." },
      { zh: "用酪蛋白更稠、更像挖球口感。", en: "Casein makes it thicker and scoopable." },
      { zh: "搅拌到略带颗粒也很好吃，像果酱质感。", en: "A little texture is great—jammy vibes." },
      { zh: "冷冻 20 分钟后再吃，层次更像冰淇淋。", en: "Freeze 20 min for extra ice-cream bite." },
    ],
  },
  {
    id: "pb-banana",
    emoji: "🥜🍌",
    name: { zh: "花生酱香蕉", en: "PB Banana" },
    description: { zh: "更香更饱腹，适合增肌日。", en: "More satiating—great for a bulking day." },
    items: [
      { ingredientId: "banana", amount: 120 },
      { ingredientId: "whey", amount: 30 },
      { ingredientId: "greekYogurt", amount: 140 },
      { ingredientId: "peanutButter", amount: 10 },
      { ingredientId: "milk", amount: 50 },
    ],
    steps: [
      { zh: "香蕉冷冻，花生酱提前回温更好搅。", en: "Freeze banana; soften PB for easier blending." },
      { zh: "先搅拌酸奶/奶与蛋白粉，再放香蕉。", en: "Blend liquids + protein first, then banana." },
      { zh: "想更低脂：花生酱减半，换可可粉提香。", en: "Lower fat: halve PB, use cocoa for aroma." },
      { zh: "装杯后撒少量可可粉或坚果碎。", en: "Top with a dusting of cocoa or crushed nuts." },
    ],
  },
]

export const presetById = Object.fromEntries(presets.map((p) => [p.id, p])) as Record<string, RecipePreset>

