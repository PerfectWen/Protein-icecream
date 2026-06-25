import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, Heart, Ruler, Wand2 } from "lucide-react"
import IngredientMark from "@/components/IngredientMark"
import { ingredientById } from "@/data/ingredients"
import { useI18n } from "@/i18n/useI18n"
import { useRecipeStore } from "@/store/useRecipeStore"

export default function Home() {
  const { t, lang } = useI18n()
  const navigate = useNavigate()
  const addLine = useRecipeStore((s) => s.addLine)

  const fruits = useMemo(() => {
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
    return fruitIds.map((id) => ingredientById[id]).filter(Boolean)
  }, [])

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-zinc-800/80 shadow-sm shadow-black/5 backdrop-blur">
            <span>🍨</span>
            <span>{t("siteTagline")}</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-800/75 sm:text-lg">
            {t("heroSubtitle")}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/calculator")}
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white shadow-md shadow-black/15 transition hover:-translate-y-0.5 hover:bg-zinc-900"
            >
              <span>{t("ctaStart")}</span>
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <div className="text-xs text-zinc-700/60">🍓🫐🥭 {t("disclaimer")}</div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="candy-frame relative overflow-hidden rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_260px_at_10%_10%,rgba(255,199,92,0.25),transparent_60%),radial-gradient(320px_240px_at_90%_80%,rgba(255,115,115,0.22),transparent_55%)]" />
            <div className="relative">
              <div className="text-sm font-medium text-zinc-800/75">{t("vibeLabel")}</div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950">{t("vibeQuote")}</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">🍨</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{t("vibeTexture")}</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">💪</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{t("vibeProtein")}</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">📏</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">{t("vibeGrams")}</div>
                </div>
              </div>
              <div className="mt-5 text-sm text-zinc-700/70">{t("vibeHint")}</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">
              {t("ingredients")}
            </div>
            <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950">
              {t("quickFruits")} · {lang === "zh" ? "不限口味，主打自由搭配" : "No presets, just free mix"}
            </div>
          </div>
        </div>
        <div className="candy-frame mt-6 rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {fruits.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  addLine(f.id)
                  navigate("/calculator")
                }}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition hover:bg-white"
              >
                <IngredientMark emoji={f.emoji} iconSrc={f.iconSrc} name={f.name[lang]} /> {f.name[lang]}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-zinc-700/70">
            {lang === "zh"
              ? "点任意水果直接带入计算器；再加蛋白粉/酸奶/冰块，输入克重即可估算大卡。"
              : "Tap a fruit to jump into the calculator. Add protein/yogurt/ice and input grams for an estimate."}
          </div>
        </div>
      </section>

      <section>
        <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{t("sectionWhy")}</div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[28px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-sm shadow-black/5">
                <Heart className="h-5 w-5 text-zinc-900" />
              </div>
              <div className="font-display text-xl font-semibold tracking-tight text-zinc-950">{t("why1Title")}</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-zinc-700/70">{t("why1Body")}</div>
          </div>
          <div className="rounded-[28px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-sm shadow-black/5">
                <Ruler className="h-5 w-5 text-zinc-900" />
              </div>
              <div className="font-display text-xl font-semibold tracking-tight text-zinc-950">{t("why2Title")}</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-zinc-700/70">{t("why2Body")}</div>
          </div>
          <div className="rounded-[28px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-sm shadow-black/5">
                <Wand2 className="h-5 w-5 text-zinc-900" />
              </div>
              <div className="font-display text-xl font-semibold tracking-tight text-zinc-950">{t("why3Title")}</div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-zinc-700/70">{t("why3Body")}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
