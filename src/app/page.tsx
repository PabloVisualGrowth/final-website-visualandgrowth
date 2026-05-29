"use client";

import React from "react";
import { ArrowRight, BarChart3, Bot, Layout, Rocket, Zap, Activity, TrendingUp, Clock, Shield } from "lucide-react";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pushEvent(event: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({ event, ...params });
  }
}

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
    <div className="grain-overlay bg-primary text-text-primary overflow-x-hidden font-sans min-h-screen">
      <CookieConsent />
      <Navbar />

      {/* Global ambient gradient — top gold halo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/[0.07] rounded-full blur-[140px] animate-ambient-float" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-accent/[0.03] rounded-full blur-[90px]" />
      </div>

      <main className="relative z-10 w-full">

        {/* ── PÁGINA 1: HERO ────────────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative text-center overflow-hidden">

          {/* Layered background: grid + glow */}
          <InteractiveGridPattern
            width={120} height={120} squares={[20, 20]}
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] md:skew-y-12 z-0 hidden md:block opacity-40"
            )}
          />

          {/* Ambient orbs — behind everything */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.06] rounded-full blur-[120px] animate-ambient-float" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[80px]" style={{ animationDelay: "3s", animation: "ambient-float 18s ease-in-out infinite" }} />
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-white/[0.015] rounded-full blur-[60px]" />
          </div>

          {/* Floating tech cards */}
          <div className="absolute inset-0 z-10 pointer-events-none md:skew-y-12 hidden md:block">
            <div className="relative w-full h-full max-w-7xl mx-auto overflow-visible">
              <TechProtocolCard title="SYSTEM_READY" className="top-[15%] right-[10%]"
                lines={[{ label: "STATUS", value: "ONLINE", status: "ok" }, { label: "UPTIME", value: "99.9%", status: "ok" }]} />
              <TechProtocolCard title="REVENUE_TRACKER" className="bottom-[20%] left-[8%]"
                lines={[{ label: "RUN_RATE", value: "$2.4M", status: "accent" }, { label: "GROWTH", value: "+12%", status: "ok" }]} />
              <TechProtocolCard title="INIT_PROTOCOL" className="top-[25%] left-[10%]"
                lines={[{ label: "AGENTS", value: "CONNECTED", status: "ok" }, { label: "SYNC", value: "PENDING", status: "pulse" }]} />
              <TechProtocolCard title="SCALE_VELOCITY" className="bottom-[15%] right-[12%]"
                lines={[{ label: "LOAD", value: "OPTIMAL", status: "ok" }, { label: "OPS", value: "SCALING", status: "accent" }]} />
              <TechProtocolCard title="NEURAL_LINK" className="top-[10%] left-[25%] opacity-35 scale-75 hidden md:block"
                lines={[{ label: "CORE", value: "ACTIVE", status: "ok" }]} />
              <TechProtocolCard title="CLOUD_SYNC" className="top-[45%] right-[5%] opacity-25 scale-90 hidden lg:block"
                lines={[{ label: "DATA", value: "STREAMING", status: "pulse" }]} />
              <TechProtocolCard title="SECURITY_H" className="bottom-[40%] left-[15%] opacity-30 scale-75 hidden xl:block"
                lines={[{ label: "ENC", value: "AES-256", status: "ok" }]} />
              <TechProtocolCard title="ANALYTICS_V4" className="bottom-[10%] left-[30%] opacity-25 scale-90 hidden md:block"
                lines={[{ label: "VARS", value: "TRACKED", status: "accent" }]} />
              <TechProtocolCard title="CORE_ENGINE" className="top-[40%] left-[0%] opacity-15 scale-110 hidden 2xl:block"
                lines={[{ label: "MOD", value: "V2.1.0", status: "ok" }]} />
            </div>
          </div>

          {/* Logo — center stage */}
          <div className="relative z-20 flex flex-col items-center gap-6">
            {/* Halo ring behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[180px] bg-accent/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="relative w-full max-w-[85vw] md:max-w-3xl h-16 sm:h-28 md:h-40 animate-fade-in-up">
              <Image src="/logo-full.png" fill alt="Visual & Growth"
                className="object-contain drop-shadow-[0_0_40px_rgba(255,198,0,0.5)] md:drop-shadow-[0_0_60px_rgba(255,198,0,0.6)]" priority />
            </div>
            {/* Thin gold rule under logo */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent mx-auto" />
            </div>
          </div>

          {/* Bottom scan effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />
        </section>

        {/* ── PÁGINA 2: HOOK + CTA ──────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-black to-black pointer-events-none" />
          {/* Dual orb composition */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl">
            {/* Label chip */}
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-accent/20 bg-accent/5 rounded-full text-[10px] font-mono text-accent/70 uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow inline-block" />
                Growth Engineering · España 2026
              </span>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.08s" }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-display font-bold text-white leading-[1.08] tracking-tight">
                ¿Te has planteado alguna vez qué potencial tiene tu empresa{" "}
                <AuroraText>realmente</AuroraText>?
              </h1>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.18s" }}>
              Responde a nuestro Assessment de 15 preguntas para obtener un{" "}
              <span className="text-white font-medium">Roadmap de Ingeniería de Crecimiento personalizado</span>.
              Gratis. Resultados en 3 minutos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.32s" }}>
              <a href="#diagnostico"
                onClick={() => pushEvent("cta_click", { label: "hero_diagnostico" })}
                className="group relative inline-flex items-center gap-3 bg-accent text-black font-bold text-sm md:text-base px-8 py-4 rounded-sm hover:bg-white transition-all duration-300 uppercase tracking-widest font-mono overflow-hidden shadow-[0_0_40px_rgba(255,198,0,0.25)] hover:shadow-[0_0_60px_rgba(255,198,0,0.4)]">
                <span className="relative z-10">Obtén tu diagnóstico gratuito (3 min)</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Shimmer overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a href="#ecosistema"
                onClick={() => pushEvent("cta_click", { label: "hero_ecosistema" })}
                className="text-gray-600 hover:text-white text-sm font-mono uppercase tracking-widest transition-colors flex items-center gap-1.5 group">
                Ver el ecosistema
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 animate-fade-in-up" style={{ animationDelay: "0.46s" }}>
              {["Sin compromiso", "Respuesta en 24h", "Roadmap personalizado"].map((b) => (
                <div key={b} className="flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-[0.15em]">
                  <span className="w-1 h-1 rounded-full bg-accent/60 inline-block" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VELOCITY STRIP ───────────────────────────────────────────────── */}
        <section className="py-20 relative z-20 overflow-hidden border-t border-white/[0.04]">
          {/* Top/bottom hairlines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#060606]" />

          <VelocityScroll default_velocity={3} numRows={1}>
            <Stat label="Horas liberadas/semana" value={20} suffix="+" sub="AI & Operations" />
            <Stat label="Time to Market" value={2} suffix=" Sem" sub="Validación rápida" />
            <Stat label="Reducción fricción ops" value={40} suffix="%" sub="Sistemas interconectados" />
            <Stat label="Diseño" value="A+" sub="Calidad boutique" />
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#060606] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#060606] to-transparent z-10" />
        </section>

        {/* ── SERVICIOS — QUÉ HACEMOS ───────────────────────────────────────── */}
        <section id="ecosistema" className="py-28 md:py-40 px-6 relative">
          {/* Section ambient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            {/* Editorial header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-accent/60" />
                  <span className="text-accent font-mono text-[10px] uppercase tracking-[0.25em]">Lo que hacemos</span>
                </div>
                <div className="pb-2 overflow-hidden">
                  <TextAnimate animation="blurInUp" by="word" as="h2" className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.05]">
                    Problemas reales. Soluciones concretas.
                  </TextAnimate>
                </div>
                <TextAnimate animation="fadeIn" by="line" delay={0.3} className="text-gray-500 text-xl md:text-2xl font-display">
                  Puedes empezar por uno o trabajar todo a la vez. Cada área ataca un cuello de botella distinto de tu negocio.
                </TextAnimate>
              </div>
              <a href="#diagnostico"
                onClick={() => pushEvent("cta_click", { label: "ecosistema_diagnostico" })}
                className="hidden md:flex items-center gap-2 text-sm text-white border-b border-accent/40 pb-1 hover:text-accent hover:border-accent transition-all duration-300 font-mono tracking-wide group">
                HACER EL DIAGNÓSTICO
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Cards grid — hairline borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/[0.05] divide-y divide-white/[0.05] md:divide-none">
              {/* Row 1 */}
              <div className="contents md:flex md:flex-col">
                <div className="md:border md:border-white/[0.05] md:border-r md:border-b">
                  <BoutiqueCard id="eco-1" activeId={activeId} isMobile={isMobile}
                    num="01" Icon={Rocket} href="/ecosistema/estrategia-consultoria"
                    title="Estrategia de Ventas" subtitle="¿Cómo crecer de forma predecible?"
                    entregable="Plan de acción a 90 días con prioridades claras y métricas de seguimiento"
                    contraria="No necesitas más marketing. Necesitas saber qué te da dinero y qué te lo quita."
                    bullets={[
                      { Icon: TrendingUp, text: "Analizamos tu negocio y te decimos exactamente dónde está el cuello de botella" },
                      { Icon: Clock,      text: "Diseñamos un proceso de ventas que funciona aunque no estés tú presente" },
                      { Icon: Shield,     text: "Tomamos decisiones con datos reales, no con intuición ni modas del momento" },
                    ]} />
                </div>
              </div>
              <div className="md:border md:border-white/[0.05] md:border-r md:border-b">
                <BoutiqueCard id="eco-2" activeId={activeId} isMobile={isMobile}
                  num="02" Icon={Bot} href="/ecosistema/hyper-automation"
                  title="Automatización" subtitle="¿Cuántas horas pierde tu equipo en tareas manuales?"
                  entregable="Automatizaciones activas con ahorro de horas medible desde el primer mes"
                  contraria="La tecnología no reemplaza a tu equipo. Le devuelve tiempo para hacer lo que solo ellos pueden hacer."
                  bullets={[
                    { Icon: TrendingUp, text: "Identificamos qué tareas manuales frenan a tu equipo y las automatizamos" },
                    { Icon: Clock,      text: "Conectamos tus herramientas (CRM, email, facturación) para que no haya silos" },
                    { Icon: Shield,     text: "Tu equipo recupera horas cada semana para trabajar en lo que realmente importa" },
                  ]} />
              </div>
              <div className="md:border md:border-white/[0.05] md:border-b">
                <BoutiqueCard id="eco-3" activeId={activeId} isMobile={isMobile}
                  num="03" Icon={BarChart3} href="/ecosistema/market-authority"
                  title="SEO y Presencia en Google" subtitle="¿Te encuentran cuando buscan lo que tú vendes?"
                  entregable="Estrategia de posicionamiento con las palabras clave que buscan tus clientes reales"
                  contraria="No necesitas más visitas. Necesitas que los que llegan ya quieran comprarte."
                  bullets={[
                    { Icon: TrendingUp, text: "Apareces en Google cuando alguien busca lo que tú vendes, no solo cuando busca tu nombre" },
                    { Icon: Clock,      text: "Generamos tráfico cualificado que llega listo para comprar, sin pagar por cada clic" },
                    { Icon: Shield,     text: "Construimos autoridad de marca que dura, no campañas que se apagan solas" },
                  ]} />
              </div>
              <div className="md:border md:border-white/[0.05] md:border-r">
                <BoutiqueCard id="eco-4" activeId={activeId} isMobile={isMobile}
                  num="04" Icon={Layout} href="/ecosistema/product-boutique"
                  title="Web y Marca" subtitle="¿Tu imagen refleja lo que realmente vales?"
                  entregable="Web y marca rediseñadas para convertir, con prototipo validado antes de desarrollar"
                  contraria="Una web bonita que no convierte es un gasto. Una web que convierte es una máquina de ventas."
                  bullets={[
                    { Icon: TrendingUp, text: "Tu web explica en 10 segundos qué haces y por qué eres la mejor opción" },
                    { Icon: Clock,      text: "Diseñamos para convertir visitas en contactos, no solo para que se vea bien" },
                    { Icon: Shield,     text: "Tu imagen de marca transmite el nivel de calidad que realmente tienes" },
                  ]} />
              </div>
              <div className="md:border md:border-white/[0.05] md:border-r">
                <BoutiqueCard id="eco-5" activeId={activeId} isMobile={isMobile}
                  num="05" Icon={Zap} href="/ecosistema/smart-structure"
                  title="Estructura Legal y Fiscal" subtitle="¿Estás pagando más impuestos de los que deberías?"
                  entregable="Análisis de tu estructura actual y propuesta de optimización fiscal y societaria"
                  contraria="No es evasión. Es hacer lo que la ley permite y que muchos empresarios no saben aprovechar."
                  bullets={[
                    { Icon: TrendingUp, text: "Optimizamos tu estructura societaria para que pagues solo lo que toca, nada más" },
                    { Icon: Clock,      text: "Protegemos tu empresa ante el crecimiento: contratos, propiedad intelectual, compliance" },
                    { Icon: Shield,     text: "Un buen asesor fiscal paga con creces lo que cuesta — te lo demostramos" },
                  ]} />
              </div>
              <div className="md:border md:border-white/[0.05]">
                <BoutiqueCard id="eco-6" activeId={activeId} isMobile={isMobile}
                  num="06" Icon={Activity} href="/ecosistema/content-studio"
                  title="Contenido y Comunicación" subtitle="¿Confían en ti antes de llamarte?"
                  entregable="Calendario editorial y primeras piezas listas para publicar en menos de 2 semanas"
                  contraria="El contenido no es para likes. Es para que quien te vea piense: esto es exactamente lo que necesito."
                  bullets={[
                    { Icon: TrendingUp, text: "Te posicionamos como referente en tu sector ante quienes toman la decisión de compra" },
                    { Icon: Clock,      text: "Generamos leads que ya confían en ti antes de la primera llamada" },
                    { Icon: Shield,     text: "Creamos piezas que funcionan en web, redes y email a la vez, sin duplicar esfuerzo" },
                  ]} />
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLA COMPARATIVA ─────────────────────────────────────────────── */}
        <section className="py-28 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#060606]" />
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {/* Side ambient glow */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-accent/40" />
                <span className="text-accent font-mono text-[10px] uppercase tracking-[0.25em]">Information Gain · SEO 2026</span>
                <div className="w-8 h-px bg-accent/40" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
                Sistemas V&G vs. Agencias Tradicionales
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto font-mono">
                Datos de auditorías internas 2025. Fuente: Visual &amp; Growth Revenue Tracker.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm font-mono border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-5 text-gray-700 uppercase tracking-[0.18em] text-[10px] font-normal">Parámetro</th>
                    <th className="text-center py-4 px-5 text-accent uppercase tracking-[0.18em] text-[10px] font-bold">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow inline-block" />
                        Ecosistema V&G
                      </span>
                    </th>
                    <th className="text-center py-4 px-5 text-gray-700 uppercase tracking-[0.18em] text-[10px] font-normal">Agencia Tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Time-to-Market",          "< 4 semanas",     "3–6 meses"],
                    ["Decisiones basadas en",   "Revenue Tracker", "Informes mensuales"],
                    ["Modelo de ejecución",     "Done-for-you sistémico", "Entrega por proyecto"],
                    ["SEO approach",            "Intención de compra + GEO", "Keywords de volumen"],
                    ["Automatización",          "Nativa (Neural Link)", "Opcional / extra"],
                    ["Estructura legal/fiscal", "Integrada (Smart Structure)", "Externalizada"],
                    ["Fricción operativa",      "−40% vs. base", "Sin medición"],
                    ["Reporting",               "Tiempo real · Dashboard V4", "PDF mensual"],
                    ["Escalabilidad",           "Sistema interconectado",  "Equipo lineal"],
                    ["Garantía de uptime",      "99.9% SLA",       "Sin SLA"],
                  ].map(([param, vg, trad], i) => (
                    <tr key={i} className={cn(
                      "border-b border-white/[0.04] transition-colors duration-200 hover:bg-accent/[0.03]",
                      i % 2 === 0 ? "bg-white/[0.01]" : ""
                    )}>
                      <td className="py-3.5 px-5 text-gray-500">{param}</td>
                      <td className="py-3.5 px-5 text-center">
                        <span className="text-green-400 font-bold">{vg}</span>
                      </td>
                      <td className="py-3.5 px-5 text-center text-gray-700">{trad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px flex-1 max-w-[120px] bg-white/[0.06]" />
              <p className="text-[9px] font-mono text-gray-800 uppercase tracking-[0.18em]">
                Fuente: Visual &amp; Growth · Auditorías internas · Datos 2025
              </p>
              <div className="h-px flex-1 max-w-[120px] bg-white/[0.06]" />
            </div>
          </div>
        </section>

        {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
        <section id="metodologia" className="py-28 md:py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060606] to-black" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          {/* Ambient */}
          <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28">
              {/* Left sticky */}
              <div>
                <div className="sticky top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-accent/60" />
                    <span className="text-accent font-mono text-[10px] uppercase tracking-[0.25em]">El Método V&amp;G</span>
                  </div>
                  <div className="pb-2 overflow-hidden">
                    <TextAnimate animation="blurInUp" by="word" as="h2" className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.05]">
                      Del Caos al Sistema.
                    </TextAnimate>
                  </div>
                  <TextAnimate animation="fadeIn" by="word" delay={0.3} className="text-gray-500 text-xl md:text-2xl font-display">
                    Cuatro fases para convertir tu empresa en una máquina de crecimiento predecible.
                  </TextAnimate>
                  <div className="mt-12 relative h-64 md:h-80 w-full overflow-hidden hidden lg:block shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/[0.06]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/methodology-office-vg.png" alt="Visual & Growth Team" className="w-full h-full object-cover scale-105" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Gold corner accent */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent/40" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent/40" />
                  </div>
                </div>
              </div>

              {/* Right — steps */}
              <div className="relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-accent/50 via-gray-800/50 to-transparent hidden md:block" />
                <div className="space-y-0">
                  <StepItem id="step-1" activeId={activeId} isMobile={isMobile} num="01" title="Discovery & Audit"
                    desc="Radiografía total de tus unit economics. Auditamos fugas de dinero y tiempo antes de tocar una sola línea de ejecución." />
                  <StepItem id="step-2" activeId={activeId} isMobile={isMobile} num="02" title="Hypothesis & Roadmap"
                    desc="Diseñamos el plan de ataque con ICE Score (Impacto, Confianza, Esfuerzo). Priorizamos lo que genera tracción real, no ruido." />
                  <StepItem id="step-3" activeId={activeId} isMobile={isMobile} num="03" title="Sprint Execution"
                    desc="Ciclos de máximo 4 semanas. Lanzamos, medimos y ajustamos. Velocidad de startup para validar resultados antes de escalar." />
                  <StepItem id="step-4" activeId={activeId} isMobile={isMobile} num="04" title="Scale Up"
                    desc="Cuando algo funciona, echamos gasolina. Automatizamos lo validado y escalamos inversión publicitaria y operativa." />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ASSESSMENT / DIAGNÓSTICO ─────────────────────────────────────── */}
        <section id="diagnostico" className="py-28 md:py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060606] to-black" />
          {/* Top accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-accent/[0.07] rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-accent/40" />
                <span className="text-accent font-mono text-[10px] uppercase tracking-[0.25em]">Assessment · Score de Salud de Crecimiento</span>
                <div className="w-8 h-px bg-accent/40" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-[1.06]">
                ¿Sabes qué está frenando el{" "}
                <AuroraText>crecimiento de tu empresa</AuroraText>?
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-display max-w-2xl mx-auto">
                15 preguntas. 3 minutos. Roadmap personalizado con 3 insights accionables inmediatos.
              </p>
            </div>
            <Scorecard />
          </div>
        </section>

        {/* ── PS STATEMENT ─────────────────────────────────────────────────── */}
        <section className="py-16 px-6 relative bg-black">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-sm font-mono leading-relaxed">
              <span className="text-gray-400 font-bold">P.D.</span>{" "}
              Si eres el tipo de líder que prefiere culpar al mercado en lugar de construir sistemas predecibles,{" "}
              <span className="text-white">este sistema no es para ti</span>.
              Solo trabajamos con empresas listas para ejecutar un roadmap de alto impacto.{" "}
              <a href="#diagnostico" className="text-accent hover:underline">Si eso eres tú, empieza aquí.</a>
            </p>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="py-14 relative bg-black text-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-8 md:w-28 md:h-9 opacity-30 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700">
              <Image src="/logo-full.png" fill className="object-contain" alt="Logo" />
            </div>
          </div>
          {/* Thin gold rule */}
          <div className="w-8 h-px bg-accent/30 mx-auto mb-6" />
          <p className="text-gray-800 text-[11px] font-mono tracking-[0.15em] uppercase">
            &copy; 2026 Visual &amp; Growth. All rights reserved.
          </p>
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
      "absolute border border-white/[0.08] bg-[#0A0A0A]/85 p-3 md:p-4 rounded-lg backdrop-blur-md hover:border-accent/30 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)] pointer-events-auto scale-90 md:scale-100 group",
      "hover:shadow-[0_8px_40px_rgba(255,198,0,0.08)]",
      className
    )}>
      {/* Gold corner accent on hover */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/0 group-hover:border-accent/50 transition-colors duration-500 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/0 group-hover:border-accent/30 transition-colors duration-500 rounded-br-lg" />

      <div className="text-[8px] md:text-[10px] font-mono text-gray-600 border-b border-white/[0.06] pb-1.5 mb-2.5 tracking-[0.2em] uppercase">{title}</div>
      <div className="font-mono text-[7px] md:text-[10px] text-left space-y-1.5 min-w-[100px] md:min-w-[130px]">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center justify-between gap-3 md:gap-5">
            <span className="text-gray-600 uppercase tracking-tighter">{line.label}</span>
            <span className={cn("font-bold",
              line.status === "ok" ? "text-emerald-500" :
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
    <div className="text-center min-w-[200px] md:min-w-[300px] px-6">
      <div className="text-[10px] font-mono text-gray-600 mb-3 uppercase tracking-[0.2em]">{label}</div>
      <div className="text-4xl md:text-7xl font-bold text-white mb-3 font-display flex items-center justify-center tracking-tighter">
        {typeof value === "number" ? (
          <><NumberTicker value={value} className="text-4xl md:text-7xl font-bold text-white tracking-tighter" />{suffix && <span>{suffix}</span>}</>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-[10px] md:text-xs text-accent/80 font-mono uppercase tracking-[0.15em]">{sub}</div>
    </div>
  );
}

interface BulletItem { Icon: React.ElementType; text: string; }

function BoutiqueCard({ id, activeId, isMobile, title, subtitle, bullets, entregable, contraria, Icon, num, href }: {
  id: string; activeId: string | null; isMobile: boolean;
  title: string; subtitle: string;
  bullets: BulletItem[];
  entregable: string;
  contraria: string;
  Icon: React.ElementType; num: string; href: string;
}) {
  const isActive = isMobile && activeId === id;
  return (
    <a href={href} data-scroll-item data-scroll-id={id}
      className={cn(
        "luxury-card group relative flex flex-col p-8 md:p-10 overflow-hidden transition-all duration-500",
        isActive
          ? "bg-white/[0.04] opacity-100"
          : isMobile
          ? "opacity-30"
          : "hover:bg-white/[0.025] opacity-100"
      )}>

      {/* Hover gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header row */}
      <div className="flex items-start justify-between mb-7 relative z-10">
        <span className="font-mono text-[42px] md:text-[52px] font-bold text-white/[0.04] leading-none tracking-tighter select-none group-hover:text-white/[0.07] transition-colors duration-500">
          {num}
        </span>
        <div className={cn(
          "w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-400",
          isActive
            ? "border-accent/40 bg-accent/10"
            : "border-white/[0.08] bg-transparent group-hover:border-accent/30 group-hover:bg-accent/[0.08]"
        )}>
          <Icon className={cn("w-4 h-4 transition-colors duration-300",
            isActive ? "text-accent" : "text-gray-600 group-hover:text-accent")} />
        </div>
      </div>

      {/* Subtitle */}
      <p className={cn("text-[10px] font-mono mb-2.5 uppercase tracking-[0.2em] transition-colors duration-300 relative z-10",
        isActive ? "text-accent" : "text-gray-700 group-hover:text-accent/80")}>
        {subtitle}
      </p>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold font-display mb-5 text-white leading-tight relative z-10">{title}</h3>

      {/* Entregable */}
      <div className="mb-6 px-4 py-3 border border-accent/15 bg-accent/[0.04] relative z-10 group-hover:border-accent/25 transition-colors duration-400">
        <p className="text-[9px] font-mono text-accent/70 uppercase tracking-[0.18em] mb-1.5">Entregable</p>
        <p className="text-gray-400 text-[11px] leading-relaxed">{entregable}</p>
      </div>

      {/* Bullets */}
      <ul className="flex-1 mb-5 space-y-3 relative z-10">
        {bullets.map(({ Icon: BIcon, text }, i) => (
          <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
            <BIcon className="w-3.5 h-3.5 text-accent/60 shrink-0 mt-[3px]" />
            {text}
          </li>
        ))}
      </ul>

      {/* Contrarian */}
      <p className="text-[10px] text-gray-800 italic leading-relaxed border-t border-white/[0.05] pt-4 mb-5 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
        &ldquo;{contraria}&rdquo;
      </p>

      {/* CTA arrow */}
      <div className={cn(
        "flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] text-accent transition-all duration-400 relative z-10",
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
      className={cn("flex gap-8 group transition-all duration-700 relative pb-14 last:pb-0",
        isActive ? "opacity-100" : isMobile ? "opacity-30" : "opacity-100")}>
      <div className="flex-shrink-0 z-10">
        <div className={cn(
          "w-9 h-9 rounded-full border-2 flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-500 bg-[#060606]",
          isActive
            ? "border-accent text-accent shadow-[0_0_20px_rgba(255,198,0,0.2)]"
            : "border-white/[0.1] text-gray-700 group-hover:border-accent/60 group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(255,198,0,0.15)]"
        )}>{num}</div>
      </div>
      <div className="pt-1">
        <h3 className={cn("text-lg md:text-xl font-bold text-white mb-3 transition-colors duration-300 leading-tight",
          isActive ? "text-accent" : "group-hover:text-accent/90")}>{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
