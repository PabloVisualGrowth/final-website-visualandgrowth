"use client";

import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show consent after a small delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-6 z-[100] transform transition-transform duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left max-w-2xl">
                    <h3 className="text-white font-bold text-lg mb-2">Valoramos tu privacidad</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Al hacer clic en "Aceptar todo" usted da su consentimiento a nuestro uso de las cookies.
                    </p>

                </div>
                <div className="flex gap-4 min-w-max">
                    <button
                        onClick={declineCookies}
                        className="px-6 py-2.5 border border-gray-700 text-gray-300 hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                    >
                        Rechazar todo
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 bg-accent text-black hover:bg-white rounded-lg text-sm font-bold transition-colors shadow-[0_0_15px_rgba(255,195,0,0.2)]"
                    >
                        Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
}
