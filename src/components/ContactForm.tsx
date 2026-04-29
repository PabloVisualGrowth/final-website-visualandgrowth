"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        try {
            await fetch("https://n8n-n8n.d4s5yj.easypanel.host/webhook-test/1ae503d6-4f94-4cb6-ac0e-88b50c666eef", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            setStatus("success");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="max-w-2xl mx-auto text-center py-16">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-white mb-3">Consulta enviada</h3>
                <p className="text-gray-500">Hemos recibido tu mensaje. Nos pondremos en contacto contigo en menos de 24h.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} id="contactForm" className="max-w-2xl mx-auto space-y-6 text-left">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                    <label htmlFor="nombre" className="block text-sm font-bold text-gray-300 mb-2">Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600" />
                </div>
                <div className="form-group">
                    <label htmlFor="empresa" className="block text-sm font-bold text-gray-300 mb-2">Empresa *</label>
                    <input type="text" id="empresa" name="empresa" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email corporativo *</label>
                    <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono" className="block text-sm font-bold text-gray-300 mb-2">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="web" className="block text-sm font-bold text-gray-300 mb-2">Web de tu empresa</label>
                <input type="url" id="web" name="web" placeholder="https://tuempresa.com" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600" />
            </div>

            <div className="form-group">
                <label htmlFor="servicios_interes" className="block text-sm font-bold text-gray-300 mb-2">Servicios de interés</label>
                <div className="relative">
                    <select id="servicios_interes" name="servicios_interes" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all appearance-none cursor-pointer">
                        <option value="">¿En qué podemos ayudarte?</option>
                        <option value="automatizacion">Automatización Comercial</option>
                        <option value="agentes-ia">Agentes Virtuales con IA</option>
                        <option value="seo">Posicionamiento SEO</option>
                        <option value="fiscal">Asesoramiento Fiscal</option>
                        <option value="contenido">Generación de Contenido</option>
                        <option value="consultoria">Consultoría Estratégica</option>
                        <option value="todo">Solución Integral</option>
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-accent">▼</div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="mensaje" className="block text-sm font-bold text-gray-300 mb-2">Cuéntanos sobre tu proyecto</label>
                <textarea id="mensaje" name="mensaje" rows={4} placeholder="Describe tu situación actual, objetivos y cómo podemos ayudarte a acelerar tu crecimiento..." className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600"></textarea>
            </div>

            {status === "error" && (
                <p className="text-red-400 text-sm">Ha ocurrido un error. Por favor inténtalo de nuevo.</p>
            )}

            <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 bg-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Enviando..." : "Enviar Consulta"}
                </button>
                <a href="https://calendar.app.google/JefBW2JRGWa85rFf9" target="_blank" className="flex-1 border border-gray-700 hover:border-white text-white font-bold text-lg py-4 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-wide text-center">
                    Agendar Reunión
                </a>
            </div>
        </form>
    );
}
