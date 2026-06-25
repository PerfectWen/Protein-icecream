import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RecipePreset } from "@/data/presets"
import { ingredientById } from "@/data/ingredients"
import { useI18n } from "@/i18n/useI18n"

export default function RecipeCard({
  preset,
  onClick,
}: {
  preset: RecipePreset
  onClick: () => void
}) {
  const { lang } = useI18n()

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/55 p-6 text-left shadow-sm shadow-black/5 backdrop-blur transition",
        "hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-md hover:shadow-black/10",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_180px_at_20%_0%,rgba(255,115,115,0.20),transparent_60%),radial-gradient(300px_200px_at_80%_110%,rgba(124,58,237,0.14),transparent_55%)] opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-700/70">{preset.emoji}</div>
            <div className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-950">
              {preset.name[lang]}
            </div>
            <div className="mt-2 text-sm text-zinc-700/70">{preset.description[lang]}</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-sm shadow-black/5 transition group-hover:rotate-6">
            <ArrowUpRight className="h-5 w-5 text-zinc-900" />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {preset.items.slice(0, 3).map((it) => (
            <span
              key={it.ingredientId}
              className="rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs text-zinc-800/80"
            >
              {ingredientById[it.ingredientId]?.emoji} {ingredientById[it.ingredientId]?.name[lang] ?? it.ingredientId}
            </span>
          ))}
          {preset.items.length > 3 ? (
            <span className="rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs text-zinc-800/70">
              +{preset.items.length - 3}
            </span>
          ) : null}
        </div>
      </div>
    </button>
  )
}

