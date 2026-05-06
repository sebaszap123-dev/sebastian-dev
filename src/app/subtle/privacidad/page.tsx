import type { Metadata } from "next";
import { getPrivacyPolicyByAppSlug } from "@/lib/privacy-policies";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import PrivacyPolicyPage from "@/components/app-pages/PrivacyPolicyPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Política de Privacidad - SubtlePain",
  description:
    "Política de privacidad y tratamiento de datos de SubtlePain. Tus crímenes financieros están a salvo.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function SubtlePrivacyPage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);

  const privacyPolicy = getPrivacyPolicyByAppSlug("subtle");

  if (!privacyPolicy) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h1 className="text-3xl font-bold">
            {locale === "en" ? "Policy not found" : "Política no encontrada"}
          </h1>
        </div>
      </main>
    );
  }

  const translation = getTranslation(privacyPolicy.translations, locale);

  return (
    <PrivacyPolicyPage
      translation={translation}
      locale={locale}
      currentPath="/subtle/privacidad"
      contactEmail={privacyPolicy.contactEmail}
      owner={privacyPolicy.owner}
    />
  );
}
