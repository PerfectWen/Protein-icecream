import { describe, expect, it } from "vitest"
import { calcTotalNutrition } from "@/utils/nutrition"

describe("nutrition", () => {
  it("calculates totals by scaling per-100 values", () => {
    const res = calcTotalNutrition({
      lines: [
        { ingredientId: "banana", amount: 100 },
        { ingredientId: "whey", amount: 50 },
      ],
      customIngredients: {},
    })

    expect(Math.round(res.kcal)).toBe(89 + 200)
    expect(Math.round(res.protein * 10) / 10).toBe(1.1 + 39)
  })

  it("custom ingredients override built-in ingredients", () => {
    const res = calcTotalNutrition({
      lines: [{ ingredientId: "banana", amount: 100 }],
      customIngredients: {
        banana: {
          id: "banana",
          emoji: "🍌",
          name: { zh: "香蕉（自定义）", en: "Banana (custom)" },
          unitType: "g",
          per100: { kcal: 100, protein: 2, carbs: 20, fat: 1 },
        },
      },
    })

    expect(Math.round(res.kcal)).toBe(100)
    expect(res.protein).toBe(2)
  })

  it("adds sugar grams for sweetened greek yogurt", () => {
    const res = calcTotalNutrition({
      lines: [{ ingredientId: "greekYogurtSweetened", amount: 100, sugarGrams: 12 }],
      customIngredients: {},
    })

    expect(Math.round(res.kcal)).toBe(73 + 48)
    expect(Math.round(res.carbs * 10) / 10).toBe(16)
    expect(res.protein).toBe(10)
  })
})
