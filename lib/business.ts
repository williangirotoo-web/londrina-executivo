/**
 * lib/business.ts — Londrina Executivo
 *
 * Dados do negócio londrinaexecutivo.com.br
 * 100% independente do londrinataxi.com.br
 * Nenhum dado compartilhado entre os dois sites.
 */

export const business = {
  name:         "Londrina Executivo",
  shortName:    "Londrina Executivo",
  legalName:    "Londrina Executivo Transporte Premium",
  description:
    "Empresa de mobilidade executiva em Londrina. " +
    "Transfer para aeroportos, rotas interestaduais, motorista executivo " +
    "e transporte corporativo premium para empresas e executivos.",
  url:          "https://londrinaexecutivo.com.br",
  phone:        "+55 44 99891-3040",
  phoneDisplay: "(44) 99891-3040",
  whatsapp:     "5544998913040",
  email:        "contato@londrinaexecutivo.com.br",
  founded:      "2025",
  address: {
    street:    "Londrina",
    city:      "Londrina",
    state:     "Paraná",
    stateCode: "PR",
    zip:       "86010-000",
    country:   "BR",
  },
  geo: {
    latitude:  -23.3045,
    longitude: -51.1696,
  },
  themeColor:        "#C9A84C",
  locale:            "pt_BR",
  // Verificações Search Console — preencher após DNS configurado
  googleVerification: "zA2Z2QjrMhzut4y4m3tgqCQ64A_5FtufyiBHtdW_tTU",
  bingVerification:   "PLACEHOLDER_BING_VERIFICATION",
  // IndexNow — gerar key única após publicação
  indexNowKey:        "PLACEHOLDER_INDEXNOW_KEY",
} as const

export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}
