import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Automatización para Industria y Manufactura · IA y ERP · Visual & Growth España",
  description: "Optimiza tu cadena de suministro, conecta tu ERP con IA y automatiza procesos repetitivos en planta. Para PYMES industriales de 10 a 500 empleados en España. Diagnóstico gratuito.",
  keywords: [
    "automatización industria España",
    "digitalización manufactura PYME",
    "optimización cadena suministro IA",
    "integración ERP automatización",
    "automatización procesos repetitivos fábrica",
    "digitalización planta industrial",
    "predictive maintenance IA manufactura",
    "automatización logística interna",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/industria-manufactura" },
  openGraph: {
    title: "Automatización para Industria y Manufactura · Visual & Growth",
    description: "Conecta tu ERP, optimiza la cadena de suministro y automatiza procesos repetitivos en planta con IA.",
    url: "https://visualandgrowth.com/servicios/industria-manufactura",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización e IA para Industria y Manufactura",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Automatización de procesos industriales para PYMES manufactureras en España: integración ERP, optimización de cadena de suministro, reporting automático y digitalización de planta.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Automatización Industrial",
  "url": "https://visualandgrowth.com/servicios/industria-manufactura",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué procesos industriales se pueden automatizar con IA sin cambiar el ERP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sin tocar el ERP, se pueden automatizar: la generación de informes de producción, las alertas de stock mínimo, la comunicación de pedidos a proveedores, la conciliación de albaranes con pedidos y el seguimiento de KPIs de planta. Todo mediante conectores que leen y escriben en el ERP existente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva implementar la automatización en una PYME industrial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un primer módulo de automatización (por ejemplo, reporting automático de producción o alertas de stock) se despliega en 2-4 semanas. Un proyecto completo de digitalización de planta puede llevar 3-6 meses dependiendo de la complejidad del entorno tecnológico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es necesario tener un departamento IT para mantener la automatización?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Los sistemas que implementamos están diseñados para ser mantenidos por personal no técnico. Entregamos documentación, formación y soporte. Para cambios o ampliaciones, trabajamos bajo contrato de mantenimiento o por proyecto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se conecta la automatización con sistemas legados (software antiguo)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de sistemas legados tienen alguna forma de exportación (CSV, Excel, base de datos SQL) o acceso web. Utilizamos esas salidas de datos para construir la integración. Solo en casos sin ninguna opción de exportación es necesario plantear una migración."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Industria & Manufactura",
  h1: "Automatización e IA para PYMES Industriales y de Manufactura en España",
  subtitle: "Conecta tu ERP, elimina el Excel de producción y toma decisiones con datos en tiempo real.",
  intro: "El 66% de las PYMES industriales españolas con 10-50 empleados sigue gestionando la producción y el stock con hojas de cálculo. Cada hora de retraso en detectar un problema de suministro o un cuello de botella en planta se traduce en coste directo. Conectamos tus sistemas y automatizamos lo repetitivo para que tu equipo se centre en producir.",
  heroStat: {
    value: "85.593",
    label: "PYMES industriales en España con 11-50 empleados — el segmento con mayor potencial de automatización sin grandes inversiones",
    source: "DIRCE — Directorio Central de Empresas, INE 2024"
  },
  problems: [
    {
      icon: "📊",
      title: "Reporting de producción manual y siempre tarde",
      desc: "Los KPIs de planta se calculan a final de semana en Excel. Para entonces, los problemas que podrían haberse corregido ya tienen impacto en entregas y costes."
    },
    {
      icon: "🔗",
      title: "ERP desconectado del resto de herramientas",
      desc: "El ERP tiene los datos pero no habla con el correo, el almacén ni los proveedores. El equipo copia datos manualmente entre sistemas varias veces al día."
    },
    {
      icon: "📦",
      title: "Roturas de stock que se detectan cuando ya es tarde",
      desc: "Sin alertas automáticas de stock mínimo, los pedidos de reposición se hacen cuando ya hay un problema. El coste de una parada de producción supera con creces el de la reposición urgente."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Integración ERP con Sistemas de Planta",
      desc: "Conectamos tu ERP (SAP, Sage, Navision, Holded) con las herramientas de producción, almacén y logística para que los datos fluyan sin intervención manual."
    },
    {
      tag: "Hyper-Automation",
      title: "Reporting Automático de Producción y KPIs",
      desc: "Informe diario de producción generado automáticamente y enviado por email o Slack. OEE, rendimiento por línea y comparativa vs. objetivo sin que nadie lo calcule."
    },
    {
      tag: "Hyper-Automation",
      title: "Alertas Inteligentes de Stock y Reposición",
      desc: "El sistema monitoriza el stock en tiempo real y genera automáticamente el pedido al proveedor o la alerta al responsable cuando se alcanza el punto de reorden."
    },
    {
      tag: "Hyper-Automation",
      title: "Automatización de Pedidos a Proveedores",
      desc: "Cuando el stock cae por debajo del mínimo, se genera automáticamente el pedido al proveedor preferente y se envía con los datos correctos. Sin intervención manual."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Mapa de Procesos y Plan de Digitalización",
      desc: "Documentamos todos los procesos de planta y back-office, identificamos los de mayor coste en tiempo y diseñamos el plan de automatización por fases."
    },
    {
      tag: "Smart Structure",
      title: "Incentivos Fiscales a la Digitalización Industrial",
      desc: "Asesoramiento para acceder a las deducciones por I+D+i y digitalización industrial disponibles para PYMES manufactureras en España (Kit Digital, PERTE, deducciones IS)."
    }
  ],
  dataPoints: [
    { value: "66%", label: "de PYMES industriales españolas de 10-50 empleados gestionan producción con Excel (estudio AMETIC 2024)" },
    { value: "527.609", label: "empresas en España con tramo 1-10 empleados — el gran mercado sin digitalizar" },
    { value: "18%", label: "incremento medio de productividad en PYMES industriales tras implementar automatización básica (McKinsey 2024)" },
    { value: "2-4 sem", label: "tiempo de despliegue de un primer módulo de automatización (reporting o alertas de stock)" },
  ],
  faqs: [
    {
      q: "¿Qué procesos industriales se pueden automatizar con IA sin cambiar el ERP?",
      a: "Sin tocar el ERP, se pueden automatizar: la generación de informes de producción, las alertas de stock mínimo, la comunicación de pedidos a proveedores, la conciliación de albaranes con pedidos y el seguimiento de KPIs de planta. Todo mediante conectores que leen y escriben en el ERP existente."
    },
    {
      q: "¿Cuánto tiempo lleva implementar la automatización en una PYME industrial?",
      a: "Un primer módulo (reporting automático o alertas de stock) se despliega en 2-4 semanas. Un proyecto completo de digitalización puede llevar 3-6 meses dependiendo de la complejidad del entorno tecnológico."
    },
    {
      q: "¿Es necesario tener un departamento IT para mantener la automatización?",
      a: "No. Los sistemas que implementamos están diseñados para ser mantenidos por personal no técnico. Entregamos documentación, formación y soporte continuo."
    },
    {
      q: "¿Cómo se conecta la automatización con sistemas legados?",
      a: "La mayoría de sistemas legados tienen alguna forma de exportación (CSV, Excel, SQL). Utilizamos esas salidas para construir la integración. Solo si no hay ninguna opción de exportación es necesario plantear una migración."
    },
  ],
  cta: "¿Cuánto te cuesta cada hora de parada de producción por falta de información a tiempo?"
};

export default function IndustriaManufacturaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
