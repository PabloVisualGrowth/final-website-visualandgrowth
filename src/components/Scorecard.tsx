"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEBHOOK_URL =
  "https://n8n-n8n.d4s5yj.easypanel.host/webhook/1ae503d6-4f94-4cb6-ac0e-88b50c666eef";

// ── Question data ─────────────────────────────────────────────────────────────

interface YesNoQuestion {
  id: string;
  text: string;
  category: "automation" | "seo" | "legal" | "strategy";
}

const YES_NO_QUESTIONS: YesNoQuestion[] = [
  { id: "q1", text: "¿Su sistema de ventas funciona hoy sin que usted intervenga directamente?", category: "automation" },
  { id: "q2", text: "¿Están sus herramientas de software conectadas entre sí automáticamente?", category: "automation" },
  { id: "q3", text: "¿Utiliza IA para responder o filtrar consultas de clientes potenciales?", category: "automation" },
  { id: "q4", text: "¿Su contenido en redes genera reuniones de venta de forma predecible?", category: "seo" },
  { id: "q5", text: "¿Conoce su CAC (Coste de Adquisición) exacto por cada canal?", category: "seo" },
  { id: "q6", text: "¿Está su estructura legal optimizada para su nivel de facturación actual?", category: "legal" },
  { id: "q7", text: "¿Tiene un plan documentado de escalado para los próximos 6 meses?", category: "strategy" },
  { id: "q8", text: "¿Sus procesos operativos clave están automatizados en un 80%?", category: "automation" },
  { id: "q9", text: "¿Su sitio web convierte más del 15% del tráfico en contactos reales?", category: "seo" },
  { id: "q10", text: "¿Podría doblar su inversión en marketing mañana sin colapsar su operativa?", category: "automation" },
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
    text: "¿Cuál describe mejor su situación actual?",
    type: "select",
    options: ["Saturado por la operativa", "Estable sin crecimiento", "Escalando rápido"],
  },
  {
    id: "q12",
    text: "¿Qué cifra de facturación desea alcanzar en los próximos 90 días?",
    type: "text",
    placeholder: "Ej: 500.000 €",
  },
  {
    id: "q13",
    text: "¿Qué le impide escalar hoy?",
    type: "select",
    options: ["Falta de leads cualificados", "Caos operativo", "Estructura fiscal/legal", "Imagen de marca débil"],
  },
  {
    id: "q14",
    text: "¿Qué tipo de solución busca?",
    type: "select",
    options: ["Consultoría estratégica", "Software/automatización", "Solución llave en mano (Done-for-you)"],
  },
  {
    id: "q15",
    text: "¿Algún detalle crítico que debamos conocer para personalizar su informe?",
    type: "textarea",
    placeholder: "Cuéntenos su situación con el mayor detalle posible…",
  },
];

// ── Service mapping ────────────────────────────────────────────────────────────

const SERVICE_MAP = {
  automation: {
    num: "02",
    name: "AI & Operations",
    href: "/ecosistema/hyper-automation",
    insight: "Su operativa es un cuello de botella que frena el escalado. Necesita sistematizar con IA antes de poder crecer.",
  },
  seo: {
    num: "03",
    name: "Market Authority",
    href: "/ecosistema/market-authority",
    insight: "Su autoridad de mercado es invisible. Está perdiendo leads cualificados cada día sin un sistema de captación orgánica.",
  },
  legal: {
    num: "05",
    name: "Smart Structure",
    href: "/ecosistema/smart-structure",
    insight: "Está dejando dinero en la mesa. Su estructura fiscal no está optimizada para el nivel de facturación que busca.",
  },
  strategy: {
    num: "01",
    name: "Growth Machines",
    href: "/ecosistema/estrategia-consultoria",
    insight: "Sin un roadmap documentado, el crecimiento es accidental. Necesita un plan de ataque con prioridades claras.",
  },
} as const;

// ── Speedometer ────────────────────────────────────────────────────────────────

function Speedometer({ score }: { score: number }) {
  const cx = 100, cy = 100, r = 78;

  const toPoint = (pct: number) => {
    const phi = (180 - pct * 1.8) * (Math.PI / 180);
    return { x: cx + r * Math.cos(phi), y: cy - r * Math.sin(phi) };
  };

  const left = toPoint(0);   // (22, 100)
  const right = toPoint(100); // (178, 100)
  const score_pt = toPoint(score);

  const bgPath = `M ${left.x} ${left.y} A ${r} ${r} 0 0 0 ${right.x} ${right.y}`;
  const scorePath =
    score > 0 && score < 100
      ? `M ${left.x} ${left.y} A ${r} ${r} 0 0 0 ${score_pt.x.toFixed(2)} ${score_pt.y.toFixed(2)}`
      : score >= 100
      ? bgPath
      : "";

  const needleR = 62;
  const phi = (180 - score * 1.8) * (Math.PI / 180);
  const nX = (cx + needleR * Math.cos(phi)).toFixed(2);
  const nY = (cy - needleR * Math.sin(phi)).toFixed(2);

  const color = score >= 70 ? "#22c55e" : score >= 40 ? "#FFC600" : "#ef4444";
  const label = score >= 70 ? "SISTEMA ESCALABLE" : score >= 40 ? "OPTIMIZACIÓN NECESARIA" : "FUNDAMENTOS CRÍTICOS";

  return (
    <div className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 200 118" className="w-72 max-w-full">
        <path d={bgPath} fill="none" stroke="#1f2937" strokeWidth="10" strokeLinecap="round" />
        {scorePath && (
          <path d={scorePath} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" />
        )}
        <line x1={cx} y1={cy} x2={nX} y2={nY} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="5" fill="white" />
        <text x={cx} y="90" textAnchor="middle" fill={color} fontSize="22" fontWeight="bold" fontFamily="monospace">
          {score}%
        </text>
        <text x={cx} y="108" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace" letterSpacing="1.5">
          {label}
        </text>
        <text x="18" y="113" textAnchor="middle" fill="#374151" fontSize="7">0%</text>
        <text x="182" y="113" textAnchor="middle" fill="#374151" fontSize="7">100%</text>
      </svg>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between text-[10px] font-mono text-gray-600 mb-2 uppercase tracking-widest">
        <span>Pregunta {current} de {total}</span>
        <span>{Math.round((current / total) * 100)}%</span>
      </div>
      <div className="h-px bg-gray-800 w-full">
        <div
          className="h-px bg-accent transition-all duration-500"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

// ── Input styles ───────────────────────────────────────────────────────────────

const inputCls =
  "w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 text-sm";

// ── Main component ─────────────────────────────────────────────────────────────

type Phase = "yesno" | "qualify" | "contact" | "results";

export default function Scorecard() {
  const [phase, setPhase] = useState<Phase>("yesno");
  const [currentQ, setCurrentQ] = useState(0);
  const [currentQual, setCurrentQual] = useState(0);
  const [yesNoAnswers, setYesNoAnswers] = useState<Record<string, boolean>>({});
  const [qualAnswers, setQualAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ nombre: "", empresa: "", email: "", telefono: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const yesCount = Object.values(yesNoAnswers).filter(Boolean).length;
  const score = Math.round((yesCount / YES_NO_QUESTIONS.length) * 100);

  const failedCategories = [
    ...new Set(
      YES_NO_QUESTIONS.filter((q) => yesNoAnswers[q.id] === false).map((q) => q.category)
    ),
  ] as (keyof typeof SERVICE_MAP)[];

  // ── YesNo phase handlers

  const handleYesNo = (answer: boolean) => {
    const q = YES_NO_QUESTIONS[currentQ];
    setYesNoAnswers((prev) => ({ ...prev, [q.id]: answer }));
    if (currentQ < YES_NO_QUESTIONS.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setPhase("qualify");
    }
  };

  // ── Qualify phase handlers

  const handleQualNext = () => {
    if (currentQual < QUAL_QUESTIONS.length - 1) {
      setCurrentQual((prev) => prev + 1);
    } else {
      setPhase("contact");
    }
  };

  // ── Contact + submit

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...contact,
          score,
          yesNoAnswers,
          qualAnswers,
          failedCategories,
          source: "scorecard-2026",
        }),
      });
    } catch {}
    setPhase("results");
    setIsSubmitting(false);
  };

  // ── Render phases

  if (phase === "results") {
    return <ResultsView score={score} failedCategories={failedCategories} />;
  }

  if (phase === "contact") {
    return (
      <ContactPhase
        contact={contact}
        setContact={setContact}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    );
  }

  if (phase === "qualify") {
    const q = QUAL_QUESTIONS[currentQual];
    return (
      <QualifyPhase
        question={q}
        answer={qualAnswers[q.id] ?? ""}
        setAnswer={(val) => setQualAnswers((prev) => ({ ...prev, [q.id]: val }))}
        onNext={handleQualNext}
        step={currentQual + 1}
        total={QUAL_QUESTIONS.length}
      />
    );
  }

  // YesNo phase
  const q = YES_NO_QUESTIONS[currentQ];
  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar current={currentQ + 1} total={YES_NO_QUESTIONS.length} />
      <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug mb-10 min-h-[80px]">
        {q.text}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleYesNo(true)}
          className="group flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-accent hover:bg-accent/5 text-white font-bold font-mono uppercase tracking-widest transition-all duration-300 rounded-sm text-sm"
        >
          <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
          Sí
        </button>
        <button
          onClick={() => handleYesNo(false)}
          className="group flex items-center justify-center gap-3 p-6 border border-gray-800 hover:border-red-500/50 hover:bg-red-500/5 text-white font-bold font-mono uppercase tracking-widest transition-all duration-300 rounded-sm text-sm"
        >
          <XCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
          No
        </button>
      </div>
    </div>
  );
}

// ── Qualify phase ──────────────────────────────────────────────────────────────

function QualifyPhase({
  question, answer, setAnswer, onNext, step, total,
}: {
  question: QualQuestion;
  answer: string;
  setAnswer: (v: string) => void;
  onNext: () => void;
  step: number;
  total: number;
}) {
  const canContinue = answer.trim().length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressBar current={step} total={total} />
      <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug mb-8">
        {question.text}
      </p>

      {question.type === "select" && (
        <div className="space-y-3">
          {question.options!.map((opt) => (
            <button
              key={opt}
              onClick={() => setAnswer(opt)}
              className={cn(
                "w-full text-left px-5 py-4 border rounded-sm font-mono text-sm transition-all duration-300",
                answer === opt
                  ? "border-accent bg-accent/10 text-white"
                  : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-white"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {question.type === "text" && (
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder}
          className={inputCls}
        />
      )}

      {question.type === "textarea" && (
        <textarea
          rows={4}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={question.placeholder}
          className={inputCls}
        />
      )}

      <button
        onClick={onNext}
        disabled={!canContinue}
        className="mt-8 flex items-center gap-2 bg-accent text-black font-bold font-mono uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
      >
        {step === total ? "Ver mi resultado" : "Continuar"}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// ── Contact phase ──────────────────────────────────────────────────────────────

function ContactPhase({
  contact, setContact, onSubmit, isSubmitting,
}: {
  contact: { nombre: string; empresa: string; email: string; telefono: string };
  setContact: (c: typeof contact) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const set = (key: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [key]: e.target.value });

  const isValid = contact.nombre && contact.empresa && contact.email;

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Último paso</p>
      <h3 className="text-white text-2xl font-display font-bold mb-2">
        Su informe personalizado está listo.
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Déjenos sus datos para enviárselo y programar su sesión estratégica.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Nombre *</label>
          <input type="text" value={contact.nombre} onChange={set("nombre")} required className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Empresa *</label>
          <input type="text" value={contact.empresa} onChange={set("empresa")} required className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Email *</label>
          <input type="email" value={contact.email} onChange={set("email")} required className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-mono text-gray-400 mb-2 uppercase tracking-wider">Teléfono</label>
          <input type="tel" value={contact.telefono} onChange={set("telefono")} className={inputCls} />
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!isValid || isSubmitting}
        className="mt-8 w-full bg-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {isSubmitting ? "Generando informe…" : "Ver mi Diagnóstico →"}
      </button>
    </div>
  );
}

// ── Results view ───────────────────────────────────────────────────────────────

function ResultsView({
  score, failedCategories,
}: {
  score: number;
  failedCategories: (keyof typeof SERVICE_MAP)[];
}) {
  const isHigh = score >= 70;

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-accent font-mono text-xs uppercase tracking-widest mb-6 text-center">
        Su Diagnóstico V&G 2026
      </p>

      <Speedometer score={score} />

      <div className="mt-8 text-center">
        {isHigh ? (
          <>
            <p className="text-white font-display font-bold text-xl mb-2">
              Su empresa está lista para el escalado avanzado.
            </p>
            <p className="text-gray-500 text-sm">
              Tiene los fundamentos en orden. Agende una sesión estratégica para desplegar el siguiente nivel.
            </p>
          </>
        ) : (
          <>
            <p className="text-white font-display font-bold text-xl mb-2">
              Hay fricciones críticas que frenan su crecimiento.
            </p>
            <p className="text-gray-500 text-sm">
              Descargue nuestro Roadmap de Fundamentos y empiece a sistematizar desde hoy.
            </p>
          </>
        )}
      </div>

      {failedCategories.length > 0 && (
        <div className="mt-10">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
            Áreas de mejora prioritaria
          </p>
          <div className="space-y-3">
            {failedCategories.map((cat) => {
              const svc = SERVICE_MAP[cat];
              return (
                <a
                  key={cat}
                  href={svc.href}
                  className="group flex items-start gap-4 p-4 border border-gray-800 hover:border-accent/50 rounded-sm transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <span className="font-mono text-[10px] text-accent mt-1 shrink-0">{svc.num}</span>
                  <div className="flex-1">
                    <p className="text-white font-bold text-sm mb-1">{svc.name}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{svc.insight}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-accent transition-colors shrink-0 mt-1" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {isHigh ? (
          <a
            href="https://calendar.app.google/JefBW2JRGWa85rFf9"
            target="_blank"
            className="flex-1 bg-accent text-black font-bold text-sm py-4 px-6 rounded-sm hover:bg-white transition-colors uppercase tracking-wide text-center"
          >
            Agendar Sesión Estratégica
          </a>
        ) : (
          <a
            href="#ecosistema"
            className="flex-1 bg-accent text-black font-bold text-sm py-4 px-6 rounded-sm hover:bg-white transition-colors uppercase tracking-wide text-center"
          >
            Ver Roadmap de Fundamentos
          </a>
        )}
        <a
          href="https://calendar.app.google/JefBW2JRGWa85rFf9"
          target="_blank"
          className="flex-1 border border-gray-700 hover:border-white text-white font-bold text-sm py-4 px-6 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-wide text-center"
        >
          Agendar Reunión
        </a>
      </div>
    </div>
  );
}
