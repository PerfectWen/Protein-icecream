import { cn } from "@/lib/utils"

export type SegmentedOption<T extends string> = {
  value: T
  label: string
}

export default function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (value: T) => void
  options: SegmentedOption<T>[]
}) {
  return (
    <div className="inline-flex rounded-full border border-black/10 bg-white/60 p-1 shadow-sm shadow-black/5">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition",
            value === opt.value ? "bg-white text-zinc-900 shadow-sm shadow-black/5" : "text-zinc-800/70 hover:text-zinc-900",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

