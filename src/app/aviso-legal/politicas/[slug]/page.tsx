import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPrivacyPolicyBySlug } from "@/lib/privacy-policies";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
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
    title: policy.title,
    description: `Politica de privacidad de ${policy.appName}`,
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

export default async function PrivacyPolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const policy = getPrivacyPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-6 py-14">
        <header className="mb-10 rounded-2xl border border-slate-700 bg-slate-900/80 p-6">
          <h1 className="text-3xl font-bold tracking-tight">{policy.title}</h1>
          <p className="mt-3 text-sm text-slate-300">
            Ultima actualizacion: {policy.lastUpdated}
          </p>
          <p className="mt-2 text-sm text-amber-300">
            Contacto de privacidad: {policy.privacyEmail}
          </p>
        </header>

        <section className="space-y-8">
          {policy.sections.map((section) => (
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
          <h2 className="text-xl font-semibold">
            Resumen para App Store Connect
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-200">
            {policy.appStoreSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
