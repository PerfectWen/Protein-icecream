import { Plus } from "lucide-react"
import type { UnitType } from "@/data/ingredients"
import { useI18n } from "@/i18n/useI18n"
import type { CustomIngredient } from "@/utils/nutrition"

export default function CustomIngredientEditor({
  draft,
  setDraft,
  onCancel,
  onAdd,
}: {
  draft: CustomIngredient
  setDraft: (next: CustomIngredient) => void
  onCancel: () => void
  onAdd: () => void
}) {
  const { lang, t } = useI18n()

  return (
    <div className="mt-4 rounded-[28px] border border-black/5 bg-white/65 p-6 shadow-sm shadow-black/5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("addCustomIngredient")}</div>
          <div className="mt-2 text-sm text-zinc-700/70">
            {lang === "zh"
              ? "建议按包装营养标示填写（每 100g 或每 100ml）。"
              : "Fill with label values (per 100g or per 100ml)."}
          </div>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
        >
          {t("close")}
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">Emoji</div>
          <input
            value={draft.emoji}
            onChange={(e) => setDraft({ ...draft, emoji: e.target.value })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">
            {lang === "zh" ? "名称（中英可共用）" : "Name (used for both)"}
          </div>
          <input
            value={draft.name[lang]}
            onChange={(e) => setDraft({ ...draft, name: { zh: e.target.value, en: e.target.value } })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">Unit</div>
          <select
            value={draft.unitType}
            onChange={(e) => setDraft({ ...draft, unitType: e.target.value as UnitType })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          >
            <option value="g">g</option>
            <option value="ml">ml</option>
          </select>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">kcal / 100</div>
          <input
            type="number"
            value={draft.per100.kcal}
            onChange={(e) => setDraft({ ...draft, per100: { ...draft.per100, kcal: Number(e.target.value) } })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">P / 100</div>
          <input
            type="number"
            value={draft.per100.protein}
            onChange={(e) =>
              setDraft({ ...draft, per100: { ...draft.per100, protein: Number(e.target.value) } })
            }
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">C / 100</div>
          <input
            type="number"
            value={draft.per100.carbs}
            onChange={(e) => setDraft({ ...draft, per100: { ...draft.per100, carbs: Number(e.target.value) } })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">F / 100</div>
          <input
            type="number"
            value={draft.per100.fat}
            onChange={(e) => setDraft({ ...draft, per100: { ...draft.per100, fat: Number(e.target.value) } })}
            className="mt-3 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
        >
          {t("cancel")}
        </button>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-md shadow-black/15 transition hover:bg-zinc-900"
        >
          <Plus className="h-4 w-4" />
          {t("add")}
        </button>
      </div>
    </div>
  )
}

