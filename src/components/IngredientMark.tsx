import { cn } from "@/lib/utils"

export default function IngredientMark({
  emoji,
  iconSrc,
  name,
  className,
}: {
  emoji: string
  iconSrc?: string
  name: string
  className?: string
}) {
  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={name}
        className={cn("inline-block h-[1.1em] w-[1.1em] align-[-0.14em]", className)}
      />
    )
  }

  return <span className={className}>{emoji}</span>
}
