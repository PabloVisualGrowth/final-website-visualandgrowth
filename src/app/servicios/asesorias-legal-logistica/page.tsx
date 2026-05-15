import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Automatización para Asesorías, Despachos Legales y Logística · Visual & Growth España",
  description: "Automatiza la gestión documental, facturación Verifactu y seguimiento de clientes en tu asesoría o despacho. IA para contratos, compliance y logística. Diagnóstico gratuito.",
  keywords: [
    "automatización asesorías España",
    "digitalización despachos abogados",
    "gestión documental IA legal",
    "automatización facturación Verifactu",
    "software gestión asesoría fiscal",
    "automatización contratos legales IA",
    "digitalización logística España",
    "CRM clientes asesoría automatizado",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/asesorias-legal-logistica" },
  openGraph: {
    title: "Automatización para Asesorías y Despachos Legales · Visual & Growth",
    description: "Gestión documental automatizada, Verifactu y CRM inteligente para asesorías, despachos legales y empresas de logística en España.",
    url: "https://visualandgrowth.com/servicios/asesorias-legal-logistica",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización para Asesorías, Despachos Legales y Logística",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Automatización de procesos para asesorías fiscales, despachos de abogados y empresas de logística en España: gestión documental, Verifactu, CRM de clientes y compliance automático.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Automatización",
  "url": "https://visualandgrowth.com/servicios/asesorias-legal-logistica",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es Verifactu y por qué las asesorías deben prepararse ya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verifactu es el sistema de facturación electrónica de la AEAT que será obligatorio para autónomos y empresas en España a partir de 2025-2026. Las asesorías que no estén preparadas tendrán que migrar sus clientes con urgencia. Implementamos la adaptación técnica y el flujo de facturación automática compatible con Verifactu."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se automatiza la gestión documental en un despacho de abogados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementamos un sistema donde los documentos de cliente (contratos, poderes, escrituras) se clasifican automáticamente al llegar por email, se vinculan al expediente correspondiente y se archivan con los metadatos correctos. La búsqueda posterior es instantánea y sin riesgo de pérdida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede la IA revisar contratos y detectar cláusulas problemáticas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, con matices. La IA puede revisar contratos estándar y señalar ausencias de cláusulas habituales, discrepancias con plantillas base o términos fuera de rango. No reemplaza al abogado en la revisión de fondo, pero reduce el tiempo de revisión inicial de 2 horas a 15 minutos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo mejora la automatización la retención de clientes en una asesoría?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El principal factor de churn en asesorías es la falta de comunicación proactiva. Un sistema automatizado envía alertas fiscales relevantes a cada cliente, recordatorios de obligaciones periódicas y actualizaciones normativas personalizadas. El cliente percibe más valor sin que el equipo trabaje más horas."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Asesorías & Legal",
  h1: "Automatización para Asesorías, Despachos Legales y Logística en España",
  subtitle: "Menos tiempo en burocracia, más tiempo para el trabajo que el cliente realmente valora.",
  intro: "Una asesoría o despacho legal que crece no puede seguir gestionando expedientes, facturas y comunicaciones con clientes de forma manual. El tiempo administrativo es el mayor freno al crecimiento. Automatizamos los procesos que no requieren criterio profesional para que tu equipo se centre en aportar valor real.",
  heroStat: {
    value: "40%",
    label: "del tiempo de un asesor o abogado se dedica a tareas administrativas que pueden automatizarse parcial o totalmente",
    source: "Estudio de productividad en despachos profesionales — Thomson Reuters 2024"
  },
  problems: [
    {
      icon: "📁",
      title: "Gestión documental caótica y búsquedas que consumen tiempo",
      desc: "Encontrar un contrato firmado hace 2 años o la última declaración de un cliente específico puede llevar minutos o más. Multiplicado por 50 clientes, es una fuga de horas semanales."
    },
    {
      icon: "🧾",
      title: "Facturación y compliance en proceso de digitalización obligatoria",
      desc: "Verifactu ya es una realidad y la factura electrónica obligatoria se acerca. Las asesorías que no preparen a sus clientes ahora tendrán que hacerlo bajo presión y con errores."
    },
    {
      icon: "🔄",
      title: "Seguimiento de clientes que depende de la memoria del asesor",
      desc: "Sin un sistema de CRM, el seguimiento de cada cliente depende de quién lleva la cuenta. Si ese profesional deja la firma, el conocimiento del cliente se va con él."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Gestión Documental Automatizada con IA",
      desc: "Los documentos de cliente se clasifican, nombran y archivan automáticamente al llegar. Búsqueda instantánea por cliente, tipo de documento o fecha. Sin pérdidas, sin tiempo perdido."
    },
    {
      tag: "Smart Structure",
      title: "Adaptación a Verifactu y Factura Electrónica",
      desc: "Implementación técnica del sistema de facturación electrónica obligatorio. Migramos a tus clientes con el flujo correcto antes de que sea urgente."
    },
    {
      tag: "Hyper-Automation",
      title: "CRM de Clientes con Alertas Proactivas",
      desc: "Cada cliente recibe automáticamente recordatorios de obligaciones periódicas (IVA trimestral, declaraciones, renovaciones). El asesor interviene cuando hay algo que gestionar, no para recordar fechas."
    },
    {
      tag: "Hyper-Automation",
      title: "Revisión de Contratos con IA",
      desc: "Primera revisión automática de contratos estándar: detección de cláusulas ausentes, discrepancias con plantillas y términos fuera de rango. El abogado revisa el resumen, no el documento completo."
    },
    {
      tag: "Hyper-Automation",
      title: "Automatización de Rutas y Documentación Logística",
      desc: "Para empresas de logística: optimización automática de rutas, generación de albaranes de entrega y seguimiento de envíos en tiempo real integrado con el sistema de gestión."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Rediseño del Modelo de Servicio Recurrente",
      desc: "Estructuramos los servicios de la asesoría en paquetes de valor con facturación recurrente predecible, que mejoran la retención y facilitan la planificación del equipo."
    }
  ],
  dataPoints: [
    { value: "40%", label: "del tiempo de asesores y abogados dedicado a tareas administrativas automatizables (Thomson Reuters 2024)" },
    { value: "2026", label: "año límite para la adaptación obligatoria a la factura electrónica y Verifactu en España" },
    { value: "85.593", label: "asesorías y despachos profesionales activos en España con 11-50 empleados (INE 2024)" },
    { value: "15 min", label: "tiempo de revisión inicial de un contrato estándar con IA vs. 2 horas de revisión manual" },
  ],
  faqs: [
    {
      q: "¿Qué es Verifactu y por qué las asesorías deben prepararse ya?",
      a: "Verifactu es el sistema de facturación electrónica de la AEAT que será obligatorio para autónomos y empresas en España. Las asesorías que no estén preparadas tendrán que migrar sus clientes con urgencia. Implementamos la adaptación técnica y el flujo de facturación automática compatible con Verifactu."
    },
    {
      q: "¿Cómo se automatiza la gestión documental en un despacho de abogados?",
      a: "Los documentos de cliente se clasifican automáticamente al llegar por email, se vinculan al expediente correspondiente y se archivan con los metadatos correctos. La búsqueda posterior es instantánea y sin riesgo de pérdida."
    },
    {
      q: "¿Puede la IA revisar contratos y detectar cláusulas problemáticas?",
      a: "Sí, con matices. La IA puede revisar contratos estándar y señalar ausencias de cláusulas habituales o discrepancias con plantillas base. No reemplaza al abogado en la revisión de fondo, pero reduce el tiempo de revisión inicial de 2 horas a 15 minutos."
    },
    {
      q: "¿Cómo mejora la automatización la retención de clientes en una asesoría?",
      a: "El principal factor de churn en asesorías es la falta de comunicación proactiva. Un sistema automatizado envía alertas fiscales relevantes, recordatorios de obligaciones y actualizaciones normativas personalizadas. El cliente percibe más valor sin que el equipo trabaje más horas."
    },
  ],
  cta: "¿Cuántas horas dedica tu equipo esta semana a tareas que no requieren vuestro criterio profesional?"
};

export default function AsesoriasLegalLogisticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
