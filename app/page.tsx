/**
 * app/page.tsx — Home · Londrina Executivo
 *
 * Conteúdo 100% exclusivo — zero sobreposição com londrinataxi.com.br
 * Keyword principal: mobilidade executiva londrina
 * Sem a palavra "táxi" como keyword principal
 * Canonical: https://londrinaexecutivo.com.br/
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = pageMetadata.home

const serviceSchema = buildServiceSchema({
  name: "Londrina Executivo — Mobilidade Executiva Premium",
  description: business.description,
  serviceType: "Empresa de Mobilidade Executiva",
  url: business.url,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba", "Guarulhos"],
  image: `${business.url}/og-home.jpg`,
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Londrina Executivo", url: "/" },
])

const waHome = whatsappUrl(
  "Olá! Gostaria de conhecer os serviços da Londrina Executivo."
)

const servicos = [
  {
    icon: "✈️",
    titulo: "Airport Transfer",
    desc: "Transfer executivo no Aeroporto Governador José Richa (LDB). Motorista uniformizado, monitoramento de voo e recepção personalizada.",
    href: "/airport-transfer-londrina",
  },
  {
    icon: "🏙️",
    titulo: "Londrina → São Paulo",
    desc: "Transfer executivo de 450 km com veículo premium. Paulista, Faria Lima, Congonhas, hospitais e toda a Grande SP.",
    href: "/londrina-sao-paulo",
  },
  {
    icon: "🌐",
    titulo: "Londrina → Guarulhos",
    desc: "Transfer direto ao Aeroporto Internacional de Guarulhos (GRU). 470 km com pontualidade garantida para voos nacionais e internacionais.",
    href: "/londrina-guarulhos",
  },
  {
    icon: "💼",
    titulo: "Motorista Executivo",
    desc: "Motorista profissional à disposição por horas ou diária completa. Agenda corporativa, reuniões e deslocamentos com veículo premium.",
    href: "/motorista-executivo-londrina",
  },
  {
    icon: "🤝",
    titulo: "Transfer Corporativo",
    desc: "Serviço de transfer premium para empresas. Nota fiscal, faturamento mensal e atendimento dedicado para equipes e visitantes.",
    href: "/transfer-corporativo-londrina",
  },
  {
    icon: "🚗",
    titulo: "Transporte Executivo",
    desc: "Mobilidade executiva completa para empresas e profissionais. Rotas locais e interestaduais com padrão premium.",
    href: "/transporte-terrestre-executivo-londrina",
  },
]

const diferenciais = [
  { icon: "🎯", titulo: "Pontualidade garantida", desc: "Chegamos antes. Seu compromisso não espera." },
  { icon: "🎩", titulo: "Motorista profissional", desc: "Apresentação formal, postura discreta e condução segura." },
  { icon: "🚗", titulo: "Veículo premium", desc: "Frota executiva climatizada, limpa e em perfeito estado." },
  { icon: "🗣️", titulo: "Bilíngue EN/PT", desc: "Atendimento em inglês para executivos e visitantes internacionais." },
  { icon: "📋", titulo: "Nota fiscal", desc: "Emissão de NF para pessoas físicas e jurídicas de qualquer porte." },
  { icon: "📱", titulo: "Reserva simplificada", desc: "Agendamento pelo WhatsApp em minutos. Sem app, sem cadastro." },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* ════════ HERO ════════ */}
        <section aria-label="Londrina Executivo — Mobilidade Executiva Premium"
          style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #141414 100%)", minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>

          {/* Decorative gold lines */}
          <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />

          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "6rem 1.5rem", width: "100%", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "680px" }}>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)",
                borderRadius: "999px", padding: "6px 18px", marginBottom: "2rem",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                <span style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Mobilidade Executiva · Londrina · Paraná
                </span>
              </div>

              <h1 style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 900,
                color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem",
              }}>
                Mobilidade Executiva
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>

              <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "560px" }}>
                Serviço premium de transfer, motorista executivo e transporte corporativo.
                Atendemos empresas, executivos e visitantes internacionais com
                veículo de primeira linha, pontualidade e nota fiscal.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
                <a href={waHome} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WhatsAppIcon color="#0A0A0A" />
                  Solicitar orçamento
                </a>
                <Link href="/contato"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,0.4)", textDecoration: "none" }}>
                  Ver todos os serviços →
                </Link>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                {["✓ Veículo premium", "✓ Nota fiscal PJ", "✓ Motorista bilíngue", "✓ 24h disponível"].map((item) => (
                  <span key={item} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ SERVIÇOS ════════ */}
        <section aria-labelledby="servicos-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
              <h2 id="servicos-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                Serviços de mobilidade executiva
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
                Cada serviço é desenvolvido para atender o padrão exigido por empresas e profissionais.
              </p>
            </div>
            <style>{`
              .svc-card { border-color: #2A2A2A !important; transition: border-color 0.2s; }
              .svc-card:hover { border-color: rgba(201,168,76,0.4) !important; }
            `}</style>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {servicos.map((s) => (
                <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                  <div className="svc-card" style={{
                    background: "#1C1C1C", borderRadius: "8px", padding: "1.75rem",
                    border: "1px solid #2A2A2A", height: "100%",
                  }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{s.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{s.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 600 }}>Saiba mais →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ DIFERENCIAIS ════════ */}
        <section aria-labelledby="diferenciais-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
              <h2 id="diferenciais-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                O padrão executivo em cada detalhe
              </h2>
              <p style={{ color: "#6B6B6B", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
                Por que empresas e profissionais escolhem a Londrina Executivo.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map((d) => (
                <div key={d.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "8px",
                    background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem", flexShrink: 0,
                  }}>{d.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{d.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ CTA ════════ */}
        <section aria-label="Solicitar serviço executivo" style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Pronto para elevar o padrão da sua mobilidade?
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Fale com nossa equipe pelo WhatsApp e receba um orçamento personalizado para a sua necessidade.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waHome} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WhatsAppIcon color="#C9A84C" />
                Falar pelo WhatsApp
              </a>
              <Link href="/contato"
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                Enviar mensagem
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ FOOTER ════════ */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "3rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
              <div>
                <p style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "Georgia, serif" }}>
                  Londrina Executivo
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  Mobilidade executiva premium em Londrina. Transfer, motorista executivo e transporte corporativo.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Serviços</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { href: "/airport-transfer-londrina",            label: "Airport Transfer" },
                    { href: "/londrina-guarulhos",                   label: "Londrina → Guarulhos" },
                    { href: "/londrina-sao-paulo",                   label: "Londrina → São Paulo" },
                    { href: "/motorista-executivo-londrina",         label: "Motorista Executivo" },
                    { href: "/transfer-corporativo-londrina",        label: "Transfer Corporativo" },
                    { href: "/transporte-terrestre-executivo-londrina", label: "Transporte Executivo" },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Contato</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <a href={`tel:${business.phone}`} style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>{business.phoneDisplay}</a>
                  <a href={waHome} target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", fontSize: "0.875rem", textDecoration: "none" }}>WhatsApp</a>
                  <Link href="/contato" style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>Enviar mensagem</Link>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1C1C1C", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>
                © {new Date().getFullYear()} Londrina Executivo · Londrina, PR
              </p>
              <p style={{ fontSize: "0.8rem", color: "#2A2A2A" }}>londrinaexecutivo.com.br</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function WhatsAppIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
