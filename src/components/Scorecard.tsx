"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEBHOOK_URL =
  "https://n8n-n8n.d4s5yj.easypanel.host/webhook/1ae503d6-4f94-4cb6-ac0e-88b50c666eef";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pushEvent(event: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({ event, ...params });
  }
}

// ── Question data ──────────────────────────────────────────────────────────────

interface YNQuestion {
  id: string;
  text: string;
  category: "automation" | "seo" | "legal" | "strategy" | "ux";
}

const YN_QUESTIONS: YNQuestion[] = [
  { id: "q1",  text: "¿Auditas tus Unit Economics mensualmente para detectar fugas de capital?",                                           category: "strategy"   },
  { id: "q2",  text: "¿Utilizas un ICE Score (Impacto, Confianza, Esfuerzo) para priorizar tus hipótesis de crecimiento?",                category: "strategy"   },
  { id: "q3",  text: "¿Ejecutas tus ciclos de mejora en Sprints cortos de máximo 4 semanas?",                                             category: "strategy"   },
  { id: "q4",  text: "¿Tus sistemas operativos están interconectados o funcionan como islas de datos aisladas?",                          category: "automation" },
  { id: "q5",  text: "¿Mides el Time-to-Market de tus innovaciones en menos de 2 semanas?",                                              category: "automation" },
  { id: "q6",  text: "¿Tu estrategia de posicionamiento está enfocada en términos de intención de compra real?",                         category: "seo"        },
  { id: "q7",  text: "¿Tu contenido aporta datos únicos (Information Gain) o resume lo que ya hace la competencia?",                     category: "seo"        },
  { id: "q8",  text: "¿Tu interfaz de usuario está optimizada para la conversión directa por encima de la estética pura?",               category: "ux"         },
  { id: "q9",  text: "¿Tu estructura fiscal ha sido revisada para el volumen de facturación de los últimos 12 meses?",                   category: "legal"      },
  { id: "q10", text: "¿Produces activos de contenido vertical específicamente diseñados para retener la atención de C-Levels?",          category: "automation" },
];

type QualType = "select" | "text" | "textarea";

interface QualQuestion {
  id: string;
  text: string;
  type: QualType;
  options?: string[];
  placeholder?: string;
}

const QUAL_QUESTIONS: QualQuestion[] = [
  {
    id: "q11",
    text: "¿Cuál es tu situación actual?",
    type: "select",
    options: ["Founder / CEO", "CMO / Director de Marketing", "Inversor / Socio"],
  },
  {
    id: "q12",
    text: "¿Cuál es tu objetivo principal a 90 días?",
    type: "select",
    options: ["Aumentar ingresos de forma predecible", "Reducir costes operativos", "Salida al mercado de un nuevo producto"],
  },
  {
    id: "q13",
    text: "¿Cuál es tu obstáculo principal para escalar?",
    type: "select",
    options: ["Falta de sistema y procesos", "Equipo o talento ineficiente", "Tecnología obsoleta o desconectada", "Los tres a la vez"],
  },
  {
    id: "q14",
    text: "¿Qué tipo de solución estás buscando?",
    type: "select",
    options: [
      "A — Quiero aprender (libros / cursos)",
      "B — Quiero acompañamiento (consultoría)",
      "C — Quiero que lo hagáis por mí (Done For Me)",
    ],
  },
  {
    id: "q15",
    text: "¿Qué dato crítico sobre tu negocio debería saber nuestro equipo antes de hablar?",
    type: "textarea",
    placeholder: "Cuéntanos con el mayor detalle posible…",
  },
];

// ── Service mapping ────────────────────────────────────────────────────────────

const SERVICE_MAP = {
  automation: {
    num: "02",
    name: "AI & Operations",
    href: "/ecosistema/hyper-automation",
    insight: "Tus sistemas funcionan como islas de datos. Necesitas un Neural Link que los conecte y libere +20h semanales al equipo C-Level.",
  },
  seo: {
    num: "03",
    name: "Market Authority",
    href: "/ecosistema/market-authority",
    insight: "Tu autoridad de mercado es invisible. Estás perdiendo leads de alto valor cada día sin una arquitectura de captación de intención de compra.",
  },
  legal: {
    num: "05",
    name: "Smart Structure",
    href: "/ecosistema/smart-structure",
    insight: "Estás dejando dinero en la mesa. Tu estructura fiscal no está optimizada para el nivel de facturación que buscas generar.",
  },
  strategy: {
    num: "01",
    name: "Growth Machines",
    href: "/ecosistema/estrategia-consultoria",
    insight: "Sin ICE Score ni roadmap documentado tu crecimiento es accidental. Necesitas un sistema de priorización para escalar sin caos.",
  },
  ux: {
    num: "04",
    name: "Product Boutique",
    href: "/ecosistema/product-boutique",
    insight: "Tu interfaz genera fricción de compra. Un rediseño orientado a conversión puede multiplicar tus contactos sin aumentar el tráfico.",
  },
} as const;

// ── Result tier logic ──────────────────────────────────────────────────────────

type Tier = "low" | "mid" | "high";

function getTier(score: number, budgetAnswer: string): Tier {
  const isDFM = budgetAnswer.startsWith("C");
  const isMid = budgetAnswer.startsWith("B");

  if (isDFM && score >= 50) return "high";
  if ((isDFM && score < 50) || isMid || score >= 75) return "mid";
  return "low";
}

// ── Speedometer SVG ───────────────────────────────────────────────────────────

function Speedometer({ score }: { score: number }) {
  const cx = 100, cy = 100, r = 78;
  const toPoint = (pct: number) => {
    const phi = (180 - pct * 1.8) * (Math.PI / 180);
    return { x: cx + r * Math.cos(phi), y: cy - r * Math.sin(phi) };
  };
  const left  = toPoint(0);
  const right = toPoint(100);
  const pt    = toPoint(score);
  const bgPath    = `M ${left.x} ${left.y} A ${r} ${r} 0 0 0 ${right.x} ${right.y}`;
  const scorePath = score > 0 && score < 100
    ? `M ${left.x} ${left.y} A ${r} ${r} 0 0 0 ${pt.x.toFixed(2)} ${pt.y.toFixed(2)}`
    : score >= 100 ? bgPath : "";
  const phi  = (180 - score * 1.8) * (Math.PI / 180);
  const nX   = (cx + 62 * Math.cos(phi)).toFixed(2);
  const nY   = (cy - 62 * Math.sin(phi)).toFixed(2);
  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#FFC600" : "#ef4444";
  const label = score >= 70 ? "SISTEMA ESCALABLE" : score >= 40 ? "OPTIMIZACIÓN NECESARIA" : "FUNDAMENTOS CRÍTICOS";
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 118" className="w-72 max-w-full">
        <path d={bgPath} fill="none" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
        {scorePath && <path d={scorePath} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />}
        <line x1={cx} y1={cy} x2={nX} y2={nY} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="5" fill="white" />
        <text x={cx} y="90" textAnchor="middle" fill={color} fontSize="22" fontWeight="bold" fontFamily="monospace">{score}%</text>
        <text x={cx} y="108" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace" letterSpacing="1.5">{label}</text>
        <text x="18"  y="113" textAnchor="middle" fill="#374151" fontSize="7">0%</text>
        <text x="182" y="113" textAnchor="middle" fill="#374151" fontSize="7">100%</text>
      </svg>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────────

function ProgressBar({ current, total, label }: { current: number; total: number; label?: string }) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-[10px] font-mono text-gray-600 mb-2 uppercase tracking-widest">
        <span>{label ?? `Pregunta ${current} de ${total}`}</span>
        <span>{Math.round((current / total) * 100)}%</span>
      </div>
      <div className="h-px bg-gray-800 w-full">
        <div className="h-px bg-accent transition-all duration-500" style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </div>
  );
}

const inputCls =
  "w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 text-sm";

// ── Main component ─────────────────────────────────────────────────────────────

type Phase = "gate" | "yesno" | "qualify" | "results";

export default function Scorecard() {
  const [phase,        setPhase]        = useState<Phase>("gate");
  const [gate,         setGate]         = useState({ nombre: "", email: "", telefono: "" });
  const [currentQ,     setCurrentQ]     = useState(0);
  const [currentQual,  setCurrentQual]  = useState(0);
  const [ynAnswers,    setYnAnswers]    = useState<Record<string, boolean>>({});
  const [qualAnswers,  setQualAnswers]  = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const yesCount = Object.values(ynAnswers).filter(Boolean).length;
  const score    = Math.round((yesCount / YN_QUESTIONS.length) * 100);

  const failedCategories = [
    ...new Set(
      YN_QUESTIONS.filter((q) => ynAnswers[q.id] === false).map((q) => q.category)
    ),
  ] as (keyof typeof SERVICE_MAP)[];

  const handleGate = () => {
    if (gate.nombre.trim() && gate.email.trim()) {
      pushEvent("assessment_start", { email: gate.email });
      setPhase("yesno");
    }
  };

  const handleYN = (answer: boolean) => {
    const q = YN_QUESTIONS[currentQ];
    pushEvent("assessment_answer", { question: q.id, answer: answer ? "yes" : "no", category: q.category });
    setYnAnswers((prev) => ({ ...prev, [q.id]: answer }));
    if (currentQ < YN_QUESTIONS.length - 1) setCurrentQ((p) => p + 1);
    else setPhase("qualify");
  };

  const handleQualNext = async () => {
    if (currentQual < QUAL_QUESTIONS.length - 1) {
      setCurrentQual((p) => p + 1);
    } else {
      setIsSubmitting(true);
      const budgetAnswer = qualAnswers["q14"] ?? "";
      const tier = getTier(score, budgetAnswer);
      pushEvent("assessment_completed", { score, tier, failed_categories: failedCategories.join(",") });
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...gate,
            score,
            tier,
            ynAnswers,
            qualAnswers,
            failedCategories,
            source: "assessment-vg-2026",
          }),
        });
      } catch {}
      setPhase("results");
      setIsSubmitting(false);
    }
  };

  if (phase === "results") {
    return (
      <ResultsView
        score={score}
        failedCategories={failedCategories}
        nombre={gate.nombre}
        budgetAnswer={qualAnswers["q14"] ?? ""}
      />
    );
  }

  if (phase === "qualify") {
    const q = QUAL_QUESTIONS[currentQual];
    return (
      <QualifyPhase
        question={q}
        answer={qualAnswers[q.id] ?? ""}
        setAnswer={(v) => setQualAnswers((p) => ({ ...p, [q.id]: v }))}
        onNext={handleQualNext}
        step={currentQual + 1}
        total={QUAL_QUESTIONS.length}
        isSubmitting={isSubmitting}
      />
    );
  }

  if (phase === "yesno") {
    const q = YN_QUESTIONS[currentQ];
    return (
      <div className="max-w-2xl mx-auto">
        <ProgressBar current={currentQ + 1} total={YN_QUESTIONS.length} />
        <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug mb-10 min-h-[80px]">
          {q.text}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => handleYN(true)}
            className="group flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-accent hover:bg-accent/5 text-white font-bold font-mono uppercase tracking-widest transition-all duration-300 rounded-sm text-sm">
            <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />Sí
          </button>
          <button onClick={() => handleYN(false)}
            className="group flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-red-500/50 hover:bg-red-500/5 text-white font-bold font-mono uppercase tracking-widest transition-all duration-300 rounded-sm text-sm">
            <XCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />No
          </button>
        </div>
      </div>
    );
  }

  // ── Gate phase ──────────────────────────────────────────────────────────────
  return (
    <div className="max-w-xl mx-auto">
      <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Bloque 1 · Acceso</p>
      <h3 className="text-white text-2xl font-display font-bold mb-2">
        Desbloquea tu Assessment
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Introduce tus datos para acceder a las 15 preguntas y recibir tu Score de Salud de Crecimiento.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Nombre *</label>
          <input type="text" value={gate.nombre}
            onChange={(e) => setGate((p) => ({ ...p, nombre: e.target.value }))}
            placeholder="Tu nombre completo" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Email corporativo *</label>
          <input type="email" value={gate.email}
            onChange={(e) => setGate((p) => ({ ...p, email: e.target.value }))}
            placeholder="tu@empresa.com" className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">
            Teléfono <span className="text-gray-700">(opcional)</span>
          </label>
          <input type="tel" value={gate.telefono}
            onChange={(e) => setGate((p) => ({ ...p, telefono: e.target.value }))}
            placeholder="+34 600 000 000" className={inputCls} />
        </div>
      </div>
      <button onClick={handleGate}
        disabled={!gate.nombre.trim() || !gate.email.trim()}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-accent text-black font-bold font-mono uppercase tracking-widest py-4 rounded-sm hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm">
        Iniciar Assessment <ArrowRight className="w-4 h-4" />
      </button>
      <p className="text-[10px] text-gray-700 font-mono text-center mt-4 uppercase tracking-wider">
        Sin spam · Solo tu roadmap de crecimiento personalizado
      </p>
    </div>
  );
}

// ── Qualify phase ──────────────────────────────────────────────────────────────

function QualifyPhase({ question, answer, setAnswer, onNext, step, total, isSubmitting }: {
  question: QualQuestion; answer: string; setAnswer: (v: string) => void;
  onNext: () => void; step: number; total: number; isSubmitting: boolean;
}) {
  const canContinue = answer.trim().length > 0;
  const isLast = step === total;
  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar current={step} total={total} label={`Cualificación ${step} de ${total}`} />
      <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug mb-8">{question.text}</p>

      {question.type === "select" && (
        <div className="space-y-3">
          {question.options!.map((opt) => (
            <button key={opt} onClick={() => setAnswer(opt)}
              className={cn(
                "w-full text-left px-5 py-4 border rounded-sm font-mono text-sm transition-all duration-300",
                answer === opt
                  ? "border-accent bg-accent/10 text-white"
                  : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              )}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder} className={inputCls} />
      )}

      {question.type === "textarea" && (
        <textarea rows={4} value={answer} onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder} className={inputCls} />
      )}

      <button onClick={onNext} disabled={!canContinue || isSubmitting}
        className="mt-8 flex items-center gap-2 bg-accent text-black font-bold font-mono uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm">
        {isSubmitting ? "Calculando…" : isLast ? "Ver mi Score" : "Continuar"}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Results view ───────────────────────────────────────────────────────────────

function ResultsView({ score, failedCategories, nombre, budgetAnswer }: {
  score: number;
  failedCategories: (keyof typeof SERVICE_MAP)[];
  nombre: string;
  budgetAnswer: string;
}) {
  const tier = getTier(score, budgetAnswer);

  const TIER_CONFIG: Record<Tier, {
    headline: string; sub: string;
    ctaLabel: string; ctaHref: string;
    ctaSecondaryLabel: string; ctaSecondaryHref: string;
    badge: string;
  }> = {
    low: {
      badge: "Contenido Educativo",
      headline: "Tus fundamentos necesitan trabajo antes de poder escalar.",
      sub: "Con estas brechas activas, más inversión solo amplifica el problema. Empieza por los cimientos con nuestros recursos gratuitos.",
      ctaLabel: "Acceder al Blog de Ingeniería",
      ctaHref: "#ecosistema",
      ctaSecondaryLabel: "Ver el ecosistema",
      ctaSecondaryHref: "#ecosistema",
    },
    mid: {
      badge: "Masterclass Exclusiva",
      headline: "Tienes base sólida, pero hay fricciones críticas que frenan tu crecimiento.",
      sub: "Estás a pocas decisiones de multiplicar tu facturación. Únete a nuestra Masterclass grupal de Ingeniería de Crecimiento.",
      ctaLabel: "Reservar plaza en la Masterclass",
      ctaHref: "https://calendar.app.google/JefBW2JRGWa85rFf9",
      ctaSecondaryLabel: "Ver el ecosistema",
      ctaSecondaryHref: "#ecosistema",
    },
    high: {
      badge: "Sesión 1:1 de Diagnóstico",
      headline: "Tu infraestructura está lista para un escalado de alto impacto.",
      sub: "Tienes los sistemas en orden y la mentalidad correcta. Agenda una sesión 1-to-1 para diseñar tu roadmap de crecimiento del 300%.",
      ctaLabel: "Agendar Reunión 1-to-1",
      ctaHref: "https://calendar.app.google/JefBW2JRGWa85rFf9",
      ctaSecondaryLabel: "Explorar el ecosistema",
      ctaSecondaryHref: "#ecosistema",
    },
  };

  const cfg = TIER_CONFIG[tier];

  // 3 personalized insights from failed categories
  const insights = failedCategories.slice(0, 3).map((cat) => SERVICE_MAP[cat]);

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-accent font-mono text-xs uppercase tracking-widest mb-6 text-center">
        Score de Salud de Crecimiento{nombre ? ` · ${nombre}` : ""}
      </p>

      <Speedometer score={score} />

      <div className="mt-4 text-center mb-2">
        <span className={cn(
          "inline-block text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border",
          tier === "high" ? "border-green-500/40 text-green-500 bg-green-500/5" :
          tier === "mid"  ? "border-accent/40 text-accent bg-accent/5" :
                            "border-red-500/40 text-red-500 bg-red-500/5"
        )}>{cfg.badge}</span>
      </div>

      <div className="mt-4 text-center">
        <p className="text-white font-display font-bold text-xl mb-2 leading-snug">{cfg.headline}</p>
        <p className="text-gray-500 text-sm">{cfg.sub}</p>
      </div>

      {/* 3 insights */}
      {insights.length > 0 && (
        <div className="mt-10">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
            3 Insights Inmediatos
          </p>
          <div className="space-y-3">
            {insights.map((svc, i) => (
              <a key={svc.num} href={svc.href}
                className="group flex items-start gap-4 p-4 border border-gray-800 hover:border-accent/50 rounded-sm transition-all duration-300 hover:bg-white/[0.02]">
                <span className="font-mono text-[10px] text-gray-600 mt-1 shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <p className="text-white font-bold text-sm mb-1">{svc.name}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{svc.insight}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-accent transition-colors shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a href={cfg.ctaHref}
          target={cfg.ctaHref.startsWith("http") ? "_blank" : undefined}
          onClick={() => pushEvent("cta_click", { label: "results_primary", tier, score })}
          className="flex items-center justify-center gap-2 bg-accent text-black font-bold text-sm py-4 px-6 rounded-sm hover:bg-white transition-colors uppercase tracking-wide">
          {cfg.ctaLabel} <ArrowRight className="w-4 h-4" />
        </a>
        <a href={cfg.ctaSecondaryHref}
          onClick={() => pushEvent("cta_click", { label: "results_secondary", tier, score })}
          className="flex items-center justify-center border border-gray-700 hover:border-white text-white font-bold text-sm py-4 px-6 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-wide">
          {cfg.ctaSecondaryLabel}
        </a>
      </div>

      <p className="text-[10px] text-gray-700 font-mono text-center mt-6 uppercase tracking-wider">
        Obtén tu diagnóstico gratuito en 3 minutos · Recomendaciones inmediatas
      </p>
    </div>
  );
}
