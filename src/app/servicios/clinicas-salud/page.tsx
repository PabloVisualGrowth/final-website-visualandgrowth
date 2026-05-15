import type { Metadata } from "next";
import ServicioPage, { ServicioData } from "@/components/ServicioPage";

export const metadata: Metadata = {
  title: "Automatización para Clínicas y Centros de Salud · Visual & Growth España",
  description: "Automatiza la gestión de citas, recordatorios y atención al paciente en tu clínica. Chatbot 24/7, digitalización de historiales y workflows sin papel. Diagnóstico gratuito.",
  keywords: [
    "automatización clínicas España",
    "chatbot atención pacientes clínica",
    "gestión citas automática software",
    "digitalización historiales clínicos",
    "automatización recordatorios pacientes SMS",
    "software gestión clínica IA",
    "automatización centros médicos PYME",
    "CRM pacientes clínica privada",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/clinicas-salud" },
  openGraph: {
    title: "Automatización para Clínicas y Centros de Salud · Visual & Growth",
    description: "Chatbot 24/7, gestión automática de citas y digitalización de historiales para clínicas privadas en España.",
    url: "https://visualandgrowth.com/servicios/clinicas-salud",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización para Clínicas y Centros de Salud",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Automatización de procesos para clínicas privadas en España: gestión de citas, chatbot para pacientes, recordatorios automáticos y digitalización de historiales clínicos.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Consultoría de Automatización",
  "url": "https://visualandgrowth.com/servicios/clinicas-salud",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en implementarse un chatbot de citas para una clínica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un sistema básico de gestión de citas con chatbot tarda entre 1 y 2 semanas en desplegarse. Incluye integración con tu agenda actual (Google Calendar, Calendly o software propio), respuestas automáticas por WhatsApp o web, y recordatorios por SMS."
      }
    },
    {
      "@type": "Question",
      "name": "¿Funciona la automatización con el software de gestión que ya tenemos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de los casos, sí. Trabajamos con integraciones a través de API o conectores como Make/n8n que permiten conectar herramientas como Doctoralia, Medigest, o cualquier sistema con acceso web o exportación de datos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa con el RGPD y los datos de los pacientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Todos los flujos que implementamos cumplen el RGPD. Los datos de pacientes se procesan en servidores europeos, se aplica cifrado en tránsito y en reposo, y configuramos las políticas de retención según la normativa sanitaria española."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto puede ahorrar una clínica con la automatización de citas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una clínica que gestiona 30 citas/día puede ahorrar entre 8 y 12 horas semanales de trabajo administrativo al eliminar llamadas de confirmación, recordatorios manuales y gestión de cancelaciones. El retorno de inversión suele producirse en el primer mes."
      }
    },
  ]
};

const data: ServicioData = {
  slug: "Clínicas & Salud",
  h1: "Automatización para Clínicas y Centros de Salud en España",
  subtitle: "Deja de perder horas al teléfono. Automatiza citas, recordatorios y atención al paciente con IA.",
  intro: "El 60% de las clínicas privadas en España sigue gestionando citas por teléfono. Cada llamada perdida es un paciente que va a la competencia. Implementamos sistemas de automatización que trabajan 24/7 para que tu equipo se centre en lo que importa: la atención clínica.",
  heroStat: {
    value: "8-12h",
    label: "semanales ahorradas en gestión administrativa por clínica con automatización de citas",
    source: "Estimación basada en proyectos V&G con clínicas de 1 a 10 especialistas · 2025"
  },
  problems: [
    {
      icon: "📞",
      title: "La agenda se gestiona por teléfono",
      desc: "Tu recepcionista pasa horas al día confirmando, cancelando y reagendando citas. Cada llamada perdida fuera de horario es un paciente que no vuelve."
    },
    {
      icon: "📋",
      title: "Historiales y documentación en papel",
      desc: "Buscar un historial, preparar un informe o compartir datos con otro especialista consume tiempo clínico valioso que debería estar con el paciente."
    },
    {
      icon: "🔔",
      title: "Pacientes que no aparecen sin avisar",
      desc: "El no-show sin aviso previo es uno de los mayores costes ocultos de una clínica. Sin recordatorios automáticos, la tasa de ausencias puede superar el 20%."
    }
  ],
  solutions: [
    {
      tag: "Hyper-Automation",
      title: "Chatbot de Citas 24/7 por WhatsApp y Web",
      desc: "El paciente reserva, modifica o cancela su cita a cualquier hora sin llamar. El sistema actualiza tu agenda en tiempo real."
    },
    {
      tag: "Hyper-Automation",
      title: "Recordatorios Automáticos Multicanal",
      desc: "SMS, WhatsApp y email automáticos 24h antes de cada cita. Reduce el no-show hasta un 70% sin intervención del equipo."
    },
    {
      tag: "Hyper-Automation",
      title: "Digitalización de Historiales PDF",
      desc: "Extracción automática de datos de informes PDF al sistema de gestión. Sin teclear, sin errores, sin papel."
    },
    {
      tag: "Market Authority",
      title: "SEO Local para Clínicas en Google Maps",
      desc: "Posicionamiento en las búsquedas locales de tu especialidad (\"dentista Madrid norte\", \"fisioterapeuta Barcelona zona alta\") para captar pacientes de alta intención."
    },
    {
      tag: "Content Studio",
      title: "Contenido de Autoridad para Especialidades",
      desc: "Artículos SEO firmados por los especialistas del centro que posicionan para búsquedas de síntomas y tratamientos, generando tráfico orgánico cualificado."
    },
    {
      tag: "Estrategia & Consultoría",
      title: "Auditoría de Procesos Clínicos",
      desc: "Mapeamos todos los flujos de tu clínica e identificamos los 3 cuellos de botella con mayor impacto en eficiencia y experiencia del paciente."
    }
  ],
  dataPoints: [
    { value: "22.000+", label: "clínicas privadas activas en España (IQVIA 2024)" },
    { value: "60%", label: "aún gestionan citas por teléfono según estudios del sector sanitario" },
    { value: "20%", label: "tasa media de no-show en clínicas sin recordatorios automatizados" },
    { value: "1-2 sem", label: "tiempo de despliegue de un sistema completo de automatización de citas" },
  ],
  faqs: [
    {
      q: "¿Cuánto tarda en implementarse un chatbot de citas para una clínica?",
      a: "Un sistema básico de gestión de citas con chatbot tarda entre 1 y 2 semanas en desplegarse. Incluye integración con tu agenda actual (Google Calendar, Calendly o software propio), respuestas automáticas por WhatsApp o web, y recordatorios por SMS."
    },
    {
      q: "¿Funciona con el software de gestión que ya tenemos?",
      a: "En la mayoría de los casos, sí. Trabajamos con integraciones a través de API o conectores como Make o n8n que permiten conectar herramientas como Doctoralia, Medigest o cualquier sistema con acceso web o exportación de datos."
    },
    {
      q: "¿Qué pasa con el RGPD y los datos de los pacientes?",
      a: "Todos los flujos que implementamos cumplen el RGPD. Los datos de pacientes se procesan en servidores europeos, se aplica cifrado en tránsito y en reposo, y configuramos las políticas de retención según la normativa sanitaria española."
    },
    {
      q: "¿Cuánto puede ahorrar una clínica con la automatización de citas?",
      a: "Una clínica que gestiona 30 citas al día puede ahorrar entre 8 y 12 horas semanales de trabajo administrativo al eliminar llamadas de confirmación, recordatorios manuales y gestión de cancelaciones. El retorno de inversión suele producirse en el primer mes."
    },
  ],
  cta: "¿Tu clínica trabaja más horas de las que debería en tareas administrativas?"
};

export default function ClinicasSaludPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicioPage data={data} />
    </>
  );
}
