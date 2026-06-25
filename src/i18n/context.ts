import { createContext } from "react"
import type { Lang, StringKey } from "@/i18n/strings"

export type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: StringKey) => string
}

export const I18nContext = createContext<I18nContextValue | null>(null)

