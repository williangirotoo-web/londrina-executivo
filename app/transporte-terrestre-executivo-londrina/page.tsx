/**
 * app/transporte-terrestre-executivo-londrina/page.tsx — Londrina Executivo
 * KEYWORD: transporte executivo londrina
 * TIPO: HUB institucional — agrega todos os serviços premium
 * CANONICAL: https://londrinaexecutivo.com.br/transporte-terrestre-executivo-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.transporteExecutivo,
  alternates: { canonical: `${business.url}/transporte-terrestre-executivo-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Serviço de Transporte Executivo em Londrina",
  description:
    "Empresa de transporte executivo em Londrina. " +
    "Transfer aeroporto, rotas interestaduais, motorista executivo e mobilidade corporativa premium.",
  serviceType: "Mobilidade Executiva Premium",
  url: `${business.url}/transporte-terrestre-executivo-londrina`,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba", "Guarulhos"],
  image: `${business.url}/og-transporte-executivo.jpg`,
})

const faqItems = [
  {
    question: "O que diferencia o transporte executivo do transporte convencional?",
    answer:
      "O transporte executivo é contratado com agendamento antecipado, utiliza veículo premium padronizado " +
      "e inclui motorista profissional com apresentação formal. " +
      "Ao contrário do transporte por demanda imediata, o executivo garante pontualidade, " +
      "cobertura de rotas interestaduais e emissão de nota fiscal para pessoa jurídica.",
  },
  {
    question: "Quais rotas de longa distância a empresa atende a partir de Londrina?",
    answer:
      "As rotas principais são: Londrina → Aeroporto de Guarulhos (GRU, 470 km), " +
      "Londrina → São Paulo (450 km pela Castelo Branco), " +
      "e Londrina → Curitiba (398 km pela BR-376). " +
      "Para destinos não listados, entre em contato para orçamento personalizado.",
  },
  {
    question: "A empresa atende contratos corporativos para mobilidade recorrente?",
    answer:
      "Sim. Para empresas com demanda regular, oferecemos contratos de mobilidade corporativa " +
      "com faturamento mensal, relatório de viagens e nota fiscal centralizada. " +
      "A proposta é elaborada conforme o volume e as rotas da empresa.",
  },
  {
    question: "É possível contratar transporte executivo para eventos em Londrina?",
    answer:
      "Sim. Atendemos logística de transporte para eventos corporativos, conferências e feiras em Londrina. " +
      "O serviço inclui transfer do aeroporto ou hotel para o local do evento " +
      "e retorno ao final, com motorista disponível durante toda a programação se necessário.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte Executivo", url: "/transporte-terrestre-executivo-londrina" },
])

const waHub = whatsappUrl(
  "Olá! Gostaria de saber mais sobre os serviços de transporte executivo da Londrina Executivo."
)

const servicosHub = [
  { icon: "🛬", titulo: "Airport Transfer (LDB)", desc: "Chegadas e partidas no Aeroporto de Londrina com motorista uniformizado e placa personalizada.", href: "/airport-transfer-londrina" },
  { icon: "✈️", titulo: "Londrina → Guarulhos (GRU)", desc: "Transfer executivo de 470 km para o Aeroporto Internacional de Guarulhos. T1, T2 e T3 atendidos.", href: "/londrina-guarulhos" },
  { icon: "🏙️", titulo: "Londrina → São Paulo", desc: "Transfer executivo de 450 km para toda a capital e Grande SP. Paulista, Faria Lima, hospitais.", href: "/londrina-sao-paulo" },
  { icon: "💼", titulo: "Motorista Executivo", desc: "Motorista profissional com veículo premium por horas ou diária. Agenda corporativa completa.", href: "/motorista-executivo-londrina" },
  { icon: "🤝", titulo: "Transfer Corporativo", desc: "Transfer premium para empresas com nota fiscal e faturamento mensal disponíveis.", href: "/transfer-corporativo-londrina" },
  { icon: "📬", titulo: "Solicitar orçamento", desc: "Entre em contato para rotas personalizadas, contratos corporativos ou demandas específicas.", href: "/contato" },
]

export default function TransporteExecutivoLondrinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <main>
        <nav aria-label="Navegação estrutural" style={{ background: "#141414", padding: "0.75rem 1.5rem", fontSize: "0.8rem", borderBottom: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem", color: "#2A2A2A" }}>›</span>
            <span style={{ color: "#C9A84C" }}>Transporte Executivo</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          {/* Hero image */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image
              src="/fotos/hero-transporte-executivo.webp"
              alt="Transporte terrestre executivo em Londrina — veículo premium com motorista"
              priority
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🚗 Transporte Executivo · Londrina · Paraná · Rotas Interestaduais</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Serviço de Transporte Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Empresa de mobilidade executiva em Londrina. Atendemos empresas e executivos
                com transfer aeroporto, motorista executivo, rotas interestaduais e contratos corporativos.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waHub} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Falar com especialista
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Veículo premium", "✓ Nota fiscal PJ", "✓ Rotas interestaduais", "✓ 24 horas"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transporte Executivo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Transfer · Motorista executivo · Rotas interestaduais · Corporativo</p>
          </div>
          <a href={waHub} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Falar agora
          </a>
        </div>

        <section aria-labelledby="servicos-hub" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="servicos-hub" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>Serviços de transporte executivo disponíveis</h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>Cada serviço tem motorista dedicado e veículo adequado ao tipo de demanda</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {servicosHub.map(s => (
                <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "2px solid rgba(201,168,76,.3)", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{s.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>{s.desc}</p>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 600 }}>Ver detalhes →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-hub" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-hub" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Perguntas frequentes</h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((f, i) => (
                <details key={i} style={{ background: "#141414", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.question}<span aria-hidden="true" style={{ color: "#C9A84C", fontSize: "1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#A8A8A8", lineHeight: 1.7, fontSize: "0.9rem" }}>{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Mobilidade executiva para sua empresa ou viagem</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Veículo premium · Motorista profissional · Nota fiscal · Rotas locais e interestaduais a partir de Londrina.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waHub} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Falar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia,serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Transporte Executivo · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </p>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>← Home</Link>
              <Link href="/contato" style={{ fontSize: "0.8rem", color: "#C9A84C", textDecoration: "none" }}>Orçamento →</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
