export type Locale = "es" | "en";

export function resolveLocale(lang?: string | string[]): Locale {
  if (!lang) return "es";
  const langStr = Array.isArray(lang) ? lang[0] : lang;
  if (langStr === "en") return "en";
  return "es";
}

export function getTranslation<T>(
  translations: { es: T; en?: T },
  locale: Locale
): T {
  if (locale === "en" && translations.en) {
    return translations.en;
  }
  return translations.es;
}

export const localeLabels = {
  es: {
    language: "Español",
    languageAbbr: "ES",
    english: "English",
    spanish: "Español",
    viewIn: "Ver en",
  },
  en: {
    language: "English",
    languageAbbr: "EN",
    english: "English",
    spanish: "Español",
    viewIn: "View in",
  },
} as const;
