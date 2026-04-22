import Link from "next/link";
import { Locale } from "@/lib/i18n";
import LocaleToggle from "./LocaleToggle";
import type { AppMarketingInfoTranslation } from "@/lib/app-marketing-info";

type MarketingPageProps = {
  appSlug: string;
  appStoreUrl: string;
  privacyPolicyUrl?: string;
  supportUrl?: string;
  translation: AppMarketingInfoTranslation;
  locale: Locale;
  currentPath: string;
};

export default function MarketingPage({
  appStoreUrl,
  privacyPolicyUrl,
  supportUrl,
  translation,
  locale,
  currentPath,
}: MarketingPageProps) {
  const { appName, brand, tagline, description, benefits } = translation;

  const labels =
    locale === "en"
      ? {
          whyChoose: `Why choose ${appName}?`,
          available: "Available on App Store",
          cta: `Download ${appName} now and start managing your business`,
          download: "Download on App Store",
          support: "Support",
          privacy: "Privacy Policy",
          home: "Home",
        }
      : {
          whyChoose: `¿Por qué elegir ${appName}?`,
          available: "Disponible en App Store",
          cta: `Descarga ${appName} ahora y comienza a gestionar tu negocio`,
          download: "Descargar en App Store",
          support: "Soporte",
          privacy: "Política de Privacidad",
          home: "Inicio",
        };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header with locale toggle */}
      <div className="border-b border-slate-700 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-cyan-300 hover:text-cyan-200"
            >
              {labels.home}
            </Link>
            <LocaleToggle currentLocale={locale} currentPath={currentPath} />
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-8">
          <h1 className="text-4xl font-bold tracking-tight">{brand}</h1>
          <p className="mt-2 text-lg text-slate-300">{tagline}</p>
          <p className="mt-4 leading-relaxed text-slate-200">{description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold tracking-tight">{labels.whyChoose}</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
            >
              <h3 className="font-semibold text-white">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-xl border border-cyan-700/50 bg-slate-900/50 p-8 text-center">
          <h2 className="text-xl font-semibold">{labels.available}</h2>
          <p className="mt-2 text-slate-300">{labels.cta}</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-cyan-600 px-6 py-2 font-medium text-white transition hover:bg-cyan-500"
            >
              {labels.download}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-12">
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            {supportUrl && (
              <Link
                href={supportUrl}
                className="text-sm text-cyan-300 hover:text-cyan-200"
              >
                {labels.support}
              </Link>
            )}
            {privacyPolicyUrl && (
              <Link
                href={privacyPolicyUrl}
                className="text-sm text-cyan-300 hover:text-cyan-200"
              >
                {labels.privacy}
              </Link>
            )}
            <p className="text-sm text-slate-400">© 2026 {brand}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
