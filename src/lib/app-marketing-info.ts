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
];

export function getAppMarketingInfo(slug: string) {
  return appMarketingInfos.find((info) => info.appSlug === slug);
}
