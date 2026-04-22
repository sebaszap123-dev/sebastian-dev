import Link from "next/link";
import { Locale } from "@/lib/i18n";
import LocaleToggle from "./LocaleToggle";
import type { PrivacyPolicyTranslation } from "@/lib/privacy-policies";

type PrivacyPolicyPageProps = {
  translation: PrivacyPolicyTranslation;
  locale: Locale;
  currentPath: string;
  contactEmail: string;
  owner: string;
};

export default function PrivacyPolicyPage({
  translation,
  locale,
  currentPath,
  contactEmail,
  owner,
}: PrivacyPolicyPageProps) {
  const labels =
    locale === "en"
      ? {
          lastUpdated: "Last updated",
          privacyContact: "Privacy contact",
          appStoreSummary: "App Store Summary",
        }
      : {
          lastUpdated: "Última actualización",
          privacyContact: "Contacto de privacidad",
          appStoreSummary: "Resumen para App Store",
        };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header with locale toggle */}
      <div className="border-b border-slate-700 bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
                {locale === "en" ? "Home" : "Inicio"}
              </Link>
            </div>
            <LocaleToggle currentLocale={locale} currentPath={currentPath} />
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-14">
        <header className="mb-10 rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <h1 className="text-3xl font-bold tracking-tight">
            {translation.title}
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            {labels.lastUpdated}: {translation.lastUpdated}
          </p>
          <p className="mt-2 text-sm text-amber-300">
            {labels.privacyContact}: {contactEmail}
          </p>
        </header>

        <section className="space-y-8">
          {translation.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-white">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-7 text-slate-200">
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-200">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.note ? (
                <p className="mt-3 text-sm italic text-amber-200">
                  {section.note}
                </p>
              ) : null}
            </div>
          ))}
        </section>

        <hr className="my-10 border-slate-700" />

        <section>
          <h2 className="text-xl font-semibold">{labels.appStoreSummary}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-200">
            {translation.appStoreSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="border-t border-slate-700 py-8">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm text-slate-400">© 2026 {owner}</p>
        </div>
      </footer>
    </main>
  );
}
