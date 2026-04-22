import type { Metadata } from "next";
import { getAppMarketingInfo } from "@/lib/app-marketing-info";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import MarketingPage from "@/components/app-pages/MarketingPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Amigumi by July - Gestor de Inventario para Amigurumis",
  description:
    "App iOS para gestionar tu negocio de amigurumis: inventario, pedidos y respaldos cifrados. Disponible en App Store.",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function AmigumiPage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);

  const marketingInfo = getAppMarketingInfo("amigumi");

  if (!marketingInfo) {
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

  const translation = getTranslation(marketingInfo.translations, locale);

  return (
    <MarketingPage
      appSlug={marketingInfo.appSlug}
      appStoreUrl={marketingInfo.appStoreUrl}
      privacyPolicyUrl={marketingInfo.privacyPolicyUrl}
      supportUrl={marketingInfo.supportUrl}
      translation={translation}
      locale={locale}
      currentPath="/amigumi"
    />
  );
}
