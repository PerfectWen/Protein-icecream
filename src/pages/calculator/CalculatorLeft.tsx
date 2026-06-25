import { useMemo, useState } from "react"
import { Copy, Plus, RotateCcw, Trash2 } from "lucide-react"
import Segmented from "@/components/Segmented"
import IngredientMark from "@/components/IngredientMark"
import { ingredientById, ingredients } from "@/data/ingredients"
import { useI18n } from "@/i18n/useI18n"
import { buildSummary, unitLabel } from "@/pages/calculator/helpers"
import type { ViewMode } from "@/store/useRecipeStore"
import type { CustomIngredient } from "@/utils/nutrition"
import CustomIngredientEditor from "@/pages/calculator/CustomIngredientEditor"

export default function CalculatorLeft({
  servings,
  viewMode,
  lines,
  customIngredients,
  setServings,
  setViewMode,
  setLineAmount,
  setLineSugarGrams,
  addLine,
  removeLine,
  upsertCustomIngredient,
  removeCustomIngredient,
  clearLines,
  perServingForCopy,
}: {
  servings: number
  viewMode: ViewMode
  lines: { ingredientId: string; amount: number; sugarGrams?: number }[]
  customIngredients: Record<string, CustomIngredient>
  setServings: (servings: number) => void
  setViewMode: (viewMode: ViewMode) => void
  setLineAmount: (ingredientId: string, amount: number) => void
  setLineSugarGrams: (ingredientId: string, sugarGrams: number) => void
  addLine: (ingredientId: string) => void
  removeLine: (ingredientId: string) => void
  upsertCustomIngredient: (ing: CustomIngredient) => void
  removeCustomIngredient: (id: string) => void
  clearLines: () => void
  perServingForCopy: { kcal: number; protein: number; carbs: number; fat: number }
}) {
  const { lang, t } = useI18n()

  const [addId, setAddId] = useState<string>(() => {
    const first = ingredients.find((i) => !lines.some((l) => l.ingredientId === i.id))?.id
    return first ?? "banana"
  })

  const availableToAdd = useMemo(() => {
    return ingredients.filter((i) => !lines.some((l) => l.ingredientId === i.id))
  }, [lines])

  const [customDraft, setCustomDraft] = useState<CustomIngredient>(() => ({
    id: `custom-${Date.now()}`,
    emoji: "✨",
    name: { zh: "自定义食材", en: "Custom ingredient" },
    unitType: "g",
    per100: { kcal: 100, protein: 0, carbs: 0, fat: 0 },
  }))
  const [customOpen, setCustomOpen] = useState(false)

  const quickGroups = useMemo(() => {
    const proteinIds = ["whey", "plant", "casein"]
    const fruitIds = [
      "banana",
      "apple",
      "pear",
      "peach",
      "pineapple",
      "kiwi",
      "orange",
      "grape",
      "watermelon",
      "cherry",
      "strawberry",
      "raspberry",
      "blackberry",
      "blueberry",
      "mango",
    ]
    const yogurtIds = ["greekYogurtUnsweetened", "greekYogurtSweetened"]
    const milkIds = ["milkSkim", "milk1", "milk2", "milkWhole", "oatMilk", "water"]
    const iceIds = ["ice"]

    const mapIds = (ids: string[]) =>
      ids
        .map((id) => ingredientById[id])
        .filter(Boolean)
        .map((ing) => ({
          id: ing.id,
          emoji: ing.emoji,
          iconSrc: ing.iconSrc,
          name: ing.name[lang],
        }))

    return [
      { title: t("quickProtein"), items: mapIds(proteinIds) },
      { title: t("quickFruits"), items: mapIds(fruitIds) },
      { title: t("quickYogurt"), items: mapIds(yogurtIds) },
      { title: t("quickMilk"), items: mapIds(milkIds) },
      { title: t("quickIce"), items: mapIds(iceIds) },
    ]
  }, [lang, t])

  return (
    <section className="lg:col-span-5">
      <div className="rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("calcTitle")}</div>
            <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950">
              {lang === "zh" ? "自由搭配" : "Free Mix"}
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("servings")}</div>
            <input
              type="number"
              min={1}
              max={4}
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
              className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
            />
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("view")}</div>
            <Segmented<ViewMode>
              value={viewMode}
              onChange={setViewMode}
              options={[
                { value: "perServing", label: t("viewPerServing") },
                { value: "total", label: t("viewTotal") },
              ]}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("ingredients")}</div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={clearLines}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
            >
              <RotateCcw className="h-4 w-4" />
              {t("clear")}
            </button>
            <button
              type="button"
              onClick={() => {
                const summary = buildSummary({
                  lang,
                  presetName: lang === "zh" ? "自由搭配" : "Free Mix",
                  servings,
                  kcal: perServingForCopy.kcal,
                  p: perServingForCopy.protein,
                  c: perServingForCopy.carbs,
                  f: perServingForCopy.fat,
                  lines,
                  customIngredients,
                })
                navigator.clipboard.writeText(summary)
              }}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white shadow-md shadow-black/15 transition hover:bg-zinc-900"
            >
              <Copy className="h-4 w-4" />
              {t("copySummary")}
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-black/10 bg-white/55 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("quickAdd")}</div>
          <div className="mt-3 space-y-3">
            {quickGroups.map((g) => (
              <div key={g.title}>
                <div className="text-xs font-medium text-zinc-800/75">{g.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <button
                      key={it.id}
                      type="button"
                      onClick={() => addLine(it.id)}
                      className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
                    >
                      <IngredientMark emoji={it.emoji} iconSrc={it.iconSrc} name={it.name} /> {it.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {lines.map((l) => {
            const custom = customIngredients[l.ingredientId]
            const ing = custom ?? ingredientById[l.ingredientId]
            if (!ing) return null
            const name = custom ? custom.name[lang] : ing.name[lang]
            const emoji = custom ? custom.emoji : ing.emoji
            const iconSrc: string | undefined = custom ? undefined : ingredientById[l.ingredientId]?.iconSrc
            const unit = custom ? custom.unitType : ing.unitType
            const isSweetenedGreekYogurt = l.ingredientId === "greekYogurtSweetened"
            return (
              <div
                key={l.ingredientId}
                className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-zinc-900">
                      <IngredientMark emoji={emoji} iconSrc={iconSrc} name={name} /> {name}
                    </div>
                    <div className="mt-1 text-xs text-zinc-700/60">{unitLabel(lang, unit)}</div>
                    {isSweetenedGreekYogurt ? (
                      <div className="mt-1 text-xs text-zinc-700/60">{t("sweetenedYogurtHint")}</div>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeLine(l.ingredientId)
                      if (custom) removeCustomIngredient(l.ingredientId)
                    }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-zinc-900 transition hover:bg-white"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className={`mt-3 grid gap-2 ${isSweetenedGreekYogurt ? "sm:grid-cols-2" : "sm:grid-cols-1"}`}>
                  <label className="block">
                    <div className="mb-1 text-xs font-medium text-zinc-700/70">{unitLabel(lang, unit)}</div>
                    <input
                      type="number"
                      value={l.amount}
                      onChange={(e) => setLineAmount(l.ingredientId, Number(e.target.value))}
                      className="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm text-zinc-900 outline-none"
                    />
                  </label>
                  {isSweetenedGreekYogurt ? (
                    <label className="block">
                      <div className="mb-1 text-xs font-medium text-zinc-700/70">{t("sugarGrams")}</div>
                      <input
                        type="number"
                        min={0}
                        value={l.sugarGrams ?? 0}
                        onChange={(e) => setLineSugarGrams(l.ingredientId, Number(e.target.value))}
                        className="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2 text-sm text-zinc-900 outline-none"
                      />
                    </label>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-5 grid gap-3">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <select
              value={addId}
              onChange={(e) => setAddId(e.target.value)}
              className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm text-zinc-900 shadow-sm shadow-black/5 outline-none transition focus:bg-white"
            >
              {availableToAdd.length === 0 ? (
                <option value="">(No more)</option>
              ) : (
                availableToAdd.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.emoji} {i.name[lang]}
                  </option>
                ))
              )}
            </select>
            <button
              type="button"
              onClick={() => {
                if (!addId) return
                addLine(addId)
              }}
              className="inline-flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
            >
              <Plus className="h-4 w-4" />
              {t("addIngredient")}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setCustomDraft({
                id: `custom-${Date.now()}`,
                emoji: "✨",
                name: { zh: "自定义食材", en: "Custom ingredient" },
                unitType: "g",
                per100: { kcal: 100, protein: 0, carbs: 0, fat: 0 },
              })
              setCustomOpen(true)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
          >
            <Plus className="h-4 w-4" />
            {t("addCustomIngredient")}
          </button>
        </div>
      </div>

      {customOpen ? (
        <CustomIngredientEditor
          draft={customDraft}
          setDraft={setCustomDraft}
          onCancel={() => setCustomOpen(false)}
          onAdd={() => {
            upsertCustomIngredient(customDraft)
            addLine(customDraft.id)
            setCustomOpen(false)
          }}
        />
      ) : null}
    </section>
  )
}
