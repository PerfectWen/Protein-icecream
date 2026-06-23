import { useMemo } from "react"
import { presetById, presets } from "@/data/presets"
import { useI18n } from "@/i18n/useI18n"
import { useRecipeStore } from "@/store/useRecipeStore"
import CalculatorLeft from "@/pages/calculator/CalculatorLeft"
import CalculatorRight from "@/pages/calculator/CalculatorRight"
import { calcTotalNutrition } from "@/utils/nutrition"

export default function CalculatorPage() {
  const { lang } = useI18n()
  const store = useRecipeStore()

  const preset = presetById[store.selectedPresetId] ?? presets[0]
  const presetName = preset?.name[lang] ?? (lang === "zh" ? "配方" : "Recipe")

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

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <CalculatorLeft
        mode={store.mode}
        selectedPresetId={store.selectedPresetId}
        presetName={presetName}
        servings={store.servings}
        viewMode={store.viewMode}
        lines={store.lines}
        customIngredients={store.customIngredients}
        setMode={store.setMode}
        selectPreset={store.selectPreset}
        setServings={store.setServings}
        setViewMode={store.setViewMode}
        setLineAmount={store.setLineAmount}
        addLine={store.addLine}
        removeLine={store.removeLine}
        upsertCustomIngredient={store.upsertCustomIngredient}
        removeCustomIngredient={store.removeCustomIngredient}
        resetToPreset={store.resetToPreset}
        perServingForCopy={perServing}
      />

      <CalculatorRight shown={shown} steps={preset.steps} tweaks={tweaks} />
    </div>
  )
}

