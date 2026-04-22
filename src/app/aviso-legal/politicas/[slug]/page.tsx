import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getPrivacyPolicyBySlug } from "@/lib/privacy-policies";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateMetadata({
  params,
}: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPrivacyPolicyBySlug(slug);

  if (!policy) {
    return {
      title: "Politica no encontrada",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: policy.translations.es.title,
    description: `Politica de privacidad de ${policy.translations.es.appName}`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "none",
        "max-snippet": -1,
      },
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
  searchParams,
}: PolicyPageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;

  const policy = getPrivacyPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  // Redirect to public URL if app has a public route
  if (policy.appSlug) {
    const queryParam = lang ? `?lang=${lang}` : "";
    redirect(`/${policy.appSlug}/privacidad${queryParam}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-slate-300">
          Esta política ha sido movida a una URL pública. Por favor, actualiza
          tus marcadores.
        </p>
      </div>
    </main>
  );
}
