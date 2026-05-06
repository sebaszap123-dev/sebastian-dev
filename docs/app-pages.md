# Arquitectura de Páginas de Apps — Guía Completa

## Descripción General

Este documento explica la arquitectura **100% reutilizable** para crear páginas públicas de apps (Marketing, Soporte y Política de Privacidad) con soporte multiidioma (español/inglés).

## Estructura Conceptual

```
Datos (src/lib/)
  ├── privacy-policies.ts      → Políticas de privacidad
  ├── app-marketing-info.ts    → Información de marketing
  ├── app-support-info.ts      → FAQs y soporte
  └── i18n.ts                  → Helpers de internacionalización

Componentes (src/components/app-pages/)
  ├── PrivacyPolicyPage.tsx    → Componente genérico de privacidad
  ├── MarketingPage.tsx        → Componente genérico de marketing
  ├── SupportPage.tsx          → Componente genérico de soporte
  └── LocaleToggle.tsx         → Toggle ES/EN en header

Rutas (src/app/[appSlug]/)
  ├── page.tsx                 → Marketing (root)
  ├── soporte/page.tsx         → Soporte
  └── privacidad/page.tsx      → Política de privacidad
```

## Flujo de Datos

```
SearchParams (?lang=en)
        ↓
resolveLocale() → Locale ('es' | 'en')
        ↓
getAppMarketingInfo('amigumi')
        ↓
getTranslation(info.translations, locale)
        ↓
<MarketingPage translation={translation} locale={locale} />
```

---

## Cómo Agregar Una Nueva App

### Paso 1: Agregar datos a `src/lib/privacy-policies.ts`

```typescript
export const privacyPolicies: PrivacyPolicyDocument[] = [
  // ... apps existentes ...
  {
    slug: "privacidad-nueva-app-hash123",
    appSlug: "nueva-app",  // ← clave corta para URLs
    contactEmail: "contact@sebastianfrausto.com",
    owner: "Tu Empresa",
    translations: {
      es: {
        appName: "Nueva App",
        brand: "Nueva App by Empresa",
        title: "Política de Privacidad - Nueva App",
        lastUpdated: "22 de abril de 2026",
        appStoreSummary: [
          "Punto 1...",
          "Punto 2...",
          // ... más puntos ...
        ],
        sections: [
          {
            title: "1. Responsable",
            bullets: [
              "Marca/App: Nueva App by Empresa",
              "Contacto: contact@sebastianfrausto.com",
            ],
          },
          // ... más secciones ...
        ],
      },
      en: {
        // Traducción al inglés con la misma estructura
      },
    },
  },
];
```

### Paso 2: Agregar datos a `src/lib/app-support-info.ts`

```typescript
export const appSupportInfos: AppSupportInfo[] = [
  {
    appSlug: "nueva-app",  // ← debe coincidir con privacy appSlug
    contactEmail: "contact@sebastianfrausto.com",
    platformInfo: "iOS 14.0+",
    privacyPolicyUrl: "/nueva-app/privacidad",
    translations: {
      es: {
        appName: "Nueva App",
        brand: "Nueva App by Empresa",
        faqs: [
          {
            question: "¿Cómo funciona?",
            answer: "Así funciona...",
          },
          // ... más FAQs ...
        ],
      },
      en: {
        // Traducción al inglés
      },
    },
  },
];
```

### Paso 3: Agregar datos a `src/lib/app-marketing-info.ts`

```typescript
export const appMarketingInfos: AppMarketingInfo[] = [
  // ... apps existentes ...
  {
    appSlug: "nueva-app",  // ← debe coincidir con privacy appSlug
    appStoreUrl: "https://apps.apple.com/app/...",
    privacyPolicyUrl: "/nueva-app/privacidad",
    supportUrl: "/nueva-app/soporte",
    translations: {
      es: {
        appName: "Nueva App",
        brand: "Nueva App by Empresa",
        tagline: "Tu descripción aquí",
        description: "Descripción larga...",
        benefits: [
          {
            title: "Beneficio 1",
            description: "Descripción del beneficio 1",
          },
          // ... más beneficios ...
        ],
      },
      en: {
        // Traducción al inglés
      },
    },
  },
];
```

### Paso 4: Crear rutas (copypaste y cambiar `"amigumi"` por `"nueva-app"`)

**`src/app/nueva-app/page.tsx`** (Marketing)
```typescript
import type { Metadata } from "next";
import { getAppMarketingInfo } from "@/lib/app-marketing-info";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import MarketingPage from "@/components/app-pages/MarketingPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Nueva App by Empresa",
  description: "Descripción de Nueva App",
  robots: { index: true, follow: true },
};

export default async function NuevaAppPage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const marketingInfo = getAppMarketingInfo("nueva-app");

  if (!marketingInfo) {
    return <main className="min-h-screen bg-slate-950 text-slate-100">...</main>;
  }

  const translation = getTranslation(marketingInfo.translations, locale);

  return (
    <MarketingPage
      appStoreUrl={marketingInfo.appStoreUrl}
      privacyPolicyUrl={marketingInfo.privacyPolicyUrl}
      supportUrl={marketingInfo.supportUrl}
      translation={translation}
      locale={locale}
      currentPath="/nueva-app"
    />
  );
}
```

**`src/app/nueva-app/soporte/page.tsx`** (Soporte)
```typescript
import type { Metadata } from "next";
import { getAppSupportInfo } from "@/lib/app-support-info";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import SupportPage from "@/components/app-pages/SupportPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Soporte - Nueva App",
  description: "Soporte de Nueva App",
  robots: { index: true, follow: true },
};

export default async function NuevaAppSupportPage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const supportInfo = getAppSupportInfo("nueva-app");

  if (!supportInfo) {
    return <main className="min-h-screen bg-slate-950 text-slate-100">...</main>;
  }

  const translation = getTranslation(supportInfo.translations, locale);

  return (
    <SupportPage
      appSlug={supportInfo.appSlug}
      contactEmail={supportInfo.contactEmail}
      platformInfo={supportInfo.platformInfo}
      privacyPolicyUrl={supportInfo.privacyPolicyUrl}
      translation={translation}
      locale={locale}
      currentPath="/nueva-app/soporte"
    />
  );
}
```

**`src/app/nueva-app/privacidad/page.tsx`** (Privacidad)
```typescript
import type { Metadata } from "next";
import { getPrivacyPolicyByAppSlug } from "@/lib/privacy-policies";
import { getTranslation, resolveLocale } from "@/lib/i18n";
import PrivacyPolicyPage from "@/components/app-pages/PrivacyPolicyPage";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: "Política de Privacidad - Nueva App",
  description: "Política de privacidad de Nueva App",
  robots: { index: true, follow: true },
};

export default async function PrivacyPage({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  const locale = resolveLocale(lang);
  const privacyPolicy = getPrivacyPolicyByAppSlug("nueva-app");

  if (!privacyPolicy) {
    return <main className="min-h-screen bg-slate-950 text-slate-100">...</main>;
  }

  const translation = getTranslation(privacyPolicy.translations, locale);

  return (
    <PrivacyPolicyPage
      translation={translation}
      locale={locale}
      currentPath="/nueva-app/privacidad"
      contactEmail={privacyPolicy.contactEmail}
      owner={privacyPolicy.owner}
    />
  );
}
```

---

## URLs Resultantes

Para una app llamada `nueva-app`:

```
Marketing (Root)
  Español: https://sebastianfrausto.com/nueva-app
  Inglés:  https://sebastianfrausto.com/nueva-app?lang=en

Soporte
  Español: https://sebastianfrausto.com/nueva-app/soporte
  Inglés:  https://sebastianfrausto.com/nueva-app/soporte?lang=en

Privacidad (Público)
  Español: https://sebastianfrausto.com/nueva-app/privacidad
  Inglés:  https://sebastianfrausto.com/nueva-app/privacidad?lang=en
```

---

## Soporte de Idioma (i18n)

### ¿Cómo funciona?

El parámetro `?lang=en` en la URL dispara:

1. **Lectura en page.tsx**: `const { lang } = await searchParams;`
2. **Resolución a Locale**: `const locale = resolveLocale(lang);`
3. **Extracción de traducción**: `const translation = getTranslation(data.translations, locale);`
4. **Fallback automático**: Si no existe traducción en inglés (`translations.en`), devuelve español

### Agregar un nuevo idioma

1. Edita `src/lib/i18n.ts`:
   ```typescript
   export type Locale = "es" | "en" | "fr";  // ← agregar nuevo
   
   export function resolveLocale(lang?: string | string[]): Locale {
     if (!lang) return "es";
     const langStr = Array.isArray(lang) ? lang[0] : lang;
     if (langStr === "en") return "en";
     if (langStr === "fr") return "fr";  // ← agregar nuevo
     return "es";
   }
   ```

2. Agrega `translations.fr` a cada entrada en los 3 archivos de datos.

3. Actualiza `LocaleToggle.tsx` si necesitas mostrar el botón de 3 idiomas.

---

## Verificación de Implementación

```bash
# 1. Compilar sin errores
pnpm run build

# 2. Pruebas en desarrollo
pnpm run dev

# 3. Validar URLs (reemplazar "amigumi" por tu app)
curl http://localhost:3000/amigumi
curl http://localhost:3000/amigumi?lang=en
curl http://localhost:3000/amigumi/soporte
curl http://localhost:3000/amigumi/privacidad
```

---

## Ejemplo Completo: Amigumi

La app **Amigumi by July** ya está implementada como ejemplo completo:

- **Datos**: `src/lib/privacy-policies.ts`, `app-marketing-info.ts`, `app-support-info.ts`
- **Rutas**: `src/app/amigumi/` (page.tsx, soporte/, privacidad/)
- **URLs**:
  - Marketing: `/amigumi` y `/amigumi?lang=en`
  - Soporte: `/amigumi/soporte` y `/amigumi/soporte?lang=en`
  - Privacidad: `/amigumi/privacidad` y `/amigumi/privacidad?lang=en`

Usa Amigumi como referencia al agregar nuevas apps.

---

## Checklist Rápido

Antes de publicar una nueva app en App Store:

- [ ] Entradas en los 3 archivos de datos (`privacy-policies.ts`, `app-support-info.ts`, `app-marketing-info.ts`)
- [ ] El `appSlug` es consistente en los 3 archivos (ej: `"nueva-app"`)
- [ ] URLs de privacidad apuntan a `/[appSlug]/privacidad` (no a `/aviso-legal/...`)
- [ ] Las 3 rutas (page.tsx, soporte/, privacidad/) están creadas
- [ ] `pnpm run build` compila sin errores
- [ ] Traducciones al inglés completas en los 3 archivos
- [ ] Toggle de idioma visible en header de todas las páginas
- [ ] URLs con `?lang=en` funcionan correctamente
- [ ] `contact@sebastianfrausto.com` es el correo en `contactEmail` de support-info

---

## Notas Técnicas

### Arquitectura de Datos

```typescript
// PATTERN COMPARTIDO EN LOS 3 ARCHIVOS:
type DataEntry = {
  // Campos técnicos (no traducibles)
  appSlug: string;           // "amigumi"
  contactEmail: string;
  platformInfo?: string;
  appStoreUrl?: string;

  // Campos traducibles
  translations: {
    es: { appName, brand, ... };  // Español
    en?: { appName, brand, ... };  // Inglés (opcional, fallback a es)
  };
};
```

### Componentes Genéricos

Cada componente es **100% genérico** e idioma-agnóstico:

- `MarketingPage.tsx` — acepta `translation` + `locale`
- `SupportPage.tsx` — acepta `translation` + `locale`
- `PrivacyPolicyPage.tsx` — acepta `translation` + `locale`
- `LocaleToggle.tsx` — maneja el switch de idioma

Las pages (page.tsx) **leen los datos, resuelven el idioma, y delegan al componente**.

### Routes Dinámicas

Todas las rutas son **dinámicas** (marcadas como `ƒ`) porque leen `searchParams.lang`:

```typescript
export default async function Page({ searchParams }: PageProps) {
  const { lang } = await searchParams;
  // ... resto de lógica
}
```

Esto es **correcto** para App Store (las URLs siguen siendo públicas y accesibles).

---

## FAQ Técnico

**P: ¿Por qué no usar `next-intl` o middleware?**
R: Innecesario para este caso de uso. Tenemos solo 2 idiomas, datos estáticos, y no queremos reestructurar rutas.

**P: ¿Puedo agregar un tercer idioma?**
R: Sí. Edita `Locale` en `i18n.ts`, agrega `translations.fr` a los datos, y actualiza `resolveLocale()`.

**P: ¿Qué pasa si una app no tiene traducción al inglés?**
R: `getTranslation()` devuelve automáticamente `translations.es` como fallback.

**P: ¿Debo hospedar estos archivos en App Store Connect?**
R: Sí. Apple solicita URLs públicas de soporte y marketing. Estas son:
- Support: `sebastianfrausto.com/[appSlug]/soporte`
- Marketing: `sebastianfrausto.com/[appSlug]`
- Privacy (opcional): `sebastianfrausto.com/[appSlug]/privacidad`
