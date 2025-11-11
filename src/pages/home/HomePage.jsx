import { Trans, useTranslation } from "react-i18next";

const EMAIL = "hello@zedigital.studio";
const CASE_STUDY_URL = `mailto:${EMAIL}?subject=Z%26E%20Digital%20Case%20Studies`;
const CAPABILITY_URL = `mailto:${EMAIL}?subject=Z%26E%20Digital%20Capability%20Deck`;

const highlights = [
  { title: "4-week sprints", subtitle: "From brief to launch" },
  { title: "Webflow / React", subtitle: "Pick your stack" },
  { title: "HK & APAC focus", subtitle: "UTC+8 delivery" },
];

function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[1.1fr,_0.9fr]">
      <div className="rounded-4xl relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 text-white shadow-[0_40px_120px_-60px_rgba(30,33,94,0.85)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/70">
              {t("home.eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              {t("home.title")}
            </h1>
            <p className="mt-4 text-base text-white/80">
              <Trans
                i18nKey="home.body"
                values={{ file: "src/pages/home/HomePage.jsx" }}
                components={{
                  code: (
                    <code className="rounded bg-white/20 px-1.5 py-0.5 text-sm font-semibold text-white" />
                  ),
                }}
              />
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/20 transition hover:bg-white"
              href={CASE_STUDY_URL}
            >
              {t("home.reactDocs")}
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              href={CAPABILITY_URL}
            >
              {t("home.tailwindDocs")}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/30 bg-white/10 px-4 py-5 text-left backdrop-blur"
              >
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-brand-100 bg-white/80 p-10 text-brand-800 shadow-[0_40px_100px_-65px_rgba(22,33,94,0.8)] backdrop-blur">
        <div className="space-y-6">
          <div className="rounded-2xl border border-brand-100 bg-brand-50/80 p-6">
            <p className="text-sm uppercase tracking-[0.45em] text-brand-500">
              Engagement Flow
            </p>
            <ol className="mt-4 space-y-3 text-brand-800">
              {["Discovery & scope", "Design & content", "Build & QA"].map(
                (step) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/80 bg-white px-4 py-3 text-sm font-semibold shadow-brand-900/5"
                  >
                    <span className="text-brand-400">›</span>
                    <code>{step}</code>
                  </li>
                ),
              )}
            </ol>
          </div>

          <div className="rounded-2xl border border-brand-100/80 bg-white/90 p-6">
            <p className="text-sm uppercase tracking-[0.45em] text-brand-500">
              Tech Stack
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm font-semibold text-brand-700">
              {["Vite 5", "React 19", "Tailwind 3", "i18next"].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-brand-100/80 bg-brand-50/80 px-4 py-3 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
