export type PrivacyPolicySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

export type PrivacyPolicyDocument = {
  slug: string;
  appName: string;
  brand: string;
  title: string;
  lastUpdated: string;
  privacyEmail: string;
  owner: string;
  appStoreSummary: string[];
  sections: PrivacyPolicySection[];
};

export const privacyPolicies: PrivacyPolicyDocument[] = [
  {
    slug: "privacidad-anju-amigumy-by-july-f7k2x9q4",
    appName: "Anju",
    brand: "Anju - Amigurumis by July",
    title: "Politica de Privacidad y Tratamiento de Datos - Anju",
    lastUpdated: "22 de abril de 2026",
    privacyEmail: "contact@sebastianfrausto.com",
    owner: "Amigurumis by July",
    appStoreSummary: [
      "Anju no requiere inicio de sesion.",
      "La informacion principal se almacena localmente en el dispositivo.",
      "Se solicitan permisos de contactos, fotos y camara solo para funciones elegidas por la persona usuaria.",
      "Los respaldos exportables se cifran con AES-256-CBC.",
      "No se usa rastreo publicitario entre apps por defecto.",
    ],
    sections: [
      {
        title: "1. Responsable",
        bullets: [
          "Marca/App: Anju - Amigurumis by July",
          "Contacto de privacidad: contact@sebastianfrausto.com",
        ],
        note: "Reemplaza el correo anterior por tu correo real de soporte antes de publicar.",
      },
      {
        title: "2. Alcance",
        paragraphs: [
          "Esta politica aplica al uso de la app movil Anju en iOS.",
        ],
      },
      {
        title: "3. Datos que tratamos",
        paragraphs: [
          "Anju esta disenada para funcionar principalmente en el dispositivo. No requiere creacion de cuenta ni inicio de sesion.",
          "3.1 Datos que ingresa la persona usuaria:",
        ],
        bullets: [
          "Datos de inventario: productos, variantes, materiales, stock, costos y precios.",
          "Datos de pedidos: ordenes, estados, montos y notas.",
          "Datos de contactos de clientes que la persona usuaria registre.",
          "Archivos o enlaces que la persona usuaria decida guardar (por ejemplo, patrones PDF o enlaces).",
          "3.2 Permisos del dispositivo (solo cuando la persona usuaria los habilita):",
          "Contactos: para importar contactos como clientes.",
          "Fotos: para elegir imagenes de productos/materiales.",
          "Camara: para tomar fotos dentro del flujo de la app.",
          "3.3 Datos tecnicos:",
          "Anju no utiliza analitica publicitaria ni rastreo entre apps por defecto.",
          "Podemos procesar datos tecnicos minimos en el dispositivo para funcionamiento basico, por ejemplo: preferencias locales de la app y fecha de ultimo respaldo automatico.",
        ],
      },
      {
        title: "4. Finalidades del tratamiento",
        bullets: [
          "Permitir la administracion del negocio dentro de la app.",
          "Guardar y recuperar informacion local del inventario/pedidos.",
          "Generar y restaurar respaldos cuando la persona usuaria lo solicite.",
          "Compartir respaldos mediante la hoja de compartir del sistema cuando la persona usuaria lo decida.",
        ],
      },
      {
        title: "5. Base del tratamiento",
        bullets: [
          "La ejecucion de funcionalidades solicitadas por la persona usuaria.",
          "El consentimiento para permisos del dispositivo (contactos, fotos y camara).",
        ],
      },
      {
        title: "6. Almacenamiento y conservacion",
        bullets: [
          "La informacion operativa se guarda localmente en el dispositivo.",
          "Los respaldos pueden almacenarse localmente y exportarse por decision de la persona usuaria.",
          "La conservacion depende del uso y eliminacion que realice la persona usuaria dentro de la app.",
        ],
      },
      {
        title: "7. Cifrado y seguridad",
        paragraphs: [
          "Anju implementa medidas razonables de seguridad para proteger la informacion.",
        ],
        bullets: [
          "Los respaldos exportables se cifran con AES-256-CBC.",
          "La clave de cifrado se genera de forma local y se almacena de manera segura en el dispositivo.",
          "No usamos algoritmos criptograficos propietarios.",
        ],
        note: "Ningun sistema es completamente infalible; sin embargo, aplicamos buenas practicas para reducir riesgos.",
      },
      {
        title: "8. Comparticion de datos",
        paragraphs: [
          "No vendemos datos personales.",
          "Anju no comparte automaticamente la informacion de negocio con terceros para fines publicitarios.",
          "Cuando la persona usuaria usa funciones de compartir/exportar, la informacion se transfiere al destino elegido por ella (por ejemplo, Files, iCloud Drive, correo u otros servicios del sistema).",
        ],
      },
      {
        title: "9. Servicios y componentes de terceros",
        paragraphs: [
          "La app puede apoyarse en componentes del sistema operativo iOS y bibliotecas tecnicas para almacenamiento seguro local, seleccion de archivos e imagenes y compartir archivos por mecanismos del sistema.",
          "El tratamiento posterior que haga cada servicio de destino elegido por la persona usuaria (por ejemplo, proveedor de correo o nube) se rige por sus propias politicas de privacidad.",
        ],
      },
      {
        title: "10. Menores de edad",
        paragraphs: [
          "Anju no esta dirigida especificamente a menores de edad. Si detectas uso indebido con datos de menores sin autorizacion, escribe a soporte para atender la solicitud.",
        ],
      },
      {
        title: "11. Derechos y control de datos",
        bullets: [
          "Acceder, modificar y eliminar datos desde la propia app.",
          "Revocar permisos del dispositivo desde ajustes de iOS.",
          "Solicitar informacion adicional sobre tratamiento escribiendo al contacto de privacidad.",
        ],
      },
      {
        title: "12. Transferencias internacionales",
        paragraphs: [
          "Como regla general, Anju opera en el dispositivo. Si la persona usuaria exporta o comparte informacion a servicios externos, podrian existir transferencias internacionales bajo las condiciones del proveedor elegido.",
        ],
      },
      {
        title: "13. Cambios a esta politica",
        paragraphs: [
          "Podemos actualizar esta politica para reflejar mejoras de la app o cambios regulatorios. Publicaremos la version vigente con su fecha de actualizacion.",
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
];

export function getPrivacyPolicyBySlug(slug: string) {
  return privacyPolicies.find((policy) => policy.slug === slug);
}
