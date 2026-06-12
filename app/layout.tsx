/**
 * app/layout.tsx — Londrina Executivo
 *
 * Layout global com:
 *   - Schemas LocalBusiness + WebSite (uma vez, presente em todas as páginas)
 *   - Favicons completos
 *   - Manifest
 *   - Google Search Console placeholder
 *   - Bing Webmaster placeholder (meta tag direta no <head>)
 *   - NENHUMA referência ao londrinataxi.com.br
 */

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { business } from "@/lib/business"
import Header from "./components/Header"
import {
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  serializeSchema,
} from "@/lib/schemas"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: business.themeColor,
}

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Londrina Executivo | Mobilidade Premium",
    template: "%s | Londrina Executivo",
  },
  description: business.description,
  authors: [{ name: business.name, url: business.url }],
  creator: business.name,
  publisher: business.name,
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console — preencher após DNS configurado
  verification: {
    google: business.googleVerification,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: business.themeColor }],
  },
}

const localBusinessSchema = buildLocalBusinessSchema()
const webSiteSchema = buildWebSiteSchema()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Bing Webmaster Tools — preencher após DNS configurado */}
        <meta name="msvalidate.01" content={business.bingVerification} />

        {/* Schemas globais — LocalBusiness + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeSchema(webSiteSchema) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F0F0F0] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGJRW1MY4T"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VGJRW1MY4T');
        `}</Script>
        <Header />
        {children}
      </body>
    </html>
  )
}
