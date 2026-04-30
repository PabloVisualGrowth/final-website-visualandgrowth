"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ecosistemaLinks = [
    { name: "Estrategia & Consultoría", href: "/ecosistema/estrategia-consultoria" },
    { name: "Hyper-Automation", href: "/ecosistema/hyper-automation" },
    { name: "Market Authority", href: "/ecosistema/market-authority" },
    { name: "Product Boutique", href: "/ecosistema/product-boutique" },
    { name: "Smart Structure", href: "/ecosistema/smart-structure" },
    { name: "Content Studio", href: "/ecosistema/content-studio" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [logoVisible, setLogoVisible] = useState(false);
    const [ecoOpen, setEcoOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const heroHeight = window.innerHeight;
            const scrollingUp = currentY < lastScrollY.current;
            const pastHero = currentY > heroHeight * 0.9;

            setLogoVisible(pastHero && scrollingUp);
            if (!pastHero) {
                setIsOpen(false);
                setEcoOpen(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => {
            if (prev) setEcoOpen(false);
            return !prev;
        });
    };

    const closeMenu = () => {
        setIsOpen(false);
        setEcoOpen(false);
    };

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Método V&G", href: "#metodologia" },
    ];

    return (
        <>
            {/* Logo — appears only on scroll up past hero */}
            <AnimatePresence>
                {logoVisible && (
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed top-5 left-6 z-50 block w-32 md:w-36 h-9 relative"
                    >
                        <Image
                            src="/logo-full.png"
                            alt="Visual & Growth"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </motion.a>
                )}
            </AnimatePresence>

            {/* Burger — always visible */}
            <button
                onClick={toggleMenu}
                className="fixed top-5 right-6 z-50 w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors"
                aria-label="Toggle Menu"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <X className="w-5 h-5" />
                        </motion.span>
                    ) : (
                        <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                            <Menu className="w-5 h-5" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            {/* Full-screen menu overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                        className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col justify-center px-10 md:px-20"
                    >
                        <div className="flex flex-col gap-6 md:gap-8">

                            {/* ── Regular links before Ecosistema ── */}
                            <motion.a
                                href="#"
                                onClick={closeMenu}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl md:text-6xl font-bold text-white hover:text-accent flex items-center justify-between group transition-colors duration-200"
                            >
                                Home
                                <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* ── Ecosistema accordion ── */}
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.20, ease: [0.76, 0, 0.24, 1] }}
                            >
                                {/* Ecosistema toggle row */}
                                <button
                                    onClick={() => setEcoOpen((prev) => !prev)}
                                    className="w-full text-4xl md:text-6xl font-bold text-white hover:text-accent flex items-center justify-between group transition-colors duration-200"
                                >
                                    Ecosistema
                                    <motion.span
                                        animate={{ rotate: ecoOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="text-accent"
                                    >
                                        <ChevronDown className="w-7 h-7" />
                                    </motion.span>
                                </button>

                                {/* Sub-links */}
                                <AnimatePresence initial={false}>
                                    {ecoOpen && (
                                        <motion.div
                                            key="eco-sub"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 ml-4 flex flex-col gap-3 border-l border-accent/30 pl-6">
                                                {ecosistemaLinks.map((sub, idx) => (
                                                    <motion.a
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={closeMenu}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="text-lg md:text-2xl font-medium text-gray-400 hover:text-accent transition-colors duration-150 flex items-center gap-2 group"
                                                    >
                                                        <span className="text-accent/60 text-sm font-mono">
                                                            0{idx + 1}
                                                        </span>
                                                        {sub.name}
                                                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                                    </motion.a>
                                                ))}
                                                {/* También se puede ir a la sección general */}
                                                <a
                                                    href="#ecosistema"
                                                    onClick={closeMenu}
                                                    className="text-sm font-medium text-gray-600 hover:text-accent transition-colors mt-1"
                                                >
                                                    → Ver todo el ecosistema
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* ── Método V&G ── */}
                            <motion.a
                                href="#metodologia"
                                onClick={closeMenu}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.28, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl md:text-6xl font-bold text-white hover:text-accent flex items-center justify-between group transition-colors duration-200"
                            >
                                Método V&G
                                <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.a>

                            {/* ── CTA ── */}
                            <motion.a
                                href="#audit"
                                onClick={closeMenu}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.36 }}
                                className="mt-6 px-8 py-4 text-sm font-bold bg-accent text-black hover:bg-white transition-all rounded-sm self-start"
                            >
                                Audita tu Growth
                            </motion.a>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
