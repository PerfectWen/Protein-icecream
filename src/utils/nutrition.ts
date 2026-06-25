import { ingredientById, type Ingredient } from "@/data/ingredients"

export type Nutrition = {
  kcal: number
  protein: number
  carbs: number
  fat: number
}

export type RecipeLine = {
  ingredientId: string
  amount: number
  sugarGrams?: number
}

export type CustomIngredient = {
  id: string
  emoji: string
  name: { zh: string; en: string }
  unitType: "g" | "ml"
  per100: Nutrition
}

export function round1(n: number) {
  return Math.round(n * 10) / 10
}

export function round0(n: number) {
  return Math.round(n)
}

export function sumNutrition(a: Nutrition, b: Nutrition): Nutrition {
  return {
    kcal: a.kcal + b.kcal,
    protein: a.protein + b.protein,
    carbs: a.carbs + b.carbs,
    fat: a.fat + b.fat,
  }
}

export function calcLineNutrition({
  ingredient,
  amount,
}: {
  ingredient: Pick<Ingredient, "per100"> | Pick<CustomIngredient, "per100">
  amount: number
}): Nutrition {
  const ratio = amount / 100
  return {
    kcal: ingredient.per100.kcal * ratio,
    protein: ingredient.per100.protein * ratio,
    carbs: ingredient.per100.carbs * ratio,
    fat: ingredient.per100.fat * ratio,
  }
}

export function calcTotalNutrition({
  lines,
  customIngredients,
}: {
  lines: RecipeLine[]
  customIngredients: Record<string, CustomIngredient | undefined>
}): Nutrition {
  return lines.reduce<Nutrition>(
    (acc, line) => {
      const custom = customIngredients[line.ingredientId]
      const ingredient = custom ?? ingredientById[line.ingredientId]
      if (!ingredient) return acc
      const lineNutrition = calcLineNutrition({ ingredient, amount: line.amount })
      const sugarGrams = Math.max(0, line.sugarGrams ?? 0)
      const extraSugar: Nutrition = {
        kcal: sugarGrams * 4,
        protein: 0,
        carbs: sugarGrams,
        fat: 0,
      }
      return sumNutrition(acc, sumNutrition(lineNutrition, extraSugar))
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 },
  )
}
