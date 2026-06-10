import type { MetadataRoute } from "next"
import { business } from "@/lib/business"

const BUILD_DATE = new Date().toISOString()

function url(path: string) {
  return `${business.url}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: url("/transporte-terrestre-executivo-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: url("/londrina-guarulhos"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: url("/londrina-sao-paulo"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: url("/airport-transfer-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: url("/motorista-executivo-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: url("/transfer-corporativo-londrina"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: url("/contato"),
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
