import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../hooks/useLanguage.js'
import { SUPPORTED_LANGUAGES } from '../../providers/i18n/language-context.js'

const linkBase =
  'text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

function RootLayout() {
  const { t } = useTranslation()
  const { language, changeLanguage } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="sticky top-0 z-10 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <span className="text-lg font-semibold text-brand-900">{t('brand')}</span>
          <nav className="flex gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:text-brand-500'
                }`
              }
              >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? 'bg-brand-500 text-white' : 'text-slate-600 hover:text-brand-500'
                }`
              }
              >
              {t('nav.contact')}
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="uppercase tracking-widest">{t('language.label')}</span>
            <div className="flex rounded-full border border-slate-200 bg-white p-0.5">
              {SUPPORTED_LANGUAGES.map(({ code, label }) => {
                const isActive = language === code
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => changeLanguage(code)}
                    className={`rounded-full px-3 py-1 text-xs transition ${
                      isActive
                        ? 'bg-brand-500 text-white shadow-brand-500/30'
                        : 'text-slate-600 hover:text-brand-500'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <footer className="border-t border-white/60 bg-white/80 py-4 text-center text-xs text-slate-500 backdrop-blur">
        {t('footer', { year: currentYear })}
      </footer>
    </div>
  )
}

export default RootLayout
