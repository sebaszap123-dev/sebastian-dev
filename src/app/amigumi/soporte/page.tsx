import type { Metadata } from "next";
import { getAppSupportInfo } from "@/lib/app-support-info";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import SupportPage from "@/components/app-pages/SupportPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Soporte - Amigumi by July",
  description:
    "Soporte y preguntas frecuentes para Amigumi. Contáctanos en contact@sebastianfrausto.com",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function AmigumiSoportePage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);

  const supportInfo = getAppSupportInfo("amigumi");

  if (!supportInfo) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h1 className="text-3xl font-bold">
            {locale === "en" ? "App not found" : "App no encontrada"}
          </h1>
        </div>
      </main>
    );
  }

  const translation = getTranslation(supportInfo.translations, locale);

  return (
    <SupportPage
      appSlug={supportInfo.appSlug}
      contactEmail={supportInfo.contactEmail}
      platformInfo={supportInfo.platformInfo}
      privacyPolicyUrl={supportInfo.privacyPolicyUrl}
      translation={translation}
      locale={locale}
      currentPath="/amigumi/soporte"
    />
  );
}
