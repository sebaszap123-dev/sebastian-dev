import Link from "next/link";
import { Locale } from "@/lib/i18n";
import LocaleToggle from "./LocaleToggle";
import type { AppSupportInfoTranslation } from "@/lib/app-support-info";

type SupportPageProps = {
  appSlug: string;
  contactEmail: string;
  platformInfo: string;
  privacyPolicyUrl?: string;
  translation: AppSupportInfoTranslation;
  locale: Locale;
  currentPath: string;
};

export default function SupportPage({
  appSlug,
  contactEmail,
  platformInfo,
  privacyPolicyUrl,
  translation,
  locale,
  currentPath,
}: SupportPageProps) {
  const { appName, brand, faqs } = translation;

  const labels =
    locale === "en"
      ? {
          header: `Support for ${appName}`,
          subheader: "Here you'll find answers to frequently asked questions and ways to contact us.",
          faqTitle: "Frequently Asked Questions",
          moreQuestions: "More questions?",
          noAnswer: "If you don't find the answer, contact us directly:",
          appInfo: "App Information",
          name: "Name",
          platform: "Platform",
          home: "Home",
          privacy: "Privacy Policy",
        }
      : {
          header: `Soporte de ${appName}`,
          subheader: "Aquí encontrarás respuestas a preguntas frecuentes y formas de contactarnos.",
          faqTitle: "Preguntas frecuentes",
          moreQuestions: "¿Más preguntas?",
          noAnswer: "Si no encuentras la respuesta, contáctanos directamente:",
          appInfo: "Información de la app",
          name: "Nombre",
          platform: "Plataforma",
          home: "Inicio",
          privacy: "Política de Privacidad",
        };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header with locale toggle */}
      <div className="border-b border-slate-700 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/${appSlug}`}
              className="text-sm text-cyan-300 hover:text-cyan-200"
            >
              {locale === "en" ? "Back" : "Volver"}
            </Link>
            <LocaleToggle currentLocale={locale} currentPath={currentPath} />
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-8">
          <h1 className="text-3xl font-bold tracking-tight">{labels.header}</h1>
          <p className="mt-2 text-slate-300">{labels.subheader}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-2xl font-bold tracking-tight">{labels.faqTitle}</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-5"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-slate-200">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-8">
          <h2 className="text-xl font-semibold">{labels.moreQuestions}</h2>
          <p className="mt-3 text-slate-300">{labels.noAnswer}</p>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-4 inline-block rounded-lg bg-cyan-600 px-4 py-2 font-medium text-white transition hover:bg-cyan-500"
          >
            {contactEmail}
          </a>
        </div>
      </section>

      {/* App Info */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-6">
          <h3 className="font-semibold">{labels.appInfo}</h3>
          <dl className="mt-4 space-y-3 text-sm text-slate-300">
            <div>
              <dt className="font-medium text-slate-200">{labels.name}:</dt>
              <dd>{brand}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">{labels.platform}:</dt>
              <dd>{platformInfo}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-12">
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Link
              href="/"
              className="text-sm text-cyan-300 hover:text-cyan-200"
            >
              {labels.home}
            </Link>
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
