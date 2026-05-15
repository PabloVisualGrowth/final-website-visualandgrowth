import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Digitalización para Constructoras y Empresas de Construcción · Visual & Growth",
  description: "Automatiza albaranes, presupuestos y control de obra en tu constructora. Digitalización de documentos PDF, gestión de proveedores y seguimiento en tiempo real. Diagnóstico gratuito.",
  keywords: [
    "digitalización constructoras España",
    "automatización albaranes construcción",
    "gestión obra digital IA",
    "software gestión constructora PYME",
    "automatización presupuestos construcción",
    "digitalización facturas proveedores obras",
    "control de obra en tiempo real",
    "automatización infraestructura empresa",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/construccion" },
  openGraph: {
    title: "Digitalización para Constructoras · Visual & Growth España",
    description: "Elimina el papel en tus obras. Automatización de albaranes, presupuestos y control de obra para constructoras en España.",
    url: "https://visualandgrowth.com/servicios/construccion",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digitalización y Automatización para Constructoras",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Digitalización de procesos para empresas de construcción e infraestructura en España: automatización de albaranes PDF, gestión de proveedores, control de obra y presupuestación.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Digitalización",
  "url": "https://visualandgrowth.com/servicios/construccion",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo se automatizan los albaranes de una obra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Implementamos un flujo donde el parte de trabajo o albarán se genera digitalmente desde el móvil del jefe de obra, se firma electrónicamente in situ y se archiva automáticamente vinculado al proyecto. Elimina el papel, los errores de transcripción y el tiempo de administrativos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede integrar con nuestro ERP o software de contabilidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Trabajamos con conectores para los principales ERP del sector (SAP, Sage, Holded, A3) y cualquier sistema con API o exportación CSV/Excel. El objetivo es que los datos fluyan sin intervención manual entre obra, administración y contabilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en recuperarse la inversión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En constructoras con más de 10 obras simultáneas, el ahorro en horas administrativas y errores de facturación suele amortizar la inversión en menos de 3 meses. El impacto principal está en la reducción de facturas duplicadas, albaranes perdidos y retrasos en cobros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Funciona para obras pequeñas o solo para grandes constructoras?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos principalmente con constructoras de 5 a 200 empleados. Para obras pequeñas con pocos documentos, el beneficio es menor. El punto de inflexión suele estar en empresas con más de 3 obras simultáneas o más de 50 albaranes mensuales."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Construcción",
  h1: "Digitalización para Constructoras y Empresas de Construcción en España",
  subtitle: "Elimina el papel en tus obras. Automatiza albaranes, presupuestos y control de obra desde el móvil.",
  intro: "El sector de la construcción en España mueve más de 130.000 millones de euros al año, pero muchas constructoras medianas siguen gestionando obras con Excel, llamadas de teléfono y albaranes en papel. Cada documento perdido o error de facturación tiene un coste directo. Lo digitalizamos.",
  heroStat: {
    value: "130.000M€",
    label: "facturación del sector de construcción en España en 2024 — con una digitalización media del 34%",
    source: "Ministerio de Transportes, Movilidad y Agenda Urbana · Eurostat 2024"
  },
  problems: [
    {
      icon: "📄",
      title: "Albaranes en papel que se pierden o llegan tarde",
      desc: "Un albarán extraviado en obra es una factura que no se cobra o se cobra tarde. En constructoras con varias obras activas, el problema se multiplica."
    },
    {
      icon: "📊",
      title: "Control de costes por obra sin visibilidad en tiempo real",
      desc: "Saber si una obra está dentro del presupuesto requiere esperar al cierre mensual. Para entonces, el sobrecoste ya se ha producido."
    },
    {
      icon: "🔧",
      title: "Proveedores que hay que perseguir para cuadrar facturas",
      desc: "Conciliar facturas de proveedores con albaranes de obra consume horas de administración cada semana. Errores que acaban en disputas y retrasos de pago."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Digitalización de Albaranes y Partes de Obra",
      desc: "Parte de trabajo desde el móvil, firma digital in situ, archivado automático por proyecto y proveedor. Sin papel, sin pérdidas."
    },
    {
      tag: "Hyper-Automation",
      title: "Extracción Automática de Datos de Facturas PDF",
      desc: "Las facturas de proveedores llegan por email y se procesan solas: extracción de datos, validación contra albarán y registro contable automático."
    },
    {
      tag: "Hyper-Automation",
      title: "Dashboard de Control de Obra en Tiempo Real",
      desc: "Panel centralizado con costes, avance y desviaciones por obra. Alerta automática cuando una partida supera el presupuesto."
    },
    {
      tag: "Hyper-Automation",
      title: "Automatización de Presupuestos con IA",
      desc: "Generación semi-automática de presupuestos a partir de mediciones o planos. Reduce el tiempo de elaboración de días a horas."
    },
    {
      tag: "Smart Structure",
      title: "Adaptación a Verifactu y Facturación Electrónica",
      desc: "Implementación del sistema de facturación electrónica obligatorio en España para empresas del sector de la construcción."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Auditoría de Procesos de Obra a Oficina",
      desc: "Mapeamos el flujo completo desde el inicio de obra hasta el cobro y detectamos los 3 puntos de mayor pérdida de tiempo y dinero."
    }
  ],
  dataPoints: [
    { value: "34%", label: "nivel medio de digitalización en constructoras españolas (muy por debajo de la media europea del 58%)" },
    { value: "127.000+", label: "empresas de construcción activas en España con 1-50 empleados" },
    { value: "3-5%", label: "del margen de obra se pierde en errores de facturación y albaranes no procesados" },
    { value: "3 meses", label: "tiempo medio de retorno de inversión en proyectos de digitalización para constructoras medianas" },
  ],
  faqs: [
    {
      q: "¿Cómo se automatizan los albaranes de una obra?",
      a: "Implementamos un flujo donde el parte de trabajo o albarán se genera digitalmente desde el móvil del jefe de obra, se firma electrónicamente in situ y se archiva automáticamente vinculado al proyecto. Elimina el papel, los errores de transcripción y el tiempo de administrativos."
    },
    {
      q: "¿Se puede integrar con nuestro ERP o software de contabilidad?",
      a: "Sí. Trabajamos con conectores para los principales ERP del sector (SAP, Sage, Holded, A3) y cualquier sistema con API o exportación CSV. El objetivo es que los datos fluyan sin intervención manual entre obra, administración y contabilidad."
    },
    {
      q: "¿Cuánto tiempo tarda en recuperarse la inversión?",
      a: "En constructoras con más de 10 obras simultáneas, el ahorro en horas administrativas y errores de facturación suele amortizar la inversión en menos de 3 meses. El impacto principal está en la reducción de facturas duplicadas, albaranes perdidos y retrasos en cobros."
    },
    {
      q: "¿Funciona para obras pequeñas o solo para grandes constructoras?",
      a: "Trabajamos principalmente con constructoras de 5 a 200 empleados. El punto de inflexión suele estar en empresas con más de 3 obras simultáneas o más de 50 albaranes mensuales."
    },
  ],
  cta: "¿Cuántas horas pierde tu equipo cada semana en gestión de documentos de obra?"
};

export default function ConstruccionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
