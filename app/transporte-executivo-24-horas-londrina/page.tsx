/**
 * app/transporte-executivo-24-horas-londrina/page.tsx — Londrina Executivo
 * KEYWORD: transporte executivo 24 horas londrina
 * CANONICAL: https://londrinaexecutivo.com.br/transporte-executivo-24-horas-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrina24h,
  alternates: { canonical: `${business.url}/transporte-executivo-24-horas-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transporte Executivo 24 Horas em Londrina",
  description:
    "Transporte executivo disponível 24 horas em Londrina — voos de madrugada, " +
    "hospitais, eventos noturnos e atendimento emergencial. Motorista profissional a qualquer hora.",
  serviceType: "Transporte Executivo 24 Horas",
  url: `${business.url}/transporte-executivo-24-horas-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-24-horas.jpg`,
})

const faqItems = [
  {
    question: "O transporte executivo realmente funciona 24 horas, incluindo madrugada?",
    answer:
      "Sim. O serviço opera 24 horas por dia, 7 dias por semana, incluindo feriados nacionais e datas comemorativas. " +
      "Voos internacionais, transferências hospitalares e emergências corporativas " +
      "não seguem horário comercial — nossa operação também não. " +
      "Para viagens na madrugada, recomendamos agendar com ao menos 6 horas de antecedência.",
  },
  {
    question: "Como funciona o agendamento para voos de madrugada?",
    answer:
      "Ao agendar, informe o horário do voo e o aeroporto de embarque. " +
      "Calculamos a saída de Londrina considerando o tempo de percurso e a antecedência necessária. " +
      "Para voos com embarque às 5h da manhã em Guarulhos, por exemplo, " +
      "a saída de Londrina será por volta da meia-noite. " +
      "O motorista chega ao endereço combinado 10 minutos antes do horário acordado.",
  },
  {
    question: "O serviço atende emergências hospitalares durante a madrugada?",
    answer:
      "Sim. Situações de emergência médica que exigem deslocamento para hospitais em Londrina, " +
      "Curitiba, São Paulo ou Guarulhos são atendidas mediante disponibilidade. " +
      "Para emergências, entre em contato imediatamente pelo WhatsApp ou telefone — " +
      "nossa equipe verifica disponibilidade e confirma em minutos.",
  },
  {
    question: "Como funciona o monitoramento de voos noturnos?",
    answer:
      "Para voos que chegam tarde da noite ou de madrugada, monitoramos o status em tempo real. " +
      "Se o voo atrasar, o motorista aguarda no saguão de desembarque sem custo adicional. " +
      "O passageiro não precisa nos avisar sobre atrasos — nós acompanhamos e adaptamos.",
  },
  {
    question: "Qual o prazo mínimo para agendar um transporte de madrugada?",
    answer:
      "Recomendamos agendamento com ao menos 6 horas de antecedência para viagens de madrugada. " +
      "Para viagens interestaduais longas — Londrina a Guarulhos ou Curitiba —" +
      "o ideal é 12 a 24 horas antes para garantir disponibilidade do veículo e motorista. " +
      "Para corridas locais em Londrina na madrugada, atendemos com prazos menores.",
  },
  {
    question: "O serviço atende eventos corporativos noturnos em Londrina?",
    answer:
      "Sim. Jantares executivos, eventos de premiação, confraternizações corporativas e festas de fim de ano " +
      "frequentemente terminam tarde da noite. " +
      "Disponibilizamos motorista para levar e buscar executivos em eventos noturnos, " +
      "com motorista aguardando durante o evento ou retornando em horário combinado.",
  },
  {
    question: "É possível contratar o serviço 24h para monitoramento contínuo em viagens longas?",
    answer:
      "Sim. Para viagens de longa distância com partida na madrugada — " +
      "como um transfer para Guarulhos com saída às 2h da manhã — " +
      "o motorista é o mesmo desde a saída de Londrina até a chegada ao aeroporto. " +
      "Para viagens que exigem múltiplos dias ou mais de 12 horas de serviço, " +
      "elaboramos uma proposta específica com base no roteiro e na duração.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte Executivo 24 Horas", url: "/transporte-executivo-24-horas-londrina" },
])

const wa24h = whatsappUrl(
  "Olá! Preciso de transporte executivo em Londrina. Podem atender agora?"
)

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function Transporte24hPage() {
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
            <span style={{ color: "#C9A84C" }}>Transporte Executivo 24 Horas Londrina</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image src="/fotos/motorista-executivo.webp"
              alt="Transporte executivo 24 horas Londrina — motorista disponível dia e noite"
              fill priority sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🌙 Transporte Executivo · 24 Horas · 7 Dias · Londrina e Região
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transporte Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>24 Horas em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Motorista executivo disponível a qualquer hora do dia ou da noite.
                Voos de madrugada, hospitais, eventos noturnos e atendimento emergencial.
                Pontualidade garantida — independente do horário.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={wa24h} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar agora
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 24h · 7 dias · feriados", "✓ Madrugada disponível", "✓ Monitoramento de voo", "✓ Atendimento emergencial"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Londrina Executivo · 24 horas</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Madrugada · Hospitais · Voos · Emergências · Eventos noturnos</p>
          </div>
          <a href={wa24h} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Falar agora
          </a>
        </div>

        {/* POR QUE 24H IMPORTA */}
        <section aria-labelledby="porque-24h-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="porque-24h-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Por que o transporte executivo 24 horas faz diferença real
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Voos internacionais que saem de Guarulhos frequentemente têm embarque entre 0h e 6h da manhã.
                  Para um executivo de Londrina com voo às 5h no GRU, isso significa sair de Londrina à meia-noite —
                  um horário em que a maioria dos serviços de transporte não está disponível ou cobra tarifas emergenciais.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Nossa operação não muda de preço pela hora. O transfer para GRU custa o mesmo às 23h ou às 2h da manhã.
                  O que muda é a saída de Londrina — calculada para chegar ao aeroporto com segurança e antecedência.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Hospitais de referência em Londrina — como o Hospital do Câncer, o Hospital Universitário e
                  o Hospital Evangélico — atendem cirurgias e emergências a qualquer hora.
                  Pacientes e familiares que chegam tarde da noite ou de madrugada ao Aeroporto de Londrina (LDB)
                  precisam de transporte confiável e imediato.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para eventos corporativos que terminam fora do horário comercial — jantares executivos,
                  premiações, confraternizações — o motorista aguarda o término do evento e conduz
                  com segurança ao destino, eliminando o risco de dirigir cansado ou após compromissos sociais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SITUAÇÕES ATENDIDAS */}
        <section aria-labelledby="situacoes-24h-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="situacoes-24h-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Situações em que o atendimento 24 horas é essencial
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Casos reais em que a disponibilidade fora do horário comercial faz toda a diferença.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                { icon: "🌙", titulo: "Voos internacionais de madrugada", desc: "Voos para Europa, América do Norte e Ásia frequentemente embarcam entre 0h e 6h no GRU. Saída de Londrina à meia-noite com chegada tranquila ao aeroporto." },
                { icon: "🏥", titulo: "Transferências hospitalares urgentes", desc: "Internações, cirurgias e tratamentos de emergência que exigem deslocamento imediato para hospitais em Londrina, Curitiba ou São Paulo — a qualquer hora." },
                { icon: "🛬", titulo: "Chegadas tardias no aeroporto LDB", desc: "Voos que chegam após as 22h ao Aeroporto de Londrina. Motorista aguarda no desembarque e conduz ao destino sem necessidade de aplicativo de madrugada." },
                { icon: "🎉", titulo: "Eventos corporativos noturnos", desc: "Jantares executivos, premiações, feiras e confraternizações. Motorista aguarda o término do evento e retorna com segurança — sem pressa de horário." },
                { icon: "💼", titulo: "Executivos em viagens de emergência", desc: "Situações imprevistas que exigem deslocamento imediato — reunião de crise, visita a cliente em estado de emergência, viagem não planejada com partida imediata." },
                { icon: "✈️", titulo: "Conexões em Guarulhos de madrugada", desc: "Voos domésticos que chegam tarde ao GRU e conectam com internacionais na madrugada. Transfer LDB→GRU com saída calculada pelo horário da conexão." },
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

        {/* COMO FUNCIONA */}
        <section aria-labelledby="como-24h-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="como-24h-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Como funciona o agendamento 24 horas
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { num: "01", titulo: "Contato pelo WhatsApp ou telefone", desc: "Envie a origem, o destino, a data e o horário — a qualquer hora do dia ou da noite. Nossa equipe responde em minutos." },
                { num: "02", titulo: "Confirmação e dados do motorista", desc: "Confirmamos disponibilidade e enviamos os dados do motorista e da placa do veículo antes da viagem." },
                { num: "03", titulo: "Motorista no local combinado", desc: "O motorista chega pontualmente — às 2h da manhã ou às 14h, com o mesmo padrão de apresentação e serviço." },
                { num: "04", titulo: "Monitoramento se tiver voo", desc: "Para viagens com voo, acompanhamos o status em tempo real. Ajustamos automaticamente em caso de atraso." },
              ].map(p => (
                <div key={p.num} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A" }}>
                  <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "rgba(201,168,76,.3)", marginBottom: "0.5rem", fontFamily: "Georgia,serif" }}>{p.num}</p>
                  <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{p.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-24h-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-24h-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
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
              Precisando de transporte agora?
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Disponível 24 horas, 7 dias por semana. Resposta em minutos — independente do horário.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={wa24h} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> WhatsApp — disponível agora
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
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Rotas e serviços disponíveis</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/londrina-guarulhos",            label: "Transfer → Guarulhos (GRU)" },
                { href: "/londrina-sao-paulo",            label: "Transfer → São Paulo" },
                { href: "/londrina-curitiba",             label: "Transfer → Curitiba" },
                { href: "/transfer-congonhas-londrina",   label: "Transfer → Congonhas (CGH)" },
                { href: "/airport-transfer-londrina",    label: "Airport Transfer (LDB)" },
                { href: "/motorista-executivo-londrina", label: "Motorista Executivo" },
                { href: "/transporte-hospital-londrina",   label: "Transporte para Hospitais" },
                { href: "/contato",                      label: "Solicitar orçamento" },
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
                Transporte Executivo 24 Horas · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
