/**
 * app/contato/page.tsx — Londrina Executivo
 *
 * KEYWORD: contratar transporte executivo londrina
 * INTENT: transacional — empresa ou executivo querendo fechar negócio
 * CANONICAL: https://londrinaexecutivo.com.br/contato
 * CONTEÚDO: 100% exclusivo
 */

import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.contato,
  alternates: { canonical: `${business.url}/contato` },
}

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contato", url: "/contato" },
])

const waContato = whatsappUrl(
  "Olá! Gostaria de solicitar um orçamento para transporte executivo em Londrina."
)

const servicos = [
  { href: "/londrina-guarulhos",    label: "Transfer → Guarulhos (GRU)" },
  { href: "/londrina-sao-paulo",    label: "Transfer → São Paulo" },
  { href: "/airport-transfer-londrina", label: "Airport Transfer (LDB)" },
  { href: "/motorista-executivo-londrina", label: "Motorista Executivo" },
  { href: "/transfer-corporativo-londrina", label: "Transfer Corporativo" },
  { href: "/transporte-terrestre-executivo-londrina", label: "Transporte Executivo" },
]

const canaisContato = [
  {
    icon: "💬",
    titulo: "WhatsApp",
    desc: "Resposta em minutos. Melhor canal para agendamentos e orçamentos rápidos.",
    acao: "Abrir conversa",
    href: waContato,
    destaque: true,
  },
  {
    icon: "📞",
    titulo: "Telefone",
    desc: "Fale diretamente com nossa equipe para solicitações imediatas.",
    acao: business.phoneDisplay,
    href: `tel:${business.phone}`,
    destaque: false,
  },
  {
    icon: "✉️",
    titulo: "E-mail",
    desc: "Para contratos corporativos, propostas formais e faturamento PJ.",
    acao: business.email,
    href: `mailto:${business.email}`,
    destaque: false,
  },
]

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#141414", padding: "0.75rem 1.5rem", fontSize: "0.8rem", borderBottom: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem", color: "#2A2A2A" }}>›</span>
            <span style={{ color: "#C9A84C" }}>Contato</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0d0d0d 100%)", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
              Entre em Contato
              <span style={{ display: "block", color: "#C9A84C", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 600, marginTop: "0.5rem" }}>
                Londrina Executivo
              </span>
            </h1>
            <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#A8A8A8", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 3rem" }}>
              Solicite orçamento para transfer executivo, motorista por horas ou transporte corporativo.
              Nossa equipe responde em minutos pelo WhatsApp.
            </p>
            <a href={waContato} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1.1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
              <WhatsAppIcon color="#0A0A0A" />
              Falar pelo WhatsApp agora
            </a>
          </div>
        </section>

        {/* CANAIS */}
        <section aria-labelledby="canais-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="canais-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Canais de atendimento
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
              {canaisContato.map(c => (
                <a key={c.titulo} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    background: c.destaque ? "rgba(201,168,76,0.08)" : "#1C1C1C",
                    borderRadius: "10px", padding: "1.75rem",
                    border: c.destaque ? "1px solid rgba(201,168,76,0.3)" : "1px solid #2A2A2A",
                    height: "100%",
                  }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{c.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{c.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{c.desc}</p>
                    <span style={{ color: "#C9A84C", fontSize: "0.875rem", fontWeight: 700 }}>{c.acao} →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS DISPONÍVEIS */}
        <section aria-labelledby="servicos-contato-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="servicos-contato-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
              Para qual serviço gostaria de solicitar orçamento?
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem" }}>Selecione um serviço para ver detalhes ou entre em contato pelo WhatsApp informando sua necessidade.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
              {servicos.map(s => (
                <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#141414", borderRadius: "8px", padding: "1.25rem 1.5rem", border: "1px solid #2A2A2A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#A8A8A8", fontSize: "0.9rem", fontWeight: 500 }}>{s.label}</span>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem" }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* INFO EMPRESA */}
        <section style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
              <div>
                <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
                <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.25rem" }}>Londrina Executivo</h2>
                <p style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Empresa de mobilidade executiva baseada em Londrina, Paraná.
                  Atendemos empresas e executivos com serviços de transfer,
                  motorista executivo e transporte corporativo premium.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", width: "60px", flexShrink: 0 }}>Cidade</span>
                    <span style={{ color: "#A8A8A8", fontSize: "0.875rem" }}>{business.address.city}, {business.address.state}</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", width: "60px", flexShrink: 0 }}>Fone</span>
                    <a href={`tel:${business.phone}`} style={{ color: "#A8A8A8", fontSize: "0.875rem", textDecoration: "none" }}>{business.phoneDisplay}</a>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", width: "60px", flexShrink: 0 }}>E-mail</span>
                    <a href={`mailto:${business.email}`} style={{ color: "#A8A8A8", fontSize: "0.875rem", textDecoration: "none" }}>{business.email}</a>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", width: "60px", flexShrink: 0 }}>Horário</span>
                    <span style={{ color: "#A8A8A8", fontSize: "0.875rem" }}>24 horas, 7 dias por semana</span>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#F0F0F0", marginBottom: "1.25rem" }}>Cobertura de atendimento</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {["Londrina e região metropolitana", "Maringá · Londrina · Norte do Paraná", "Londrina → São Paulo (450 km)", "Londrina → Guarulhos / GRU (470 km)", "Londrina → Curitiba (398 km)", "Rotas personalizadas sob consulta"].map(item => (
                    <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "#C9A84C", fontSize: "0.8rem", marginTop: "2px", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Pronto para agendar?
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Envie sua solicitação pelo WhatsApp. Informações de origem, destino e data são suficientes para recebermos sua proposta.
            </p>
            <a href={waContato} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
              <WhatsAppIcon color="#C9A84C" />
              Iniciar conversa no WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia, serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
              </p>
            </div>
            <Link href="/" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>← Voltar para Home</Link>
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
