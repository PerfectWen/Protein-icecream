import { useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/useI18n"

type Faq = { q: { zh: string; en: string }; a: { zh: string; en: string } }

export default function Nutrition() {
  const { lang, t } = useI18n()
  const [open, setOpen] = useState<number | null>(0)

  const faqs = useMemo<Faq[]>(
    () => [
      {
        q: { zh: "这些卡路里准确吗？", en: "Are these calories accurate?" },
        a: {
          zh: "这里的结果是估算值：按食材的“每 100g/100ml”营养标示线性换算并相加。不同品牌/成熟度/称量误差都会让结果有偏差。",
          en: "They’re estimates: we scale per-100g/ml label values linearly and sum them. Brands, ripeness, and weighing errors can shift the result.",
        },
      },
      {
        q: { zh: "为什么和健身 App 的结果不一样？", en: "Why does it differ from fitness apps?" },
        a: {
          zh: "数据源不同（数据库 vs 你手里的包装标签），以及食材可食部分/默认份量的差异。建议以你常用品牌的包装标签为准。",
          en: "Different data sources (databases vs your label) and different default portions. For consistency, prefer your brand’s nutrition label.",
        },
      },
      {
        q: { zh: "怎么做更像冰淇淋？", en: "How to make it more scoopable?" },
        a: {
          zh: "关键是“足够冷”和“足够稠”：多用冷冻水果、少量液体分次加；搅完后再冷冻 30–60 分钟。",
          en: "The trick is cold + thick: use more frozen fruit, add liquid gradually, then freeze 30–60 minutes after blending.",
        },
      },
      {
        q: { zh: "想更高蛋白怎么调？", en: "How to boost protein?" },
        a: {
          zh: "优先加蛋白粉（+10g）或增加希腊酸奶；若想更稠可用酪蛋白。",
          en: "Add +10g protein powder or more Greek yogurt; for extra thickness, try casein.",
        },
      },
      {
        q: { zh: "控糖/减脂怎么选水果？", en: "Fruit choices for lower carbs?" },
        a: {
          zh: "用莓类替换部分香蕉/芒果，甜味不足再少量补蜂蜜或代糖；同时用更多冰块/水稀释甜度。",
          en: "Swap some banana/mango for berries. If you need sweetness, add a small honey touch or sweetener, and dilute with more ice/water.",
        },
      },
      {
        q: { zh: "免责声明", en: "Disclaimer" },
        a: {
          zh: "本网站不提供医疗或营养诊断建议；特殊人群（孕期、慢病、过敏、儿童等）请咨询专业人士。",
          en: "This is not medical or dietary advice. If you’re pregnant, have conditions/allergies, or for children, consult a professional.",
        },
      },
    ],
    [],
  )

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-[34px] border border-black/5 bg-white/55 p-8 shadow-sm shadow-black/5 backdrop-blur">
        <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("navNutrition")}</div>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-zinc-950">{t("nutritionTitle")}</h1>
        <div className="mt-4 text-sm leading-relaxed text-zinc-800/75">{t("disclaimer")}</div>
      </div>

      <div className="mt-6 space-y-3">
        {faqs.map((f, idx) => {
          const isOpen = open === idx
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full rounded-[28px] border border-black/5 bg-white/55 px-6 py-5 text-left shadow-sm shadow-black/5 backdrop-blur transition hover:bg-white/65"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-medium text-zinc-950">{f.q[lang]}</div>
                <ChevronDown className={cn("mt-0.5 h-5 w-5 text-zinc-900 transition", isOpen ? "rotate-180" : "")} />
              </div>
              {isOpen ? (
                <div className="mt-3 text-sm leading-relaxed text-zinc-800/75">{f.a[lang]}</div>
              ) : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}

