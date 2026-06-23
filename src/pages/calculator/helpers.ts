import { ingredientById, type UnitType } from "@/data/ingredients"
import type { CustomIngredient } from "@/utils/nutrition"

export function formatNum(lang: "zh" | "en", n: number, digits: number) {
  return new Intl.NumberFormat(lang === "zh" ? "zh-CN" : "en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0,
  }).format(n)
}

export function unitLabel(lang: "zh" | "en", unit: UnitType) {
  if (unit === "ml") return lang === "zh" ? "ml / 毫升" : "ml"
  return lang === "zh" ? "g / 克" : "g"
}

export function buildSummary({
  lang,
  presetName,
  servings,
  kcal,
  p,
  c,
  f,
  lines,
  customIngredients,
}: {
  lang: "zh" | "en"
  presetName: string
  servings: number
  kcal: number
  p: number
  c: number
  f: number
  lines: { ingredientId: string; amount: number }[]
  customIngredients: Record<string, CustomIngredient>
}) {
  const header =
    lang === "zh"
      ? `🍨💪 ${presetName}｜${servings} 份｜每份 ${Math.round(kcal)} kcal｜P ${Math.round(p * 10) / 10}g / C ${Math.round(c * 10) / 10}g / F ${Math.round(f * 10) / 10}g`
      : `🍨💪 ${presetName} | ${servings} servings | ${Math.round(kcal)} kcal/serving | P ${Math.round(p * 10) / 10}g / C ${Math.round(c * 10) / 10}g / F ${Math.round(f * 10) / 10}g`

  const list = lines
    .map((l) => {
      const custom = customIngredients[l.ingredientId]
      const ing = custom ?? ingredientById[l.ingredientId]
      if (!ing) return null
      const name = custom ? custom.name[lang] : ing.name[lang]
      const emoji = custom ? custom.emoji : ing.emoji
      const unit = custom ? custom.unitType : ing.unitType
      return `${emoji} ${name} ${formatNum(lang, l.amount, 1)}${unit}`
    })
    .filter(Boolean)
    .join(lang === "zh" ? "；" : "; ")

  return `${header}\n${list}`
}

