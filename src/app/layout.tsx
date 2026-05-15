import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: "Visual & Growth | Automatización IA y Growth Marketing para PYMES · España 2026",
  description: "Consultoría boutique B2B en España. Automatización IA, SEO, diseño UI/UX y estrategia de crecimiento para empresas de 1 a 500 empleados. Diagnóstico gratuito.",
  keywords: [
    "consultoría automatización IA España",
    "growth marketing B2B PYMES",
    "automatización procesos empresas Madrid",
    "agencia SEO B2B España",
    "consultoría estratégica crecimiento empresas",
    "diseño web empresas B2B",
    "automatización ventas CRM PYMES",
    "chatbot atención al cliente empresas",
    "digitalización PYMES España",
    "growth hacking empresas medianas",
    "consultoría automatización clínicas",
    "automatización inmobiliarias IA",
    "digitalización constructoras España",
    "automatización asesorías legales",
  ],
  authors: [
    { name: "Pablo Pérez", url: "https://visualandgrowth.com" },
    { name: "Ignacio Viñas", url: "https://visualandgrowth.com" },
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://visualandgrowth.com",
  },
  icons: {
    icon: [
      { url: "/icon-v8.png", type: "image/png" },
      { url: "/favicon-v8.ico", rel: "icon" }
    ],
    apple: "/icon-v8.png",
  },
  openGraph: {
    title: "Visual & Growth | Automatización IA y Growth Marketing para PYMES en España",
    description: "Consultoría boutique B2B. Automatizamos procesos, posicionamos marcas y diseñamos productos digitales para empresas de 1 a 500 empleados en España.",
    url: "https://visualandgrowth.com",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://visualandgrowth.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Visual & Growth — Consultoría de Growth Engineering para PYMES en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual & Growth | Automatización IA y Growth Marketing para PYMES",
    description: "Consultoría boutique B2B en España. Automatización IA, SEO y estrategia de crecimiento para empresas de 1 a 500 empleados.",
    images: ["https://visualandgrowth.com/og-image.png"],
  },
};

// ── JSON-LD Schemas ────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://visualandgrowth.com/#organization",
  "name": "Visual & Growth",
  "alternateName": "Visual and Growth",
  "url": "https://visualandgrowth.com",
  "logo": "https://visualandgrowth.com/logo-full.png",
  "description": "Consultoría boutique de growth engineering para empresas de 1 a 500 empleados en España. Especialistas en automatización IA, SEO B2B, diseño UI/UX y estrategia de crecimiento.",
  "foundingDate": "2024",
  "areaServed": { "@type": "Country", "name": "España" },
  "address": { "@type": "PostalAddress", "addressCountry": "ES" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "pabloperez@visualandgrowth.com",
    "availableLanguage": "Spanish"
  },
  "sameAs": [
    "https://www.linkedin.com/company/visual-growth"
  ],
  "knowsAbout": [
    "Automatización de procesos con Inteligencia Artificial",
    "Growth Marketing B2B para PYMES",
    "SEO y posicionamiento orgánico",
    "Diseño UX/UI y branding",
    "Consultoría estratégica de crecimiento empresarial",
    "Automatización de ventas y CRM",
    "Digitalización de PYMES en España"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Growth Engineering",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estrategia & Consultoría",
          "description": "Diseño de la hoja de ruta para escalar la facturación de empresas mediante consultoría estratégica de growth marketing B2B.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hyper-Automation",
          "description": "Automatización inteligente de procesos operativos y comerciales mediante IA para empresas de 1 a 500 empleados en España.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Market Authority — SEO B2B",
          "description": "Posicionamiento orgánico y autoridad de mercado para dominar términos de alta intención de compra B2B en España.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Boutique — UI/UX & Branding",
          "description": "Diseño de productos digitales y branding premium para empresas B2B que quieren elevar su percepción de valor.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Smart Structure — Legal & Fiscal",
          "description": "Optimización de estructura fiscal y legal para empresas en crecimiento en España.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Studio",
          "description": "Estrategia de contenidos y producción de medios para construir autoridad de marca B2B.",
          "provider": { "@id": "https://visualandgrowth.com/#organization" }
        }
      }
    ]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://visualandgrowth.com/#website",
  "url": "https://visualandgrowth.com",
  "name": "Visual & Growth",
  "description": "Consultoría boutique de growth engineering para empresas en España",
  "publisher": { "@id": "https://visualandgrowth.com/#organization" },
  "inLanguage": "es-ES",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://visualandgrowth.com/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const pabloSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://visualandgrowth.com/#pablo-perez",
  "name": "Pablo Pérez",
  "jobTitle": "Co-CEO & Growth Strategist",
  "worksFor": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Ex-Google Cloud Business Strategist. Experto en growth marketing B2B, automatización IA y estrategia de crecimiento para PYMES en España.",
  "sameAs": ["https://www.linkedin.com/in/pabloperez"],
  "knowsAbout": [
    "Growth Marketing B2B",
    "Automatización con Inteligencia Artificial",
    "Google Cloud",
    "Estrategia de negocio para PYMES",
    "Ventas B2B"
  ]
};

const ignacioSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://visualandgrowth.com/#ignacio-vinas",
  "name": "Ignacio Viñas",
  "jobTitle": "Co-CEO & Brand Director",
  "worksFor": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Filmmaker y Estratega Visual. Especialista en identidad de marca, diseño UI/UX y producción de contenido para empresas B2B.",
  "knowsAbout": [
    "Brand Strategy",
    "UI/UX Design",
    "Identidad Visual",
    "Producción de Contenido",
    "Branding B2B"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pabloSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ignacioSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
