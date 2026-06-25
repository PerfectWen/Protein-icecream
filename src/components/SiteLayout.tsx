import { NavLink, Outlet } from "react-router-dom"
import { Languages } from "lucide-react"
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
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="candy-frame flex items-center justify-between rounded-[28px] bg-white/40 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white/70 shadow-sm shadow-black/10">
              <svg
                viewBox="0 0 48 48"
                aria-hidden="true"
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2 8.9c5.3 0 9 2.6 9 6.2 0 1.3-.4 2.4-1.2 3.2 2.9 1.5 4.7 3.8 4.7 6.6 0 1.7-.6 3.2-1.7 4.4-1.1 1.3-1.8 2.5-2.1 3.8H17.3c-.2-1.3-1-2.5-2-3.8-1.2-1.2-1.8-2.7-1.8-4.4 0-2.8 1.9-5.2 4.8-6.7-.7-.8-1.1-1.9-1.1-3.1 0-3.7 3.2-6.1 8-6.1Z"
                  fill="#FFD0DE"
                />
                <path
                  d="M18.6 18.4c2-.9 4.2-1.3 6.4-1.2 2.6.1 4.8.8 6.7 2.1"
                  fill="none"
                  stroke="#F6AFC5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M17.7 27.4c2.2 1 4.5 1.5 7.1 1.5 2.4 0 4.7-.5 6.8-1.5"
                  fill="none"
                  stroke="#FFF2F6"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M14.5 31.1c3.4-.7 6.9-1.1 10.4-1.1 3.4 0 6.7.4 10 1.1"
                  fill="none"
                  stroke="#F6AFC5"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M11 30.4h27c2.4 0 4.3 2 4.1 4.4-.7 7.2-6.8 12.7-14 12.7h-6.9c-7.1 0-13.2-5.4-14-12.5-.3-2.5 1.6-4.6 4-4.6Z"
                  fill="#2B170F"
                />
                <path
                  d="M12.1 33.1c4 .6 8.2.9 12.4.9s8.2-.3 12.1-.9"
                  fill="none"
                  stroke="#6B4736"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13.4 35.8c3.6.6 7.3.9 11.1.9 3.7 0 7.4-.3 10.9-.9"
                  fill="none"
                  stroke="#8C604D"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <circle cx="20.6" cy="39.1" r="1" fill="#F4E6DD" opacity="0.9" />
                <circle cx="28.3" cy="39.1" r="1" fill="#F4E6DD" opacity="0.9" />
                <path
                  d="M21 42.1c1.1 1.2 2.3 1.7 3.6 1.7 1.3 0 2.4-.5 3.4-1.7"
                  fill="none"
                  stroke="#FFF2F6"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle cx="17.8" cy="41" r="1.2" fill="#C08A6F" opacity="0.55" />
                <circle cx="31.4" cy="41" r="1.2" fill="#C08A6F" opacity="0.55" />
                <circle cx="14.8" cy="18.4" r="1.2" fill="#8AD97B" />
                <circle cx="33.5" cy="17.3" r="1.2" fill="#FDBA74" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-wide text-zinc-900">
                Protein Fruit Ice Cream
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
