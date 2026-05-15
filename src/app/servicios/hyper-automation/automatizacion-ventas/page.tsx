import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatización del Proceso de Ventas para PYMES · Elimina el 30% de Tareas Repetitivas · Visual & Growth",
  description: "Automatiza la extracción de leads, el seguimiento comercial y el agendado de reuniones. Chatbots, asistentes de voz y CRM inteligente para equipos de ventas B2B en España.",
  keywords: [
    "automatización proceso ventas PYME España",
    "automatización equipo comercial IA",
    "chatbot agendar citas ventas B2B",
    "CRM automatizado PYME España",
    "extracción leads Google Maps automática",
    "asistente voz natural ventas",
    "seguimiento comercial automático CRM",
    "eliminar tareas repetitivas ventas",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/hyper-automation/automatizacion-ventas" },
  openGraph: {
    title: "Automatización del Proceso de Ventas para PYMES · Visual & Growth",
    description: "Chatbots, CRM inteligente y asistentes de voz para que tu equipo comercial deje de hacer tareas administrativas y cierre más.",
    url: "https://visualandgrowth.com/servicios/hyper-automation/automatizacion-ventas",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatización del Proceso de Ventas para PYMES",
  "provider": { "@id": "https://visualandgrowth.com/#organization" },
  "description": "Automatización del proceso comercial completo para PYMES en España: captación de leads, seguimiento automático, agendado de reuniones y CRM inteligente con IA.",
  "areaServed": { "@type": "Country", "name": "España" },
  "serviceType": "Hyper-Automation",
  "url": "https://visualandgrowth.com/servicios/hyper-automation/automatizacion-ventas",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué tareas del proceso de ventas se pueden automatizar en una PYME?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las tareas con mayor potencial de automatización en ventas son: (1) captación y cualificación inicial de leads, (2) envío de secuencias de prospección, (3) seguimiento de propuestas enviadas, (4) agendado de reuniones sin intervención humana, (5) actualización del CRM tras cada interacción, (6) generación de informes de actividad comercial. Estas tareas representan entre el 25 y el 40% del tiempo de un comercial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo ahorra un comercial con la automatización?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un comercial que gestiona 50 oportunidades activas puede ahorrar entre 8 y 15 horas semanales automatizando el seguimiento, la actualización del CRM y la prospección inicial. Ese tiempo recuperado se redirige a cerrar, no a administrar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Un chatbot puede reemplazar al comercial en la primera conversación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En leads inbound (que han llegado solos a tu web o a tu WhatsApp), un chatbot bien diseñado puede cualificar el 70-80% de las consultas, responder preguntas frecuentes y agendar directamente la reunión con el comercial adecuado. No reemplaza al comercial — le entrega un lead caliente con contexto completo."
      }
    },
  ]
};

const scenarios = [
  {
    tag: "Captación",
    title: "Inteligencia de Prospectos B2B — Sistema Inhouse",
    desc: "Nuestro sistema propio extrae el perfil completo de cada prospecto y su empresa: email directo, teléfono, cargo, tamaño, tecnología, descripción y señales de crecimiento. No es scraping superficial — son datos de primera calidad listos para personalizar cada contacto.",
    time: "Despliegue: 1 semana"
  },
  {
    tag: "Cualificación",
    title: "Chatbot de cualificación 24/7 por WhatsApp",
    desc: "El lead entra por WhatsApp, web o redes sociales y recibe preguntas de cualificación automáticas. Solo los que cumplen el perfil llegan al comercial — con el contexto ya recogido.",
    time: "Despliegue: 1-2 semanas"
  },
  {
    tag: "Agendado",
    title: "Asistente de agendado automático",
    desc: "El prospecto elige su franja horaria directamente desde el email o WhatsApp. La reunión aparece en el calendario del comercial con el briefing previo. Sin emails de ida y vuelta.",
    time: "Despliegue: 3-5 días"
  },
  {
    tag: "Seguimiento",
    title: "Secuencias de seguimiento post-propuesta",
    desc: "Después de enviar una propuesta, el sistema activa automáticamente una secuencia de 3 seguimientos espaciados. Si el cliente responde, el flujo se detiene y alerta al comercial.",
    time: "Despliegue: 1 semana"
  },
  {
    tag: "CRM",
    title: "Actualización automática del CRM",
    desc: "Cada interacción — email abierto, reunión celebrada, propuesta enviada — actualiza automáticamente el CRM sin que el comercial toque nada. Pipeline siempre al día.",
    time: "Despliegue: 1-2 semanas"
  },
  {
    tag: "Reporting",
    title: "Informe diario de actividad comercial",
    desc: "Cada mañana, el director comercial recibe un resumen: oportunidades avanzadas, reuniones del día, propuestas pendientes de respuesta y leads nuevos. Sin preparar nada.",
    time: "Despliegue: 3-5 días"
  },
  {
    tag: "Voz",
    title: "Asistente de llamadas con voz natural",
    desc: "Para empresas con alto volumen de llamadas entrantes: un asistente de voz con IA que atiende, cualifica y transfiere o agenda. Disponible 24/7, sin coste por llamada.",
    time: "Despliegue: 2-3 semanas"
  },
  {
    tag: "Enriquecimiento",
    title: "Enriquecimiento automático de leads",
    desc: "Cuando un lead entra al CRM, el sistema busca automáticamente su LinkedIn, web, tamaño de empresa y tecnología que usan. El comercial tiene el contexto sin investigar.",
    time: "Despliegue: 1 semana"
  },
  {
    tag: "Reactivación",
    title: "Reactivación automática de oportunidades frías",
    desc: "Oportunidades sin actividad en más de 30 días reciben automáticamente un email de reactivación personalizado. Recupera entre un 5 y un 15% de los leads que se habían dado por perdidos.",
    time: "Despliegue: 3-5 días"
  },
];

export default function AutomatizacionVentasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-[#050505] text-[#EDEDED] min-h-screen font-sans overflow-x-hidden">

        {/* Top bar */}
        <div className="border-b border-gray-900 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="relative w-24 h-7 block">
              <Image src="/logo-full.png" fill className="object-contain" alt="Visual & Growth" />
            </Link>
            <nav className="hidden md:flex items-center gap-2 text-xs font-mono text-gray-600 uppercase tracking-widest">
              <Link href="/" className="hover:text-[#FFC600] transition-colors">Home</Link>
              <span className="text-gray-800">/</span>
              <span className="text-gray-600">Hyper-Automation</span>
              <span className="text-gray-800">/</span>
              <span className="text-[#FFC600]">Automatización Ventas</span>
            </nav>
            <Link href="/#audit" className="hidden md:inline-flex items-center gap-2 bg-[#FFC600] text-[#050505] text-xs font-bold uppercase tracking-wide px-4 py-2 hover:bg-white transition-colors">
              Diagnóstico Gratis →
            </Link>
          </div>
        </div>

        <main>

          {/* ── HERO ── */}
          <section className="px-6 py-16 md:py-28 border-b border-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,198,0,0.06)_0%,transparent_60%)] pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10">
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">Hyper-Automation · Ventas B2B</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                Automatización del Proceso de Ventas para PYMES:<br />
                <span className="text-[#FFC600]">Elimina el 30% de Tareas Repetitivas Esta Semana</span>
              </h1>
              <p className="text-xl text-gray-400 font-display font-medium max-w-3xl mb-8 leading-relaxed">
                Tu equipo comercial no debería actualizar el CRM, enviar recordatorios ni confirmar reuniones. Eso lo hace la máquina. Ellos cierran.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/#audit" className="inline-flex items-center justify-center gap-2 bg-[#FFC600] text-[#050505] font-bold uppercase tracking-wide px-8 py-4 hover:bg-white transition-colors text-sm">
                  Diagnóstico Gratuito →
                </Link>
                <Link href="#escenarios" className="inline-flex items-center justify-center gap-2 border border-gray-700 text-white font-bold uppercase tracking-wide px-8 py-4 hover:border-[#FFC600] hover:text-[#FFC600] transition-colors text-sm">
                  Ver los 9 escenarios ↓
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-900">
                {[
                  { value: "25-40%", label: "del tiempo de un comercial en tareas automatizables" },
                  { value: "×5", label: "más oportunidades gestionadas con el mismo equipo" },
                  { value: "1 sem", label: "tiempo de despliegue del primer escenario" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-2xl md:text-4xl font-bold font-display text-[#FFC600] mb-1">{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ESCENARIOS ── */}
          <section id="escenarios" className="px-6 py-16 md:py-24 border-b border-gray-900">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">Catálogo de Automatizaciones</p>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">9 escenarios que puedes activar esta semana</h2>
              <p className="text-gray-500 mb-12 max-w-2xl text-sm">Cada escenario es independiente. Se puede implementar solo o combinado. El tiempo indicado es para un equipo de hasta 20 personas.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {scenarios.map((s, i) => (
                  <div key={i} className="border border-gray-900 p-8 hover:bg-white/[0.02] hover:border-gray-700 transition-all group">
                    <p className="text-[10px] font-mono text-[#FFC600] uppercase tracking-widest mb-3">{s.tag}</p>
                    <h3 className="text-base font-bold font-display text-white mb-3 group-hover:text-[#FFC600] transition-colors">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <p className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">{s.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="px-6 py-16 md:py-24 border-b border-gray-900 bg-[#080808]">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-10">Preguntas frecuentes</h2>
              <div className="space-y-0">
                {[
                  {
                    q: "¿Qué tareas del proceso de ventas se pueden automatizar en una PYME?",
                    a: "Las tareas con mayor potencial: (1) captación y cualificación inicial de leads, (2) secuencias de prospección, (3) seguimiento de propuestas, (4) agendado de reuniones, (5) actualización del CRM, (6) informes de actividad. Representan entre el 25 y el 40% del tiempo de un comercial."
                  },
                  {
                    q: "¿Cuánto tiempo ahorra un comercial con la automatización?",
                    a: "Un comercial con 50 oportunidades activas puede ahorrar entre 8 y 15 horas semanales automatizando el seguimiento y la actualización del CRM. Ese tiempo se redirige a cerrar, no a administrar."
                  },
                  {
                    q: "¿Un chatbot puede reemplazar al comercial en la primera conversación?",
                    a: "En leads inbound, un chatbot bien diseñado cualifica el 70-80% de las consultas, responde preguntas frecuentes y agenda directamente la reunión. No reemplaza al comercial — le entrega un lead caliente con contexto completo."
                  },
                ].map((faq, i) => (
                  <details key={i} className="border-t border-gray-900 group" open={i === 0}>
                    <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none hover:text-[#FFC600] transition-colors">
                      <h3 className="text-base font-bold font-display pr-8">{faq.q}</h3>
                      <span className="text-[#FFC600] text-xl font-mono flex-shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                    </summary>
                    <p className="text-gray-500 text-sm leading-relaxed pb-6 max-w-3xl">{faq.a}</p>
                  </details>
                ))}
                <div className="border-t border-gray-900" />
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 py-16 md:py-24 text-center">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">¿Siguiente paso?</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              ¿Cuántas horas pierde tu equipo comercial esta semana en tareas que no son vender?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">Auditamos tu proceso comercial e identificamos los 3 escenarios de mayor impacto para tu empresa. Gratis.</p>
            <Link href="/#audit" className="inline-flex items-center gap-2 bg-[#FFC600] text-[#050505] font-bold uppercase tracking-wide px-10 py-5 hover:bg-white transition-colors">
              Quiero mi diagnóstico gratuito →
            </Link>
          </section>

        </main>

        <footer className="py-10 border-t border-gray-900 bg-black text-center text-gray-600 text-xs">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-6 opacity-40">
              <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
            </div>
          </div>
          <p>© 2026 Visual & Growth · <Link href="/" className="hover:text-[#FFC600] transition-colors">visualandgrowth.com</Link></p>
        </footer>
      </div>
    </>
  );
}
