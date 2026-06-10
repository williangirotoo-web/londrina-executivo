import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

const BUILD_DATE = new Date().toISOString()

function url(path: string) {
  return `${business.url}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  // REGRA: adicionar rota SOMENTE após page.tsx existir e ser validado
  return [
    {
      url: url("/"),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: url("/londrina-guarulhos"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      url: url("/londrina-sao-paulo"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: url("/contato"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]
}
