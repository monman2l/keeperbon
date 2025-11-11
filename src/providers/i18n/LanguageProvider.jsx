import { I18nextProvider } from 'react-i18next'
import { useCallback, useEffect, useMemo, useState } from 'react'
import i18n from './i18n.js'
import { LanguageContext } from './language-context.js'

const STORAGE_KEY = 'app.language'

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return i18n.language
  }
  return window.localStorage.getItem(STORAGE_KEY) ?? i18n.language
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  const changeLanguage = useCallback((lang) => {
    i18n.changeLanguage(lang)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang)
    }
    setLanguage(lang)
  }, [])

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
    }),
    [language, changeLanguage],
  )

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    </I18nextProvider>
  )
}
