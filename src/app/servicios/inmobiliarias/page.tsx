import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Automatización para Inmobiliarias · CRM y Captación de Leads con IA · Visual & Growth",
  description: "Automatiza la captación de leads, seguimiento de clientes y gestión documental en tu inmobiliaria. CRM inteligente, chatbot WhatsApp y cualificación automática. Diagnóstico gratuito.",
  keywords: [
    "automatización inmobiliarias España",
    "CRM inmobiliario inteligente IA",
    "captación leads inmobiliaria automática",
    "chatbot WhatsApp inmobiliaria",
    "cualificación automática compradores",
    "gestión documental inmobiliaria",
    "software automatización agencia inmobiliaria",
    "lead nurturing inmobiliario España",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/inmobiliarias" },
  openGraph: {
    title: "Automatización para Inmobiliarias · Visual & Growth España",
    description: "CRM inteligente, chatbot WhatsApp y captación automática de leads para inmobiliarias en España.",
    url: "https://visualandgrowth.com/servicios/inmobiliarias",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización y CRM Inteligente para Inmobiliarias",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Automatización de procesos para agencias inmobiliarias en España: CRM con IA, captación y cualificación automática de leads, chatbot WhatsApp y gestión documental.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Automatización",
  "url": "https://visualandgrowth.com/servicios/inmobiliarias",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona la cualificación automática de leads en una inmobiliaria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuando un lead entra por el portal (Idealista, Fotocasa, web propia), el sistema envía automáticamente una serie de preguntas por WhatsApp o email para determinar su presupuesto, zona de interés, urgencia y situación financiera. Los leads cualificados llegan al agente con un score y el contexto completo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con Idealista, Fotocasa y otros portales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Conectamos los leads de los principales portales inmobiliarios españoles (Idealista, Fotocasa, Habitaclia, Pisos.com) con tu CRM o con el sistema que implementemos. El lead se captura y procesa automáticamente sin acción manual."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto mejora la tasa de conversión con la automatización?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El principal impacto está en la velocidad de respuesta: responder a un lead en menos de 5 minutos multiplica la probabilidad de cierre por 9 respecto a responder en más de 30 minutos (Harvard Business Review). La automatización garantiza esa respuesta inmediata 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede automatizar la firma de contratos de arrendamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Implementamos flujos de firma electrónica con plataformas como Signaturit o DocuSign que permiten enviar, firmar y archivar contratos de arrendamiento o compraventa de forma digital. Compatible con la legislación española y con plena validez jurídica."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Inmobiliarias",
  h1: "Automatización y CRM Inteligente para Inmobiliarias en España",
  subtitle: "Responde a cada lead en menos de 5 minutos, 24 horas al día, sin que tu equipo mueva un dedo.",
  intro: "En el mercado inmobiliario español, la velocidad de respuesta es el factor diferencial más infrautilizado. El 78% de los compradores elige a la primera agencia que les responde. Automatizamos la captación, cualificación y seguimiento de leads para que tu equipo solo hable con quienes realmente quieren comprar o alquilar.",
  heroStat: {
    value: "×9",
    label: "más probabilidad de cerrar una operación si respondes al lead en menos de 5 minutos vs. 30 minutos",
    source: "Harvard Business Review — Lead Response Management Study"
  },
  problems: [
    {
      icon: "⏱️",
      title: "Leads que se enfrían por falta de respuesta rápida",
      desc: "Un comprador que envía una consulta a tres agencias a las 22h elige la que responde primero. Si tu agente está durmiendo, el lead ya se fue."
    },
    {
      icon: "🗃️",
      title: "CRM desactualizado o directamente inexistente",
      desc: "El seguimiento de clientes en Excel o en la memoria del agente crea fugas: clientes que se olvidan, operaciones que no se cierran por falta de seguimiento."
    },
    {
      icon: "📑",
      title: "Gestión documental lenta y propensa a errores",
      desc: "Preparar una oferta, un contrato de arras o la documentación para notaría a mano consume horas que podrían dedicarse a captar más propiedades."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Chatbot de Captación por WhatsApp 24/7",
      desc: "El lead entra desde cualquier portal o web, recibe una respuesta inmediata por WhatsApp, se cualifica automáticamente y llega a tu agente con el contexto completo."
    },
    {
      tag: "Hyper-Automation",
      title: "CRM Inmobiliario con Scoring de Leads",
      desc: "Cada lead recibe una puntuación automática según presupuesto, urgencia y zona. Tu equipo prioriza los que más probabilidad tienen de cerrar."
    },
    {
      tag: "Hyper-Automation",
      title: "Integración con Idealista, Fotocasa y Portales",
      desc: "Captamos automáticamente todos los leads de los portales donde publicas y los centralizamos en un único sistema, eliminando la gestión manual portal a portal."
    },
    {
      tag: "Hyper-Automation",
      title: "Firma Electrónica de Contratos",
      desc: "Contratos de arras, arrendamiento o compraventa firmados digitalmente en minutos. Válido legalmente en España y archivado automáticamente."
    },
    {
      tag: "Market Authority",
      title: "SEO Local para Búsquedas de Alta Intención",
      desc: "Posicionamiento para términos como \"piso en venta [barrio/ciudad]\" o \"inmobiliaria especializada en [zona]\". Tráfico orgánico de compradores con intención real."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Auditoría del Funnel de Ventas Inmobiliario",
      desc: "Analizamos cada etapa desde el primer contacto hasta la firma y detectamos dónde se pierden más operaciones y por qué."
    }
  ],
  dataPoints: [
    { value: "562.117", label: "empresas activas en Madrid (108.492 validadas), mercado objetivo principal para inmobiliarias" },
    { value: "78%", label: "de compradores elige la primera agencia que les responde (National Association of Realtors)" },
    { value: "40%", label: "de los leads inmobiliarios no reciben seguimiento más allá del primer contacto" },
    { value: "5 min", label: "tiempo de respuesta que multiplica por 9 la probabilidad de cierre (Harvard Business Review)" },
  ],
  faqs: [
    {
      q: "¿Cómo funciona la cualificación automática de leads en una inmobiliaria?",
      a: "Cuando un lead entra por el portal, el sistema envía automáticamente una serie de preguntas por WhatsApp o email para determinar su presupuesto, zona de interés, urgencia y situación financiera. Los leads cualificados llegan al agente con un score y el contexto completo."
    },
    {
      q: "¿Funciona con Idealista, Fotocasa y otros portales?",
      a: "Sí. Conectamos los leads de los principales portales inmobiliarios españoles (Idealista, Fotocasa, Habitaclia, Pisos.com) con tu CRM. El lead se captura y procesa automáticamente sin acción manual."
    },
    {
      q: "¿Cuánto mejora la tasa de conversión con la automatización?",
      a: "El principal impacto está en la velocidad de respuesta: responder a un lead en menos de 5 minutos multiplica la probabilidad de cierre por 9 respecto a responder en más de 30 minutos. La automatización garantiza esa respuesta inmediata 24/7."
    },
    {
      q: "¿Se puede automatizar la firma de contratos de arrendamiento?",
      a: "Sí. Implementamos flujos de firma electrónica con plataformas como Signaturit o DocuSign que permiten enviar, firmar y archivar contratos de forma digital. Compatible con la legislación española y con plena validez jurídica."
    },
  ],
  cta: "¿Cuántos leads pierde tu agencia cada semana por llegar tarde?"
};

export default function InmobiliariasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
