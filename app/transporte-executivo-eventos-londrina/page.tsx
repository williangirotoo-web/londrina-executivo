/**
 * app/transporte-executivo-eventos-londrina/page.tsx
 * KEYWORD: transporte executivo eventos londrina
 */
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaEventos,
  alternates: { canonical: `${business.url}/transporte-executivo-eventos-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transporte Executivo para Eventos em Londrina",
  description: "Transporte executivo para eventos corporativos, feiras, congressos, formaturas e grupos VIP em Londrina. Vans executivas e sedans premium.",
  serviceType: "Transporte para Eventos",
  url: `${business.url}/transporte-executivo-eventos-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-eventos-londrina.jpg`,
})

const faqItems = [
  {
    question: "Atendem o transporte de palestrantes e convidados VIP em eventos?",
    answer:
      "Sim. Para palestrantes, conferencistas e convidados de honra em eventos corporativos, " +
      "oferecemos transfer com veículo premium, motorista uniformizado e placa personalizada " +
      "na chegada ao aeroporto ou hotel. O atendimento bilíngue em inglês e espanhol está disponível " +
      "para palestrantes internacionais.",
  },
  {
    question: "Qual a capacidade máxima de passageiros para transporte em grupos?",
    answer:
      "Para grupos de até 4 passageiros: sedan executivo (Corolla Cross, Jeep Compass ou T-Cross). " +
      "Para grupos de 5 a 7 passageiros: van executiva com espaço para bagagem. " +
      "Para grupos maiores, disponibilizamos múltiplos veículos coordenados com saída simultânea " +
      "do mesmo local, garantindo que todos cheguem juntos.",
  },
  {
    question: "Atendem a ExpoLondrina e outras feiras de negócios da cidade?",
    answer:
      "Sim. A ExpoLondrina, realizada anualmente no Parque de Exposições, é um dos maiores eventos " +
      "agropecuários do Brasil e reúne executivos e empresários de todo o Paraná e de outros estados. " +
      "Atendemos transfer do aeroporto LDB para o parque de exposições, transfer entre hotéis e o evento, " +
      "e transporte de delegações durante toda a programação.",
  },
  {
    question: "Como funciona o transporte para formaturas e eventos sociais corporativos?",
    answer:
      "Para formaturas, jantares de gala e eventos de premiação, disponibilizamos motorista executivo " +
      "que busca no endereço, aguarda durante o evento e retorna ao término — sem pressa de horário. " +
      "Ideal para quem quer aproveitar o evento sem se preocupar com estacionamento ou dirigir à noite.",
  },
  {
    question: "É possível contratar o transporte para toda a duração de um evento de múltiplos dias?",
    answer:
      "Sim. Para congressos, convenções e feiras de 2 a 5 dias, elaboramos uma proposta de logística completa: " +
      "transfer de chegada, deslocamentos diários entre hotel e local do evento, e transfer de retorno. " +
      "Para delegações com múltiplas pessoas, coordenamos horários e veículos para toda a programação.",
  },
  {
    question: "Atendem o transporte entre diferentes locais durante um evento (hotel, sede, restaurante)?",
    answer:
      "Sim. O serviço de motorista por horas cobre deslocamentos entre múltiplos pontos durante o evento: " +
      "do hotel para a sede corporativa, da sede para o almoço de negócios, " +
      "do restaurante para a visita técnica e de volta ao hotel. " +
      "Um único motorista gerencia toda a logística do dia.",
  },
  {
    question: "O transporte para eventos emite nota fiscal para empresas organizadoras?",
    answer:
      "Sim. Para empresas que organizam ou patrocinam eventos em Londrina, " +
      "emitimos nota fiscal para CNPJ com todos os detalhes do serviço. " +
      "Para eventos com múltiplos deslocamentos, o relatório consolidado facilita " +
      "a prestação de contas pós-evento.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte para Eventos Londrina", url: "/transporte-executivo-eventos-londrina" },
])

const waEventos = whatsappUrl("Olá! Gostaria de solicitar transporte executivo para um evento em Londrina.")

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const tiposEventos = [
  { icon: "🏭", tipo: "Feiras de negócios e ExpoLondrina", desc: "ExpoLondrina, Exposição Agropecuária, feiras setoriais e eventos B2B no Parque de Exposições. Transfer do aeroporto, hotéis e empresas para o local durante toda a programação." },
  { icon: "🎤", tipo: "Congressos e convenções corporativas", desc: "Eventos de 1 a 5 dias com múltiplos deslocamentos. Logística completa: chegada, hotel, local do evento, almoços de negócios e retorno ao aeroporto." },
  { icon: "🏆", tipo: "Premiações e jantares executivos", desc: "Eventos noturnos em espaços premium de Londrina. Motorista aguarda durante o evento e retorna após o encerramento — sem pressa de horário." },
  { icon: "🎓", tipo: "Formaturas universitárias", desc: "UEL, UEL, UNOPAR, UNIFIL e outras instituições realizam formaturas em espaços como o Teatro Ouro Verde e centros de eventos. Transfer para formandos, família e convidados." },
  { icon: "🤝", tipo: "Visitas técnicas e reuniões estratégicas", desc: "Grupos executivos de outras cidades que chegam a Londrina para visitas a plantas industriais, cooperativas e sedes corporativas. Transfer completo do aeroporto até o destino." },
  { icon: "👑", tipo: "Convidados VIP e palestrantes", desc: "Recepção com placa personalizada no aeroporto, veículo premium e motorista bilíngue. O convidado percebe o nível do evento antes mesmo de chegar ao local." },
]

export default function EventosPage() {
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
            <span style={{ color: "#C9A84C" }}>Transporte para Eventos Londrina</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image src="/fotos/hero-transporte-executivo.webp" alt="Transporte executivo para eventos corporativos e feiras em Londrina" fill priority sizes="(max-width: 768px) 0px, 100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🎪 Transporte para Eventos · Londrina · Grupos e VIP · 24 Horas</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transporte Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>para Eventos em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Logística de transporte para eventos corporativos, feiras, congressos, formaturas e convidados VIP.
                Sedans para até 4 pessoas e vans executivas para grupos de até 7. Nota fiscal disponível.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waEventos} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar logística
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Grupos até 7 pessoas", "✓ VIP e palestrantes", "✓ ExpoLondrina", "✓ Nota fiscal PJ"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transporte Executivo para Eventos · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Grupos · VIP · Feiras · Congressos · Formaturas · 24h</p>
          </div>
          <a href={waEventos} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        <section aria-labelledby="tipos-eventos-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="tipos-eventos-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Tipos de eventos atendidos em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>Londrina concentra eventos corporativos de escala regional e nacional durante todo o ano.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {tiposEventos.map(t => (
                <div key={t.tipo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{t.tipo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="expol-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="expol-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              ExpoLondrina e feiras de negócios
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  A ExpoLondrina é um dos maiores eventos agropecuários do Brasil, realizado anualmente no
                  Parque de Exposições Ney Braga. Durante os dias de evento, Londrina recebe executivos
                  de todo o país — de São Paulo, Curitiba, Porto Alegre e Brasília — que chegam ao aeroporto
                  LDB e precisam chegar ao parque de exposições com logística eficiente.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Nossa operação durante a ExpoLondrina e outros grandes eventos inclui: transfer do aeroporto
                  para o hotel ou diretamente para o local do evento, transporte entre pontos durante a programação
                  e transfer de retorno ao aeroporto ao final da visita. Para delegações com vários executivos,
                  coordenamos múltiplos veículos com saída simultânea.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Além da ExpoLondrina, Londrina recebe regularmente congressos médicos ligados ao Hospital
                  do Câncer e ao Hospital Universitário, convenções de cooperativas como Coamo e Cocamar,
                  eventos jurídicos da OAB-PR e feiras empresariais de nicho nos setores de tecnologia,
                  distribuição e agronegócio.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para empresas que trazem equipes inteiras ou delegações de outras cidades para eventos em
                  Londrina, o transporte executivo com contrato específico para o período do evento simplifica
                  toda a logística — um único fornecedor, uma única nota fiscal, toda a mobilidade resolvida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="vip-logistica-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="vip-logistica-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Logística para grupos e convidados VIP
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Em eventos corporativos, a qualidade do transporte dos convidados é parte da experiência
                do evento. Um palestrante que desembarca no aeroporto e encontra um motorista uniformizado
                com placa personalizada transmite uma mensagem imediata sobre o nível da organização.
                O contrário — esperar táxi ou aplicativo após um voo longo — compromete a percepção antes
                mesmo da primeira apresentação.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para convidados VIP e palestrantes internacionais, nosso atendimento bilíngue em inglês
                e espanhol resolve a comunicação desde o desembarque. O motorista conduz ao hotel,
                informa sobre o evento e mantém o contato direto para os deslocamentos subsequentes.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para grupos maiores — equipes de 5 a 7 pessoas da mesma empresa ou delegação —
                as vans executivas garantem que todos cheguem juntos ao evento, permitindo reuniões
                e alinhamentos durante o trajeto. Uma única van é mais econômica e mais prática
                do que coordenar múltiplos aplicativos de carona para o mesmo destino.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-eventos-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-eventos-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Perguntas frequentes
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((f, i) => (
                <details key={i} style={{ background: "#141414", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {f.question}<span aria-hidden="true" style={{ color: "#C9A84C", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#A8A8A8", lineHeight: 1.7, fontSize: "0.9rem" }}>{f.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Planeje a logística do seu evento</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Grupos, VIP, palestrantes e delegações. Nota fiscal disponível. Bilíngue EN/PT/ES.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waEventos} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Solicitar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>📞 Ligar agora</a>
            </div>
          </div>
        </section>

        <section style={{ background: "#0A0A0A", padding: "3.5rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Serviços relacionados</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/transfer-corporativo-londrina",          label: "Transfer Corporativo" },
                { href: "/motorista-executivo-londrina",           label: "Motorista Executivo" },
                { href: "/airport-transfer-londrina",              label: "Airport Transfer (LDB)" },
                { href: "/transfer-hotel-londrina",                label: "Transfer Hotel" },
                { href: "/transporte-executivo-24-horas-londrina", label: "Atendimento 24 Horas" },
                { href: "/contato",                                label: "Solicitar orçamento" },
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
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>Transporte para Eventos · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a></p>
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
