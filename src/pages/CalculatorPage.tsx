import { useMemo } from "react"
import { useI18n } from "@/i18n/useI18n"
import { useRecipeStore } from "@/store/useRecipeStore"
import CalculatorLeft from "@/pages/calculator/CalculatorLeft"
import CalculatorRight from "@/pages/calculator/CalculatorRight"
import { calcTotalNutrition } from "@/utils/nutrition"

export default function CalculatorPage() {
  useI18n()
  const store = useRecipeStore()

  const totals = useMemo(() => {
    return calcTotalNutrition({ lines: store.lines, customIngredients: store.customIngredients })
  }, [store.lines, store.customIngredients])

  const perServing = useMemo(() => {
    const s = Math.max(1, store.servings)
    return {
      kcal: totals.kcal / s,
      protein: totals.protein / s,
      carbs: totals.carbs / s,
      fat: totals.fat / s,
    }
  }, [totals, store.servings])

  const shown = store.viewMode === "total" ? totals : perServing

  const tweaks = useMemo(() => {
    const p = perServing.protein
    const kcal = perServing.kcal
    const c = perServing.carbs
    const f = perServing.fat

    const list: { zh: string; en: string }[] = []
    if (p < 25) {
      list.push({
        zh: "想更高蛋白：把蛋白粉 +10g，或把酸奶换成更高蛋白的希腊酸奶。",
        en: "Higher protein: add +10g protein powder or use higher-protein Greek yogurt.",
      })
    }
    if (kcal > 350) {
      list.push({
        zh: "想更轻盈：减少花生酱/蜂蜜等加料，或把奶换成水。",
        en: "Lighter bowl: reduce add-ons (PB/honey) or swap milk for water.",
      })
    }
    if (c > 35) {
      list.push({
        zh: "想更控糖：把部分香蕉/芒果换成莓类；甜味不足再少量加蜂蜜。",
        en: "Lower carbs: swap part of banana/mango to berries; sweeten with a small honey touch if needed.",
      })
    }
    if (f < 6) {
      list.push({
        zh: "想更香更“冰淇淋”：加 5–10g 花生酱或少量可可粉。",
        en: "Richer ice-cream vibe: add 5–10g PB or a bit of cocoa.",
      })
    }
    return list.slice(0, 4)
  }, [perServing])

  const steps = useMemo(
    () => [
      { zh: "水果切块冷冻到硬（至少 3 小时）。", en: "Freeze fruit chunks until solid (3+ hours)." },
      { zh: "加入酸奶、蛋白粉与少量液体（或冰块）。", en: "Add yogurt, protein powder, and a bit of liquid (or ice)." },
      { zh: "先低速再高速搅拌；中途停机刮壁更细腻。", en: "Blend low → high; pause to scrape for a smoother texture." },
      { zh: "太稠就加一点水/奶；太稀就加更多冷冻水果/冰。", en: "Too thick: add a splash. Too thin: add more frozen fruit/ice." },
      { zh: "想更像冰淇淋：装盒冷冻 30–60 分钟再挖球。", en: "For scoopable texture: freeze 30–60 minutes after blending." },
    ],
    [],
  )

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <CalculatorLeft
        servings={store.servings}
        viewMode={store.viewMode}
        lines={store.lines}
        customIngredients={store.customIngredients}
        setServings={store.setServings}
        setViewMode={store.setViewMode}
        setLineAmount={store.setLineAmount}
        setLineSugarGrams={store.setLineSugarGrams}
        addLine={store.addLine}
        removeLine={store.removeLine}
        upsertCustomIngredient={store.upsertCustomIngredient}
        removeCustomIngredient={store.removeCustomIngredient}
        clearLines={store.clearLines}
        perServingForCopy={perServing}
      />

      <CalculatorRight shown={shown} steps={steps} tweaks={tweaks} />
    </div>
  )
}
