/**
 * app/londrina-maringa/page.tsx — Londrina Executivo
 * KEYWORD: transfer londrina maringa
 * CANONICAL: https://londrinaexecutivo.com.br/londrina-maringa
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaMaringa,
  alternates: { canonical: `${business.url}/londrina-maringa` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Executivo Londrina Maringá — 120 km",
  description:
    "Serviço de transfer executivo de Londrina para Maringá em 120 km. " +
    "Veículo premium, motorista profissional e nota fiscal para empresas.",
  serviceType: "Transfer Executivo Interurbano",
  url: `${business.url}/londrina-maringa`,
  areaServed: ["Londrina", "Maringá", "Paraná"],
  image: `${business.url}/og-londrina-maringa.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo leva o transfer de Londrina a Maringá?",
    answer:
      "O percurso de Londrina a Maringá cobre aproximadamente 120 km pela PR-317 e BR-376. " +
      "O tempo médio é de 1 hora e 30 minutos em condições normais de tráfego. " +
      "Para compromissos com horário fixo, calculamos a saída com margem de segurança.",
  },
  {
    question: "Qual o veículo utilizado no transfer Londrina-Maringá?",
    answer:
      "Utilizamos veículos executivos premium — Toyota Corolla Cross, Jeep Compass ou VW T-Cross, " +
      "todos climatizados e revisados. Para grupos de até 7 pessoas, " +
      "contamos com vans executivas mediante agendamento.",
  },
  {
    question: "Atendem transferências para o Aeroporto Regional de Maringá?",
    answer:
      "Sim. O Aeroporto Regional de Maringá (Sílvio Name Jr. — IATA: MGF) " +
      "está localizado a cerca de 7 km do centro da cidade. " +
      "Realizamos transfer de Londrina diretamente ao aeroporto com monitoramento de voo.",
  },
  {
    question: "O serviço atende hospitais e clínicas em Maringá?",
    answer:
      "Sim. Maringá é referência médica no norte do Paraná, com hospitais como o Hospital Universitário Regional de Maringá (HUM) " +
      "e diversas clínicas especializadas. Atendemos pacientes e acompanhantes " +
      "que precisam de transporte confortável e pontual para consultas e procedimentos.",
  },
  {
    question: "É possível contrato mensal para viagens frequentes Londrina-Maringá?",
    answer:
      "Sim. Para empresas com executivos que viajam regularmente entre as duas cidades, " +
      "oferecemos contrato mensal com faturamento centralizado, " +
      "relatório de viagens e nota fiscal para CNPJ.",
  },
  {
    question: "O transfer atende estudantes em universidades de Maringá?",
    answer:
      "Sim. Maringá abriga a Universidade Estadual de Maringá (UEM), " +
      "o Centro Universitário de Maringá (UniCesumar) e outras instituições. " +
      "Atendemos professores visitantes, pesquisadores e profissionais " +
      "em deslocamento para eventos acadêmicos e corporativos.",
  },
  {
    question: "Qual o valor do transfer Londrina Maringá?",
    answer:
      "O valor é calculado com base na rota, número de passageiros e tipo de serviço. " +
      "Solicite um orçamento pelo WhatsApp com origem, destino e horário — " +
      "respondemos em minutos com disponibilidade e valor.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Londrina Maringá", url: "/londrina-maringa" },
])

const waMaringa = whatsappUrl(
  "Olá! Gostaria de solicitar um transfer executivo de Londrina para Maringá."
)

const destinos = [
  { icon: "🏥", nome: "Hospitais e Saúde", desc: "HUM, Hospital Santa Casa, UningáHealth e clínicas especializadas da capital da saúde do Paraná." },
  { icon: "🎓", nome: "Universidades", desc: "UEM (Universidade Estadual de Maringá), UniCesumar, Unicesumar e demais instituições de ensino superior." },
  { icon: "✈️", nome: "Aeroporto Regional", desc: "Aeroporto Sílvio Name Jr. (MGF) — voos para São Paulo, Curitiba e destinos regionais." },
  { icon: "🏢", nome: "Polo Empresarial", desc: "Zona Industrial, Distrito Industrial e centros comerciais do maior polo empresarial do norte do Paraná." },
  { icon: "🌾", nome: "Agronegócio", desc: "Cooperativas, tradings e empresas do agronegócio com sede em Maringá e região." },
  { icon: "🏨", nome: "Hotéis e Eventos", desc: "Hotéis executivos, centros de convenções e espaços para eventos corporativos." },
]

export default function LondrinaMaringaPage() {
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
            <span style={{ color: "#C9A84C" }}>Transfer Londrina Maringá</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image
              src="/fotos/hero-transporte-executivo.webp"
              alt="Transfer executivo Londrina Maringá — veículo premium com motorista"
              fill priority
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🚗 Transfer Executivo · Londrina → Maringá · 120 km</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina → Maringá</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                120 km com veículo executivo premium, motorista profissional e nota fiscal.
                Hospitais, universidades, aeroporto regional e polo empresarial atendidos.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waMaringa} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 120 km · ≈ 1h30", "✓ Veículo premium", "✓ Nota fiscal PJ", "✓ Monitoramento"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Londrina → Maringá · 120 km</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>≈ 1h30 · Veículo premium · Nota fiscal</p>
          </div>
          <a href={waMaringa} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        {/* ROTA E DISTÂNCIA */}
        <section aria-labelledby="rota-mg-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rota-mg-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Distância, rota e tempo médio
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O transfer de Londrina a Maringá percorre <strong style={{ color: "#F0F0F0" }}>120 quilômetros</strong> pela
                  PR-317 — uma das rodovias mais movimentadas do Paraná, que conecta as duas maiores cidades do norte do estado.
                  O tempo médio é de <strong style={{ color: "#F0F0F0" }}>1 hora e 30 minutos</strong> em condições normais,
                  podendo variar em horários de pico nas saídas das cidades.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para viagens com hora marcada — consulta médica, reunião corporativa ou voo no aeroporto regional de Maringá —
                  calculamos o horário de saída de Londrina com margem de segurança para garantir a chegada dentro do prazo.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  A PR-317 é uma rodovia pedagiada com boa manutenção e sinalização. O valor dos pedágios está
                  incluso no orçamento informado no agendamento — sem cobranças adicionais no final da viagem.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Maringá é a segunda maior cidade do Paraná e um dos principais polos médicos, educacionais e
                  empresariais do estado. A demanda por transfer executivo entre as duas cidades é constante —
                  especialmente para o setor de saúde, cooperativas agroindustriais e universidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DESTINOS */}
        <section aria-labelledby="destinos-mg-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="destinos-mg-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
              Principais destinos atendidos em Maringá
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>Os segmentos que mais utilizam o transfer executivo Londrina-Maringá.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {destinos.map(d => (
                <div key={d.nome} style={{ background: "#141414", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{d.nome}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATIVO */}
        <section aria-labelledby="corp-mg-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="corp-mg-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Viagens corporativas Londrina ↔ Maringá
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                As duas cidades concentram juntas a maior parte do PIB do Paraná fora de Curitiba.
                Empresas com operações em ambas as cidades — especialmente no agronegócio, saúde e varejo —
                utilizam o transfer executivo como alternativa mais prática e econômica ao carro próprio ou ao fretamento.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para executivos que fazem o trajeto Londrina-Maringá com regularidade — semanalmente ou quinzenalmente —
                o contrato mensal com faturamento centralizado elimina a gestão de reembolso por corrida
                e oferece nota fiscal consolidada para o departamento financeiro.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                O transfer também é utilizado para receber visitantes que chegam ao Aeroporto de Maringá
                e precisam ser transferidos a Londrina — especialmente executivos de companhias aéreas regionais
                que operam no MGF e têm compromissos na segunda maior cidade do estado.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-mg-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-mg-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Perguntas frequentes
            </h2>
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

        {/* CTA */}
        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Agende seu transfer Londrina → Maringá
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              120 km com veículo premium e motorista profissional. Nota fiscal disponível.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waMaringa} target="_blank" rel="noopener noreferrer"
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
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Outras rotas e serviços</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/londrina-guarulhos",            label: "Transfer → Guarulhos (GRU)" },
                { href: "/londrina-sao-paulo",            label: "Transfer → São Paulo" },
                { href: "/londrina-foz-do-iguacu",       label: "Transfer → Foz do Iguaçu" },
                { href: "/airport-transfer-londrina",    label: "Airport Transfer (LDB)" },
                { href: "/transfer-corporativo-londrina",label: "Transfer Corporativo" },
                { href: "/contato",                      label: "Solicitar orçamento" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "inline-block", background: "#141414", color: "#A8A8A8", fontSize: "0.8rem", fontWeight: 500, padding: "7px 14px", borderRadius: "6px", border: "1px solid #2A2A2A", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia,serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Transfer Londrina Maringá · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
