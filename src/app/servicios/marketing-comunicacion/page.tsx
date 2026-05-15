import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Automatización para Agencias de Marketing y Comunicación · Visual & Growth España",
  description: "Automatiza la generación de contenido, el reporting y la prospección B2B de tu agencia. Sistemas de cold email inteligente, SEO automatizado y gestión de clientes con IA. Diagnóstico gratuito.",
  keywords: [
    "automatización agencias marketing España",
    "generación contenido IA agencias",
    "automatización cold email B2B agencias",
    "reporting automático marketing digital",
    "sistema contenidos SEO automatizado",
    "CRM agencias comunicación",
    "prospección automática clientes agencia",
    "automatización redes sociales agencias",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/marketing-comunicacion" },
  openGraph: {
    title: "Automatización para Agencias de Marketing · Visual & Growth España",
    description: "Reporting automático, generación de contenido con IA y prospección B2B para agencias de marketing y comunicación.",
    url: "https://visualandgrowth.com/servicios/marketing-comunicacion",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización para Agencias de Marketing y Comunicación",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Sistemas de automatización para agencias de marketing digital y comunicación en España: reporting automático, generación de contenido IA, prospección B2B y gestión de clientes.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Automatización",
  "url": "https://visualandgrowth.com/servicios/marketing-comunicacion",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona el sistema de cold email automatizado para agencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El sistema extrae información pública de cada prospecto (web, LinkedIn, sector), genera un email personalizado con IA que evita los textos de plantilla, lo envía desde tu dominio con la cadencia correcta y registra aperturas y respuestas en un dashboard. Sin intervención manual por cada lead."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede automatizar el reporting mensual para clientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Conectamos Google Analytics, Google Ads, Meta Ads, SEMrush y otras herramientas para generar automáticamente el informe mensual de cada cliente en PDF o Google Slides con los datos actualizados. El account manager solo revisa y añade el comentario estratégico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo ahorra una agencia con el reporting automático?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En agencias con más de 10 clientes, el reporting mensual manual consume entre 2 y 4 horas por cliente. Con automatización, ese tiempo baja a 20-30 minutos de revisión. En una agencia con 20 clientes, eso supone recuperar entre 28 y 70 horas al mes."
      }
    },
    {
      "@type": "Question",
      "name": "¿La generación de contenido con IA reemplaza a los redactores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, los complementa. La IA genera el borrador basado en la keyword, el tono de marca y la estructura SEO. El redactor revisa, añade perspectiva y firma. El resultado es 3-4 veces más producción con el mismo equipo, no eliminar al equipo."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Marketing & Comunicación",
  h1: "Automatización para Agencias de Marketing y Comunicación en España",
  subtitle: "Genera más contenido, cierra más clientes y entrega mejores informes — con el mismo equipo.",
  intro: "Las agencias de marketing que crecen en 2026 no son las que contratan más personal, sino las que automatizan mejor lo repetitivo. Reporting, prospección, generación de borradores y seguimiento de clientes pueden automatizarse sin perder calidad. Tu equipo se reserva para lo que realmente requiere criterio creativo.",
  heroStat: {
    value: "70h/mes",
    label: "tiempo recuperado en reporting mensual en una agencia con 20 clientes activos tras implementar automatización",
    source: "Estimación basada en proyectos V&G con agencias digitales · 2025"
  },
  problems: [
    {
      icon: "📈",
      title: "El reporting mensual consume días de trabajo",
      desc: "Recopilar datos de 10 plataformas distintas, construir el informe y adaptarlo a cada cliente se convierte en el mayor cuello de botella de cada fin de mes."
    },
    {
      icon: "✍️",
      title: "La producción de contenido nunca es suficientemente rápida",
      desc: "Los clientes quieren más artículos, más posts, más newsletters. El equipo creativo no da abasto y la calidad sufre cuando se acelera."
    },
    {
      icon: "📬",
      title: "La prospección de nuevos clientes se hace en momentos de calma",
      desc: "Cuando la agencia tiene trabajo, nadie prospecta. Cuando escasea, hay que empezar desde cero. Sin un sistema de prospección constante, el pipeline es un ciclo de fiesta y hambre."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Reporting Automático Multi-Plataforma",
      desc: "Google Analytics, Ads, Meta, SEMrush y LinkedIn conectados. El informe se genera automáticamente con los datos del mes y llega al account manager listo para revisar."
    },
    {
      tag: "Hyper-Automation",
      title: "Sistema de Cold Email B2B Inteligente",
      desc: "Prospección automática con emails personalizados por IA para cada empresa objetivo. No es spam masivo: es personalización a escala con seguimiento automático."
    },
    {
      tag: "Content Studio",
      title: "Pipeline de Contenido SEO con IA",
      desc: "Del keyword research al borrador optimizado en minutos. El equipo editorial solo revisa y aprueba. 4x más producción con el mismo equipo."
    },
    {
      tag: "Hyper-Automation",
      title: "CRM de Clientes con Alertas de Churn",
      desc: "El sistema detecta señales de cliente en riesgo (menor engagement, respuestas tardías, caída de métricas) y alerta al account manager antes de que llegue la cancelación."
    },
    {
      tag: "Market Authority",
      title: "Autoridad SEO para la Propia Agencia",
      desc: "Muchas agencias de marketing tienen webs mal posicionadas. Construimos la autoridad orgánica de tu propia agencia para que los clientes te encuentren antes que a la competencia."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Diseño del Modelo de Agencia Escalable",
      desc: "Reestructuramos los servicios, precios y procesos de la agencia para que el crecimiento no dependa de contratar más personas, sino de sistematizar mejor."
    }
  ],
  dataPoints: [
    { value: "2-4h", label: "tiempo por cliente en reporting manual mensual en agencias sin automatización" },
    { value: "×4", label: "incremento de producción de contenido con pipelines de IA supervisados por equipo editorial" },
    { value: "439.028", label: "empresas activas en Barcelona (94.446 validadas) — mercado de prospección para agencias catalanas" },
    { value: "68%", label: "de agencias digitales españolas no tiene un sistema estructurado de prospección de nuevos clientes" },
  ],
  faqs: [
    {
      q: "¿Cómo funciona el sistema de cold email automatizado para agencias?",
      a: "El sistema extrae información pública de cada prospecto (web, LinkedIn, sector), genera un email personalizado con IA, lo envía desde tu dominio con la cadencia correcta y registra aperturas y respuestas en un dashboard. Sin intervención manual por cada lead."
    },
    {
      q: "¿Se puede automatizar el reporting mensual para clientes?",
      a: "Sí. Conectamos Google Analytics, Google Ads, Meta Ads y otras herramientas para generar automáticamente el informe mensual en PDF o Google Slides con los datos actualizados. El account manager solo revisa y añade el comentario estratégico."
    },
    {
      q: "¿Cuánto tiempo ahorra una agencia con el reporting automático?",
      a: "En agencias con más de 10 clientes, el reporting manual consume entre 2 y 4 horas por cliente. Con automatización, ese tiempo baja a 20-30 minutos de revisión. En una agencia con 20 clientes, eso supone recuperar entre 28 y 70 horas al mes."
    },
    {
      q: "¿La generación de contenido con IA reemplaza a los redactores?",
      a: "No, los complementa. La IA genera el borrador basado en la keyword, el tono de marca y la estructura SEO. El redactor revisa, añade perspectiva y firma. El resultado es 3-4 veces más producción con el mismo equipo."
    },
  ],
  cta: "¿Tu agencia crece al ritmo que podría, o el operativo lo frena?"
};

export default function MarketingComunicacionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
