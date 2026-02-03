"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                setIsOpen(false); // Close menu if we scroll back up to hero
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Ecosistema", href: "#ecosistema" },
        { name: "Método V&G", href: "#metodologia" },
        { name: "Partnership", href: "#partnership" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 border-b",
            isScrolled ? 'bg-bg-primary/95 backdrop-blur-md border-white/5 py-4 opacity-100' : 'bg-transparent border-transparent py-6 opacity-0 pointer-events-none'
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="w-32 md:w-36 h-10 relative">
                    <Image
                        src="/logo-full.png"
                        alt="Visual & Growth"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-accent transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a href="#audit" className="hidden md:block px-5 py-2 text-sm font-bold bg-accent text-black hover:bg-white hover:text-black transition-all rounded-sm">
                    Audita tu Growth
                </a>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden p-2 text-white hover:text-accent transition-colors pointer-events-auto"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-white/5 overflow-hidden pointer-events-auto"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="text-lg font-medium text-white hover:text-accent flex items-center justify-between"
                                >
                                    {link.name}
                                    <ArrowRight className="w-4 h-4 text-accent" />
                                </a>
                            ))}
                            <a
                                href="#audit"
                                onClick={closeMenu}
                                className="mt-4 px-6 py-4 text-center text-sm font-bold bg-accent text-black hover:bg-white transition-all rounded-sm"
                            >
                                Audita tu Growth
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
