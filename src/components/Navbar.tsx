"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 border-b ${isScrolled ? 'bg-bg-primary/95 backdrop-blur-md border-white/5 py-4 opacity-100' : 'bg-transparent border-transparent py-6 opacity-0 pointer-events-none'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="w-32 md:w-36 h-10 relative">
                    <Image
                        src="/logo-full.png"
                        alt="Visual & Growth"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
                    <a href="#ecosistema" className="hover:text-accent transition-colors">Ecosistema</a>
                    <a href="#metodologia" className="hover:text-accent transition-colors">Método V&G</a>
                    <a href="#partnership" className="hover:text-accent transition-colors">Partnership</a>
                </div>

                <a href="#audit" className="hidden md:block px-5 py-2 text-sm font-bold bg-accent text-black hover:bg-white hover:text-black transition-all rounded-sm">
                    Audita tu Growth
                </a>
            </div>
        </nav>
    );
}
