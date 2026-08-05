import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VEXA CREATIVE",
  description:
    "A VEXA Creative impulsiona empresas com estratégias de conteúdo, vídeos profissionais, gestão de redes sociais e desenvolvimento de sites modernos que transformam visitantes em clientes.",
  generator: "Next.js",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#09090B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}