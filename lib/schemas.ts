/**
 * lib/schemas.ts — Londrina Executivo
 *
 * Schemas JSON-LD para structured data.
 * Completamente independente do londrinataxi.com.br.
 */

import { business } from "./business"

// ─── LocalBusiness global ────────────────────────────────────────────────────
export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MovingCompany"],
    "@id": `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    foundingDate: business.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.city,
      addressRegion: business.address.stateCode,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Londrina" },
      { "@type": "State", name: "Paraná" },
      { "@type": "City", name: "São Paulo" },
      { "@type": "City", name: "Curitiba" },
      { "@type": "City", name: "Guarulhos" },
    ],
    priceRange: "$$$",
    image: `${business.url}/og-home.jpg`,
    sameAs: [],
  }
}

// ─── WebSite global ──────────────────────────────────────────────────────────
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${business.url}/#website`,
    name: business.name,
    url: business.url,
    inLanguage: "pt-BR",
    publisher: { "@id": `${business.url}/#business` },
  }
}

// ─── Service por página ──────────────────────────────────────────────────────
interface ServiceSchemaProps {
  name: string
  description: string
  serviceType: string
  url: string
  areaServed?: string[]
  image?: string
}

export function buildServiceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = ["Londrina", "Paraná"],
  image,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: { "@id": `${business.url}/#business` },
    areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
    ...(image ? { image } : {}),
  }
}

// ─── FAQPage ─────────────────────────────────────────────────────────────────
export function buildFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}

// ─── BreadcrumbList ──────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${business.url}${item.url}`,
    })),
  }
}

// ─── Serialização segura ─────────────────────────────────────────────────────
export function serializeSchema(schema: object): string {
  return JSON.stringify(schema)
}
