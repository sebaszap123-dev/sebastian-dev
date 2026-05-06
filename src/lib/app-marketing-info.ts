export type Benefit = {
  title: string;
  description: string;
};

export type AppMarketingInfoTranslation = {
  appName: string;
  brand: string;
  tagline: string;
  description: string;
  benefits: Benefit[];
};

export type AppMarketingInfo = {
  appSlug: string;
  appStoreUrl: string;
  privacyPolicyUrl?: string;
  supportUrl?: string;
  translations: {
    es: AppMarketingInfoTranslation;
    en?: AppMarketingInfoTranslation;
  };
};

export const appMarketingInfos: AppMarketingInfo[] = [
  {
    appSlug: "amigumi",
    appStoreUrl: "https://apps.apple.com/app/amigumi/id123456789",
    privacyPolicyUrl: "/amigumi/privacidad",
    supportUrl: "/amigumi/soporte",
    translations: {
      es: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        tagline: "Tu gestor de inventario para amigurumis",
        description:
          "Amigumi es una app diseñada para que vendedoras y vendedores de amigurumis gestionen fácilmente su inventario, pedidos y contactos. Almacena todo en tu dispositivo, sin necesidad de registro ni conexión a internet para funciones principales.",
        benefits: [
          {
            title: "Sin registro requerido",
            description:
              "Comienza a usar la app inmediatamente sin crear cuenta. Tu información se almacena en tu dispositivo.",
          },
          {
            title: "Datos locales y seguros",
            description:
              "Tu inventario, pedidos y contactos se guardan completamente en tu iPhone. Control total de tus datos.",
          },
          {
            title: "Respaldos cifrados",
            description:
              "Exporta tus respaldos con cifrado AES-256-CBC. Protege tu información con una copia segura.",
          },
          {
            title: "Gestión completa del negocio",
            description:
              "Organiza productos, variantes, stock, pedidos y contactos de clientes en un solo lugar.",
          },
        ],
      },
      en: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        tagline: "Your amigurumi inventory manager",
        description:
          "Amigumi is an app designed for amigurumi sellers to easily manage their inventory, orders, and contacts. Store everything on your device, no registration or internet needed for core features.",
        benefits: [
          {
            title: "No registration required",
            description:
              "Start using the app immediately without creating an account. Your information is stored on your device.",
          },
          {
            title: "Local and secure data",
            description:
              "Your inventory, orders, and contacts are stored entirely on your iPhone. Complete control of your data.",
          },
          {
            title: "Encrypted backups",
            description:
              "Export your backups with AES-256-CBC encryption. Protect your information with a secure copy.",
          },
          {
            title: "Complete business management",
            description:
              "Organize products, variants, stock, orders, and customer contacts all in one place.",
          },
        ],
      },
    },
  },
  {
    appSlug: "subtle",
    appStoreUrl: "https://apps.apple.com/app/idYOUR_ID_HERE", // Reemplazar con el ID real
    privacyPolicyUrl: "/subtle/privacidad",
    supportUrl: "/subtle/soporte",
    translations: {
      es: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        tagline: "El dolor de ver en qué gastas. Tu nuevo entrenador financiero sádico.",
        description:
          "SubtlePain no es un simple rastreador de gastos. Es una aplicación con un tono sarcástico diseñada para hacerte sentir el 'dolor' de ver cómo tu dinero se esfuma silenciosamente en suscripciones que no usas. Cancela esas fugas de dinero o enfréntate al Salón del Arrepentimiento.",
        benefits: [
          {
            title: "🔍 Fugas de Dinero (Money Leaks)",
            description: "Identificamos las suscripciones 'zombie' que llevas 30 días sin usar para que dejes de regalar tu dinero.",
          },
          {
            title: "⚖️ Medidor de Arrepentimiento",
            description: "Un indicador visual (y un poco pasivo-agresivo) que te muestra exactamente qué tan mal estás administrando tu vida financiera.",
          },
          {
            title: "🏆 Gamificación del Dolor",
            description: "Desbloquea logros sarcásticos por cancelar servicios inútiles o mantener tus rachas de uso semanales justificando tus gastos.",
          },
          {
            title: "📊 El Daño Total",
            description: "Estadísticas crueles y directas que traducen tu gasto a cosas que sí importan (ej. 'Esto equivale a 50 tacos').",
          },
        ],
      },
      en: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        tagline: "The pain of seeing where your money goes. Your sadistic financial coach.",
        description:
          "SubtlePain is not just another boring expense tracker. It’s a sarcastic app designed to make you feel the 'pain' of watching your money silently slip away into unused subscriptions. Cancel those money leaks or face the Hall of Regret.",
        benefits: [
          {
            title: "🔍 Money Leaks",
            description: "We identify those 'zombie' subscriptions you haven't touched in 30 days so you can stop throwing cash into the abyss.",
          },
          {
            title: "⚖️ Regret Meter",
            description: "A highly judgmental visual indicator showing you exactly how bad your financial decisions are.",
          },
          {
            title: "🏆 Gamified Punishment",
            description: "Unlock sarcastic badges for canceling useless services or maintaining weekly streaks that justify your spending.",
          },
          {
            title: "📊 The Total Damage",
            description: "Cruel, direct statistics that translate your spending into real-world metrics (e.g., 'This equals 50 tacos').",
          },
        ],
      },
    },
  },
];

export function getAppMarketingInfo(slug: string) {
  return appMarketingInfos.find((info) => info.appSlug === slug);
}
