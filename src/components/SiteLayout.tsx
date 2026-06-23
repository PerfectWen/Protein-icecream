import { NavLink, Outlet } from "react-router-dom"
import { Languages, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useI18n } from "@/i18n/useI18n"

function TopNavLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "rounded-full px-4 py-2 text-sm font-medium tracking-wide transition",
          "hover:bg-white/70 hover:shadow-sm hover:shadow-black/5",
          isActive ? "bg-white/80 shadow-sm shadow-black/5" : "text-zinc-800/80",
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default function SiteLayout() {
  const { lang, setLang, t } = useI18n()

  return (
    <div className="min-h-dvh bg-[radial-gradient(1200px_600px_at_15%_-10%,rgba(255,115,115,0.30),transparent_60%),radial-gradient(900px_500px_at_90%_0%,rgba(255,199,92,0.28),transparent_55%),radial-gradient(800px_550px_at_70%_110%,rgba(124,58,237,0.18),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(255,255,255,0.86))]">
      <div className="pointer-events-none fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22/%3E%3C/filter%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20filter%3D%22url(%23n)%22%20opacity%3D%220.05%22/%3E%3C/svg%3E')] opacity-100" />
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 shadow-sm shadow-black/10">
              <Sparkles className="h-5 w-5 text-zinc-900" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-wide text-zinc-900">
                🍨💪 Protein Fruit Ice Cream
              </div>
              <div className="text-xs text-zinc-700/70">{t("siteTagline")}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 sm:flex">
            <TopNavLink to="/">{t("navHome")}</TopNavLink>
            <TopNavLink to="/calculator">{t("navCalculator")}</TopNavLink>
            <TopNavLink to="/nutrition">{t("navNutrition")}</TopNavLink>
          </nav>

          <button
            type="button"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-black/5 transition",
              "hover:bg-white/90",
            )}
          >
            <Languages className="h-4 w-4" />
            <span>{lang === "zh" ? "中 / EN" : "EN / 中"}</span>
          </button>
        </div>
        <div className="mx-auto flex max-w-6xl gap-2 px-4 pb-4 sm:hidden">
          <TopNavLink to="/">{t("navHome")}</TopNavLink>
          <TopNavLink to="/calculator">{t("navCalculator")}</TopNavLink>
          <TopNavLink to="/nutrition">{t("navNutrition")}</TopNavLink>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Outlet />
      </main>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-700/60 sm:px-6">
        <div className="rounded-3xl border border-black/5 bg-white/40 px-5 py-4 backdrop-blur">
          <div>🍓🫐🥭 {t("disclaimer")}</div>
        </div>
      </footer>
    </div>
  )
}
