import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

const BUILD_DATE = new Date().toISOString()

function url(path: string) {
  return `${business.url}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  // REGRA: adicionar uma rota aqui SOMENTE após o page.tsx correspondente existir.
  // Rotas pendentes são adicionadas conforme cada página é criada e validada.
  return [
    {
      url: url("/"),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ]
}
