import { useTranslation } from "react-i18next";

const EMAIL = "399199878@qq.com";
const CASE_STUDY_URL = `mailto:${EMAIL}?subject=Z%26E%20Digital%20Discovery`;

function HomePage() {
  const { t } = useTranslation();
  const blocks = t("home.blocks", { returnObjects: true });

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[48px] border border-white/30 bg-gradient-to-br from-brand-800 via-brand-600 to-brand-700 px-6 py-16 text-white shadow-[0_80px_200px_-80px_rgba(22,18,64,0.95)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-10 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-5%] h-[320px] w-[320px] rounded-full bg-brand-400/30 blur-3xl animate-[spin_24s_linear_infinite]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_65%)]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10">
          <p className="text-xs uppercase tracking-[0.6em] text-white/70">
            {t("home.eyebrow")}
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {t("home.title")}
          </h1>
          <p className="max-w-3xl text-lg text-white/80">{t("home.body")}</p>
          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-7 py-3 text-sm font-semibold text-brand-700 shadow-lg shadow-brand-900/25 transition hover:bg-white"
              href={CASE_STUDY_URL}
            >
              {t("home.ctaButton")}
            </a>
            
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {Array.isArray(blocks) &&
          blocks.map((block, index) => (
            <article
              key={block.title}
              className="relative overflow-hidden rounded-[40px] border border-brand-100 bg-white/80 px-6 py-12 text-brand-900 shadow-[0_40px_140px_-80px_rgba(20,24,67,0.6)] backdrop-blur"
            >
              <div className="absolute inset-0 opacity-70">
                <div className="absolute -right-16 top-1/3 h-40 w-40 rounded-full bg-brand-100 blur-[120px]" />
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
              </div>
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.5em] text-brand-400">
                    {block.tag}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-brand-900 sm:text-4xl">
                    {block.title}
                  </h2>
                </div>
                <p className="max-w-xl text-base text-brand-600">
                  {block.body}
                </p>
              </div>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-brand-100 via-brand-200 to-transparent" />
              <div className="mt-6 flex items-center gap-3 text-sm text-brand-500">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200/70 text-brand-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span> {t("brand")} · bespoke delivery</span>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}

export default HomePage;
