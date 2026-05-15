import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Captación de Leads B2B: Por qué Dejar de Comprar Bases de Datos en 2025 · Visual & Growth",
  description: "Descubre por qué los sistemas de captación de leads B2B con IA superan a las bases de datos compradas. Personalización, RGPD, ROI real. Diagnóstico gratuito para tu empresa.",
  keywords: [
    "captación leads B2B España",
    "alternativa comprar base datos empresas",
    "sistema prospección B2B automático",
    "leads cualificados B2B IA",
    "es legal comprar bases de datos España",
    "cold email B2B personalizado IA",
    "generación leads B2B PYME España",
    "prospección outbound automatizada",
  ],
  alternates: { canonical: "https://visualandgrowth.com/servicios/marketing-comunicacion/captacion-leads-b2b" },
  openGraph: {
    title: "Captación de Leads B2B vs. Comprar Bases de Datos · Visual & Growth España",
    description: "Por qué las empresas que compran bases de datos están perdiendo dinero — y qué hacer en su lugar.",
    url: "https://visualandgrowth.com/servicios/marketing-comunicacion/captacion-leads-b2b",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sistemas de Captación de Leads B2B: Por qué Dejar de Comprar Bases de Datos en 2025",
  "author": { "@id": "https://visualandgrowth.com/#pablo-perez" },
  "publisher": { "@id": "https://visualandgrowth.com/#organization" },
  "url": "https://visualandgrowth.com/servicios/marketing-comunicacion/captacion-leads-b2b",
  "datePublished": "2026-05-01",
  "dateModified": "2026-05-01",
  "description": "Comparativa entre la compra de bases de datos tradicional y los sistemas de captación de leads B2B con IA. Legalidad, ROI y personalización.",
  "inLanguage": "es-ES",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es legal comprar bases de datos de empresas en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del uso. Consultar datos públicos de empresas (razón social, teléfono de empresa) para contacto comercial telefónico puede ser legal si hay interés legítimo y la empresa no está en la lista Robinson. Sin embargo, enviar emails de marketing a contactos de una base de datos comprada sin consentimiento expreso viola el RGPD y la LSSICE. La multa puede llegar a 20 millones de euros o el 4% de la facturación global."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo mejorar la tasa de contacto en prospección B2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los tres factores con mayor impacto son: (1) personalización real del mensaje — referencias específicas a la empresa, su sector o algo concreto de su LinkedIn/web; (2) timing — enviar de martes a jueves entre 9h y 11h o 15h y 17h; (3) secuencia — un email inicial sin CTA seguido de 2-3 seguimientos espaciados. La combinación de estos tres factores puede multiplicar la tasa de respuesta por 5 respecto a un email genérico masivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un lead B2B cualificado en España?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El coste por lead B2B cualificado varía por sector: en tecnología y software oscila entre 50-200€, en servicios profesionales entre 30-120€, en industria entre 40-150€. Las bases de datos compradas tienen un coste aparente bajo (0,05-0,50€ por contacto) pero cuando se ajusta por tasa de contactabilidad real (10-20%) y tasa de conversión (1-3%), el coste real por oportunidad cualificada es mucho mayor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué datos de empresas se pueden usar legalmente para prospección B2B?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los datos públicos de empresas (nombre, web, teléfono corporativo, LinkedIn) pueden usarse para prospección con base en interés legítimo, siempre que el mensaje sea relevante para la actividad profesional del destinatario, se identifique claramente el remitente y se facilite la opción de no recibir más comunicaciones. Los emails personales (aunque sean profesionales) requieren consentimiento expreso bajo el RGPD."
      }
    },
  ]
};

export default function CaptacionLeadsB2BPage() {
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
              <Link href="/servicios/marketing-comunicacion" className="hover:text-[#FFC600] transition-colors">Marketing</Link>
              <span className="text-gray-800">/</span>
              <span className="text-[#FFC600]">Captación Leads B2B</span>
            </nav>
            <Link href="/#audit" className="hidden md:inline-flex items-center gap-2 bg-[#FFC600] text-[#050505] text-xs font-bold uppercase tracking-wide px-4 py-2 hover:bg-white transition-colors">
              Diagnóstico Gratis →
            </Link>
          </div>
        </div>

        <main className="max-w-5xl mx-auto px-6">

          {/* ── HERO ── */}
          <section className="py-16 md:py-24 border-b border-gray-900">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">Marketing & Comunicación · Guía 2025/2026</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
              Sistemas de Captación de Leads B2B:<br />
              <span className="text-[#FFC600]">¿Por qué dejar de comprar bases de datos en 2025?</span>
            </h1>
            <p className="text-xl text-gray-400 font-display font-medium max-w-3xl mb-6 leading-relaxed">
              Cada día, <strong className="text-white">cientos de directivos cambian de empresa</strong> en España. El fichero que compraste hace 3 meses ya tiene un 15-20% de datos incorrectos. El problema no es solo legal — es que el modelo no funciona.
            </p>
            <p className="text-sm text-gray-500 max-w-2xl leading-relaxed mb-10">
              Esta página explica por qué los sistemas de captación de leads con IA superan estructuralmente a las bases de datos estáticas, y cómo Visual & Growth implementa prospección B2B que genera reuniones reales sin violar el RGPD.
            </p>
            {/* Autor */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-900">
              <div className="w-9 h-9 rounded-full bg-[#FFC600] flex items-center justify-center text-xs font-bold text-[#050505]">PP</div>
              <div>
                <p className="text-sm font-bold text-white">Pablo Pérez</p>
                <p className="text-xs text-gray-500">CEO · Visual & Growth · Ex-Google Cloud Business Strategist</p>
              </div>
            </div>
          </section>

          {/* ── EL PROBLEMA CON LAS BASES DE DATOS ── */}
          <section className="py-14 md:py-20 border-b border-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">
              El problema real de las bases de datos compradas
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              El segmento con potencial de compra real no es el de las grandes empresas (tienen proveedores y contratos cerrados) ni el de las microempresas (no tienen presupuesto). Es el tramo intermedio: <strong className="text-white">empresas de 10 a 200 empleados, en crecimiento, con un decisor identificable</strong>. Y ese segmento es precisamente el más difícil de mantener actualizado en un fichero estático.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { value: "15-20%", label: "de los contactos de una base de datos quedan obsoletos cada 3 meses por cambios de cargo, empresa o email" },
                { value: "1-3%", label: "tasa de conversión media de campañas con bases de datos compradas en B2B (vs. 8-15% con prospección cualificada)" },
                { value: "20M€", label: "multa máxima por enviar emails comerciales sin consentimiento bajo el RGPD en la Unión Europea" },
              ].map((d, i) => (
                <div key={i} className="border-l-2 border-[#FFC600] pl-6 py-2">
                  <p className="text-3xl font-bold font-display text-[#FFC600] mb-2">{d.value}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── TABLA COMPARATIVA ── */}
          <section className="py-14 md:py-20 border-b border-gray-900">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">Comparativa</p>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Base de datos comprada vs. Sistema de captación V&G
            </h2>
            <p className="text-gray-500 mb-10 text-sm">
              Los cinco factores que determinan si una estrategia de prospección genera negocio real o solo actividad aparente.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 pr-6 text-xs font-mono text-gray-500 uppercase tracking-widest w-1/4">Factor</th>
                    <th className="text-left py-4 pr-6 text-xs font-mono text-gray-600 uppercase tracking-widest w-[37.5%]">Base de datos comprada</th>
                    <th className="text-left py-4 text-xs font-mono text-[#FFC600] uppercase tracking-widest w-[37.5%]">Sistema de captación V&G</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      factor: "Actualización de datos",
                      tradicional: "Fichero estático. Pierde un 15-20% de validez cada 3 meses por cambios de cargo y empresa.",
                      vg: "Captación en tiempo real. Cada lead se valida en el momento del envío con datos públicos actuales."
                    },
                    {
                      factor: "Consentimiento y legalidad",
                      tradicional: "Sin emails válidos por falta de consentimiento expreso. Alto riesgo de sanción bajo el RGPD.",
                      vg: "Prospección con base en interés legítimo profesional, identificación clara y opt-out inmediato. Trazable."
                    },
                    {
                      factor: "Personalización del mensaje",
                      tradicional: "Mensajes genéricos de plantilla. Tasa de apertura media: 8-12%. Respuestas: 0,5-1%.",
                      vg: "Cada email generado con IA incluye referencias específicas a la empresa, sector y contexto del prospecto. Parece escrito a mano."
                    },
                    {
                      factor: "Integración con el proceso comercial",
                      tradicional: "Fichero Excel aislado que el comercial trabaja manualmente. Sin seguimiento ni trazabilidad.",
                      vg: "Lead cualificado enviado directo al CRM con historial de contactos, respuestas y score. El comercial solo entra cuando hay oportunidad real."
                    },
                    {
                      factor: "ROI medible",
                      tradicional: "Coste aparente bajo (0,05-0,50€/contacto) pero coste real por oportunidad cualificada: 200-800€.",
                      vg: "Coste por lead cualificado medido y optimizable. Ciclo completo desde captación hasta reunión registrado y auditable."
                    },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-900 group">
                      <td className="py-5 pr-6 font-bold text-white align-top">{row.factor}</td>
                      <td className="py-5 pr-6 text-gray-500 align-top leading-relaxed">{row.tradicional}</td>
                      <td className="py-5 text-gray-300 align-top leading-relaxed group-hover:text-white transition-colors">
                        <span className="text-[#FFC600] mr-1">✓</span>{row.vg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── CÓMO FUNCIONA EL SISTEMA V&G ── */}
          <section className="py-14 md:py-20 border-b border-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Cómo funciona el sistema de captación de leads B2B de V&G
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              No es magia ni un CRM con otro nombre. Es un proceso de ingeniería con pasos concretos y métricas en cada etapa.
            </p>
            <div className="space-y-0">
              {[
                { num: "01", title: "Definición del ICP", desc: "Identificamos el perfil de cliente ideal real: sector, tamaño, cargo, tecnología que usan, señales de crecimiento. Sin esto, cualquier lista es ruido." },
                { num: "02", title: "Construcción de la lista en tiempo real", desc: "Extraemos contactos de fuentes públicas (LinkedIn, webs, directorios) validados en el momento. No compramos datos — los construimos con criterio." },
                { num: "03", title: "Enriquecimiento con contexto", desc: "Para cada prospecto: descripción de la empresa, posts recientes de LinkedIn, tecnología que usan, eventos relevantes. Contexto que hace posible la personalización real." },
                { num: "04", title: "Generación de emails con IA", desc: "Cada email incluye una observación específica sobre la empresa o el prospecto. No es una plantilla con el nombre cambiado. La IA escribe como una persona bien informada." },
                { num: "05", title: "Secuencia y seguimiento automático", desc: "4 emails espaciados en el tiempo, con variantes de subject y ángulo. Si responde, entra al CRM como oportunidad activa. Si no, sale del flujo sin saturar." },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 py-8 border-b border-gray-900 last:border-0">
                  <span className="font-mono text-2xl text-[#FFC600] flex-shrink-0 pt-1">{s.num}/</span>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="py-14 md:py-20 border-b border-gray-900">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-10">Preguntas frecuentes</h2>
            <div className="space-y-0">
              {[
                {
                  q: "¿Es legal comprar bases de datos de empresas en España?",
                  a: "Depende del uso. Consultar datos públicos de empresas para contacto telefónico puede ser legal con interés legítimo. Sin embargo, enviar emails de marketing a contactos de una base de datos comprada sin consentimiento expreso viola el RGPD y la LSSICE. La multa puede llegar a 20 millones de euros o el 4% de la facturación global."
                },
                {
                  q: "¿Cómo mejorar la tasa de contacto en prospección B2B?",
                  a: "Los tres factores con mayor impacto son: (1) personalización real del mensaje — referencias específicas a la empresa o su sector; (2) timing — martes a jueves entre 9h-11h o 15h-17h; (3) secuencia de 3-4 emails espaciados. La combinación puede multiplicar la tasa de respuesta por 5 respecto a un email genérico masivo."
                },
                {
                  q: "¿Cuánto cuesta un lead B2B cualificado en España?",
                  a: "El coste por lead cualificado en servicios profesionales oscila entre 30-120€. Las bases de datos tienen coste aparente bajo (0,05-0,50€/contacto) pero cuando se ajusta por contactabilidad real (10-20%) y conversión (1-3%), el coste real por oportunidad es mucho mayor que un sistema bien diseñado."
                },
                {
                  q: "¿Qué datos de empresas se pueden usar legalmente para prospección B2B?",
                  a: "Los datos públicos de empresas (nombre, web, teléfono corporativo, LinkedIn) pueden usarse para prospección con base en interés legítimo, siempre que el mensaje sea relevante para la actividad profesional del destinatario, se identifique claramente el remitente y se facilite el opt-out. Los emails personales requieren consentimiento expreso."
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
          </section>

          {/* ── CTA ── */}
          <section className="py-16 md:py-24 text-center">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">¿Siguiente paso?</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              ¿Cuántas reuniones cualificadas genera tu sistema de prospección actual cada semana?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              Analizamos tu proceso comercial actual y diseñamos el sistema de captación específico para tu ICP. Sin coste, sin compromiso.
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
