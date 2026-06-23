import MetricCard from "@/components/MetricCard"
import MacroBars from "@/components/MacroBars"
import { useI18n } from "@/i18n/useI18n"
import { formatNum } from "@/pages/calculator/helpers"
import { round0, round1 } from "@/utils/nutrition"

export default function CalculatorRight({
  shown,
  steps,
  tweaks,
}: {
  shown: { kcal: number; protein: number; carbs: number; fat: number }
  steps: { zh: string; en: string }[]
  tweaks: { zh: string; en: string }[]
}) {
  const { lang, t } = useI18n()

  return (
    <section className="lg:col-span-7 space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <MetricCard label={t("kcal")} value={formatNum(lang, round0(shown.kcal), 0)} unit="kcal" accent="rose" />
        <MetricCard
          label={t("protein")}
          value={formatNum(lang, round1(shown.protein), 1)}
          unit={lang === "zh" ? "g / 克" : "g"}
          accent="mint"
        />
        <MetricCard
          label={t("carbs")}
          value={formatNum(lang, round1(shown.carbs), 1)}
          unit={lang === "zh" ? "g / 克" : "g"}
          accent="amber"
        />
        <MetricCard
          label={t("fat")}
          value={formatNum(lang, round1(shown.fat), 1)}
          unit={lang === "zh" ? "g / 克" : "g"}
          accent="violet"
        />
      </div>

      <MacroBars protein={shown.protein} carbs={shown.carbs} fat={shown.fat} />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("steps")}</div>
          <div className="mt-4 space-y-3">
            {steps.map((s, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/70 text-xs font-semibold text-zinc-900 shadow-sm shadow-black/5">
                  {idx + 1}
                </div>
                <div className="text-sm leading-relaxed text-zinc-800/75">{s[lang]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
          <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("tweaks")}</div>
          <div className="mt-4 space-y-3">
            {tweaks.map((x, idx) => (
              <div key={idx} className="rounded-2xl border border-black/5 bg-white/60 px-4 py-3 text-sm text-zinc-800/75">
                {x[lang]}
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-zinc-700/60">{t("disclaimer")}</div>
        </div>
      </div>
    </section>
  )
}

