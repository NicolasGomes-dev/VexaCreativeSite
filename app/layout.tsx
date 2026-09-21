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
  metadataBase: new URL("https://vexacreative.com.br"),

  title: {
    default: "VEXA CREATIVE | Audiovisual, Tecnologia e Marketing Digital",
    template: "%s | VEXA CREATIVE",
  },

  description:
    "A VEXA CREATIVE transforma marcas por meio de audiovisual, tecnologia e estratégias digitais. Produção de vídeos, drone, conteúdo para redes sociais e desenvolvimento de sites modernos.",

  keywords: [
    "VEXA CREATIVE",
    "marketing digital",
    "produção audiovisual",
    "vídeos profissionais",
    "filmagem com drone",
    "drone 4K",
    "criação de conteúdo",
    "redes sociais",
    "desenvolvimento de sites",
    "criação de sites",
    "tecnologia",
    "Goiânia",
    "Goiás",
  ],

  authors: [
    {
      name: "VEXA CREATIVE",
      url: "https://vexacreative.com.br",
    },
  ],

  creator: "VEXA CREATIVE",
  publisher: "VEXA CREATIVE",

  alternates: {
    canonical: "https://vexacreative.com.br/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vexacreative.com.br/",
    siteName: "VEXA CREATIVE",

    title: "VEXA CREATIVE | Audiovisual, Tecnologia e Marketing Digital",

    description:
      "Audiovisual, tecnologia e estratégias digitais para posicionar marcas, fortalecer sua presença e gerar novas oportunidades.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VEXA CREATIVE - Audiovisual, Tecnologia e Marketing Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "VEXA CREATIVE | Audiovisual, Tecnologia e Marketing Digital",

    description:
      "Audiovisual, tecnologia e estratégias digitais para posicionar marcas e gerar novas oportunidades.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
      className={`dark ${inter.variable} ${manrope.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}