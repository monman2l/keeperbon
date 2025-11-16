import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage.js";
import { SUPPORTED_LANGUAGES } from "../../providers/i18n/language-context.js";

const navBase =
  "relative text-sm font-semibold px-4 py-2 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400";

function RootLayout() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-brand-50 via-white to-brand-100 text-brand-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(91,99,255,0.25),_transparent_55%)]" />

      <header className="sticky top-0 z-20 border-b border-white/40 bg-white/80 shadow-md shadow-brand-900/5 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-brand-400">
              Hong Kong · Web Solution Studio
            </p>
            <span className="text-2xl font-semibold tracking-tight text-brand-800">
              {t("brand")}
            </span>
          </div>

          <nav className="flex gap-2 rounded-full border border-white/60 bg-white/70 p-1 shadow-inner shadow-brand-900/5">
            {[
              { to: "/", label: t("nav.home"), end: true },
              { to: "/contact", label: t("nav.contact") },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${navBase} rounded-full ${
                    isActive
                      ? "bg-brand-600 text-white shadow-brand-700/40"
                      : "text-brand-600 hover:text-brand-500"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 rounded-full border border-brand-200/70 bg-white/70 p-1 text-xs font-semibold text-brand-600 shadow-inner shadow-brand-900/5">
            <span className="px-2 uppercase tracking-[0.4em]">
              {t("language.label")}
            </span>
            <div className="flex rounded-full bg-brand-50/80">
              {SUPPORTED_LANGUAGES.map(({ code, label }) => {
                const isActive = language === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => changeLanguage(code)}
                    className={`rounded-full px-3 py-1 transition ${
                      isActive
                        ? "bg-brand-600 text-white shadow-brand-700/30"
                        : "text-brand-600 hover:text-brand-500"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 overflow-hidden px-0 py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: "radial-gradient(#e0e0e0 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
          <Outlet />
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/30 bg-brand-900 text-center text-xs text-brand-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-1 px-6 py-6 sm:flex-row sm:justify-between sm:text-left">
          <span>{t("footer", { year: currentYear })}</span>
          <span className="text-brand-300">
            End-to-end web solutions for APAC product and marketing teams.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;
