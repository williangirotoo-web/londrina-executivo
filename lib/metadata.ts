/**
 * lib/metadata.ts — Londrina Executivo
 *
 * Todas as entradas de metadata são exclusivas.
 * Zero sobreposição com londrinataxi.com.br em title, description ou path.
 */

import type { Metadata } from "next"
import { business } from "./business"

interface MetadataInput {
  title: string
  description: string
  path: string
  ogImage?: string
  ogImageAlt?: string
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "og-home.jpg",
  ogImageAlt = "Londrina Executivo — Mobilidade Executiva Premium",
}: MetadataInput): Metadata {
  const url = `${business.url}${path}`
  const image = `${business.url}/${ogImage}`

  return {
    title,
    description,
    metadataBase: new URL(business.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: business.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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
  }
}

// ─── Metadata por página ─────────────────────────────────────────────────────
// Regras obrigatórias:
//   Title ≤ 60 chars · Description 140–160 chars
//   Nenhum title/description repetido neste arquivo
//   Nenhum título copiado do londrinataxi.com.br

export const pageMetadata = {

  home: buildMetadata({
    title: "Transporte Executivo em Londrina | Transfer, Motorista e Empresas",
    description:
      "Serviço de mobilidade executiva em Londrina. Transfer para aeroportos, " +
      "rotas interestaduais, motorista executivo e transporte corporativo premium.",
    path: "/",
    ogImage: "og-home.jpg",
    ogImageAlt: "Londrina Executivo — Mobilidade Executiva Premium em Londrina",
  }),

  airportTransfer: buildMetadata({
    title: "Airport Transfer Londrina | Executive Service",
    description:
      "Executive airport transfer service in Londrina. Arrivals and departures at " +
      "Governador José Richa Airport (LDB). Uniformed driver, flight monitoring.",
    path: "/airport-transfer-londrina",
    ogImage: "og-airport-transfer.jpg",
    ogImageAlt: "Airport Transfer Londrina — executive service at LDB airport",
  }),

  transferCorporativo: buildMetadata({
    title: "Transfer Corporativo Londrina | Empresas",
    description:
      "Transfer corporativo premium para empresas em Londrina. " +
      "Veículo executivo, motorista profissional e nota fiscal. Contratos e faturamento mensal disponíveis.",
    path: "/transfer-corporativo-londrina",
    ogImage: "og-transfer-corporativo.jpg",
    ogImageAlt: "Transfer Corporativo Londrina — serviço premium para empresas",
  }),

  motoristaExecutivo: buildMetadata({
    title: "Motorista Executivo Londrina | Por Horas",
    description:
      "Motorista executivo profissional em Londrina por horas ou diária completa. " +
      "Veículo premium, agenda corporativa e atendimento bilíngue português e inglês.",
    path: "/motorista-executivo-londrina",
    ogImage: "og-motorista-executivo.jpg",
    ogImageAlt: "Motorista Executivo Londrina — serviço por horas com veículo premium",
  }),

  transporteExecutivo: buildMetadata({
    title: "Transporte Executivo Londrina | Premium",
    description:
      "Serviço completo de transporte executivo em Londrina. " +
      "Mobilidade corporativa, rotas interestaduais e atendimento especializado para empresas e executivos.",
    path: "/transporte-terrestre-executivo-londrina",
    ogImage: "og-transporte-executivo.jpg",
    ogImageAlt: "Transporte Executivo Londrina — mobilidade premium para empresas",
  }),

  londrinaGuarulhos: buildMetadata({
    title: "Londrina Guarulhos | Transfer Executivo GRU",
    description:
      "Transfer executivo de Londrina ao Aeroporto Internacional de Guarulhos (GRU). " +
      "470 km com motorista profissional, monitoramento de voo e pontualidade garantida.",
    path: "/londrina-guarulhos",
    ogImage: "og-londrina-guarulhos.jpg",
    ogImageAlt: "Transfer Executivo Londrina Guarulhos GRU — 470 km com motorista profissional",
  }),

  londrinaSaoPaulo: buildMetadata({
    title: "Londrina São Paulo | Transfer Executivo",
    description:
      "Transfer executivo de Londrina a São Paulo. 450 km com veículo premium, " +
      "motorista profissional e cobertura em toda a capital, Grande SP e Congonhas.",
    path: "/londrina-sao-paulo",
    ogImage: "og-londrina-sao-paulo.jpg",
    ogImageAlt: "Transfer Executivo Londrina São Paulo — 450 km veículo premium",
  }),

  contato: buildMetadata({
    title: "Contato | Londrina Executivo",
    description:
      "Entre em contato com a Londrina Executivo para orçamento de transfer, " +
      "motorista executivo ou transporte corporativo. Respondemos pelo WhatsApp em minutos.",
    path: "/contato",
    ogImage: "og-home.jpg",
    ogImageAlt: "Contato Londrina Executivo — solicitar orçamento",
  }),

  frotaExecutiva: buildMetadata({
    title: "Frota Executiva Londrina | Corolla Cross · Compass · T-Cross",
    description:
      "Conheça a frota executiva da Londrina Executivo. " +
      "Corolla Cross, Jeep Compass e VW T-Cross. " +
      "Veículos premium para transfer e transporte corporativo em Londrina.",
    path: "/frota-executiva-londrina",
    ogImage: "og-frota-executiva.jpg",
    ogImageAlt: "Frota Executiva Londrina — Corolla Cross, Jeep Compass e VW T-Cross",
  }),

} as const
