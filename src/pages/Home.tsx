import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronRight, Heart, Ruler, Wand2 } from "lucide-react"
import RecipeCard from "@/components/RecipeCard"
import { presets } from "@/data/presets"
import { useI18n } from "@/i18n/useI18n"
import { useRecipeStore } from "@/store/useRecipeStore"

export default function Home() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const selectPreset = useRecipeStore((s) => s.selectPreset)

  const cards = useMemo(() => presets.slice(0, 5), [])

  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-zinc-800/80 shadow-sm shadow-black/5 backdrop-blur">
            <span>🍨</span>
            <span>kcal + P/C/F</span>
            <span className="text-zinc-400">·</span>
            <span>preset + custom</span>
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
            <div className="text-xs text-zinc-700/60">
              🍓🫐🥭 {t("disclaimer")}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[34px] border border-black/5 bg-white/55 p-6 shadow-sm shadow-black/5 backdrop-blur">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_260px_at_10%_10%,rgba(255,199,92,0.25),transparent_60%),radial-gradient(320px_240px_at_90%_80%,rgba(255,115,115,0.22),transparent_55%)]" />
            <div className="relative">
              <div className="text-sm font-medium text-zinc-800/75">Today’s vibe</div>
              <div className="mt-3 font-display text-3xl font-semibold tracking-tight text-zinc-950">
                “Cold + creamy + calculated”
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">🍨</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">Texture</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">💪</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">Protein</div>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/60 p-4">
                  <div className="text-xs text-zinc-700/70">📏</div>
                  <div className="mt-2 text-sm font-medium text-zinc-900">Grams</div>
                </div>
              </div>
              <div className="mt-5 text-sm text-zinc-700/70">
                Pick a preset, then tweak grams until it matches your day.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">
              {t("sectionPresets")}
            </div>
            <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-zinc-950">
              3–6 flavors, one click away
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((p) => (
            <RecipeCard
              key={p.id}
              preset={p}
              onClick={() => {
                selectPreset(p.id)
                navigate("/calculator")
              }}
            />
          ))}
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
