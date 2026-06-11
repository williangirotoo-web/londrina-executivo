/**
 * app/frota-executiva-londrina/page.tsx — Londrina Executivo
 * KEYWORD: frota executiva londrina
 * CANONICAL: https://londrinaexecutivo.com.br/frota-executiva-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.frotaExecutiva,
  alternates: { canonical: `${business.url}/frota-executiva-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Frota Executiva Londrina — Corolla Cross, Jeep Compass e VW T-Cross",
  description:
    "Frota de veículos executivos premium em Londrina. " +
    "Corolla Cross, Jeep Compass, VW T-Cross e vans para grupos. " +
    "Transfer, motorista executivo e transporte corporativo.",
  serviceType: "Frota de Veículos Executivos",
  url: `${business.url}/frota-executiva-londrina`,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Guarulhos"],
  image: `${business.url}/og-frota-executiva.jpg`,
})

const faqItems = [
  {
    question: "Quais veículos compõem a frota executiva da Londrina Executivo?",
    answer:
      "Nossa frota é composta por sedan e SUVs executivos de alto padrão: " +
      "Toyota Corolla Cross, Jeep Compass e Volkswagen T-Cross para até 4 passageiros, " +
      "além de vans executivas para grupos de até 7 passageiros. " +
      "Todos os veículos são revisados periodicamente, climatizados e mantidos em perfeito estado.",
  },
  {
    question: "Posso solicitar um veículo específico para o meu transfer?",
    answer:
      "Sim. Ao agendar pelo WhatsApp, informe a preferência de veículo e verificamos a disponibilidade. " +
      "Para viagens interestaduais longas como Londrina → Guarulhos (470 km), " +
      "recomendamos o Jeep Compass ou Corolla Cross pela maior capacidade de bagagem e conforto em rodovias.",
  },
  {
    question: "Os veículos têm espaço para bagagem de viagem internacional?",
    answer:
      "Sim. Os veículos da frota têm porta-malas compatíveis com malas de despache para voos internacionais. " +
      "Se a viagem incluir múltiplas malas grandes, informe no momento do agendamento " +
      "para que possamos confirmar o veículo mais adequado.",
  },
  {
    question: "Têm van para transporte de grupos em Londrina?",
    answer:
      "Sim. Para grupos corporativos, equipes em eventos ou delegações, " +
      "disponibilizamos vans executivas com capacidade para até 7 passageiros. " +
      "Ideal para feiras, convenções e visitas de clientes que chegam em grupo.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Frota Executiva", url: "/frota-executiva-londrina" },
])

const waFrota = whatsappUrl(
  "Olá! Gostaria de conhecer os veículos disponíveis e solicitar um orçamento para transporte executivo em Londrina."
)

const veiculos = [
  {
    modelo: "Toyota Corolla Cross",
    categoria: "Sedan Executivo Premium",
    passageiros: "Até 4 passageiros",
    malas: "2–3 malas grandes",
    transmissao: "Automático",
    ar: "Climatizado dual zone",
    ideal: ["Transfer GRU", "Transfer São Paulo", "Motorista executivo", "Viagens interestaduais"],
    destaque: true,
    slug: "corolla-cross",
    src: "/fotos/corolla-cross-executivo.webp",
    alt: "Toyota Corolla Cross utilizado para transporte executivo em Londrina",
  },
  {
    modelo: "Jeep Compass",
    categoria: "SUV Executivo",
    passageiros: "Até 4 passageiros",
    malas: "3–4 malas grandes",
    transmissao: "Automático",
    ar: "Climatizado",
    ideal: ["Transfer corporativo", "Viagens longas", "Agenda executiva", "Alto conforto"],
    destaque: false,
    slug: "jeep-compass",
    src: "/fotos/jeep-compass-executivo.webp",
    alt: "Jeep Compass para transfer executivo e viagens corporativas",
  },
  {
    modelo: "Volkswagen T-Cross",
    categoria: "SUV Compacto Executivo",
    passageiros: "Até 4 passageiros",
    malas: "2 malas grandes",
    transmissao: "Automático",
    ar: "Climatizado",
    ideal: ["Airport transfer LDB", "Deslocamentos locais", "Agenda corporativa", "Visitas comerciais"],
    destaque: false,
    slug: "t-cross",
    src: "/fotos/t-cross-executivo.webp",
    alt: "Volkswagen T-Cross para transporte executivo em Londrina",
  },
  {
    modelo: "Vans Executivas",
    categoria: "Transporte para Grupos",
    passageiros: "Até 7 passageiros",
    malas: "Bagageiro amplo",
    transmissao: "Automático",
    ar: "Climatizado",
    ideal: ["Grupos corporativos", "Eventos e feiras", "Delegações", "Times comerciais"],
    destaque: false,
    slug: "van-executiva",
    src: "/fotos/van-executiva-7-lugares.webp",
    alt: "Van executiva para grupos e transporte corporativo",
  },
]

const rotasRecomendadas = [
  { veiculo: "Corolla Cross ou Compass", rota: "Londrina → Guarulhos (GRU)", href: "/londrina-guarulhos", motivo: "Porta-malas amplo para bagagem internacional" },
  { veiculo: "Corolla Cross ou Compass", rota: "Londrina → São Paulo", href: "/londrina-sao-paulo", motivo: "Conforto superior em 450 km de rodovia" },
  { veiculo: "T-Cross ou Corolla Cross", rota: "Airport Transfer LDB", href: "/airport-transfer-londrina", motivo: "Ágil no acesso ao aeroporto de Londrina" },
  { veiculo: "Van Executiva", rota: "Transfer para grupos e eventos", href: "/transfer-corporativo-londrina", motivo: "Até 7 passageiros em um único veículo" },
]

export default function FrotaExecutivaLondrinaPage() {
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
            <span style={{ color: "#C9A84C" }}>Frota Executiva</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "linear-gradient(135deg,#0A0A0A,#0d0d0d)", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🚗 Frota Executiva · Londrina · Veículos Premium
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Frota Executiva
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Corolla Cross, Jeep Compass, VW T-Cross e vans para grupos.
                Frota executiva revisada, climatizada e pronta para transfer,
                motorista executivo e transporte corporativo em Londrina.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waFrota} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar orçamento
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Revisados periodicamente", "✓ Climatizados", "✓ Motorista profissional", "✓ Nota fiscal PJ"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Frota Executiva · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Corolla Cross · Jeep Compass · VW T-Cross · Vans até 7 passageiros</p>
          </div>
          <a href={waFrota} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        {/* VEÍCULOS */}
        <section aria-labelledby="veiculos-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="veiculos-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
              Veículos disponíveis
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>
              Cada veículo é selecionado pelo padrão de conforto, capacidade de bagagem e desempenho em rodovias.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
              {veiculos.map(v => (
                <div key={v.modelo} style={{
                  background: "#1C1C1C", borderRadius: "12px", overflow: "hidden",
                  border: v.destaque ? "2px solid rgba(201,168,76,.5)" : "1px solid #2A2A2A",
                  display: "flex", flexDirection: "column", position: "relative",
                }}>
                  {v.destaque && (
                    <div style={{ position: "absolute", top: "12px", right: "12px", background: "#C9A84C", color: "#0A0A0A", fontSize: "0.65rem", fontWeight: 800, padding: "3px 10px", borderRadius: "999px", zIndex: 1 }}>
                      MAIS SOLICITADO
                    </div>
                  )}

                  {/* FOTO — estrutura pronta para imagem real */}
                  <div style={{
                    height: "200px", position: "relative", overflow: "hidden",
                    borderBottom: "1px solid #2A2A2A",
                  }}>
                      <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      loading="lazy"
                    />
                  </div>

                  {/* DADOS */}
                  <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.25rem" }}>{v.modelo}</h3>
                    <p style={{ fontSize: "0.775rem", color: "#C9A84C", fontWeight: 600, marginBottom: "1rem" }}>{v.categoria}</p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                      {[
                        { label: "Passageiros", valor: v.passageiros },
                        { label: "Bagagem", valor: v.malas },
                        { label: "Câmbio", valor: v.transmissao },
                        { label: "Ar", valor: v.ar },
                      ].map(spec => (
                        <div key={spec.label} style={{ background: "#141414", borderRadius: "6px", padding: "0.5rem 0.75rem" }}>
                          <p style={{ fontSize: "0.65rem", color: "#6B6B6B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.15rem" }}>{spec.label}</p>
                          <p style={{ fontSize: "0.8rem", color: "#E8E8E8", fontWeight: 600, margin: 0 }}>{spec.valor}</p>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginBottom: "1.25rem", flex: 1 }}>
                      <p style={{ fontSize: "0.7rem", color: "#6B6B6B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>Ideal para</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {v.ideal.map(tag => (
                          <span key={tag} style={{ background: "#2A2A2A", color: "#A8A8A8", fontSize: "0.75rem", padding: "3px 8px", borderRadius: "4px" }}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <a href={waFrota} target="_blank" rel="noopener noreferrer"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", background: v.destaque ? "#C9A84C" : "transparent", color: v.destaque ? "#0A0A0A" : "#C9A84C", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1rem", borderRadius: "6px", textDecoration: "none", border: v.destaque ? "none" : "1.5px solid rgba(201,168,76,.4)", marginTop: "auto" }}>
                      <WaIcon color={v.destaque ? "#0A0A0A" : "#C9A84C"} size={16} /> Solicitar este veículo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROTAS RECOMENDADAS */}
        <section aria-labelledby="rotas-frota-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rotas-frota-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
              Qual veículo para cada rota?
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>
              Selecionamos o veículo ideal conforme o destino, distância e número de passageiros.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "800px" }}>
              {rotasRecomendadas.map(r => (
                <Link key={r.rota} href={r.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#141414", borderRadius: "10px", padding: "1.25rem 1.5rem", border: "1px solid #2A2A2A", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.25rem" }}>{r.rota}</p>
                      <p style={{ fontSize: "0.8rem", color: "#C9A84C", fontWeight: 600, marginBottom: "0.2rem" }}>Veículo: {r.veiculo}</p>
                      <p style={{ fontSize: "0.775rem", color: "#6B6B6B", margin: 0 }}>{r.motivo}</p>
                    </div>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 600, flexShrink: 0 }}>Ver rota →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-frota-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-frota-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Perguntas frequentes sobre a frota
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((f, i) => (
                <details key={i} style={{ background: "#1C1C1C", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.question}
                    <span aria-hidden="true" style={{ color: "#C9A84C", fontSize: "1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#A8A8A8", lineHeight: 1.7, fontSize: "0.9rem" }}>{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Solicite um orçamento para sua frota
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Informe o destino, data e número de passageiros. Indicamos o veículo ideal e confirmamos em minutos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waFrota} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Solicitar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section style={{ background: "#0A0A0A", padding: "3.5rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Serviços disponíveis</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/londrina-guarulhos",              label: "Transfer → Guarulhos (GRU)" },
                { href: "/londrina-sao-paulo",              label: "Transfer → São Paulo" },
                { href: "/airport-transfer-londrina",       label: "Airport Transfer (LDB)" },
                { href: "/motorista-executivo-londrina",    label: "Motorista Executivo" },
                { href: "/transfer-corporativo-londrina",  label: "Transfer Corporativo" },
                { href: "/contato",                         label: "Solicitar orçamento" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "inline-block", background: "#141414", color: "#A8A8A8", fontSize: "0.8rem", fontWeight: 500, padding: "7px 14px", borderRadius: "6px", border: "1px solid #2A2A2A", textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia,serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Frota Executiva · {business.address.city}, {business.address.stateCode} ·{" "}
                <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
