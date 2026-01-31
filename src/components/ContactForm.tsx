"use client";

export default function ContactForm() {
    return (
        <form action="https://formspree.io/f/mldwkpyn" method="POST" id="contactForm" className="max-w-2xl mx-auto space-y-6 text-left">

            <input type="hidden" name="_subject" value="Nueva consulta desde Visual&Growth" />

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                    <label htmlFor="sector" className="block text-sm font-bold text-gray-300 mb-2">Sector de tu empresa</label>
                    <div className="relative">
                        <select id="sector" name="sector" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all appearance-none cursor-pointer">
                            <option value="">Selecciona tu sector</option>
                            <option value="tecnologia">Tecnología</option>
                            <option value="consultoria">Consultoría</option>
                            <option value="servicios">Servicios Profesionales</option>
                            <option value="e-commerce">E-commerce</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="retail">Retail</option>
                            <option value="inmobiliario">Inmobiliario</option>
                            <option value="construccion">Construcción</option>
                            <option value="salud">Salud y Bienestar</option>
                            <option value="educacion">Educación</option>
                            <option value="fintech">Fintech</option>
                            <option value="seguros">Seguros</option>
                            <option value="logistica">Logística y Transporte</option>
                            <option value="alimentacion">Alimentación</option>
                            <option value="turismo">Turismo y Hostelería</option>
                            <option value="automocion">Automoción</option>
                            <option value="telecomunicaciones">Telecomunicaciones</option>
                            <option value="farmaceutico">Farmacéutico</option>
                            <option value="agricultura">Agricultura</option>
                            <option value="legal">Legal</option>
                            <option value="otros">Otros</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-accent">▼</div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="facturacion" className="block text-sm font-bold text-gray-300 mb-2">Facturación anual aproximada</label>
                    <div className="relative">
                        <select id="facturacion" name="facturacion" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all appearance-none cursor-pointer">
                            <option value="">Selecciona rango</option>
                            <option value="startup">Startup / Pre-revenue</option>
                            <option value="menos-50k">Menos de 50K€</option>
                            <option value="50k-100k">50K€ - 100K€</option>
                            <option value="100k-250k">100K€ - 250K€</option>
                            <option value="250k-500k">250K€ - 500K€</option>
                            <option value="500k-750k">500K€ - 750K€</option>
                            <option value="750k-1M">750K€ - 1M€</option>
                            <option value="1M-2M">1M€ - 2M€</option>
                            <option value="2M-5M">2M€ - 5M€</option>
                            <option value="5M-10M">5M€ - 10M€</option>
                            <option value="10M-25M">10M€ - 25M€</option>
                            <option value="25M-50M">25M€ - 50M€</option>
                            <option value="mas-50M">Más de 50M€</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-accent">▼</div>
                    </div>
                </div>
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
