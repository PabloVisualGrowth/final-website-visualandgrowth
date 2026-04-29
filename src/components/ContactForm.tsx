"use client";

export default function ContactForm() {
    return (
        <form action="https://n8n-n8n.d4s5yj.easypanel.host/webhook-test/1ae503d6-4f94-4cb6-ac0e-88b50c666eef" method="POST" id="contactForm" className="max-w-2xl mx-auto space-y-6 text-left">

            <input type="hidden" name="_subject" value="Nueva consulta desde Visual&Growth" />
            <input type="hidden" name="origen" value="web" />

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

            <div className="flex flex-col md:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 bg-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-wide">
                    Enviar Consulta
                </button>
                <a href="https://calendar.app.google/JefBW2JRGWa85rFf9" target="_blank" className="flex-1 border border-gray-700 hover:border-white text-white font-bold text-lg py-4 rounded-sm hover:bg-white/5 transition-colors uppercase tracking-wide text-center">
                    Agendar Reunión
                </a>
            </div>
        </form>
    );
}
