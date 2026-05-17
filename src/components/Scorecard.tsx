"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEBHOOK_URL =
  "https://n8n-n8n.d4s5yj.easypanel.host/webhook/0476a722-17ff-48ec-9777-93f17a2ad46b";

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
  { id: "q1",  text: "¿Sabes exactamente cuánto te cuesta conseguir un cliente nuevo?",                                                  category: "strategy"   },
  { id: "q2",  text: "¿Tienes un proceso de ventas documentado que tu equipo sigue de forma consistente?",                               category: "strategy"   },
  { id: "q3",  text: "¿Tu CRM, facturación y comunicación están conectados sin necesidad de copiar datos a mano?",                       category: "automation" },
  { id: "q4",  text: "¿Has automatizado alguna tarea repetitiva que tu equipo hacía manualmente?",                                       category: "automation" },
  { id: "q5",  text: "¿Cuando alguien busca en Google lo que tú vendes, apareces tú antes que tu competencia?",                         category: "seo"        },
  { id: "q6",  text: "¿Tu web genera solicitudes de contacto de forma regular sin que hagas ninguna acción activa?",                     category: "seo"        },
  { id: "q7",  text: "¿Un desconocido que entra en tu web entiende en 10 segundos qué haces y por qué debería elegirte?",               category: "ux"         },
  { id: "q8",  text: "¿Tu imagen de marca transmite el mismo nivel de calidad que el servicio que realmente ofreces?",                  category: "ux"         },
  { id: "q9",  text: "¿Has revisado con un especialista fiscal cuánto podrías ahorrarte legalmente este año?",                           category: "legal"      },
  { id: "q10", text: "¿Tienes documentado quién es tu cliente ideal y qué le preocupa antes de tomar una decisión de compra?",           category: "strategy"   },
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
    text: "¿Cuántas personas trabajan en tu empresa?",
    type: "select",
    options: ["Solo yo o menos de 5", "Entre 5 y 20", "Entre 20 y 100", "Más de 100"],
  },
  {
    id: "q12",
    text: "¿Cuál es tu mayor problema ahora mismo?",
    type: "select",
    options: [
      "No llegan suficientes clientes buenos",
      "El equipo pierde demasiado tiempo en tareas manuales",
      "No me diferencio bien de la competencia",
      "Los tres a la vez",
    ],
  },
  {
    id: "q13",
    text: "¿Has trabajado antes con una agencia o consultoría externa?",
    type: "select",
    options: [
      "No, nunca",
      "Sí, pero no quedé satisfecho/a",
      "Sí, con buenos resultados",
    ],
  },
  {
    id: "q14",
    text: "¿Cuánto inviertes al mes en marketing, tecnología o crecimiento?",
    type: "select",
    options: [
      "Menos de 1.000€",
      "Entre 1.000€ y 3.000€",
      "Entre 3.000€ y 7.000€",
      "Más de 7.000€",
    ],
  },
  {
    id: "q15",
    text: "¿Qué debería saber nuestro equipo antes de hablar contigo?",
    type: "textarea",
    placeholder: "Cuéntanos tu situación, qué has probado ya y qué quieres conseguir…",
  },
];

// ── Service mapping ────────────────────────────────────────────────────────────

const SERVICE_MAP = {
  automation: {
    num: "02",
    name: "AI & Operations",
    href: "/ecosistema/hyper-automation",
    insight: "Tu equipo está perdiendo horas cada semana en tareas que un sistema haría en segundos. Te ayudamos a automatizarlas sin necesidad de un equipo técnico propio.",
  },
  seo: {
    num: "03",
    name: "Market Authority",
    href: "/ecosistema/market-authority",
    insight: "Tu competencia se lleva clientes que deberían ser tuyos porque aparecen antes en Google. Te ponemos donde tiene que estar tu empresa.",
  },
  legal: {
    num: "05",
    name: "Smart Structure",
    href: "/ecosistema/smart-structure",
    insight: "Probablemente estás pagando más impuestos de los necesarios. Una buena estructura fiscal y societaria puede cambiar eso este mismo año.",
  },
  strategy: {
    num: "01",
    name: "Growth Machines",
    href: "/ecosistema/estrategia-consultoria",
    insight: "Sin un proceso claro de ventas y priorización, el crecimiento depende de la suerte. Te ayudamos a construir el sistema para que sea predecible.",
  },
  ux: {
    num: "04",
    name: "Product Boutique",
    href: "/ecosistema/product-boutique",
    insight: "Si un desconocido no entiende tu propuesta en 10 segundos, ya lo perdiste. Rediseñamos tu web y marca para que trabajen solos.",
  },
} as const;

// ── Result tier logic ──────────────────────────────────────────────────────────

const CALENDAR_URL = "https://calendar.app.google/mMtccB3pCZfNpHTB6";

type Tier = "low" | "mid" | "high";

function getTier(score: number): Tier {
  if (score >= 70) return "high";
  if (score >= 40) return "mid";
  return "low";
}

// ── Speedometer SVG ───────────────────────────────────────────────────────────

function Speedometer({ score }: { score: number }) {
  // Semi-circle: center (160,140), radius 120
  // Arc from 180° (left) to 0° (right) through top (270° visual)
  const cx = 160, cy = 140, r = 120;

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const pt = (pct: number) => {
    const angle = 180 - pct * 1.8; // 180° at 0%, 0° at 100%
    return {
      x: cx + r * Math.cos(toRad(angle)),
      y: cy - r * Math.sin(toRad(angle)),
    };
  };

  const left  = pt(0);   // (40, 140)
  const right = pt(100); // (280, 140)
  const score_pt = pt(score);

  const bgPath = `M ${left.x} ${left.y} A ${r} ${r} 0 0 0 ${right.x} ${right.y}`;
  const scorePath =
    score > 0 && score < 100
      ? `M ${left.x} ${left.y} A ${r} ${r} 0 ${score > 50 ? 1 : 0} 0 ${score_pt.x.toFixed(2)} ${score_pt.y.toFixed(2)}`
      : score >= 100 ? bgPath : "";

  // Needle
  const needleR = 100;
  const needleAngle = 180 - score * 1.8;
  const nX = (cx + needleR * Math.cos(toRad(needleAngle))).toFixed(2);
  const nY = (cy - needleR * Math.sin(toRad(needleAngle))).toFixed(2);

  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#FFC600" : "#ef4444";
  const label = score >= 70 ? "SISTEMA ESCALABLE" : score >= 40 ? "OPTIMIZACIÓN NECESARIA" : "FUNDAMENTOS CRÍTICOS";

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 320 160" className="w-80 max-w-full">
        {/* Background track */}
        <path d={bgPath} fill="none" stroke="#1f2937" strokeWidth="14" strokeLinecap="round" />
        {/* Score track */}
        {scorePath && (
          <path d={scorePath} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" />
        )}
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nX} y2={nY} stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="7" fill="white" />
        {/* Score value */}
        <text x={cx} y={cy - 20} textAnchor="middle" fill={color} fontSize="28" fontWeight="bold" fontFamily="monospace">
          {score}%
        </text>
        {/* Label */}
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace" letterSpacing="1">
          {label}
        </text>
        {/* Scale labels */}
        <text x={left.x + 4}  y={cy + 18} textAnchor="middle" fill="#374151" fontSize="9">0%</text>
        <text x={right.x - 4} y={cy + 18} textAnchor="middle" fill="#374151" fontSize="9">100%</text>
        <text x={cx}           y="16"      textAnchor="middle" fill="#374151" fontSize="9">50%</text>
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
      const tier = getTier(score);
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
      <div className="max-w-xl mx-auto text-center py-8">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full border border-accent/40 bg-accent/5 flex items-center justify-center mx-auto mb-8">
          <svg className="w-9 h-9 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        {/* Headline */}
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Diagnóstico completado</p>
        <h3 className="text-white text-2xl md:text-3xl font-display font-bold mb-4 leading-tight">
          Tu informe está en camino,<br />{gate.nombre.split(" ")[0]}.
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-2">
          Hemos enviado tu diagnóstico personalizado a
        </p>
        <p className="text-white font-mono text-sm mb-8">{gate.email}</p>
        <p className="text-gray-600 text-xs mb-10">
          Revisa también la carpeta de spam si no lo ves en unos minutos.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDAR_URL}
            target="_blank"
            onClick={() => pushEvent("cta_click", { label: "results_book_call", score, tier: getTier(score) })}
            className="flex-1 bg-accent text-black font-bold text-sm py-4 px-6 rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-center"
          >
            Agendar reunión →
          </a>
          <a
            href="#ecosistema"
            className="flex-1 border border-gray-800 hover:border-gray-600 text-white font-bold text-sm py-4 px-6 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-widest text-center"
          >
            Ver el ecosistema
          </a>
        </div>
      </div>
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

      {/* Skip CTA */}
      <div className="mt-8 pt-6 border-t border-gray-900 text-center">
        <p className="text-gray-600 text-xs mb-3">¿Prefieres hablar directamente?</p>
        <a
          href={CALENDAR_URL}
          target="_blank"
          onClick={() => pushEvent("cta_click", { label: "skip_to_calendar" })}
          className="inline-flex items-center gap-2 border border-gray-700 hover:border-accent text-gray-400 hover:text-white text-xs font-mono uppercase tracking-widest px-6 py-3 rounded-sm transition-colors"
        >
          Saltar y agendar reunión directamente <ArrowRight className="w-3 h-3" />
        </a>
      </div>
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

function ResultsView({ score, failedCategories, nombre }: {
  score: number;
  failedCategories: (keyof typeof SERVICE_MAP)[];
  nombre: string;
}) {
  const tier = getTier(score);

  const TIER_CONFIG: Record<Tier, {
    headline: string; sub: string;
    ctaLabel: string; ctaHref: string;
    ctaSecondaryLabel: string; ctaSecondaryHref: string;
    badge: string;
  }> = {
    low: {
      badge: "Diagnóstico Prioritario",
      headline: "Hay brechas críticas que están bloqueando tu crecimiento.",
      sub: "Con estas fricciones activas, más inversión solo amplifica el problema. Agenda una reunión y diseñamos el plan de ataque.",
      ctaLabel: "Agendar reunión ahora",
      ctaHref: CALENDAR_URL,
      ctaSecondaryLabel: "Ver el ecosistema",
      ctaSecondaryHref: "#ecosistema",
    },
    mid: {
      badge: "Sesión Estratégica",
      headline: "Tienes base sólida, pero hay fricciones críticas que frenan tu crecimiento.",
      sub: "Estás a pocas decisiones de multiplicar tu facturación. Agenda una sesión y lo desbloqueamos juntos.",
      ctaLabel: "Agendar reunión",
      ctaHref: CALENDAR_URL,
      ctaSecondaryLabel: "Ver el ecosistema",
      ctaSecondaryHref: "#ecosistema",
    },
    high: {
      badge: "Sesión 1:1 de Escalado",
      headline: "Tu infraestructura está lista para un escalado de alto impacto.",
      sub: "Tienes los sistemas en orden. Agenda una sesión 1:1 para diseñar tu roadmap de crecimiento del 300%.",
      ctaLabel: "Agendar reunión 1:1",
      ctaHref: CALENDAR_URL,
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
