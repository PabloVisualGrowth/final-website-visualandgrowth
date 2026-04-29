import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Rocket, Bot, BarChart3, Layout, Zap, Activity } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

type Problem = { title: string; desc: string };
type ServiceData = {
  category: string;
  title: string;
  tagline: string;
  desc: string;
  problems: Problem[];
  approach: string;
  approachPoints: string[];
  includes: string[];
  stats: { value: string; label: string }[];
  quote: string;
  quoteAuthor: string;
  Icon: React.ElementType;
  nextSlug: string;
  nextTitle: string;
};

const services: Record<string, ServiceData> = {
  "estrategia-consultoria": {
    category: "Growth Machines",
    title: "Estrategia & Consultoría",
    tagline: "Deja de improvisar. Construye el sistema que lleva tu empresa al siguiente nivel.",
    desc: "Analizamos tu modelo de negocio, identificamos dónde está el dinero y diseñamos el roadmap que convierte acciones dispersas en crecimiento predecible.",
    problems: [
      { title: "Inversión sin resultados claros", desc: "Cada mes inviertes en marketing sin saber qué genera revenue de verdad y qué es solo ruido." },
      { title: "Decisiones a ciegas", desc: "No tienes un sistema de métricas que te diga qué acciones priorizar ni qué palancas mueven tu negocio." },
      { title: "Sin hoja de ruta", desc: "El equipo ejecuta sin un plan claro. Falta de foco, prioridades cambiantes, resultados inconsistentes." },
    ],
    approach: "Nos integramos como co-pilotos estratégicos de tu negocio. No somos una agencia que ejecuta sin pensar: auditamos tus unit economics, encontramos las fugas de valor y diseñamos un sistema de crecimiento que prioriza lo que impacta de verdad.",
    approachPoints: [
      "Pensamos como founders, no como proveedores de servicios",
      "Metodología ICE para priorizar por impacto vs esfuerzo",
      "Cada acción tiene un ROI estimado antes de ejecutarse",
      "Reporting semanal con los KPIs que realmente importan",
    ],
    includes: [
      "Auditoría 360° del modelo de negocio",
      "Análisis de unit economics y fugas de valor",
      "Roadmap estratégico de 90 días",
      "Priorización ICE Score (Impacto / Coste / Esfuerzo)",
      "Dashboard de KPIs de negocio",
      "Sesiones estratégicas semanales",
      "Playbook de ejecución documentado",
      "Revisión y ajuste mensual del plan",
    ],
    stats: [
      { value: "2 sem", label: "Para validar el primer sprint" },
      { value: "60 días", label: "Para resultados medibles" },
    ],
    quote: "La tecnología sin estrategia es solo gasto.",
    quoteAuthor: "Visual & Growth",
    Icon: Rocket,
    nextSlug: "hyper-automation",
    nextTitle: "Hyper-Automation",
  },
  "hyper-automation": {
    category: "AI & Operations",
    title: "Hyper-Automation",
    tagline: "Tus procesos manuales son tu mayor cuello de botella. Los eliminamos con IA.",
    desc: "Diseñamos e implementamos sistemas de automatización inteligente que conectan tus herramientas, eliminan tareas manuales y generan eficiencia operativa real.",
    problems: [
      { title: "Tiempo perdido en tareas repetitivas", desc: "Tu equipo dedica horas a procesos que una máquina puede hacer en segundos. Eso destruye márgenes." },
      { title: "Sistemas desconectados", desc: "Tu CRM no habla con tu email, tus datos están en silos. Cada herramienta es una isla." },
      { title: "Escalas contratando, no automatizando", desc: "Cada vez que creces, necesitas más personal para hacer lo mismo. Eso rompe tu estructura de costes." },
    ],
    approach: "Auditamos tus operaciones, identificamos qué automatizar primero y lo implementamos con herramientas de IA de nueva generación. No usamos IA como experimento: la convertimos en infraestructura productiva de tu negocio.",
    approachPoints: [
      "Auditoría de procesos: encontramos qué automatizar primero por ROI",
      "Integramos tus herramientas existentes (CRM, ERP, email, etc.)",
      "Implementamos agentes IA para tareas cognitivas repetitivas",
      "Dashboards operativos en tiempo real para total visibilidad",
    ],
    includes: [
      "Mapa completo de procesos y cuellos de botella",
      "Automatizaciones de flujos clave (Make, n8n, Zapier)",
      "Agentes IA personalizados para tu negocio",
      "Integración de sistemas y herramientas existentes",
      "Dashboards operativos en tiempo real",
      "Formación del equipo en las nuevas herramientas",
      "Documentación técnica del sistema",
      "Soporte y mantenimiento continuado",
    ],
    stats: [
      { value: "40+", label: "Sistemas automatizados implementados" },
      { value: "70%", label: "Reducción media de tiempo en procesos" },
    ],
    quote: "Escala el negocio, no la plantilla.",
    quoteAuthor: "Visual & Growth",
    Icon: Bot,
    nextSlug: "market-authority",
    nextTitle: "Market Authority",
  },
  "market-authority": {
    category: "SEO & Positioning",
    title: "Market Authority",
    tagline: "No buscamos visitas. Buscamos compradores.",
    desc: "Posicionamiento quirúrgico en los términos con mayor intención de compra de tu sector. Construimos autoridad digital para que aparezcas cuando tu cliente ideal está listo para decidir.",
    problems: [
      { title: "Tráfico que no convierte", desc: "Tienes visitas pero no ventas. Estás atrayendo al público equivocado en el momento equivocado." },
      { title: "Invisible cuando importa", desc: "Tus competidores dominan las búsquedas clave y tú no apareces cuando el prospecto está listo para comprar." },
      { title: "SEO genérico sin resultado", desc: "Posicionas palabras sin intención de compra. El tráfico crece, el revenue no." },
    ],
    approach: "No perseguimos volumen de tráfico: construimos autoridad digital para que aparezcas exactamente cuando tu cliente ideal está listo para decidir. Cada acción de SEO tiene un objetivo de negocio, no de vanidad.",
    approachPoints: [
      "Keyword research centrado en intención de compra, no en volumen",
      "Arquitectura de contenido que posiciona y convierte",
      "SEO técnico: Core Web Vitals, velocidad, indexación perfecta",
      "Link building editorial con medios y portales de autoridad",
    ],
    includes: [
      "Auditoría SEO técnica completa",
      "Mapa de keywords por intención de compra",
      "Arquitectura de contenido y silos temáticos",
      "Producción de contenido optimizado para conversión",
      "SEO técnico: schema, velocidad, Core Web Vitals",
      "Estrategia de link building editorial",
      "Google Search Console + Analytics setup",
      "Reporting mensual de posicionamiento y tráfico cualificado",
    ],
    stats: [
      { value: "3–6m", label: "Para posicionamiento sólido" },
      { value: "+340%", label: "Tráfico cualificado medio en 6 meses" },
    ],
    quote: "El mejor canal de adquisición que no pagas por clic.",
    quoteAuthor: "Visual & Growth",
    Icon: BarChart3,
    nextSlug: "product-boutique",
    nextTitle: "Product Boutique",
  },
  "product-boutique": {
    category: "UI/UX & Branding",
    title: "Product Boutique",
    tagline: "Diseño que vende solo. Estética que eleva. Conversión que factura.",
    desc: "Combinamos la estética de las mejores marcas del mundo con principios de conversión probados. Creamos identidades y productos digitales que emocionan, diferencian y venden.",
    problems: [
      { title: "Diseño bonito que no convierte", desc: "Tu web es atractiva pero los visitantes no actúan. El diseño no está alineado con la psicología de compra." },
      { title: "Sin identidad diferenciadora", desc: "Te confunden con la competencia. Tu marca no transmite el valor que realmente ofreces." },
      { title: "Percepción de valor baja", desc: "Tienes que justificar precios constantemente porque tu imagen no proyecta autoridad premium." },
    ],
    approach: "Estética 'Mendesaltaren', conversión 'Amazon'. Cada decisión de diseño tiene un propósito: elevar tu percepción de valor y guiar al usuario hacia la acción. Diseñamos con datos, no con opiniones.",
    approachPoints: [
      "Diseño con carácter: estética consistente que genera reconocimiento",
      "Cada píxel tiene un propósito: UX orientada a conversión",
      "Psicología del color y tipografía para elevar percepción de valor",
      "A/B testing y heatmaps para validar cada decisión",
    ],
    includes: [
      "Identidad visual completa (logo, colores, tipografía)",
      "Brand guidelines y manual de marca",
      "Diseño web / landing pages de alta conversión",
      "Sistema de componentes UI reutilizable",
      "Diseño de producto digital (app, dashboard, SaaS)",
      "Materiales de marketing (decks, propuestas, social)",
      "Motion design y microinteracciones",
      "Handoff técnico a desarrollo con documentación",
    ],
    stats: [
      { value: "+2.4x", label: "Tasa de conversión media tras rediseño" },
      { value: "4 sem", label: "Para tener tu identidad lista" },
    ],
    quote: "El diseño es el embajador silencioso de tu marca.",
    quoteAuthor: "Visual & Growth",
    Icon: Layout,
    nextSlug: "smart-structure",
    nextTitle: "Smart Structure",
  },
  "smart-structure": {
    category: "Legal & Tax",
    title: "Smart Structure",
    tagline: "Crece sin que Hacienda se lleve la mitad.",
    desc: "Optimizamos la estructura fiscal y legal de tu empresa para que cada euro generado se quede donde tiene que quedarse: en tu negocio.",
    problems: [
      { title: "Estructura societaria ineficiente", desc: "A medida que escalas, pagas más impuestos de los necesarios porque tu estructura no está optimizada para el crecimiento." },
      { title: "Riesgos legales ignorados", desc: "Contratos, protección de IP, compliance... lo que no proteges ahora puede hundirte después." },
      { title: "Costes ocultos que destruyen márgenes", desc: "No tienes visibilidad de qué costes son deducibles ni cómo estructurar la empresa para maximizar cada euro." },
    ],
    approach: "Trabajamos con los mejores asesores especializados en empresas de alto crecimiento. No ofrecemos asesoría genérica: diseñamos la estructura exacta que maximiza cada euro que generas.",
    approachPoints: [
      "Análisis exhaustivo de la estructura societaria actual",
      "Diseño de estructura holding / filiales si aplica",
      "Optimización fiscal: deducciones, regímenes especiales",
      "Protección de activos intangibles (IP, marca, software)",
    ],
    includes: [
      "Auditoría fiscal y legal de la estructura actual",
      "Diseño de estructura societaria óptima",
      "Optimización del régimen fiscal aplicable",
      "Contratos con clientes, proveedores y empleados",
      "Protección de IP y activos intangibles",
      "Compliance LOPD / RGPD",
      "Planificación fiscal anual",
      "Acceso a red de asesores especializados",
    ],
    stats: [
      { value: "20–40%", label: "Ahorro fiscal medio tras optimización" },
      { value: "1 mes", label: "Para tener la estructura rediseñada" },
    ],
    quote: "El crecimiento sin estructura es una bomba de relojería.",
    quoteAuthor: "Visual & Growth",
    Icon: Zap,
    nextSlug: "content-studio",
    nextTitle: "Content Studio",
  },
  "content-studio": {
    category: "Media Production",
    title: "Content Studio",
    tagline: "Tu marca es una productora de medios. Empieza a actuar como tal.",
    desc: "Convertimos tu empresa en una marca mediática. Desarrollamos la narrativa, producimos el contenido y lo distribuimos para que cada pieza trabaje para ti 24/7.",
    problems: [
      { title: "Contenido que nadie consume", desc: "Publicas constantemente pero el engagement es bajo y no genera leads. El contenido no conecta con tu embudo de ventas." },
      { title: "Sin coherencia de marca", desc: "Cada pieza de contenido parece de una marca diferente. Sin narrativa, sin identidad, sin autoridad." },
      { title: "Producción lenta y sin ROI", desc: "Tardas semanas en producir contenido que no mueve la aguja. Sin sistema, sin escala." },
    ],
    approach: "Desarrollamos la narrativa de tu marca y la convertimos en contenido que conecta con tu audiencia ideal. Producimos con criterio cinematográfico y distribuimos con estrategia de negocio.",
    approachPoints: [
      "Estrategia de contenido alineada con el embudo de ventas",
      "Producción video: grabación, edición, motion graphics",
      "Contenido vertical nativo para cada plataforma",
      "Narrativas que conectan con Gen-Z y C-Levels por igual",
    ],
    includes: [
      "Estrategia de contenido y calendario editorial",
      "Producción de video (brand film, reels, testimonios)",
      "Edición y postproducción profesional",
      "Motion graphics y animación de marca",
      "Contenido para LinkedIn, Instagram y TikTok",
      "Guiones y narrativas de marca",
      "Gestión y distribución de canales",
      "Análisis de rendimiento y optimización continua",
    ],
    stats: [
      { value: "10x", label: "Más contenido producido vs método tradicional" },
      { value: "+180%", label: "Alcance orgánico medio en 3 meses" },
    ],
    quote: "Una empresa que no produce contenido es invisible.",
    quoteAuthor: "Visual & Growth",
    Icon: Activity,
    nextSlug: "estrategia-consultoria",
    nextTitle: "Estrategia & Consultoría",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];
  if (!service) return null;

  const { category, title, tagline, desc, problems, approach, approachPoints, includes, stats, quote, quoteAuthor, Icon, nextSlug, nextTitle } = service;

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-end pb-20 px-6 pt-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Back */}
          <a href="/#ecosistema" className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-accent transition-colors mb-12 uppercase tracking-widest">
            <ArrowLeft className="w-3 h-3" /> Visual &amp; Growth
          </a>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest border border-accent/30 px-2 py-1 rounded-sm">{category}</span>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold mb-6 leading-[0.9] tracking-tight">
              {title}
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl font-display mb-10 max-w-2xl leading-relaxed">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#audit" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-bold text-sm hover:bg-white transition-all rounded-sm">
                Solicita una auditoría gratuita <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/#ecosistema" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white text-sm hover:border-accent hover:text-accent transition-all rounded-sm">
                Ver todos los servicios
              </a>
            </div>
          </div>
        </div>

        {/* Large icon watermark */}
        <div className="absolute bottom-10 right-10 opacity-5 hidden lg:block">
          <Icon className="w-64 h-64" />
        </div>
      </section>

      {/* DESCRIPTION STRIP */}
      <section className="py-16 px-6 border-y border-gray-900/60 bg-[#060606]">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">{desc}</p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-3 block">El Problema</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">¿Te suena familiar?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="p-8 border border-gray-900 rounded-sm bg-[#060606] hover:border-gray-700 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 md:py-32 px-6 bg-[#060606] border-y border-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-mono text-xs uppercase tracking-widest mb-6 block">Nuestro Enfoque</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Cómo lo hacemos diferente.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">{approach}</p>
              {/* Quote */}
              <div className="border-l-2 border-accent pl-6">
                <p className="text-white italic text-lg mb-2">"{quote}"</p>
                <p className="text-gray-500 text-sm font-mono">{quoteAuthor}</p>
              </div>
            </div>
            <div className="space-y-4">
              {approachPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-gray-900 rounded-sm bg-black hover:border-gray-700 transition-colors group">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-3 block">El Servicio</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Qué incluye.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 border border-gray-900/80 rounded-sm hover:border-gray-700 hover:bg-white/[0.02] transition-all group">
                <span className="font-mono text-[10px] text-gray-700 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 border-y border-gray-900/60 bg-[#060606]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-6xl font-bold font-display text-accent mb-3 tracking-tight">{stat.value}</div>
                <div className="text-gray-500 text-xs md:text-sm font-mono uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/6 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-6 block">¿Empezamos?</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            ¿Listo para crecer con {title}?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Cuéntanos tu situación. Analizaremos tu caso sin coste y te propondremos un plan concreto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#audit" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-accent text-black font-bold hover:bg-white transition-all rounded-sm">
              Solicitar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* NEXT SERVICE */}
      <section className="border-t border-gray-900/60">
        <a href={`/ecosistema/${nextSlug}`} className="group flex items-center justify-between px-6 md:px-12 py-10 hover:bg-white/[0.02] transition-colors">
          <div>
            <p className="text-gray-600 text-xs font-mono uppercase tracking-widest mb-2">Siguiente servicio</p>
            <p className="text-white text-xl md:text-2xl font-bold font-display group-hover:text-accent transition-colors">{nextTitle}</p>
          </div>
          <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-2" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-gray-900/60 bg-black text-center text-gray-600 text-xs">
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-500">
            <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
          </div>
        </div>
        <p>&copy; 2026 Visual &amp; Growth. All rights reserved.</p>
      </footer>
    </div>
  );
}
