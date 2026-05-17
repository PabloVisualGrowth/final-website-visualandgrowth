"use client";

import React from "react";
import { ArrowRight, BarChart3, Bot, Layout, Rocket, Zap, Activity } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
import Navbar from "@/components/Navbar";
import Scorecard from "@/components/Scorecard";
import { NumberTicker } from "@/components/NumberTicker";
import { TextAnimate } from "@/components/TextAnimate";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern";
import { VelocityScroll } from "@/components/VelocityScroll";
import { AuroraText } from "@/components/AuroraText";
import { cn } from "@/lib/utils";

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const elements = document.querySelectorAll("[data-scroll-item]");
        let closestId = null;
        let minDistance = Infinity;
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
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
    handleScroll();
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-primary text-text-primary selection:bg-accent selection:text-primary overflow-x-hidden font-sans min-h-screen">
      <CookieConsent />
      <Navbar />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,195,0,0.1)_0%,rgba(5,5,5,0)_50%)] pointer-events-none z-0" />

      <main className="relative z-10 w-full">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative text-center overflow-hidden">
          <InteractiveGridPattern
            width={120} height={120} squares={[20, 20]}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] md:skew-y-12 z-0 hidden md:block"
            )}
          />

          {/* Floating tech cards */}
          <div className="absolute inset-0 z-10 pointer-events-none md:skew-y-12 hidden md:block">
            <div className="relative w-full h-full max-w-7xl mx-auto overflow-visible">
              <TechProtocolCard title="REVENUE_TRACKER" className="top-[15%] right-[10%]"
                lines={[{ label: "RUN_RATE", value: "$2.4M", status: "accent" }, { label: "GROWTH", value: "+12%", status: "ok" }]} />
              <TechProtocolCard title="NEURAL_LINK" className="top-[25%] left-[10%]"
                lines={[{ label: "AGENTS", value: "CONNECTED", status: "ok" }, { label: "STATUS", value: "ONLINE", status: "ok" }]} />
              <TechProtocolCard title="LEADS_SYSTEM" className="bottom-[20%] left-[8%]"
                lines={[{ label: "CAPTACIÓN", value: "ACTIVA", status: "ok" }, { label: "CAC", value: "−38%", status: "accent" }]} />
              <TechProtocolCard title="SCALE_VELOCITY" className="bottom-[15%] right-[12%]"
                lines={[{ label: "LOAD", value: "OPTIMAL", status: "ok" }, { label: "OPS", value: "SCALING", status: "accent" }]} />
              <TechProtocolCard title="ICE_SCORE" className="top-[10%] left-[25%] opacity-40 scale-75 hidden md:block"
                lines={[{ label: "SPRINT", value: "ACTIVO", status: "pulse" }]} />
              <TechProtocolCard title="CLOUD_SYNC" className="top-[45%] right-[5%] opacity-30 scale-90 hidden lg:block"
                lines={[{ label: "DATA", value: "STREAMING", status: "pulse" }]} />
              <TechProtocolCard title="ACTIVOS_BLINDADOS" className="bottom-[40%] left-[15%] opacity-40 scale-75 hidden xl:block"
                lines={[{ label: "STRUCT", value: "SMART", status: "ok" }]} />
              <TechProtocolCard title="ANALYTICS_V4" className="bottom-[10%] left-[30%] opacity-30 scale-90 hidden md:block"
                lines={[{ label: "VARS", value: "TRACKED", status: "accent" }]} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center gap-7 max-w-4xl">
            <div className="relative w-[68vw] md:w-72 h-11 md:h-14 animate-fade-in-up">
              <Image src="/logo-full.png" fill alt="Visual & Growth"
                className="object-contain drop-shadow-[0_0_15px_rgba(255,198,0,0.4)]" priority />
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white leading-tight tracking-tight">
                ¿Frustrado por no escalar tu facturación pese a invertir en{" "}
                <AuroraText>sistemas y marketing</AuroraText> de alto nivel?
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}>
              Responde 15 preguntas clave para descubrir{" "}
              <span className="text-white font-medium">por qué tu empresa no escala</span>{" "}
              y obtén un roadmap personalizado de qué hacer al respecto.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}>
              <a href="#diagnostico"
                className="inline-flex items-center gap-2 bg-accent text-black font-bold text-sm md:text-base px-8 py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-widest font-mono">
                Obtén tu diagnóstico gratuito (3 min)
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#ecosistema"
                className="text-gray-500 hover:text-white text-sm font-mono uppercase tracking-widest transition-colors">
                Ver el ecosistema →
              </a>
            </div>

            {/* Revenue Tracker widget */}
            <div className="animate-fade-in-up w-full max-w-sm" style={{ animationDelay: "0.6s" }}>
              <div className="border border-gray-800 bg-[#0A0A0A]/90 rounded-lg px-5 py-4 backdrop-blur-sm">
                <div className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-3 border-b border-gray-800 pb-2">
                  Revenue Tracker · Ecosistema V&G
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Run-Rate", value: "$2.4M", status: "accent" },
                    { label: "Growth",   value: "+12%",  status: "ok"     },
                    { label: "Agents",   value: "Online",status: "pulse"  },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-[8px] font-mono text-gray-600 uppercase mb-1">{m.label}</div>
                      <div className={cn(
                        "text-sm font-bold font-mono",
                        m.status === "ok" ? "text-green-500" :
                        m.status === "pulse" ? "text-accent animate-pulse" : "text-accent"
                      )}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.75s" }}>
              {["Sin compromiso", "Respuesta en 24h", "Roadmap personalizado"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VELOCITY STRIP ───────────────────────────────────────────────── */}
        <section className="py-20 bg-bg-secondary/30 backdrop-blur-sm relative z-20 overflow-hidden">
          <VelocityScroll default_velocity={3} numRows={1}>
            <Stat label="Horas liberadas/semana" value={20} suffix="+"  sub="AI & Operations"    />
            <Stat label="Time to Market"          value={2}  suffix=" Sem" sub="Validación rápida" />
            <Stat label="Reducción de CAC"        value={38} suffix="%"  sub="Captación orgánica" />
            <Stat label="Diseño"                  value="A+"             sub="Calidad boutique"   />
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-primary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-primary to-transparent z-10" />
        </section>

        {/* ── ECOSISTEMA ───────────────────────────────────────────────────── */}
        <section id="ecosistema" className="py-24 md:py-36 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
              <div className="max-w-2xl">
                <span className="text-accent font-mono text-xs mb-4 block uppercase tracking-widest">El Ecosistema</span>
                <div className="pb-2 overflow-hidden">
                  <TextAnimate animation="blurInUp" by="word" as="h2" className="text-4xl md:text-6xl font-display font-bold mb-6">
                    6 verticales. Un sistema.
                  </TextAnimate>
                </div>
                <TextAnimate animation="fadeIn" by="line" delay={0.3} className="text-gray-500 text-xl md:text-2xl font-display">
                  Construido para convertir tu empresa en una máquina de crecimiento predecible.
                </TextAnimate>
              </div>
              <a href="#diagnostico" className="hidden md:flex items-center gap-2 text-sm text-white border-b border-accent pb-1 hover:text-accent transition-colors font-mono tracking-wide">
                INICIAR DIAGNÓSTICO <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <BoutiqueCard id="eco-1" activeId={activeId} isMobile={isMobile}
                num="01" Icon={Rocket} href="/ecosistema/estrategia-consultoria"
                title="Growth Machines" subtitle="Estrategia & Consultoría"
                bullets={[
                  "Roadmap 90 días: identifica fugas en tus Unit Economics y desbloquea el cuello de botella principal",
                  "Auditoría de tracción real: elimina métricas de vanidad y analiza rentabilidad por canal",
                  "Ingeniería de procesos para una facturación predecible, no acciones sueltas",
                ]} />
              <BoutiqueCard id="eco-2" activeId={activeId} isMobile={isMobile}
                num="02" Icon={Bot} href="/ecosistema/hyper-automation"
                title="AI & Operations" subtitle="Hyper-Automation"
                bullets={[
                  "Arquitectura Neural Link: flujos multi-agente y rastreadores de ingresos automatizados",
                  "Ops Scaling: automatización de procesos críticos para liberar +20h semanales al equipo C-Level",
                  "Dashboards V4 en tiempo real con sincronización completa de todos tus sistemas",
                ]} />
              <BoutiqueCard id="eco-3" activeId={activeId} isMobile={isMobile}
                num="03" Icon={BarChart3} href="/ecosistema/market-authority"
                title="Market Authority" subtitle="SEO & Posicionamiento"
                bullets={[
                  "Arquitectura de Silos 2026: estructura técnica citada por IA Overviews y motores generativos",
                  "Dominio de intención de compra: términos que generan transacciones, no solo tráfico",
                  "Author Score Entity: vincula cada activo de contenido con entidades autoritativas para Google",
                ]} />
              <BoutiqueCard id="eco-4" activeId={activeId} isMobile={isMobile}
                num="04" Icon={Layout} href="/ecosistema/product-boutique"
                title="Product Boutique" subtitle="UI/UX & Branding"
                bullets={[
                  "Conversión Amazon-Style: interfaces de baja carga cognitiva que eliminan la fricción de compra",
                  "Time-to-Market: prototipado funcional en 0 semanas para testear hipótesis de mercado de inmediato",
                  "Estética boutique A+ que eleva la percepción de valor del producto al nivel premium",
                ]} />
              <BoutiqueCard id="eco-5" activeId={activeId} isMobile={isMobile}
                num="05" Icon={Zap} href="/ecosistema/smart-structure"
                title="Smart Structure" subtitle="Legal & Tax"
                bullets={[
                  "Roadmap de eficiencia fiscal: optimiza tu estructura corporativa para maximizar el beneficio neto",
                  "Protección de activos digitales: blindaje legal de propiedad intelectual y estructuras de datos",
                  "Compliance de crecimiento: gestiona la complejidad legal del escalado internacional",
                ]} />
              <BoutiqueCard id="eco-6" activeId={activeId} isMobile={isMobile}
                num="06" Icon={Activity} href="/ecosistema/content-studio"
                title="Content Studio" subtitle="Media Production"
                bullets={[
                  "Narrativa vertical C-Level: contenido de alta retención diseñado para capturar decisores",
                  "Indexación de momentos clave: Google extrae fragmentos directos de tu vídeo en los resultados de búsqueda",
                  "Content Factory: activos visuales que posicionan tu marca como líder de opinión en 24h",
                ]} />
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
        <section id="metodologia" className="py-24 md:py-36 px-6 bg-[#060606] border-t border-gray-900/60">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <div>
                <div className="sticky top-32">
                  <span className="text-accent font-mono text-xs mb-6 block uppercase tracking-widest">El Método V&amp;G</span>
                  <div className="pb-2 overflow-hidden">
                    <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl md:text-5xl font-display font-bold mb-6">
                      Del Caos al Sistema.
                    </TextAnimate>
                  </div>
                  <TextAnimate animation="fadeIn" by="word" delay={0.3} className="text-gray-500 text-xl md:text-2xl font-display">
                    Cuatro fases para convertir tu empresa en una máquina de crecimiento predecible.
                  </TextAnimate>
                  <div className="mt-12 relative h-64 md:h-80 w-full rounded-sm overflow-hidden border border-gray-800/50 hidden lg:block shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/methodology-office-vg.png" alt="Visual & Growth Team" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-accent/40 via-gray-800 to-transparent hidden md:block" />
                <div className="space-y-0">
                  <StepItem id="step-1" activeId={activeId} isMobile={isMobile} num="01" title="Discovery & Audit"
                    desc="Radiografía total. No tocamos una línea de código sin entender tus unit economics. Auditamos tus fugas de dinero y tiempo." />
                  <StepItem id="step-2" activeId={activeId} isMobile={isMobile} num="02" title="Hypothesis & Roadmap"
                    desc="Diseñamos el plan de ataque. Priorizamos acciones por ICE Score (Impacto, Confianza, Esfuerzo). Nada de paja, solo tracción." />
                  <StepItem id="step-3" activeId={activeId} isMobile={isMobile} num="03" title="Sprint Execution"
                    desc="Despliegue rápido. Lanzamos, medimos y ajustamos en ciclos cortos de máximo 4 semanas. Velocidad de startup para validar resultados de inmediato." />
                  <StepItem id="step-4" activeId={activeId} isMobile={isMobile} num="04" title="Scale Up"
                    desc="Cuando algo funciona, echamos gasolina. Automatizamos lo validado y escalamos la inversión publicitaria y operativa." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIAGNÓSTICO / SCORECARD ───────────────────────────────────────── */}
        <section id="diagnostico" className="py-24 md:py-36 px-6 relative overflow-hidden border-t border-gray-900/60">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606] to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-accent font-mono text-xs mb-6 block uppercase tracking-widest">Diagnóstico Gratuito · 3 minutos</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                ¿Tu empresa <AuroraText>escala</AuroraText> o{" "}
                <span className="text-gray-600">sobrevive</span>?
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-display max-w-2xl mx-auto">
                Responde 15 preguntas basadas en el Método V&G y descubre exactamente qué está bloqueando tu crecimiento.
              </p>
            </div>
            <Scorecard />
          </div>
        </section>

        {/* ── PS STATEMENT ─────────────────────────────────────────────────── */}
        <section className="py-16 px-6 border-t border-gray-900/40 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm font-mono leading-relaxed">
              <span className="text-gray-400 font-bold">P.D.</span>{" "}
              Si eres el tipo de líder que prefiere culpar al mercado en lugar de construir sistemas predecibles,{" "}
              <span className="text-white">este sistema no es para ti</span>.
              Solo trabajamos con empresas listas para ejecutar un roadmap de alto impacto.{" "}
              <a href="#diagnostico" className="text-accent hover:underline">Si eso eres tú, empieza aquí.</a>
            </p>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="py-12 border-t border-gray-900/60 bg-black text-center text-gray-600 text-xs">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-8 md:w-28 md:h-9 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500">
              <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
            </div>
          </div>
          <p>&copy; 2026 Visual &amp; Growth. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}

// ─── Helper components ─────────────────────────────────────────────────────────

function TechProtocolCard({ title, lines, className }: {
  title: string;
  lines: { label: string; value: string; status: "ok" | "pulse" | "accent" }[];
  className?: string;
}) {
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
            <span className={cn("font-bold",
              line.status === "ok" ? "text-green-500" :
              line.status === "pulse" ? "text-accent animate-pulse" : "text-accent"
            )}>{line.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, sub, suffix = "" }: {
  label: string; value: string | number; sub: string; suffix?: string;
}) {
  return (
    <div className="text-center min-w-[200px] md:min-w-[300px]">
      <div className="text-[10px] md:text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">{label}</div>
      <div className="text-4xl md:text-7xl font-bold text-white mb-4 font-display flex items-center justify-center tracking-tighter">
        {typeof value === "number" ? (
          <><NumberTicker value={value} className="text-4xl md:text-7xl font-bold text-white tracking-tighter" />{suffix && <span>{suffix}</span>}</>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-xs md:text-sm text-accent font-medium uppercase tracking-wide">{sub}</div>
    </div>
  );
}

function BoutiqueCard({ id, activeId, isMobile, title, subtitle, bullets, Icon, num, href }: {
  id: string; activeId: string | null; isMobile: boolean;
  title: string; subtitle: string; bullets: string[];
  Icon: React.ElementType; num: string; href: string;
}) {
  const isActive = isMobile && activeId === id;
  return (
    <a href={href} data-scroll-item data-scroll-id={id}
      className={cn(
        "group relative flex flex-col p-8 md:p-10 overflow-hidden transition-all duration-500",
        isActive ? "bg-white/[0.05] opacity-100" : isMobile ? "opacity-30" : "hover:bg-white/[0.03] opacity-100"
      )}>
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs text-gray-700">{num}</span>
        <Icon className={cn("w-5 h-5 transition-colors duration-300",
          isActive ? "text-accent" : "text-gray-700 group-hover:text-accent")} />
      </div>
      <p className={cn("text-[10px] font-mono mb-3 uppercase tracking-widest transition-colors duration-300",
        isActive ? "text-accent" : "text-gray-600 group-hover:text-accent")}>
        {subtitle}
      </p>
      <h3 className="text-xl md:text-2xl font-bold font-display mb-5 text-white">{title}</h3>
      <ul className="flex-1 mb-8 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-gray-500 text-sm leading-relaxed">
            <span className="text-accent mt-[3px] shrink-0 text-xs font-bold">—</span>
            {b}
          </li>
        ))}
      </ul>
      <div className={cn(
        "flex items-center gap-2 text-[11px] font-mono tracking-wider text-accent transition-all duration-300",
        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
      )}>
        VER MÁS <ArrowRight className="w-3 h-3" />
      </div>
    </a>
  );
}

function StepItem({ id, activeId, isMobile, num, title, desc }: {
  id: string; activeId: string | null; isMobile: boolean; num: string; title: string; desc: string;
}) {
  const isActive = isMobile && activeId === id;
  return (
    <div data-scroll-item data-scroll-id={id}
      className={cn("flex gap-6 group transition-all duration-700 relative pb-12 last:pb-0",
        isActive ? "opacity-100" : isMobile ? "opacity-30" : "opacity-100")}>
      <div className="flex-shrink-0 z-10">
        <div className={cn(
          "w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-500 bg-[#060606]",
          isActive ? "border-accent text-accent" : "border-gray-700 text-gray-600 group-hover:border-accent group-hover:text-accent"
        )}>{num}</div>
      </div>
      <div>
        <h3 className={cn("text-lg md:text-xl font-bold text-white mb-3 transition-colors duration-300",
          isActive ? "text-accent" : "group-hover:text-accent")}>{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
