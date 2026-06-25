import raspberryIcon from "@/assets/raspberry.svg"

export type UnitType = "g" | "ml"

export type Ingredient = {
  id: string
  emoji: string
  iconSrc?: string
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
    id: "greekYogurtUnsweetened",
    emoji: "🍶",
    name: { zh: "希腊酸奶（无糖）", en: "Greek yogurt (unsweetened)" },
    unitType: "g",
    per100: { kcal: 73, protein: 10, carbs: 4, fat: 2 },
  },
  {
    id: "greekYogurtSweetened",
    emoji: "🍯",
    name: { zh: "希腊酸奶（有糖）", en: "Greek yogurt (sweetened)" },
    unitType: "g",
    per100: { kcal: 73, protein: 10, carbs: 4, fat: 2 },
  },
  {
    id: "milkSkim",
    emoji: "🥛",
    name: { zh: "牛奶（脱脂 0%）", en: "Milk (skim 0%)" },
    unitType: "ml",
    per100: { kcal: 34, protein: 3.4, carbs: 5, fat: 0.1 },
  },
  {
    id: "milk1",
    emoji: "🥛",
    name: { zh: "牛奶（低脂 1%）", en: "Milk (1%)" },
    unitType: "ml",
    per100: { kcal: 42, protein: 3.4, carbs: 5, fat: 1 },
  },
  {
    id: "milk2",
    emoji: "🥛",
    name: { zh: "牛奶（低脂 2%）", en: "Milk (2%)" },
    unitType: "ml",
    per100: { kcal: 50, protein: 3.4, carbs: 5, fat: 1.5 },
  },
  {
    id: "milkWhole",
    emoji: "🥛",
    name: { zh: "牛奶（全脂 3.25%）", en: "Milk (whole 3.25%)" },
    unitType: "ml",
    per100: { kcal: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
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
    id: "ice",
    emoji: "🧊",
    name: { zh: "冰块", en: "Ice" },
    unitType: "g",
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
    id: "apple",
    emoji: "🍎",
    name: { zh: "苹果", en: "Apple" },
    unitType: "g",
    per100: { kcal: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
  },
  {
    id: "pear",
    emoji: "🍐",
    name: { zh: "梨", en: "Pear" },
    unitType: "g",
    per100: { kcal: 57, protein: 0.4, carbs: 15.2, fat: 0.1 },
  },
  {
    id: "peach",
    emoji: "🍑",
    name: { zh: "桃子", en: "Peach" },
    unitType: "g",
    per100: { kcal: 39, protein: 0.9, carbs: 9.5, fat: 0.3 },
  },
  {
    id: "pineapple",
    emoji: "🍍",
    name: { zh: "菠萝", en: "Pineapple" },
    unitType: "g",
    per100: { kcal: 50, protein: 0.5, carbs: 13.1, fat: 0.1 },
  },
  {
    id: "kiwi",
    emoji: "🥝",
    name: { zh: "猕猴桃", en: "Kiwi" },
    unitType: "g",
    per100: { kcal: 61, protein: 1.1, carbs: 14.7, fat: 0.5 },
  },
  {
    id: "orange",
    emoji: "🍊",
    name: { zh: "橙子", en: "Orange" },
    unitType: "g",
    per100: { kcal: 47, protein: 0.9, carbs: 11.8, fat: 0.1 },
  },
  {
    id: "grape",
    emoji: "🍇",
    name: { zh: "葡萄", en: "Grape" },
    unitType: "g",
    per100: { kcal: 69, protein: 0.7, carbs: 18.1, fat: 0.2 },
  },
  {
    id: "watermelon",
    emoji: "🍉",
    name: { zh: "西瓜", en: "Watermelon" },
    unitType: "g",
    per100: { kcal: 30, protein: 0.6, carbs: 7.6, fat: 0.2 },
  },
  {
    id: "cherry",
    emoji: "🍒",
    name: { zh: "樱桃", en: "Cherry" },
    unitType: "g",
    per100: { kcal: 63, protein: 1.1, carbs: 16, fat: 0.2 },
  },
  {
    id: "strawberry",
    emoji: "🍓",
    name: { zh: "草莓", en: "Strawberry" },
    unitType: "g",
    per100: { kcal: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  },
  {
    id: "raspberry",
    emoji: "🩷",
    iconSrc: raspberryIcon,
    name: { zh: "覆盆子", en: "Raspberry" },
    unitType: "g",
    per100: { kcal: 52, protein: 1.2, carbs: 11.9, fat: 0.7 },
  },
  {
    id: "blackberry",
    emoji: "🫐",
    name: { zh: "黑莓", en: "Blackberry" },
    unitType: "g",
    per100: { kcal: 43, protein: 1.4, carbs: 9.6, fat: 0.5 },
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
