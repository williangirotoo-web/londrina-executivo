/**
 * app/transfer-congonhas-londrina/page.tsx — Londrina Executivo
 * KEYWORD: transfer londrina congonhas
 * CANONICAL: https://londrinaexecutivo.com.br/transfer-congonhas-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaCongonhas,
  alternates: { canonical: `${business.url}/transfer-congonhas-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Executivo Londrina Congonhas — CGH",
  description:
    "Transfer executivo de Londrina para o Aeroporto de Congonhas (CGH). " +
    "Monitoramento de voo, embarque executivo e atendimento na ponte aérea.",
  serviceType: "Transfer Executivo Aeroporto",
  url: `${business.url}/transfer-congonhas-londrina`,
  areaServed: ["Londrina", "São Paulo", "Congonhas"],
  image: `${business.url}/og-transfer-congonhas.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo leva o transfer de Londrina até o Aeroporto de Congonhas?",
    answer:
      "O percurso de Londrina ao Aeroporto de Congonhas (CGH) cobre aproximadamente 440 km, " +
      "com tempo médio de 5 horas pela Rodovia Castelo Branco e acesso pela Av. Washington Luís. " +
      "Congonhas está localizado na Zona Sul de São Paulo, a cerca de 8 km do centro da cidade. " +
      "Para voos domésticos com check-in, recomendamos sair de Londrina com 7 horas de antecedência.",
  },
  {
    question: "Qual a diferença entre embarcar em Congonhas e em Guarulhos?",
    answer:
      "O Aeroporto de Congonhas (CGH) opera exclusivamente voos domésticos, com foco na ponte aérea " +
      "São Paulo–Rio de Janeiro e rotas para outras capitais. Está localizado dentro da cidade de São Paulo " +
      "— mais próximo do centro, Paulista e Faria Lima. " +
      "O Aeroporto de Guarulhos (GRU) opera voos domésticos e internacionais e está 50 km mais distante do centro. " +
      "Para quem voa domesticamente a partir de São Paulo, Congonhas costuma ser mais conveniente.",
  },
  {
    question: "O transfer atende a Ponte Aérea São Paulo-Rio de Janeiro?",
    answer:
      "Sim. A Ponte Aérea SP-RJ opera exclusivamente por Congonhas com voos a cada 30 minutos nos horários de pico. " +
      "Para executivos de Londrina que viajam regularmente ao Rio de Janeiro via ponte aérea, " +
      "o transfer até Congonhas é a opção mais prática — chegada direta ao terminal doméstico " +
      "sem necessidade de conexão por Guarulhos.",
  },
  {
    question: "Como funciona o monitoramento de voo para o Congonhas?",
    answer:
      "Ao agendar o transfer, informamos o número do voo. Nossa equipe acompanha o status em tempo real. " +
      "Em caso de atraso, antecipamos ou postergamos a saída de Londrina automaticamente. " +
      "Para chegadas em Congonhas, o motorista aguarda no saguão de desembarque do terminal " +
      "com placa personalizada.",
  },
  {
    question: "Quais são os horários de pico no Aeroporto de Congonhas?",
    answer:
      "Congonhas tem dois períodos de maior movimento: entre 6h e 9h (embarques matinais para o Rio e capitais) " +
      "e entre 17h e 21h (retornos de viagem de negócios). " +
      "Para embarques nesse intervalo, recomendamos adicionar 30 a 45 minutos à antecedência padrão " +
      "para absorver eventuais congestionamentos no acesso pelo aeroporto.",
  },
  {
    question: "Vale mais a pena ir a Congonhas ou a Guarulhos saindo de Londrina?",
    answer:
      "Depende do seu destino final. Para voos domésticos ao Rio de Janeiro, Brasília, Salvador e Florianópolis, " +
      "Congonhas costuma ter mais frequências e é mais rápido de acessar dentro de SP. " +
      "Para voos internacionais ou conexões para destinos sem operação em CGH, Guarulhos (GRU) é a escolha. " +
      "Consulte a disponibilidade de voos antes de decidir — nossa equipe orienta qual aeroporto " +
      "é mais eficiente para o seu roteiro.",
  },
  {
    question: "O transfer Londrina-Congonhas emite nota fiscal?",
    answer:
      "Sim. Emitimos nota fiscal para pessoa física e jurídica. " +
      "Para empresas com executivos que viajam frequentemente pela ponte aérea ou por Congonhas, " +
      "o contrato mensal com faturamento centralizado e relatório de viagens está disponível. " +
      "A nota fiscal é emitida até dois dias úteis após a viagem.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Londrina Congonhas", url: "/transfer-congonhas-londrina" },
])

const waCongonhas = whatsappUrl(
  "Olá! Gostaria de solicitar um transfer executivo de Londrina para o Aeroporto de Congonhas (CGH)."
)

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function TransferCongonhasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />
      <main>

        {/* BREADCRUMB */}
        <nav aria-label="Navegação estrutural" style={{ background: "#141414", padding: "0.75rem 1.5rem", fontSize: "0.8rem", borderBottom: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem", color: "#2A2A2A" }}>›</span>
            <span style={{ color: "#C9A84C" }}>Transfer Londrina Congonhas</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image src="/fotos/airport-transfer-executivo.webp"
              alt="Transfer executivo Londrina para o Aeroporto de Congonhas CGH São Paulo"
              fill priority sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Transfer Executivo · Londrina → Congonhas (CGH) · 440 km
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina → Congonhas (CGH)</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Transfer direto de Londrina ao Aeroporto de Congonhas com monitoramento de voo,
                embarque executivo e atendimento na ponte aérea São Paulo–Rio de Janeiro.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waCongonhas} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 440 km · ≈ 5h", "✓ Monitoramento de voo", "✓ Ponte aérea SP-RJ", "✓ Nota fiscal PJ"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Londrina → Congonhas (CGH)</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>440 km · ≈ 5h · Monitoramento de voo · Ponte aérea</p>
          </div>
          <a href={waCongonhas} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        {/* SOBRE CONGONHAS */}
        <section aria-labelledby="cgh-sobre-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="cgh-sobre-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              O Aeroporto de Congonhas e a Ponte Aérea
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O Aeroporto de Congonhas (IATA: CGH) está localizado na Zona Sul de São Paulo,
                  a apenas 8 km da Avenida Paulista. Operado pela Infraero e concessionado à Vinci Airports,
                  é o principal aeroporto doméstico de São Paulo — especialmente para a Ponte Aérea
                  São Paulo–Rio de Janeiro, a rota doméstica mais movimentada do Brasil.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Por estar dentro da cidade e próximo dos principais centros comerciais,
                  Congonhas é o aeroporto preferido de executivos que precisam de voos rápidos
                  para o Rio de Janeiro, Brasília, Belo Horizonte e Florianópolis —
                  sem precisar deslocar até Guarulhos, 50 km mais distante do centro.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Para executivos de Londrina que utilizam Congonhas regularmente —
                  especialmente para a Ponte Aérea com voos para o Rio —
                  o transfer executivo direto elimina a necessidade de fazer conexão por Guarulhos
                  ou pegar transporte por conta própria dentro de São Paulo.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O acesso a Congonhas é pela Av. Washington Luís, com entrada pela Av. dos Bandeirantes.
                  Nos horários de pico — entre 7h e 9h e entre 17h e 20h — o entorno do aeroporto
                  tem trânsito intenso. Nosso motorista considera esse fator no cálculo do horário de saída.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EMBARQUE EXECUTIVO */}
        <section aria-labelledby="embarque-cgh-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="embarque-cgh-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Embarque executivo, monitoramento e horários de pico
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Como funciona o atendimento no Aeroporto de Congonhas para partidas e chegadas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { icon: "🛫", titulo: "Partidas de Londrina", desc: "Para voos domésticos em Congonhas, recomendamos chegar ao aeroporto com 1h30 de antecedência. Saída de Londrina calculada para chegar com folga, considerando o trânsito no acesso ao CGH." },
                { icon: "📱", titulo: "Monitoramento em tempo real", desc: "Acompanhamos o status do seu voo desde o agendamento. Se houver atraso, antecipamos ou postergamos a saída de Londrina automaticamente. Nenhuma ligação necessária." },
                { icon: "🛬", titulo: "Chegadas em Congonhas", desc: "Para desembarques no CGH, o motorista aguarda no saguão de chegadas com placa personalizada. O tempo de espera por eventuais atrasos está incluso no serviço." },
                { icon: "⏰", titulo: "Horários de pico no CGH", desc: "Pico matinal: 6h-9h. Pico vespertino: 17h-20h. Para embarques nesses horários, adicionamos 30-45 min extras ao trajeto para garantir chegada sem estresse." },
                { icon: "🔄", titulo: "Comparação GRU vs CGH", desc: "Para voos ao Rio, Brasília e capitais do Sul e Nordeste: Congonhas. Para voos internacionais ou conexões de longo curso: Guarulhos. Ambos os aeroportos são atendidos pela Londrina Executivo." },
                { icon: "💼", titulo: "Para executivos frequentes", desc: "Contrato mensal disponível para executivos que usam Congonhas regularmente. Faturamento centralizado e nota fiscal por CNPJ. Reserva via WhatsApp em minutos." },
              ].map(item => (
                <div key={item.titulo} style={{ background: "#141414", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{item.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-cgh-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-cgh-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Perguntas frequentes
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((f, i) => (
                <details key={i} style={{ background: "#1C1C1C", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
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
              Agende seu transfer para Congonhas
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              440 km com veículo premium e monitoramento de voo. Disponível todos os dias.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCongonhas} target="_blank" rel="noopener noreferrer"
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
                { href: "/londrina-guarulhos",                        label: "Transfer → Guarulhos (GRU)" },
                { href: "/londrina-sao-paulo",                        label: "Transfer → São Paulo" },
                { href: "/londrina-curitiba",                         label: "Transfer → Curitiba" },
                { href: "/airport-transfer-londrina",                 label: "Airport Transfer (LDB)" },
                { href: "/transfer-corporativo-londrina",             label: "Transfer Corporativo" },
                { href: "/transporte-executivo-24-horas-londrina",    label: "Atendimento 24 horas" },
                { href: "/contato",                                   label: "Solicitar orçamento" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "inline-block", background: "#141414", color: "#A8A8A8", fontSize: "0.8rem", fontWeight: 500, padding: "7px 14px", borderRadius: "6px", border: "1px solid #2A2A2A", textDecoration: "none" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia,serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Transfer Londrina Congonhas · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
