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
  {
    appSlug: "subtle",
    contactEmail: "contact@sebastianfrausto.com",
    platformInfo: "iOS 14.0+ / Android 11.0+",
    privacyPolicyUrl: "/subtle/privacidad",
    translations: {
      es: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        faqs: [
          {
            question: "¿La aplicación cancelará mágicamente mis suscripciones?",
            answer:
              "No somos magos ni tenemos acceso a tu tarjeta. SubtlePain marca la suscripción como 'inactiva' en tu historial para que dejes de sentir culpa, pero tú tienes que ir como adulto responsable a cancelar el servicio directamente con Netflix, Spotify, o el gimnasio que no pisas hace meses.",
          },
          {
            question: "¿Por qué la aplicación me insulta?",
            answer:
              "No te insultamos, te decimos la verdad. La amabilidad no salvó tu cartera antes. Nuestro tono sarcástico es una característica diseñada para generarte el 'dolor positivo' necesario para corregir tus malos hábitos financieros.",
          },
          {
            question: "¿Están seguros mis datos financieros?",
            answer:
              "Sí. No nos conectamos a tus cuentas bancarias porque sinceramente no queremos ver eso. Todos los datos que ingresas sobre tus suscripciones se guardan localmente en tu dispositivo usando una base de datos SQLite.",
          },
          {
            question: "¿Cómo funcionan las rachas (Streaks)?",
            answer:
              "Cada vez que haces el chequeo semanal y confirmas que SÍ usaste una suscripción, sumas un punto a tu racha. Si confiesas que no la usaste, pierdes la racha. Simple. Te obligamos a justificar por qué pagas lo que pagas.",
          },
        ],
      },
      en: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        faqs: [
          {
            question: "Will the app magically cancel my subscriptions for me?",
            answer:
              "We aren't wizards and we don't have your credit card. SubtlePain marks the subscription as 'inactive' in your app to stop the guilt trip, but you still have to go act like an adult and cancel the service directly with the provider.",
          },
          {
            question: "Why is the app so mean to me?",
            answer:
              "We aren't mean, we're honest. Kindness didn't save your wallet before. Our sarcastic tone is a feature designed to give you that 'positive pain' needed to fix your terrible financial habits.",
          },
          {
            question: "Is my financial data safe?",
            answer:
              "Yes. We don't link to your bank accounts because frankly, we don't want to see that mess. All the data you manually enter about your subscriptions is stored locally on your device using a SQLite database.",
          },
          {
            question: "How do Streaks work?",
            answer:
              "During your weekly check, if you confirm you ACTUALLY used a subscription, your streak goes up. If you admit you didn't, you lose the streak. It forces you to justify why you keep paying for things.",
          },
        ],
      },
    },
  }
];

export function getAppSupportInfo(slug: string) {
  return appSupportInfos.find((info) => info.appSlug === slug);
}
