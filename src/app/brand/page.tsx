import Image from "next/image";

export default function BrandPage() {
    return (
        <div className="min-h-screen bg-primary text-text-primary p-8 md:p-20 font-sans">
            <header className="mb-12 border-b border-gray-800 pb-8">
                <h1 className="text-4xl font-bold font-display uppercase tracking-tighter mb-2">
                    Brandbook & Design System
                </h1>
                <p className="text-text-secondary">
                    Visual Identity Overview for Visual & Growth
                </p>
            </header>

            <section className="space-y-12">
                {/* LOGO SECTION */}
                <div>
                    <h2 className="text-2xl font-bold font-display mb-6 text-accent pl-4 border-l-2 border-accent">
                        01. Logo & Identidad
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-bg-secondary p-12 rounded-lg flex items-center justify-center border border-gray-900">
                            {/* Using the uploaded logo */}
                            <div className="relative w-64 h-32">
                                <Image
                                    src="/logo.png"
                                    alt="Visual & Growth Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-lg flex items-center justify-center">
                            {/* Dark version simulation if we had one, for now just the same */}
                            <div className="relative w-64 h-32 filter invert">
                                <Image
                                    src="/logo.png"
                                    alt="Visual & Growth Logo Inverted"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLORS SECTION */}
                <div>
                    <h2 className="text-2xl font-bold font-display mb-6 text-accent pl-4 border-l-2 border-accent">
                        02. Paleta de Colores
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-3">
                            <div className="h-32 rounded-lg bg-bg-primary border border-gray-800 shadow-xl"></div>
                            <div>
                                <p className="font-bold text-white">Background Primary</p>
                                <p className="text-sm text-gray-500 font-mono">#050505</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-32 rounded-lg bg-bg-secondary border border-gray-800"></div>
                            <div>
                                <p className="font-bold text-white">Background Secondary</p>
                                <p className="text-sm text-gray-500 font-mono">#121212</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-32 rounded-lg bg-accent shadow-[0_0_30px_rgba(235,255,0,0.3)]"></div>
                            <div>
                                <p className="font-bold text-white">Neon Accent</p>
                                <p className="text-sm text-gray-500 font-mono">#EBFF00</p>
                                <p className="text-xs text-accent mt-1">¿Coincide con el logo?</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-32 rounded-lg bg-[radial-gradient(circle_at_center,rgba(235,255,0,0.4)_0%,rgba(5,5,5,0)_70%)] border border-gray-800"></div>
                            <div>
                                <p className="font-bold text-white">Gradient Surface</p>
                                <p className="text-sm text-gray-500 font-mono">Overlay Texture</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TYPOGRAPHY SECTION */}
                <div>
                    <h2 className="text-2xl font-bold font-display mb-6 text-accent pl-4 border-l-2 border-accent">
                        03. Tipografía
                    </h2>
                    <div className="space-y-8 bg-bg-secondary p-8 rounded-lg border border-gray-900">
                        <div>
                            <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Display Font (Space Grotesk)</p>
                            <h1 className="text-6xl font-display font-bold leading-tight">
                                From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Scale.</span>
                            </h1>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Body Font (Inter)</p>
                            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                                Nuestros sistemas de crecimiento están diseñados para escalar. Usamos tecnología de vanguardia,
                                automatización inteligente y diseño estratégico para convertir startups en líderes de mercado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
