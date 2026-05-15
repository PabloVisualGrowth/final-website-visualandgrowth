import Image from "next/image";
import Link from "next/link";

export interface ServicioData {
  slug: string;
  h1: string;
  subtitle: string;
  intro: string;
  heroStat: { value: string; label: string; source: string };
  problems: { title: string; desc: string; icon: string }[];
  solutions: { title: string; desc: string; tag: string }[];
  dataPoints: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}

export default function ServicioPage({ data }: { data: ServicioData }) {
  return (
    <div className="bg-[#050505] text-[#EDEDED] min-h-screen font-sans overflow-x-hidden">

      {/* Top bar */}
      <div className="border-b border-gray-900 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative w-24 h-7 block">
            <Image src="/logo-full.png" fill className="object-contain" alt="Visual & Growth" />
          </Link>
          <nav className="flex items-center gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
            <span className="text-gray-700">/</span>
            <span className="text-gray-600">Servicios</span>
            <span className="text-gray-700">/</span>
            <span className="text-[#FFC600]">{data.slug}</span>
          </nav>
          <Link
            href="/#audit"
            className="hidden md:inline-flex items-center gap-2 bg-[#FFC600] text-[#050505] text-xs font-bold uppercase tracking-wide px-4 py-2 hover:bg-white transition-colors"
          >
            Diagnóstico Gratis →
          </Link>
        </div>
      </div>

      <main>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-32 border-b border-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,198,0,0.07)_0%,transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">

            {/* Breadcrumb SEO */}
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-[#FFC600] transition-colors">Visual & Growth</Link>
              <span className="mx-2 text-gray-800">/</span>
              <span className="text-gray-500">Servicios</span>
              <span className="mx-2 text-gray-800">/</span>
              <span className="text-[#FFC600]">{data.slug}</span>
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-display font-medium max-w-3xl mb-10 leading-relaxed">
              {data.subtitle}
            </p>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-12 leading-relaxed">
              {data.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#audit"
                className="inline-flex items-center justify-center gap-2 bg-[#FFC600] text-[#050505] font-bold uppercase tracking-wide px-8 py-4 hover:bg-white transition-colors text-sm"
              >
                Diagnóstico Gratuito →
              </Link>
              <Link
                href="/#ecosistema"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-white font-bold uppercase tracking-wide px-8 py-4 hover:border-[#FFC600] hover:text-[#FFC600] transition-colors text-sm"
              >
                Ver todos los servicios
              </Link>
            </div>

            {/* Hero stat */}
            <div className="mt-16 pt-12 border-t border-gray-900">
              <p className="text-5xl md:text-7xl font-bold font-display text-[#FFC600] mb-2">
                {data.heroStat.value}
              </p>
              <p className="text-sm text-gray-500">{data.heroStat.label}</p>
              <p className="text-xs text-gray-700 mt-1 font-mono">{data.heroStat.source}</p>
            </div>

          </div>
        </section>

        {/* ── PROBLEMAS ────────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28 border-b border-gray-900">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">El Diagnóstico</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Los frenos que ralentizan tu crecimiento
            </h2>
            <p className="text-gray-500 mb-16 max-w-2xl">
              Después de trabajar con decenas de empresas del sector, estos son los patrones que se repiten.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.problems.map((p, i) => (
                <div key={i} className="border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                  <div className="text-3xl mb-6">{p.icon}</div>
                  <h3 className="text-lg font-bold font-display text-white mb-3">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUCIONES ───────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28 border-b border-gray-900 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">Las Soluciones</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Lo que implementamos. Lo que cambia.
            </h2>
            <p className="text-gray-500 mb-16 max-w-2xl">
              Sistemas concretos, no promesas. Cada solución tiene un tiempo de despliegue y un impacto medible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {data.solutions.map((s, i) => (
                <div key={i} className="border border-gray-900 p-8 hover:bg-white/[0.02] hover:border-gray-700 transition-all group">
                  <p className="text-[10px] font-mono text-[#FFC600] uppercase tracking-widest mb-4">{s.tag}</p>
                  <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-[#FFC600] transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DATOS DE MERCADO ─────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28 border-b border-gray-900">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-12">El Contexto · Datos España 2025/2026</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {data.dataPoints.map((dp, i) => (
                <div key={i} className="border-l-2 border-[#FFC600] pl-6">
                  <p className="text-3xl md:text-4xl font-bold font-display text-white mb-2">{dp.value}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{dp.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28 border-b border-gray-900 bg-[#080808]">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-16">
              Preguntas frecuentes
            </h2>
            <div className="space-y-0">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="border-t border-gray-900 group"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between gap-4 py-6 cursor-pointer list-none hover:text-[#FFC600] transition-colors">
                    <h3 className="text-base md:text-lg font-bold font-display pr-8">{faq.q}</h3>
                    <span className="text-[#FFC600] text-xl font-mono flex-shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <p className="text-gray-500 text-sm leading-relaxed pb-8 max-w-3xl">{faq.a}</p>
                </details>
              ))}
              <div className="border-t border-gray-900" />
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────────── */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-mono text-[#FFC600] uppercase tracking-widest mb-6">¿Siguiente paso?</p>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">{data.cta}</h2>
            <p className="text-gray-500 mb-10 text-lg max-w-2xl mx-auto">
              Analizamos tu caso sin coste. En 48h tienes un roadmap concreto con las acciones de mayor impacto para tu empresa.
            </p>
            <Link
              href="/#audit"
              className="inline-flex items-center gap-2 bg-[#FFC600] text-[#050505] font-bold uppercase tracking-wide px-10 py-5 hover:bg-white transition-colors text-base"
            >
              Quiero mi diagnóstico gratuito →
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-900 bg-black text-center text-gray-600 text-xs">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-6 opacity-40">
            <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
          </div>
        </div>
        <p>© 2026 Visual & Growth · <Link href="/" className="hover:text-[#FFC600] transition-colors">visualandgrowth.com</Link></p>
      </footer>

    </div>
  );
}
