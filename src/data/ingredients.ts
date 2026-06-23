export type UnitType = "g" | "ml"

export type Ingredient = {
  id: string
  emoji: string
  name: {
    zh: string
    en: string
  }
  unitType: UnitType
  per100: {
    kcal: number
    protein: number
    carbs: number
    fat: number
  }
}

export const ingredients: Ingredient[] = [
  {
    id: "whey",
    emoji: "💪",
    name: { zh: "乳清蛋白粉（通用）", en: "Whey protein (generic)" },
    unitType: "g",
    per100: { kcal: 400, protein: 78, carbs: 8, fat: 6 },
  },
  {
    id: "plant",
    emoji: "🌱",
    name: { zh: "植物蛋白粉（通用）", en: "Plant protein (generic)" },
    unitType: "g",
    per100: { kcal: 390, protein: 72, carbs: 12, fat: 7 },
  },
  {
    id: "casein",
    emoji: "🥛",
    name: { zh: "酪蛋白粉（通用）", en: "Casein protein (generic)" },
    unitType: "g",
    per100: { kcal: 380, protein: 76, carbs: 8, fat: 4 },
  },
  {
    id: "greekYogurt",
    emoji: "🍶",
    name: { zh: "希腊酸奶（低脂）", en: "Greek yogurt (low-fat)" },
    unitType: "g",
    per100: { kcal: 73, protein: 10, carbs: 4, fat: 2 },
  },
  {
    id: "milk",
    emoji: "🥛",
    name: { zh: "牛奶（低脂）", en: "Milk (low-fat)" },
    unitType: "ml",
    per100: { kcal: 50, protein: 3.4, carbs: 5, fat: 1.5 },
  },
  {
    id: "oatMilk",
    emoji: "🌾",
    name: { zh: "燕麦奶", en: "Oat milk" },
    unitType: "ml",
    per100: { kcal: 45, protein: 1.2, carbs: 7, fat: 1.5 },
  },
  {
    id: "water",
    emoji: "💧",
    name: { zh: "水", en: "Water" },
    unitType: "ml",
    per100: { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  },
  {
    id: "banana",
    emoji: "🍌",
    name: { zh: "香蕉", en: "Banana" },
    unitType: "g",
    per100: { kcal: 89, protein: 1.1, carbs: 22.8, fat: 0.3 },
  },
  {
    id: "strawberry",
    emoji: "🍓",
    name: { zh: "草莓", en: "Strawberry" },
    unitType: "g",
    per100: { kcal: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  },
  {
    id: "blueberry",
    emoji: "🫐",
    name: { zh: "蓝莓", en: "Blueberry" },
    unitType: "g",
    per100: { kcal: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
  },
  {
    id: "mango",
    emoji: "🥭",
    name: { zh: "芒果", en: "Mango" },
    unitType: "g",
    per100: { kcal: 60, protein: 0.8, carbs: 15, fat: 0.4 },
  },
  {
    id: "cocoa",
    emoji: "🍫",
    name: { zh: "可可粉", en: "Cocoa powder" },
    unitType: "g",
    per100: { kcal: 228, protein: 19.6, carbs: 57.9, fat: 13.7 },
  },
  {
    id: "peanutButter",
    emoji: "🥜",
    name: { zh: "花生酱", en: "Peanut butter" },
    unitType: "g",
    per100: { kcal: 588, protein: 25, carbs: 20, fat: 50 },
  },
  {
    id: "honey",
    emoji: "🍯",
    name: { zh: "蜂蜜", en: "Honey" },
    unitType: "g",
    per100: { kcal: 304, protein: 0.3, carbs: 82.4, fat: 0 },
  },
]

export const ingredientById = Object.fromEntries(ingredients.map((i) => [i.id, i])) as Record<
  string,
  Ingredient
>

