import type { Metadata } from "next";
import Link from "next/link";
import { privacyPolicies } from "@/lib/privacy-policies";

export const metadata: Metadata = {
  title: "Politicas de privacidad",
  description: "Repositorio interno de politicas de privacidad.",
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

export default function PrivacyPoliciesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h1 className="text-3xl font-bold tracking-tight">
          Politicas de privacidad
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Seccion interna para centralizar politicas por app. Mantener esta ruta
          sin enlazar desde la navegacion publica.
        </p>

        <div className="mt-8 space-y-4">
          {privacyPolicies.map((policy) => (
            <article
              key={policy.slug}
              className="rounded-xl border border-slate-700 bg-slate-900/70 p-4"
            >
              <h2 className="text-lg font-semibold">{policy.title}</h2>
              <p className="mt-1 text-sm text-slate-300">
                Ultima actualizacion: {policy.lastUpdated}
              </p>
              <Link
                href={`/aviso-legal/politicas/${policy.slug}`}
                className="mt-3 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                Ver politica
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
