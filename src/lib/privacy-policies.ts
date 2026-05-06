export type PrivacyPolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type PrivacyPolicyTranslation = {
  appName: string;
  brand: string;
  title: string;
  lastUpdated: string;
  appStoreSummary: string[];
  sections: PrivacyPolicySection[];
};

export type PrivacyPolicyDocument = {
  slug: string;
  appSlug: string;
  contactEmail: string;
  owner: string;
  translations: {
    es: PrivacyPolicyTranslation;
    en?: PrivacyPolicyTranslation;
  };
};

export const privacyPolicies: PrivacyPolicyDocument[] = [
  {
    slug: "privacidad-anju-amigumy-by-july-f7k2x9q4",
    appSlug: "amigumi",
    contactEmail: "contact@sebastianfrausto.com",
    owner: "Amigurumis by July",
    translations: {
      es: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        title: "Política de Privacidad y Tratamiento de Datos - Amigumi",
        lastUpdated: "22 de abril de 2026",
        appStoreSummary: [
          "Amigumi no requiere inicio de sesión.",
          "La información principal se almacena localmente en el dispositivo.",
          "Se solicitan permisos de contactos, fotos y cámara solo para funciones elegidas por la persona usuaria.",
          "Los respaldos exportables se cifran con AES-256-CBC.",
          "No se usa rastreo publicitario entre apps por defecto.",
        ],
        sections: [
          {
            title: "1. Responsable",
            bullets: [
              "Marca/App: Amigumi by July",
              "Contacto de privacidad: contact@sebastianfrausto.com",
            ],
          },
          {
            title: "2. Alcance",
            paragraphs: [
              "Esta política aplica al uso de la app móvil Amigumi en iOS.",
            ],
          },
          {
            title: "3. Datos que tratamos",
            paragraphs: [
              "Amigumi está diseñada para funcionar principalmente en el dispositivo. No requiere creación de cuenta ni inicio de sesión.",
              "3.1 Datos que ingresa la persona usuaria:",
            ],
            bullets: [
              "Datos de inventario: productos, variantes, materiales, stock, costos y precios.",
              "Datos de pedidos: órdenes, estados, montos y notas.",
              "Datos de contactos de clientes que la persona usuaria registre.",
              "Archivos o enlaces que la persona usuaria decida guardar (por ejemplo, patrones PDF o enlaces).",
              "3.2 Permisos del dispositivo (solo cuando la persona usuaria los habilita):",
              "Contactos: para importar contactos como clientes.",
              "Fotos: para elegir imágenes de productos/materiales.",
              "Cámara: para tomar fotos dentro del flujo de la app.",
              "3.3 Datos técnicos:",
              "Amigumi no utiliza analítica publicitaria ni rastreo entre apps por defecto.",
              "Podemos procesar datos técnicos mínimos en el dispositivo para funcionamiento básico, por ejemplo: preferencias locales de la app y fecha de último respaldo automático.",
            ],
          },
          {
            title: "4. Finalidades del tratamiento",
            bullets: [
              "Permitir la administración del negocio dentro de la app.",
              "Guardar y recuperar información local del inventario/pedidos.",
              "Generar y restaurar respaldos cuando la persona usuaria lo solicite.",
              "Compartir respaldos mediante la hoja de compartir del sistema cuando la persona usuaria lo decida.",
            ],
          },
          {
            title: "5. Base del tratamiento",
            bullets: [
              "La ejecución de funcionalidades solicitadas por la persona usuaria.",
              "El consentimiento para permisos del dispositivo (contactos, fotos y cámara).",
            ],
          },
          {
            title: "6. Almacenamiento y conservación",
            bullets: [
              "La información operativa se guarda localmente en el dispositivo.",
              "Los respaldos pueden almacenarse localmente y exportarse por decisión de la persona usuaria.",
              "La conservación depende del uso y eliminación que realice la persona usuaria dentro de la app.",
            ],
          },
          {
            title: "7. Cifrado y seguridad",
            paragraphs: [
              "Amigumi implementa medidas razonables de seguridad para proteger la información.",
            ],
            bullets: [
              "Los respaldos exportables se cifran con AES-256-CBC.",
              "La clave de cifrado se genera de forma local y se almacena de manera segura en el dispositivo.",
              "No usamos algoritmos criptográficos propietarios.",
            ],
            note: "Ningún sistema es completamente infalible; sin embargo, aplicamos buenas prácticas para reducir riesgos.",
          },
          {
            title: "8. Compartición de datos",
            paragraphs: [
              "No vendemos datos personales.",
              "Amigumi no comparte automáticamente la información de negocio con terceros para fines publicitarios.",
              "Cuando la persona usuaria usa funciones de compartir/exportar, la información se transfiere al destino elegido por ella (por ejemplo, Files, iCloud Drive, correo u otros servicios del sistema).",
            ],
          },
          {
            title: "9. Servicios y componentes de terceros",
            paragraphs: [
              "La app puede apoyarse en componentes del sistema operativo iOS y bibliotecas técnicas para almacenamiento seguro local, selección de archivos e imágenes y compartir archivos por mecanismos del sistema.",
              "El tratamiento posterior que haga cada servicio de destino elegido por la persona usuaria (por ejemplo, proveedor de correo o nube) se rige por sus propias políticas de privacidad.",
            ],
          },
          {
            title: "10. Menores de edad",
            paragraphs: [
              "Amigumi no está dirigida específicamente a menores de edad. Si detectas uso indebido con datos de menores sin autorización, escribe a soporte para atender la solicitud.",
            ],
          },
          {
            title: "11. Derechos y control de datos",
            bullets: [
              "Acceder, modificar y eliminar datos desde la propia app.",
              "Revocar permisos del dispositivo desde ajustes de iOS.",
              "Solicitar información adicional sobre tratamiento escribiendo al contacto de privacidad.",
            ],
          },
          {
            title: "12. Transferencias internacionales",
            paragraphs: [
              "Como regla general, Amigumi opera en el dispositivo. Si la persona usuaria exporta o comparte información a servicios externos, podrían existir transferencias internacionales bajo las condiciones del proveedor elegido.",
            ],
          },
          {
            title: "13. Cambios a esta política",
            paragraphs: [
              "Podemos actualizar esta política para reflejar mejoras de la app o cambios regulatorios. Publicaremos la versión vigente con su fecha de actualización.",
            ],
          },
          {
            title: "14. Contacto",
            paragraphs: [
              "Para dudas o solicitudes sobre privacidad y datos personales:",
            ],
            bullets: [
              "Correo: contact@sebastianfrausto.com",
              "Titular de la app: Amigurumis by July",
            ],
          },
        ],
      },
      en: {
        appName: "Amigumi",
        brand: "Amigumi by July",
        title: "Privacy Policy and Data Processing - Amigumi",
        lastUpdated: "April 22, 2026",
        appStoreSummary: [
          "Amigumi does not require login.",
          "Main information is stored locally on the device.",
          "Permissions for contacts, photos, and camera are requested only for features chosen by the user.",
          "Exportable backups are encrypted with AES-256-CBC.",
          "No cross-app advertising tracking by default.",
        ],
        sections: [
          {
            title: "1. Responsible Party",
            bullets: [
              "App/Brand: Amigumi by July",
              "Privacy contact: contact@sebastianfrausto.com",
            ],
          },
          {
            title: "2. Scope",
            paragraphs: [
              "This policy applies to the use of the Amigumi mobile app on iOS.",
            ],
          },
          {
            title: "3. Data We Collect",
            paragraphs: [
              "Amigumi is designed to work primarily on the device. It does not require account creation or login.",
              "3.1 Data entered by the user:",
            ],
            bullets: [
              "Inventory data: products, variants, materials, stock, costs, and prices.",
              "Order data: orders, statuses, amounts, and notes.",
              "Customer contact data that the user registers.",
              "Files or links the user chooses to save (for example, PDF patterns or links).",
              "3.2 Device permissions (only when the user enables them):",
              "Contacts: to import contacts as customers.",
              "Photos: to select images of products/materials.",
              "Camera: to take photos within the app flow.",
              "3.3 Technical data:",
              "Amigumi does not use advertising analytics or cross-app tracking by default.",
              "We may process minimal technical data on the device for basic functionality, such as: local app preferences and date of last automatic backup.",
            ],
          },
          {
            title: "4. Purposes of Processing",
            bullets: [
              "Enable business management within the app.",
              "Save and retrieve local inventory/order information.",
              "Generate and restore backups when the user requests.",
              "Share backups through the system share sheet when the user chooses.",
            ],
          },
          {
            title: "5. Legal Basis",
            bullets: [
              "Execution of functionalities requested by the user.",
              "Consent for device permissions (contacts, photos, and camera).",
            ],
          },
          {
            title: "6. Storage and Retention",
            bullets: [
              "Operational information is stored locally on the device.",
              "Backups can be stored locally and exported at the user's discretion.",
              "Retention depends on the user's usage and deletion within the app.",
            ],
          },
          {
            title: "7. Encryption and Security",
            paragraphs: [
              "Amigumi implements reasonable security measures to protect information.",
            ],
            bullets: [
              "Exportable backups are encrypted with AES-256-CBC.",
              "The encryption key is generated locally and stored securely on the device.",
              "We do not use proprietary cryptographic algorithms.",
            ],
            note: "No system is completely infallible; however, we apply best practices to reduce risks.",
          },
          {
            title: "8. Data Sharing",
            paragraphs: [
              "We do not sell personal data.",
              "Amigumi does not automatically share business information with third parties for advertising purposes.",
              "When the user uses share/export features, information is transferred to the destination chosen by them (for example, Files, iCloud Drive, email, or other system services).",
            ],
          },
          {
            title: "9. Third-Party Services and Components",
            paragraphs: [
              "The app may rely on iOS operating system components and technical libraries for secure local storage, file and image selection, and file sharing through system mechanisms.",
              "The subsequent processing by each service destination chosen by the user (for example, email provider or cloud service) is governed by their own privacy policies.",
            ],
          },
          {
            title: "10. Minors",
            paragraphs: [
              "Amigumi is not specifically directed at minors. If you detect misuse with minor data without authorization, contact support to address the request.",
            ],
          },
          {
            title: "11. Data Rights and Control",
            bullets: [
              "Access, modify, and delete data from within the app.",
              "Revoke device permissions from iOS settings.",
              "Request additional information about processing by contacting privacy support.",
            ],
          },
          {
            title: "12. International Transfers",
            paragraphs: [
              "As a general rule, Amigumi operates on the device. If the user exports or shares information to external services, international transfers may occur under the conditions of the chosen provider.",
            ],
          },
          {
            title: "13. Changes to This Policy",
            paragraphs: [
              "We may update this policy to reflect app improvements or regulatory changes. We will publish the current version with its update date.",
            ],
          },
          {
            title: "14. Contact",
            paragraphs: [
              "For questions or requests about privacy and personal data:",
            ],
            bullets: [
              "Email: contact@sebastianfrausto.com",
              "App Owner: Amigurumis by July",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "privacidad-subtlepain-x8y9z0a1",
    appSlug: "subtle",
    contactEmail: "contact@sebastianfrausto.com",
    owner: "Tu Nombre o Empresa",
    translations: {
      es: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        title: "Política de Privacidad - SubtlePain",
        lastUpdated: "5 de mayo de 2026",
        appStoreSummary: [
          "No recopilamos ni vendemos tus datos financieros.",
          "La base de datos de tus suscripciones vive de forma local en tu dispositivo.",
          "Solo te pedimos permiso para enviarte notificaciones pasivo-agresivas.",
          "No requiere creación de cuenta.",
        ],
        sections: [
          {
            title: "1. Privacidad de tus 'Crímenes Financieros'",
            paragraphs: [
              "SubtlePain te juzga, pero lo hace en estricto secreto. Toda la información que agregas a la aplicación (nombres de suscripciones, montos, fechas de facturación) se almacena localmente en tu teléfono mediante una base de datos SQLite interna. No subimos tu 'Medidor de Arrepentimiento' a ningún servidor en la nube.",
            ],
          },
          {
            title: "2. Permisos del Dispositivo",
            bullets: [
              "Notificaciones Push (Local): Solicitamos este permiso única y exclusivamente para programar alertas locales. Estas son las notificaciones que te avisan cuando se acerca un cobro o cuando un periodo de prueba gratuito está a punto de convertirse en un cargo real.",
            ],
          },
          {
            title: "3. Conexiones a Bancos y Terceros",
            paragraphs: [
              "SubtlePain es una herramienta de registro manual. No utilizamos APIs bancarias (como Plaid o similares) ni nos conectamos a tus tarjetas de crédito. Eres tú quien tiene que introducir manualmente el daño que le haces a tu cartera.",
            ],
          },
          {
            title: "4. Analíticas y Rastreo",
            paragraphs: [
              "No usamos rastreadores publicitarios entre aplicaciones (no cross-app tracking). Podríamos recolectar métricas anónimas de fallos (crash reports) estrictamente para mejorar la estabilidad de la app, sin asociarlas a tus datos financieros.",
            ],
          },
        ],
      },
      en: {
        appName: "SubtlePain",
        brand: "SubtlePain",
        title: "Privacy Policy - SubtlePain",
        lastUpdated: "May 5, 2026",
        appStoreSummary: [
          "We do not collect or sell your financial data.",
          "Your subscription database lives locally on your device.",
          "We only ask for permission to send you passive-aggressive notifications.",
          "No account creation required.",
        ],
        sections: [
          {
            title: "1. Privacy of your 'Financial Crimes'",
            paragraphs: [
              "SubtlePain judges you, but it does so in strict secrecy. All the information you add to the app (subscription names, amounts, billing dates) is stored locally on your phone using an internal SQLite database. We do not upload your 'Regret Meter' to any cloud server.",
            ],
          },
          {
            title: "2. Device Permissions",
            bullets: [
              "Local Push Notifications: We request this permission solely to schedule local alerts. These are the notifications that warn you when a payment is approaching or when a free trial is about to become a very real charge.",
            ],
          },
          {
            title: "3. Bank and Third-Party Connections",
            paragraphs: [
              "SubtlePain is a manual entry tool. We do not use banking APIs (like Plaid) and we do not connect to your credit cards. You must manually input the damage you are doing to your wallet.",
            ],
          },
          {
            title: "4. Analytics and Tracking",
            paragraphs: [
              "We do not use cross-app advertising trackers. We may collect anonymous crash reports strictly to improve app stability, without tying them to your personal financial data.",
            ],
          },
        ],
      },
    },
  }
];

export function getPrivacyPolicyBySlug(slug: string) {
  return privacyPolicies.find((policy) => policy.slug === slug);
}

export function getPrivacyPolicyByAppSlug(appSlug: string) {
  return privacyPolicies.find((policy) => policy.appSlug === appSlug);
}
