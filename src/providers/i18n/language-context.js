import { createContext, useContext } from 'react'

export const LanguageContext = createContext({
  language: 'zh-HK',
  changeLanguage: () => {},
})

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh-HK', label: '繁體中文' },
]

export function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguageContext must be used within LanguageProvider')
  }
  return ctx
}
