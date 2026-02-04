"use client";

import { ArrowRight, BarChart3, Bot, ChevronRight, Layout, Rocket, Zap, CheckCircle2, Activity } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { NumberTicker } from "@/components/NumberTicker";
import { TextAnimate } from "@/components/TextAnimate";
import { BorderBeam } from "@/components/BorderBeam";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern";
import { VelocityScroll } from "@/components/VelocityScroll";
import { cn } from "@/lib/utils";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      // Scroll Lighting logic - ONLY FOR MOBILE
      if (window.innerWidth < 768) {
        const elements = document.querySelectorAll("[data-scroll-item]");
        let closestId = null;
        let minDistance = Infinity;

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const centerY = window.innerHeight / 2;
          const elementCenterY = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenterY - centerY);

          if (distance < minDistance && distance < 250) {
            minDistance = distance;
            closestId = el.getAttribute("data-scroll-id");
          }
        });
        setActiveId(closestId);
      } else {
        setActiveId(null);
      }
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    checkMobile();
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
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

        {/* HERO SECTION - REFINED TECHNOLOGICAL */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-center overflow-hidden">

          {/* INTERACTIVE GRID PATTERN - ZOOMED IN EFFECT (HIDDEN ON MOBILE) */}
          <InteractiveGridPattern
            width={120}
            height={120}
            squares={[20, 20]}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] md:skew-y-12 z-0 hidden md:block"
            )}
          />

          {/* --- TECH VISUALS (SKEWED PERSPECTIVE ON DESKTOP - HIDDEN ON MOBILE) --- */}
          <div className="absolute inset-0 z-10 pointer-events-none md:skew-y-12 hidden md:block">
            <div className="relative w-full h-full max-w-7xl mx-auto overflow-visible">

              {/* ORIGINAL 4 CARDS - UNIFIED STYLE - OPTIMIZED FOR MOBILE */}
              <TechProtocolCard
                title="SYSTEM_READY"
                className="top-[5%] md:top-[15%] right-[2%] md:right-[10%]"
                lines={[
                  { label: "STATUS", value: "ONLINE", status: "ok" },
                  { label: "UPTIME", value: "99.9%", status: "ok" }
                ]}
              />

              <TechProtocolCard
                title="REVENUE_TRACKER"
                className="bottom-[5%] md:bottom-[20%] left-[2%] md:left-[8%]"
                lines={[
                  { label: "RUN_RATE", value: "$2.4M", status: "accent" },
                  { label: "GROWTH", value: "+12%", status: "ok" }
                ]}
              />

              <TechProtocolCard
                title="INIT_PROTOCOL"
                className="top-[12%] md:top-[25%] left-[2%] md:left-[10%]"
                lines={[
                  { label: "AGENTS", value: "CONNECTED", status: "ok" },
                  { label: "SYNC", value: "PENDING", status: "pulse" }
                ]}
              />

              <TechProtocolCard
                title="SCALE_VELOCITY"
                className="bottom-[10%] md:bottom-[15%] right-[2%] md:right-[12%]"
                lines={[
                  { label: "LOAD", value: "OPTIMAL", status: "ok" },
                  { label: "OPS", value: "SCALING", status: "accent" }
                ]}
              />

              {/* EXTRA CARDS FOR DEPTH */}
              <TechProtocolCard
                title="NEURAL_LINK"
                className="top-[10%] left-[25%] opacity-40 scale-75 hidden md:block"
                lines={[{ label: "CORE", value: "ACTIVE", status: "ok" }]}
              />

              <TechProtocolCard
                title="CLOUD_SYNC"
                className="top-[45%] right-[5%] opacity-30 scale-90 hidden lg:block"
                lines={[{ label: "DATA", value: "STREAMING", status: "pulse" }]}
              />

              <TechProtocolCard
                title="SECURITY_H"
                className="bottom-[40%] left-[15%] opacity-40 scale-75 hidden xl:block"
                lines={[{ label: "ENC", value: "AES-256", status: "ok" }]}
              />

              <TechProtocolCard
                title="ANALYTICS_V4"
                className="bottom-[10%] left-[30%] opacity-30 scale-90 hidden md:block"
                lines={[{ label: "VARS", value: "TRACKED", status: "accent" }]}
              />

              <TechProtocolCard
                title="CORE_ENGINE"
                className="top-[40%] left-[0%] opacity-20 scale-110 hidden 2xl:block"
                lines={[{ label: "MOD", value: "V2.1.0", status: "ok" }]}
              />

            </div>
          </div>

          {/* Main Logo - CENTERED */}
          <div className="relative w-full max-w-[85vw] md:max-w-3xl h-16 sm:h-28 md:h-40 animate-fade-in-up z-20">
            <Image
              src="/logo-full.png"
              fill
              alt="Visual & Growth"
              className="object-contain drop-shadow-[0_0_15px_rgba(255,198,0,0.4)] md:drop-shadow-[0_0_25px_rgba(255,198,0,0.5)]"
              priority
            />
          </div>

        </section>

        {/* INSIGHTS STRIP - VELOCITY SCROLL */}
        <section className="py-20 border-y border-gray-900 bg-bg-secondary/30 backdrop-blur-sm relative z-20 overflow-hidden">
          <VelocityScroll default_velocity={3} numRows={1}>
            <Stat label="Enfoque Growth" value={100} suffix="%" sub="Negocio 360" />
            <Stat label="Time to Market" value={2} suffix=" Sem" sub="Validación Rápida" />
            <Stat label="Integración IA" value="Nativa" sub="Automatización" />
            <Stat label="Diseño" value="A+" sub="Calidad Boutique" />
          </VelocityScroll>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-primary to-transparent z-10" />
        </section>

        {/* THE ECOSYSTEM */}
        <section id="ecosistema" className="py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:bottom-20 gap-6">
              <div className="max-w-2xl">
                <span className="text-accent font-mono text-sm mb-4 block uppercase tracking-widest">El Ecosistema</span>
                <div className="pb-2 overflow-hidden">
                  <TextAnimate animation="blurInUp" by="word" as="h2" className="text-4xl md:text-6xl font-display font-bold mb-6">
                    Ingeniería de Crecimiento.
                  </TextAnimate>
                </div>
                <TextAnimate animation="fadeIn" by="line" delay={0.3} className="text-text-secondary text-lg">
                  No hacemos acciones sueltas. Construimos sistemas interconectados.
                </TextAnimate>
              </div>
              <a href="#audit" className="hidden md:flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors">
                Ver Roadmap Completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-1 border border-gray-900 md:border-none">
              <BoutiqueCard
                id="eco-1" activeId={activeId} isMobile={isMobile}
                title="Estrategia & Consultoría"
                subtitle="Growth Machines"
                desc="Olvídate del marketing tradicional. Como consultora estratégica, analizamos tu modelo y diseñamos la hoja de ruta para escalar tu facturación."
              />
              <BoutiqueCard
                id="eco-2" activeId={activeId} isMobile={isMobile}
                title="Hyper-Automation"
                subtitle="AI & Operations"
                desc="Automatización inteligente para mejorar la eficiencia operativa. Conectamos sistemas, optimizamos flujos de trabajo y digitalizamos procesos para maximizar productividad y escalabilidad."
              />
              <BoutiqueCard
                id="eco-3" activeId={activeId} isMobile={isMobile}
                title="Market Authority"
                subtitle="SEO & Positioning"
                desc="No buscamos visitas, buscamos intención de compra. Posicionamiento quirúrgico para dominar los términos que realmente convierten."
              />
              <BoutiqueCard
                id="eco-4" activeId={activeId} isMobile={isMobile}
                title="Product Boutique"
                subtitle="UI/UX & Branding"
                desc="Diseños que venden solos. Estética 'Mendesaltaren' con conversión 'Amazon'. Elevamos tu percepción de valor al infinito."
              />
              <BoutiqueCard
                id="eco-5" activeId={activeId} isMobile={isMobile}
                title="Smart Structure"
                subtitle="Legal & Tax"
                desc="El crecimiento trae complejidad. Optimizamos tu estructura fiscal y legal para que cada euro generado se maximice."
              />
              <BoutiqueCard
                id="eco-6" activeId={activeId} isMobile={isMobile}
                title="Content Studio"
                subtitle="Media Production"
                desc="Tu marca es una productora de medios. Creamos contenido vertical y narrativas visuales que atrapan a la Gen-Z y C-Levels por igual."
              />
            </div>
          </div>
        </section>

        {/* METHODOLOGY */}
        <section id="metodologia" className="py-24 md:py-32 px-6 bg-[#080808] border-t border-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              <div>
                <div className="sticky top-32">
                  <div className="pb-2 overflow-hidden">
                    <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl md:text-5xl font-display font-bold mb-8">
                      El Método V&G.
                    </TextAnimate>
                  </div>
                  <TextAnimate animation="fadeIn" by="word" delay={0.4} className="text-gray-600 text-2xl md:text-3xl font-display font-medium">
                    Del Caos al Sistema.
                  </TextAnimate>
                </div>

                {/* TEAM OFFICE PHOTO */}
                <div className="mt-12 relative h-64 md:h-80 w-full rounded-sm overflow-hidden border border-gray-800 sticky top-80 hidden lg:block shadow-2xl">
                  <Image
                    src="/team-office-final.jpg?v=7"
                    fill
                    alt="Visual & Growth Team"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

              </div>
              <div className="space-y-10 md:space-y-12">
                <StepItem id="step-1" activeId={activeId} isMobile={isMobile} num="01" title="Discovery & Audit" desc="Radiografía total. No tocamos una línea de código sin entender tus unit economics. Auditamos tus fugas de dinero y tiempo." />
                <StepItem id="step-2" activeId={activeId} isMobile={isMobile} num="02" title="Hypothesis & Roadmap" desc="Diseñamos el plan de ataque. Priorizamos acciones por 'Impacto vs Esfuerzo' (ICE Score). Nada de paja, solo tracción." />
                <StepItem id="step-3" activeId={activeId} isMobile={isMobile} num="03" title="Sprint Execution" desc="Despliegue rápido. Lanzamos, medimos y ajustamos en ciclos cortos. Velocidad de startup para validar resultados en semanas." />
                <StepItem id="step-4" activeId={activeId} isMobile={isMobile} num="04" title="Scale Up" desc="Cuando algo funciona, echamos gasolina. Automatizamos lo validado y escalamos la inversión publicitaria y operativa." />
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partnership" className="py-24 md:py-32 px-6 border-t border-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-16 md:bottom-20">
              <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl md:text-5xl font-display font-bold mb-6">
                Partners, no Proveedores.
              </TextAnimate>
              <TextAnimate animation="fadeIn" by="line" delay={0.3} className="text-text-secondary text-lg max-w-2xl mx-auto">
                Lideramos tu crecimiento implicándonos en el negocio.
              </TextAnimate>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <TeamMember
                id="partner-pablo"
                activeId={activeId}
                isMobile={isMobile}
                name="Pablo Pérez"
                role="Co-CEO & Growth Strategist"
                bio="Ex-Google Cloud Business Strategist. Experto en transformar empresas tradicionales mediante IA y Cloud. Su obsesión: que la tecnología resuelva problemas de negocio reales."
                quote="La tecnología sin estrategia es solo gasto."
              />
              <TeamMember
                id="partner-ignacio"
                activeId={activeId}
                isMobile={isMobile}
                name="Ignacio Viñas"
                role="Co-CEO & Brand Director"
                bio="Filmmaker y Estratega Visual. Ha ayudado a marcas a encontrar su voz y estética en un mercado saturado. Su enfoque: convertir la identidad visual en un activo financiero."
                quote="El diseño es el embajador silencioso de tu marca."
              />
            </div>
          </div>
        </section>

        {/* LEAD MAGNET */}
        <section id="audit" className="py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-[#050505]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12 md:bottom-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                ¿Tu empresa escala o <span className="text-gray-500">sobrevive</span>?
              </h2>
              <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-12">
                Rellena este diagnóstico. Analizaremos tu caso gratis y te propondremos un roadmap.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        <footer className="py-12 border-t border-gray-900 bg-black text-center text-gray-400 text-xs md:text-sm">
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-8 md:w-32 md:h-10 opacity-50 grayscale hover:grayscale-0 transition-all">
              <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
            </div>
          </div>
          <p>&copy; 2026 Visual & Growth. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}

// HELPERS
function TechProtocolCard({ title, lines, className }: { title: string, lines: { label: string, value: string, status: 'ok' | 'pulse' | 'accent' }[], className?: string }) {
  return (
    <div className={cn(
      "absolute border border-gray-800 bg-[#0A0A0A]/80 p-3 md:p-4 rounded-lg backdrop-blur-sm hover:border-accent/40 transition-all duration-500 shadow-xl pointer-events-auto scale-90 md:scale-100",
      className
    )}>
      <div className="text-[8px] md:text-[10px] font-mono text-gray-500 border-b border-gray-800 pb-1 mb-2 tracking-widest uppercase">{title}</div>
      <div className="font-mono text-[7px] md:text-[10px] text-left space-y-1 md:space-y-1.5 min-w-[100px] md:min-w-[120px]">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center justify-between gap-2 md:gap-4">
            <span className="text-gray-400 uppercase tracking-tighter">{line.label}</span>
            <span className={cn(
              "font-bold",
              line.status === 'ok' ? "text-green-500" :
                line.status === 'pulse' ? "text-accent animate-pulse" :
                  "text-accent"
            )}>{line.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value, sub, suffix = "" }: { label: string, value: string | number, sub: string, suffix?: string }) {
  return (
    <div className="text-center min-w-[200px] md:min-w-[300px]">
      <div className="text-[10px] md:text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">{label}</div>
      <div className="text-4xl md:text-7xl font-bold text-white mb-4 font-display flex items-center justify-center tracking-tighter">
        {typeof value === 'number' ? (
          <>
            <NumberTicker value={value} className="text-4xl md:text-7xl font-bold text-white tracking-tighter" />
            {suffix && <span>{suffix}</span>}
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-xs md:text-sm text-accent font-medium uppercase tracking-wide">{sub}</div>
    </div>
  )
}

function BoutiqueCard({ id, activeId, isMobile, title, subtitle, desc }: { id: string, activeId: string | null, isMobile: boolean, title: string, subtitle: string, desc: string }) {
  const isActive = isMobile && activeId === id;
  return (
    <div
      data-scroll-item
      data-scroll-id={id}
      className={cn(
        "p-8 md:p-10 border-b md:border-r md:border-b border-gray-900 group relative overflow-hidden transition-all duration-700",
        isActive ? "bg-white/10 opacity-100 scale-100 shadow-[inset_0_0_20px_rgba(255,198,0,0.05)]" : (isMobile ? "opacity-30" : "opacity-100 hover:bg-white/5 md:hover:scale-[1.02] md:hover:z-10 md:hover:shadow-2xl md:hover:border-accent/20")
      )}
    >
      <div className={cn(
        "text-[10px] md:text-xs font-mono mb-6 uppercase tracking-widest transition-colors duration-500",
        isActive ? "text-accent" : (isMobile ? "text-gray-500" : "text-gray-500 group-hover:text-accent")
      )}>{subtitle}</div>
      <h3 className={cn("text-xl md:text-2xl font-bold font-display mb-4 transition-colors duration-500", (isActive || (!isMobile)) ? "text-white" : "text-white/80 group-hover:text-white")}>{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-6 md:mb-8 border-l-2 border-transparent pl-0 transition-all duration-300">
        {desc}
      </p>
      <div className={cn(
        "absolute bottom-6 right-6 transition-all duration-500 transform",
        isActive ? "opacity-100 translate-x-0" : (isMobile ? "opacity-0 translate-x-4" : "opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0")
      )}>
        <ArrowRight className="w-5 h-5 text-accent" />
      </div>
    </div>
  )
}

function StepItem({ id, activeId, isMobile, num, title, desc }: { id: string, activeId: string | null, isMobile: boolean, num: string, title: string, desc: string }) {
  const isActive = isMobile && activeId === id;
  return (
    <div
      data-scroll-item
      data-scroll-id={id}
      className={cn(
        "flex gap-4 md:gap-6 group transition-all duration-700",
        isActive ? "opacity-100 translate-x-2 md:translate-x-4" : (isMobile ? "opacity-30" : "opacity-100 md:hover:scale-[1.03] md:hover:translate-x-2")
      )}
    >
      <div className={cn("font-mono text-lg md:text-xl transition-colors duration-500 pt-1", isActive ? "text-accent" : (isMobile ? "text-gray-700" : "text-gray-700 group-hover:text-accent"))}>
        {num}/
      </div>
      <div>
        <h3 className={cn("text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors duration-500", isActive ? "text-accent" : (isMobile ? "text-white/80" : "group-hover:text-accent"))}>{title}</h3>
        <p className={cn("text-text-secondary text-sm leading-relaxed border-l pl-4 transition-all duration-500", isActive ? "border-accent text-white" : "border-gray-800 group-hover:border-accent")}>
          {desc}
        </p>
      </div>
    </div>
  )
}

function TeamMember({ id, activeId, isMobile, name, role, bio, quote }: { id: string, activeId: string | null, isMobile: boolean, name: string, role: string, bio: string, quote: string }) {
  const isActive = isMobile && activeId === id;
  return (
    <div
      data-scroll-item
      data-scroll-id={id}
      className={cn(
        "bg-bg-secondary/30 p-6 md:p-8 border rounded-sm transition-all duration-500 group relative",
        isActive
          ? "border-accent/60 shadow-[0_0_15px_rgba(255,198,0,0.1)] opacity-100"
          : "border-gray-800 hover:border-accent/50 opacity-100" // Always 100 opacity for partners otherwise it looks weird
      )}
    >
      <div className="mb-6">
        <h3 className={cn(
          "text-xl md:text-2xl font-bold mb-1 transition-colors",
          isActive ? "text-accent" : "text-white group-hover:text-accent"
        )}>{name}</h3>
        <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">{role}</p>
      </div>
      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
        {bio}
      </p>
      <div className="pt-6 border-t border-gray-800">
        <p className={cn(
          "italic text-xs md:text-sm font-medium transition-colors",
          isActive ? "text-white" : "text-white/80"
        )}>"{quote}"</p>
      </div>
    </div>
  )
}
