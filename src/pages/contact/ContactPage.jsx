import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

const EMAIL = "399199878@qq.com";
const CHANNEL_URLS = {
  email: `mailto:${EMAIL}`,
  whatsapp: "https://wa.me/85269326417",
};

function ContactPage() {
  const { t } = useTranslation();
  const channels = t("contact.channels", { returnObjects: true });
  const promo = t("contact.promo", { returnObjects: true });

  return (
    <section className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.9fr,_1.1fr]">
      <div className="rounded-[32px] border border-brand-100 bg-white/80 p-10 text-brand-800 shadow-[0_40px_100px_-60px_rgba(22,33,94,0.7)] backdrop-blur">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-500">
          {t("contact.eyebrow")}
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-brand-800 sm:text-4xl">
          {t("contact.title")}
        </h1>
        <p className="mt-4 text-base text-brand-600">
          <Trans
            i18nKey="contact.body"
            components={{
              link: (
                <a
                  className="font-semibold text-brand-500"
                  href={`mailto:${EMAIL}`}
                >
                  Z&E Digital
                </a>
              ),
            }}
          />
        </p>

        <div className="mt-8 space-y-4">
          {Array.isArray(channels) &&
            channels.map((channel) => {
              const href = CHANNEL_URLS[channel.type] ?? channel.value;
              const needsBlank = href.startsWith("http");
              return (
                <a
                  key={channel.label}
                  href={href}
                  className="flex items-center justify-between rounded-2xl border border-brand-100 bg-brand-50/70 px-5 py-4 text-sm font-semibold text-brand-700 transition hover:border-brand-300 hover:bg-white"
                  target={needsBlank ? "_blank" : undefined}
                  rel={needsBlank ? "noreferrer" : undefined}
                >
                  <span>{channel.label}</span>
                  <span className="text-brand-400">{channel.value}</span>
                </a>
              );
            })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-brand-900/30 transition hover:bg-brand-500"
            href={`mailto:${EMAIL}`}
          >
            {t("contact.emailCta")}
          </a>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3 text-sm font-semibold text-brand-600 transition hover:border-brand-400 hover:text-brand-500"
            to="/"
          >
            {t("contact.backHome")}
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 text-white shadow-[0_40px_120px_-60px_rgba(27,32,94,0.85)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
        <div className="relative z-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-white/70">
            {promo?.badge}
          </p>
          <h2 className="text-3xl font-semibold">{promo?.title}</h2>
          <p className="text-white/80">{promo?.body}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {Array.isArray(promo?.items) &&
              promo.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 text-sm uppercase tracking-[0.4em] text-white/80"
                >
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
