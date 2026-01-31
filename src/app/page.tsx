"use client";

import { ArrowRight, BarChart3, Bot, ChevronRight, Layout, Rocket, Zap, CheckCircle2, Activity } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import LeadCaptureModal from "@/components/LeadCaptureModal";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary text-text-primary selection:bg-accent selection:text-primary overflow-x-hidden font-sans min-h-screen">
      <CookieConsent />
      <LeadCaptureModal />

      {/* Background Gradient Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,195,0,0.1)_0%,rgba(5,5,5,0)_50%)] pointer-events-none z-0" />

      {/* Navbar */}
      <div className={`transition-opacity duration-700 ${showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <Navbar />
      </div>

      <main className="relative z-10 w-full">

        {/* HERO SECTION - LOGO ONLY + TECH WIDGETS */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-center overflow-hidden">

          {/* --- TECH VISUALS (CSS BASED) --- */}

          {/* 1. Top Right: SYSTEM STATUS */}
          <div className="absolute top-24 right-10 md:right-32 opacity-90 hidden md:block border border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm p-4 rounded-lg rotate-6 animate-pulse-slow z-0 shadow-lg hover:border-accent/50 transition-colors cursor-default">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">SYSTEM_READY</div>
            </div>
            <div className="text-accent text-xs font-mono font-bold tracking-wider">● ONLINE</div>
          </div>

          {/* 2. Bottom Left: REVENUE METRICS */}
          <div className="absolute bottom-32 left-8 md:left-24 opacity-80 hidden md:block border border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm p-5 rounded-lg -rotate-3 z-0 shadow-lg hover:border-accent/50 transition-colors cursor-default">
            <div className="text-[10px] font-mono text-gray-500 border-b border-gray-800 pb-1 mb-2 uppercase flex justify-between gap-4">
              <span>REVENUE_TRACKER</span>
              <span className="text-gray-600">v2.1</span>
            </div>
            <div className="flex justify-between items-end gap-8 text-xs font-mono">
              <div className="flex flex-col text-left">
                <span className="text-gray-400 text-[10px] mb-1">Run Rate</span>
                <span className="text-white font-bold text-lg">$2.4M</span>
              </div>
              <span className="text-green-400 bg-green-400/10 px-1 rounded">+12%</span>
            </div>
          </div>

          {/* 3. Top Left: AUDIT PROTOCOL (Full) */}
          <div className="absolute top-32 left-10 md:left-32 opacity-80 hidden xl:block z-0 border border-gray-800 bg-[#0A0A0A]/80 p-4 rounded-lg -rotate-2 backdrop-blur-sm hover:border-accent/50 transition-colors cursor-default">
            <div className="text-[10px] font-mono text-gray-500 border-b border-gray-800 pb-1 mb-2">INIT_PROTOCOL</div>
            <div className="font-mono text-[10px] text-left space-y-2 text-gray-400">
              <div className="flex items-center justify-between gap-4">
                <span>CONNECTING_AGENTS...</span>
                <span className="text-green-500 font-bold">OK</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>SCALING_V3...</span>
                <span className="animate-pulse text-accent">PENDING</span>
              </div>
            </div>
          </div>

          {/* 4. Bottom Right: SCALE VELOCITY */}
          <div className="absolute bottom-24 right-10 md:right-20 opacity-70 hidden lg:block border border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm p-4 rounded-lg rotate-2 z-0 shadow-lg hover:border-accent/50 transition-colors cursor-default">
            <div className="flex justify-between items-center mb-3 border-b border-gray-800 pb-1">
              <span className="text-[10px] font-mono text-gray-400 uppercase">SCALE_VELOCITY</span>
              <Bot className="w-3 h-3 text-accent" />
            </div>
            <div className="flex items-end gap-1 h-12">
              <div className="w-2 bg-gray-800 h-4 rounded-t-sm"></div>
              <div className="w-2 bg-gray-800 h-6 rounded-t-sm"></div>
              <div className="w-2 bg-gray-700 h-5 rounded-t-sm"></div>
              <div className="w-2 bg-gray-600 h-8 rounded-t-sm"></div>
              <div className="w-2 bg-accent h-10 rounded-t-sm animate-pulse"></div>
            </div>
          </div>

          {/* 5. NEW: Middle Left - TRAFFIC SOURCE */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-60 hidden xl:block border border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm p-3 rounded-lg z-0 hover:border-accent/50 transition-colors cursor-default">
            <div className="text-[9px] font-mono text-gray-500 mb-2 uppercase">Traffic Source</div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span className="text-[10px] font-mono text-gray-300">Organic Search</span>
                <span className="text-[10px] font-mono text-gray-500 ml-auto">45%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-accent rounded-full"></div>
                <span className="text-[10px] font-mono text-gray-300">Direct</span>
                <span className="text-[10px] font-mono text-gray-500 ml-auto">30%</span>
              </div>
            </div>
          </div>

          {/* 6. NEW: Bottom Center/Right - AI NODES */}
          <div className="absolute bottom-10 right-1/4 opacity-60 hidden xl:block border border-gray-800 bg-[#0A0A0A]/80 backdrop-blur-sm p-3 rounded-lg rotate-1 z-0 hover:border-accent/50 transition-colors cursor-default">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-3 h-3 text-accent" />
              <span className="text-[9px] font-mono text-gray-400 uppercase">ACTIVE_NODES</span>
            </div>
            <div className="font-mono text-xs text-white font-bold">
              842 <span className="text-gray-600 text-[9px] font-normal">/ 1024</span>
            </div>
          </div>


          {/* Main Logo ONLY - Centered */}
          <div className="relative w-full max-w-4xl h-40 md:h-64 animate-fade-in-up z-10 flex items-center justify-center">
            <Image
              src="/logo-full.png"
              fill
              alt="Visual & Growth"
              className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              priority
            />
          </div>

        </section>

        {/* INSIGHTS STRIP */}
        <section className="py-12 border-y border-gray-900 bg-bg-secondary/50 backdrop-blur-sm relative z-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="Enfoque Growth" value="100%" sub="Negocio 360" />
            <Stat label="Time to Market" value="2 Sem" sub="Validación Rápida" />
            <Stat label="Integración IA" value="Nativa" sub="Automatización" />
            <Stat label="Diseño" value="A+" sub="Calidad Boutique" />
          </div>
        </section>

        {/* THE ECOSYSTEM */}
        <section id="ecosistema" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div className="max-w-2xl">
                <span className="text-accent font-mono text-sm mb-4 block uppercase tracking-widest">El Ecosistema</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  Ingeniería de <span className="text-gray-500">Crecimiento.</span>
                </h2>
                <p className="text-text-secondary text-lg">
                  No hacemos acciones sueltas. Construimos sistemas interconectados.
                </p>
              </div>
              <a href="#audit" className="hidden md:flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                Ver Roadmap Completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              <BoutiqueCard
                title="Estrategia & Consultoría"
                subtitle="Growth Machines"
                desc="Olvídate del marketing tradicional. Como consultora estratégica, analizamos tu modelo y diseñamos la hoja de ruta para escalar tu facturación."
              />
              <BoutiqueCard
                title="Hyper-Automation"
                subtitle="AI & Operations"
                desc="Automatización inteligente para mejorar la eficiencia operativa. Conectamos sistemas, optimizamos flujos de trabajo y digitalizamos procesos para maximizar productividad y escalabilidad."
              />
              <BoutiqueCard
                title="Market Authority"
                subtitle="SEO & Positioning"
                desc="No buscamos visitas, buscamos intención de compra. Posicionamiento quirúrgico para dominar los términos que realmente convierten."
              />
              <BoutiqueCard
                title="Product Boutique"
                subtitle="UI/UX & Branding"
                desc="Diseños que venden solos. Estética 'Mendesaltaren' con conversión 'Amazon'. Elevamos tu percepción de valor al infinito."
              />
              <BoutiqueCard
                title="Smart Structure"
                subtitle="Legal & Tax"
                desc="El crecimiento trae complejidad. Optimizamos tu estructura fiscal y legal para que cada euro generado se maximice."
              />
              <BoutiqueCard
                title="Content Studio"
                subtitle="Media Production"
                desc="Tu marca es una productora de medios. Creamos contenido vertical y narrativas visuales que atrapan a la Gen-Z y C-Levels por igual."
              />
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="metodologia" className="py-32 px-6 bg-[#080808] border-t border-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 sticky top-32">
                  El Método <span className="text-accent">V&G</span>.
                  <br /><span className="text-gray-600 text-3xl">Del Caos al Sistema.</span>
                </h2>

                {/* TEAM OFFICE PHOTO - CLEAN, NO FILTERS */}
                <div className="mt-12 relative h-80 w-full rounded-sm overflow-hidden border border-gray-800 sticky top-80 hidden lg:block shadow-2xl">
                  <Image
                    src="/team-office.jpg"
                    fill
                    alt="Visual & Growth Team"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

              </div>
              <div className="space-y-12">
                <StepItem num="01" title="Discovery & Audit" desc="Radiografía total. No tocamos una línea de código sin entender tus unit economics. Auditamos tus fugas de dinero y tiempo." />
                <StepItem num="02" title="Hypothesis & Roadmap" desc="Diseñamos el plan de ataque. Priorizamos acciones por 'Impacto vs Esfuerzo' (ICE Score). Nada de paja, solo tracción." />
                <StepItem num="03" title="Sprint Execution" desc="Despliegue rápido. Lanzamos, medimos y ajustamos en ciclos cortos. Velocidad de startup para validar resultados en semanas." />
                <StepItem num="04" title="Scale Up" desc="Cuando algo funciona, echamos gasolina. Automatizamos lo validado y escalamos la inversión publicitaria y operativa." />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partnership" className="py-32 px-6 border-t border-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Partners, no Proveedores.</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Lideramos tu crecimiento implicándonos en el negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TeamMember
                name="Pablo Pérez"
                role="Co-CEO & Growth Strategist"
                bio="Ex-Google Cloud Business Strategist. Experto en transformar empresas tradicionales mediante IA y Cloud. Su obsesión: que la tecnología resuelva problemas de negocio reales."
                quote="La tecnología sin estrategia es solo gasto."
              />
              <TeamMember
                name="Ignacio Viñas"
                role="Co-CEO & Brand Director"
                bio="Filmmaker y Estratega Visual. Ha ayudado a marcas a encontrar su voz y estética en un mercado saturado. Su enfoque: convertir la identidad visual en un activo financiero."
                quote="El diseño es el embajador silencioso de tu marca."
              />
            </div>
          </div>
        </section>

        {/* LEAD MAGNET */}
        <section id="audit" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#050505]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                ¿Tu empresa escala o <span className="text-gray-500">sobrevive</span>?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
                Rellena este diagnóstico. Analizaremos tu caso gratis y te propondremos un roadmap.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <footer className="py-12 border-t border-gray-900 bg-black text-center text-gray-600 text-sm">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-10 opacity-50 grayscale hover:grayscale-0 transition-all">
              <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
            </div>
          </div>
          {/* SOCIAL LINKS REMOVED */}
          <p>&copy; 2026 Visual & Growth. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}

// COMPONENTS (Stat, BoutiqueCard, StepItem, TeamMember)
function Stat({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="text-center">
      <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">{label}</div>
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-display">{value}</div>
      <div className="text-xs text-accent">{sub}</div>
    </div>
  )
}

function BoutiqueCard({ title, subtitle, desc, highlight = false }: { title: string, subtitle: string, desc: string, highlight?: boolean }) {
  return (
    <div className={`p-10 border-r border-b border-gray-900 group relative overflow-hidden transition-all hover:bg-white/5 ${highlight ? 'bg-white/5' : ''}`}>
      <div className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest group-hover:text-accent transition-colors">{subtitle}</div>
      <h3 className="text-2xl font-bold font-display mb-4 text-white">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-8 border-l-2 border-transparent pl-0 group-hover:border-accent group-hover:pl-4 transition-all duration-300">
        {desc}
      </p>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
        <ArrowRight className="w-5 h-5 text-accent" />
      </div>
    </div>
  )
}

function StepItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="font-mono text-xl text-gray-700 group-hover:text-accent transition-colors pt-1">
        {num}/
      </div>
      <div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed border-l border-gray-800 pl-4 group-hover:border-accent transition-colors">
          {desc}
        </p>
      </div>
    </div>
  )
}

function TeamMember({ name, role, bio, quote }: { name: string, role: string, bio: string, quote: string }) {
  return (
    <div className="bg-bg-secondary/30 p-8 border border-gray-800 rounded-sm hover:border-accent/50 transition-colors group">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{role}</p>
      </div>
      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
        {bio}
      </p>
      <div className="pt-6 border-t border-gray-800">
        <p className="text-white italic text-sm font-medium">"{quote}"</p>
      </div>
    </div>
  )
}
