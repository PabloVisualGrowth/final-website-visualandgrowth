"use client";

import { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import Image from "next/image";

export default function LeadCaptureModal() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show modal after 1 second for better UX
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in-up">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>

            {/* Modal Content */}
            <div className="relative bg-[#0A0A0A] border border-gray-800 rounded-lg max-w-lg w-full p-8 shadow-[0_0_40px_rgba(255,195,0,0.1)]">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center mb-6">
                    {/* LOGO ICON ADDED HERE */}
                    <div className="relative w-16 h-16 mb-4 animate-pulse-slow">
                        <Image
                            src="/logo-icon.png"
                            fill
                            alt="Logo"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white mb-2 text-center">Consultoría de Growth Gratuita</h2>
                    <p className="text-sm text-text-secondary text-center">
                        Plazas limitadas. Déjanos tus datos y te contactaremos para una sesión estratégica de 30 min.
                    </p>
                </div>

                <form action="https://formspree.io/f/mldwkpyn" method="POST" id="leadForm" className="space-y-4">
                    <input type="hidden" name="_subject" value="Nuevo Lead desde Modal (Consultoría Gratuita)" />

                    <div>
                        <label htmlFor="modal-nombre" className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Nombre Completo</label>
                        <input type="text" id="modal-nombre" name="nombre" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 font-mono text-sm" />
                    </div>

                    <div>
                        <label htmlFor="modal-empresa" className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Nombre de la Empresa</label>
                        <input type="text" id="modal-empresa" name="empresa" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 font-mono text-sm" />
                    </div>

                    <div>
                        <label htmlFor="modal-email" className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Email Corporativo</label>
                        <input type="email" id="modal-email" name="email" required className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 font-mono text-sm" />
                    </div>

                    <div>
                        <label htmlFor="modal-telefono" className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">Teléfono</label>
                        <input type="tel" id="modal-telefono" name="telefono" className="w-full bg-white/5 border border-gray-800 focus:border-accent text-white px-4 py-3 rounded-sm outline-none transition-all placeholder-gray-600 font-mono text-sm" />
                    </div>

                    <button type="submit" className="w-full bg-accent text-black font-bold text-lg py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-wide mt-2">
                        Solicitar Consultoría
                    </button>
                </form>
            </div>
        </div>
    );
}
