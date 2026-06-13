import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

const BUILD_DATE = new Date().toISOString()

function url(path: string) {
  return `${business.url}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── PT-BR — páginas principais ──────────────────────────────
    { url: url("/"),                                          lastModified: BUILD_DATE, changeFrequency: "weekly"  as const, priority: 1.0  },
    { url: url("/transporte-terrestre-executivo-londrina"),   lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: url("/londrina-guarulhos"),                        lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.95 },
    { url: url("/londrina-sao-paulo"),                        lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.9  },
    { url: url("/londrina-maringa"),                          lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/londrina-foz-do-iguacu"),                    lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/airport-transfer-londrina"),                 lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.9  },
    { url: url("/motorista-executivo-londrina"),              lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/transfer-corporativo-londrina"),             lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/frota-executiva-londrina"),                  lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.8  },
    { url: url("/contato"),                                   lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.7  },
    // ── PT-BR — Lote A expansão ─────────────────────────────────
    { url: url("/londrina-curitiba"),                          lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.9  },
    { url: url("/transfer-congonhas-londrina"),                lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.9  },
    { url: url("/transporte-executivo-24-horas-londrina"),     lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/transporte-hospital-londrina"),              lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    // ── EN — páginas internacionais ─────────────────────────────
    { url: url("/en"),                                        lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: url("/en/airport-transfer-londrina"),              lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.8  },
    { url: url("/en/executive-driver-londrina"),              lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.8  },
    { url: url("/en/corporate-transfer-londrina"),            lastModified: BUILD_DATE, changeFrequency: "monthly" as const, priority: 0.8  },
  ]
}
