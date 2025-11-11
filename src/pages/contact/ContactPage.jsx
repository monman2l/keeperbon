import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

const EMAIL = 'hello@example.com'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/90 p-10 text-center shadow-[0_20px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-400">
          {t('contact.eyebrow')}
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-brand-900 sm:text-4xl">{t('contact.title')}</h1>
        <p className="mt-4 text-base text-slate-500">
          <Trans
            i18nKey="contact.body"
            values={{ email: EMAIL }}
            components={{
              link: (
                <a className="font-medium text-brand-500" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              ),
            }}
          />
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400"
            href={`mailto:${EMAIL}`}
          >
            {t('contact.emailCta')}
          </a>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-500"
            to="/"
          >
            {t('contact.backHome')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
