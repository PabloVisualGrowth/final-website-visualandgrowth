import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: "Visual & Growth | Ingeniería de Crecimiento para Empresas a un Nivel Superior",
  description: "Consultoría estratégica de Growth, IA y Operaciones. Ayudamos a empresas a escalar mediante automatización inteligente, diseño premium y estrategias de adquisición validadas.",
  keywords: ["Growth Marketing", "Automatización IA", "Consultoría Estratégica", "Digitalización de Procesos", "Diseño UX/UI", "Escalabilidad de Negocio"],
  authors: [{ name: "Visual & Growth" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/icon-v8.png", type: "image/png" },
      { url: "/favicon-v8.ico", rel: "icon" }
    ],
    apple: "/icon-v8.png",
  },
  openGraph: {
    title: "Visual & Growth | Tu Socio de Crecimiento",
    description: "Transformamos negocios mediante tecnología y estrategia visual de alto impacto.",
    url: "https://visualandgrowth.com",
    siteName: "Visual & Growth",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual & Growth",
    description: "Sistemas interconectados de ingeniería de crecimiento.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
