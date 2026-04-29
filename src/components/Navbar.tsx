"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "Ecosistema", href: "#ecosistema" },
        { name: "Método V&G", href: "#metodologia" },
        { name: "Partnership", href: "#partnership" },
    ];

    return (
        <>
            {/* Floating logo */}
            <motion.div
                className="fixed top-6 left-6 z-50"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <a href="#" className="block w-32 md:w-36 h-10 relative">
                    <Image
                        src="/logo-full.png"
                        alt="Visual & Growth"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </a>
            </motion.div>

            {/* Burger button */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 w-11 h-11 flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/10 rounded-sm text-white hover:text-accent hover:border-accent/40 transition-all"
                aria-label="Toggle Menu"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
                            <X className="w-5 h-5" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                        >
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
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: 60 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.12 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                    className="text-4xl md:text-6xl font-bold text-white hover:text-accent flex items-center justify-between group transition-colors duration-200"
                                >
                                    {link.name}
                                    <ArrowRight className="w-6 h-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}

                            <motion.a
                                href="#audit"
                                onClick={closeMenu}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.38 }}
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
