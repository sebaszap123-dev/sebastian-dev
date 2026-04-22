export type FAQ = {
  question: string;
  answer: string;
};

export type AppSupportInfoTranslation = {
  appName: string;
  brand: string;
  faqs: FAQ[];
};

export type AppSupportInfo = {
  appSlug: string;
  contactEmail: string;
  platformInfo: string;
  privacyPolicyUrl?: string;
  translations: {
    es: AppSupportInfoTranslation;
    en?: AppSupportInfoTranslation;
  };
};

export const appSupportInfos: AppSupportInfo[] = [
  {
    appSlug: "amigumi",
    contactEmail: "contact@sebastianfrausto.com",
    platformInfo: "iOS 14.0+",
    privacyPolicyUrl: "/amigumi/privacidad",
    translations: {
      es: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        faqs: [
          {
            question: "¿Necesito crear una cuenta para usar Amigumi?",
            answer:
              "No. Amigumi no requiere registro ni inicio de sesión. Puedes comenzar a usar la app inmediatamente.",
          },
          {
            question: "¿Dónde se almacena mi información?",
            answer:
              "Toda tu información (inventario, pedidos, contactos) se almacena localmente en tu iPhone. Tú tienes el control total de tus datos.",
          },
          {
            question: "¿Puedo respaldar mis datos?",
            answer:
              "Sí. Amigumi permite exportar respaldos cifrados con AES-256-CBC. Puedes guardarlos en iCloud Drive, correo o tu gestor de archivos.",
          },
          {
            question: "¿Qué hacer si pierdo mi iPhone?",
            answer:
              "Si tienes un respaldo exportado, puedes restaurarlo en un nuevo dispositivo. Sin respaldo previo, los datos se encuentran solo en ese dispositivo.",
          },
          {
            question: "¿Amigumi requiere conexión a internet?",
            answer:
              "No para funciones principales. El inventario, pedidos y contactos funcionan completamente sin internet. Solo necesitas conexión al exportar o restaurar respaldos a servicios externos.",
          },
        ],
      },
      en: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        faqs: [
          {
            question: "Do I need to create an account to use Amigumi?",
            answer:
              "No. Amigumi does not require registration or login. You can start using the app immediately.",
          },
          {
            question: "Where is my information stored?",
            answer:
              "All your information (inventory, orders, contacts) is stored locally on your iPhone. You have complete control of your data.",
          },
          {
            question: "Can I back up my data?",
            answer:
              "Yes. Amigumi allows you to export encrypted backups with AES-256-CBC. You can save them to iCloud Drive, email, or your file manager.",
          },
          {
            question: "What if I lose my iPhone?",
            answer:
              "If you have an exported backup, you can restore it on a new device. Without a backup, your data exists only on that device.",
          },
          {
            question: "Does Amigumi require an internet connection?",
            answer:
              "Not for core features. Inventory, orders, and contacts work completely offline. You only need internet when exporting or restoring backups to external services.",
          },
        ],
      },
    },
  },
];

export function getAppSupportInfo(slug: string) {
  return appSupportInfos.find((info) => info.appSlug === slug);
}
