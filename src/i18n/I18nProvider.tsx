import { createContext, useCallback, useMemo, useState } from "react"
import { defaultLang, strings, type Lang, type StringKey } from "@/i18n/strings"

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: StringKey) => string
}

export const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "lang"

function readLang(): Lang {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (raw === "zh" || raw === "en") return raw
  return defaultLang
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => readLang())

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = useCallback(
    (key: StringKey) => {
      return strings[lang][key]
    },
    [lang],
  )

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
