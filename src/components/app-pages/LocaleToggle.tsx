"use client";

import Link from "next/link";
import { Locale } from "@/lib/i18n";

type LocaleToggleProps = {
  currentLocale: Locale;
  currentPath: string;
};

export default function LocaleToggle({
  currentLocale,
  currentPath,
}: LocaleToggleProps) {
  const otherLocale = currentLocale === "es" ? "en" : "es";

  const href = currentPath.includes("?")
    ? `${currentPath}&lang=${otherLocale}`
    : `${currentPath}?lang=${otherLocale}`;

  return (
    <div className="flex gap-2">
      {currentLocale === "es" ? (
        <>
          <span className="text-xs font-medium text-cyan-300">ES</span>
          <Link
            href={href}
            className="text-xs font-medium text-slate-400 hover:text-cyan-300"
          >
            EN
          </Link>
        </>
      ) : (
        <>
          <Link
            href={currentPath.replace(/\?lang=en$|&lang=en$/, "")}
            className="text-xs font-medium text-slate-400 hover:text-cyan-300"
          >
            ES
          </Link>
          <span className="text-xs font-medium text-cyan-300">EN</span>
        </>
      )}
    </div>
  );
}
