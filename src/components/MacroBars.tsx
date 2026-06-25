import { cn } from "@/lib/utils"

export default function MacroBars({
  protein,
  carbs,
  fat,
}: {
  protein: number
  carbs: number
  fat: number
}) {
  const total = Math.max(0.0001, protein + carbs + fat)

  const items = [
    { key: "P", label: "Protein", value: protein, color: "bg-emerald-500/80", glow: "shadow-emerald-500/15" },
    { key: "C", label: "Carbs", value: carbs, color: "bg-amber-500/85", glow: "shadow-amber-500/15" },
    { key: "F", label: "Fat", value: fat, color: "bg-violet-500/80", glow: "shadow-violet-500/15" },
  ] as const

  return (
    <div className="rounded-3xl border border-black/5 bg-white/55 p-5 shadow-sm shadow-black/5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">Macros</div>
        <div className="text-xs text-zinc-700/60">g</div>
      </div>

      <div className="mt-4 space-y-3">
        {items.map((it) => {
          const pct = Math.min(100, Math.max(0, (it.value / total) * 100))
          return (
            <div key={it.key}>
              <div className="flex items-center justify-between text-xs text-zinc-700/70">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{it.label}</span>
                  <span className="text-zinc-700/55">({it.key})</span>
                </div>
                <div className="font-medium text-zinc-900">{Math.round(it.value * 10) / 10}</div>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/5">
                <div className={cn("h-full rounded-full shadow-sm", it.color, it.glow)} style={{ width: `${pct}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

