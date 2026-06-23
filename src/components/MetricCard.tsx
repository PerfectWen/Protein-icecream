import { cn } from "@/lib/utils"

export default function MetricCard({
  label,
  value,
  unit,
  accent,
}: {
  label: string
  value: string
  unit?: string
  accent: "rose" | "amber" | "violet" | "mint"
}) {
  const accentMap: Record<typeof accent, string> = {
    rose: "from-rose-500/20 via-rose-500/5 to-transparent",
    amber: "from-amber-500/20 via-amber-500/5 to-transparent",
    violet: "from-violet-500/20 via-violet-500/5 to-transparent",
    mint: "from-emerald-500/18 via-emerald-500/6 to-transparent",
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/55 p-5 shadow-sm shadow-black/5 backdrop-blur">
      <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br", accentMap[accent])} />
      <div className="relative">
        <div className="text-xs font-medium uppercase tracking-widest text-zinc-700/70">{label}</div>
        <div className="mt-3 flex items-end gap-2">
          <div className="font-display text-4xl font-semibold tracking-tight text-zinc-950">{value}</div>
          {unit ? <div className="pb-1 text-sm font-medium text-zinc-700/70">{unit}</div> : null}
        </div>
      </div>
    </div>
  )
}

