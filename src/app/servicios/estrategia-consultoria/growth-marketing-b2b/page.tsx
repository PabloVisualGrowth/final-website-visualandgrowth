import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoría de Growth Marketing B2B en España · Del Clic al ROI Real · Visual & Growth",
  description: "Consultoría estratégica de growth marketing para empresas B2B en España. Metodología propia, casos reales y enfoque en ROI tangible — no en métricas de vanidad. Diagnóstico gratuito.",
  keywords: [
    "consultoría growth marketing B2B España",
    "growth marketing empresas medianas España",
    "estrategia crecimiento B2B PYME",
    "consultoría escalabilidad negocio España",
    "growth hacking B2B empresas",
    "metodología growth marketing España",
    "consultoría adquisición clientes B2B",
    "estrategia go to market España",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/estrategia-consultoria/growth-marketing-b2b" },
  openGraph: {
    title: "Consultoría Growth Marketing B2B España · Visual & Growth",
    description: "Metodología propia de growth engineering para empresas B2B. No vendemos clics — construimos sistemas que generan clientes predecibles.",
    url: "https://visualandgrowth.com/servicios/estrategia-consultoria/growth-marketing-b2b",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Consultoría de Growth Marketing B2B en España: Del Clic al ROI Real",
  "author": { "@id": "https://visualandgrowth.com/#pablo-perez" },
  "publisher": { "@id": "https://visualandgrowth.com/#organization" },
  "url": "https://visualandgrowth.com/servicios/estrategia-consultoria/growth-marketing-b2b",
  "datePublished": "2026-05-01",
  "dateModified": "2026-05-01",
  "description": "Metodología de consultoría de growth marketing B2B de Visual & Growth: análisis de unit economics, roadmap de crecimiento y sistemas de adquisición predecibles para PYMES en España.",
  "inLanguage": "es-ES",
  "about": {
    "@type": "Thing",
    "name": "Growth Marketing B2B"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el growth marketing B2B y en qué se diferencia del marketing tradicional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El growth marketing B2B es un enfoque basado en experimentos medibles, ciclos cortos de validación y optimización del funnel completo — desde la captación hasta la retención. A diferencia del marketing tradicional, no trabaja por campañas puntuales sino construyendo sistemas que generan clientes de forma predecible. La diferencia clave: el marketing tradicional genera actividad, el growth marketing genera retorno medible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en verse el retorno de una consultoría de growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los primeros resultados medibles suelen aparecer entre la semana 4 y la semana 8 del engagement: nuevas reuniones cualificadas, mejora en tasa de conversión de propuestas o reducción del coste por lead. Los resultados estructurales (posicionamiento, autoridad, sistemas de adquisición estables) requieren entre 3 y 6 meses. En V&G trabajamos con sprints de 2 semanas para que cada fase tenga entregables concretos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Para qué tamaño de empresa es adecuada la consultoría de growth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos principalmente con empresas B2B de 10 a 200 empleados en España que ya tienen producto o servicio validado y quieren escalar la adquisición de clientes de forma predecible. No es adecuado para empresas que todavía están definiendo su propuesta de valor — en esa fase, la prioridad es validación, no crecimiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a Visual & Growth de otras consultoras de marketing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tres cosas: (1) no vendemos servicios sueltos — diseñamos el sistema completo de crecimiento antes de ejecutar ninguna acción; (2) usamos automatización e IA para hacer a escala lo que normalmente requeriría un equipo grande; (3) medimos el impacto en negocio real (pipeline generado, coste por reunión, tasa de cierre) no en métricas de vanidad como impresiones o seguidores."
      }
    },
  ]
};

const metodologia = [
  {
    num: "01",
    title: "Unit Economics Audit",
    desc: "Antes de cualquier acción, entendemos los números reales del negocio: coste de adquisición actual, lifetime value por tipo de cliente, margen por servicio y capacidad de escala. Sin esto, cualquier estrategia de crecimiento puede optimizar la dirección equivocada.",
    output: "Informe de unit economics + identificación de las 3 palancas de mayor impacto"
  },
  {
    num: "02",
    title: "ICP & Positioning Sprint",
    desc: "Definimos con precisión quirúrgica el perfil de cliente que genera más valor: sector, tamaño, cargo, problema específico que resuelves y momento de compra. Sin ICP claro, el crecimiento es ruido.",
    output: "ICP documento + mensaje de posicionamiento diferencial + validación con 10 conversaciones reales"
  },
  {
    num: "03",
    title: "Funnel Architecture",
    desc: "Diseñamos el funnel completo: cómo captar la atención del ICP, cómo demostrar valor antes de la venta, cómo convertir y cómo retener. Cada etapa tiene métricas de referencia y punto de intervención.",
    output: "Mapa del funnel + KPIs por etapa + playbook de conversación comercial"
  },
  {
    num: "04",
    title: "Growth Sprints (2 semanas)",
    desc: "Ejecución en ciclos cortos con hipótesis, experimento, medición y decisión. Cada sprint tiene un objetivo concreto y entregables tangibles. Velocidad de startup aplicada a empresas con estructura consolidada.",
    output: "Entregable concreto cada 2 semanas: nueva fuente de leads, optimización de conversión, sistema de seguimiento"
  },
  {
    num: "05",
    title: "Scale & Automate",
    desc: "Cuando un canal o proceso funciona, lo sistematizamos y automatizamos para que escale sin añadir recursos lineales. El objetivo: que el coste marginal de cada nuevo cliente sea cada vez menor.",
    output: "Sistema automatizado + documentación + transferencia al equipo interno"
  },
];

export default function GrowthMarketingB2BPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
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
              <span className="text-gray-600">Estrategia</span>
              <span className="text-gray-800">/</span>
              <span className="text-[#FFC600]">Growth Marketing B2B</span>
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
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">Estrategia & Consultoría · B2B España</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                Consultoría de Growth Marketing B2B en España:<br />
                <span className="text-[#FFC600]">Del Clic al ROI Real</span>
              </h1>
              <p className="text-xl text-gray-400 font-display font-medium max-w-3xl mb-8 leading-relaxed">
                El marketing que genera informes bonitos pero no llena el pipeline es <strong className="text-white">gasto, no inversión</strong>. Construimos sistemas de crecimiento B2B donde cada euro invertido tiene un retorno medible.
              </p>

              {/* Autor con E-E-A-T */}
              <div className="flex items-start gap-4 p-6 border border-gray-800 mb-10 max-w-2xl">
                <div className="w-12 h-12 rounded-full bg-[#FFC600] flex items-center justify-center text-sm font-bold text-[#050505] flex-shrink-0">PP</div>
                <div>
                  <p className="font-bold text-white mb-1">Pablo Pérez — CEO, Visual & Growth</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2">
                    Ex-Google Cloud Business Strategist. Ha auditado procesos de crecimiento en más de 80 empresas B2B en España, desde startups de 5 personas hasta grupos con 300 empleados.
                  </p>
                  <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                    Google Cloud · Growth Engineering · B2B Sales Systems · Automatización con IA
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#audit" className="inline-flex items-center justify-center gap-2 bg-[#FFC600] text-[#050505] font-bold uppercase tracking-wide px-8 py-4 hover:bg-white transition-colors text-sm">
                  Diagnóstico Gratuito →
                </Link>
                <Link href="#metodologia" className="inline-flex items-center justify-center gap-2 border border-gray-700 text-white font-bold uppercase tracking-wide px-8 py-4 hover:border-[#FFC600] hover:text-[#FFC600] transition-colors text-sm">
                  Ver la metodología ↓
                </Link>
              </div>
            </div>
          </section>

          {/* ── EL PROBLEMA CON EL MARKETING TRADICIONAL ── */}
          <section className="px-6 py-16 md:py-24 border-b border-gray-900">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
                Por qué el marketing B2B tradicional no escala
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed max-w-3xl">
                La mayoría de las empresas B2B en España contratan marketing como si fuera publicidad de consumo: campañas puntuales, presupuesto mensual, informe de impresiones y clics. El problema es estructural — el ciclo de venta B2B no funciona así.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {[
                  {
                    title: "Métricas de vanidad que no conectan con negocio",
                    desc: "Impresiones, seguidores, tráfico web. Números que suben pero que no tienen correlación demostrable con el pipeline comercial ni con los cierres."
                  },
                  {
                    title: "Acciones sin sistema detrás",
                    desc: "Un post aquí, una campaña allá, una feria el otro mes. Sin un sistema que conecte cada acción con el proceso comercial, el marketing es ruido caro."
                  },
                  {
                    title: "Sin ICP definido, todo es para todos",
                    desc: "Cuando no hay claridad sobre quién es el cliente ideal, los mensajes se suavizan para no excluir a nadie — y acaban siendo invisibles para todos."
                  }
                ].map((p, i) => (
                  <div key={i} className="border border-gray-900 p-8 hover:border-gray-700 transition-colors">
                    <h3 className="text-base font-bold font-display text-white mb-3">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── METODOLOGÍA ── */}
          <section id="metodologia" className="px-6 py-16 md:py-24 border-b border-gray-900 bg-[#080808]">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">Metodología V&G</p>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                El proceso: de la auditoría al sistema en funcionamiento
              </h2>
              <p className="text-gray-500 mb-12 text-sm max-w-2xl">
                No empezamos ejecutando. Empezamos entendiendo. Cada fase tiene un output concreto — no decks de PowerPoint, sino herramientas que el equipo usa.
              </p>
              <div className="space-y-0">
                {metodologia.map((step, i) => (
                  <div key={i} className="flex gap-6 py-10 border-b border-gray-900 last:border-0">
                    <span className="font-mono text-2xl text-[#FFC600] flex-shrink-0 pt-1">{step.num}/</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-display text-white mb-3">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{step.desc}</p>
                      <div className="flex items-start gap-2">
                        <span className="text-[#FFC600] text-xs mt-0.5">→</span>
                        <p className="text-xs text-gray-400 font-mono">{step.output}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="px-6 py-16 md:py-24 border-b border-gray-900">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-10">Preguntas frecuentes</h2>
              <div className="space-y-0">
                {[
                  {
                    q: "¿Qué es el growth marketing B2B y en qué se diferencia del marketing tradicional?",
                    a: "El growth marketing B2B trabaja el funnel completo con experimentos medibles y ciclos cortos de validación. No trabaja por campañas puntuales sino construyendo sistemas que generan clientes de forma predecible. La diferencia clave: el marketing tradicional genera actividad, el growth marketing genera retorno medible."
                  },
                  {
                    q: "¿Cuánto tiempo tarda en verse el retorno de una consultoría de growth?",
                    a: "Los primeros resultados medibles aparecen entre la semana 4 y la 8: nuevas reuniones cualificadas, mejor conversión de propuestas o reducción del coste por lead. Los resultados estructurales requieren entre 3 y 6 meses. Trabajamos con sprints de 2 semanas para que cada fase tenga entregables concretos."
                  },
                  {
                    q: "¿Para qué tamaño de empresa es adecuada la consultoría de growth?",
                    a: "Trabajamos con empresas B2B de 10 a 200 empleados en España que tienen producto validado y quieren escalar la adquisición de clientes. No es adecuado para empresas que todavía están definiendo su propuesta de valor — en esa fase, la prioridad es validación, no crecimiento."
                  },
                  {
                    q: "¿Qué diferencia a Visual & Growth de otras consultoras de marketing?",
                    a: "Tres cosas: (1) diseñamos el sistema completo antes de ejecutar ninguna acción; (2) usamos automatización e IA para hacer a escala lo que requeriría un equipo grande; (3) medimos en negocio real (pipeline, coste por reunión, tasa de cierre) no en métricas de vanidad."
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
              ¿Tu empresa crece al ritmo que podría, o el marketing lo está frenando?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              Auditamos tu situación actual y te entregamos un roadmap de crecimiento con las 3 acciones de mayor impacto. Sin coste, sin humo.
            </p>
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
