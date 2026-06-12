/**
 * app/londrina-guarulhos/page.tsx — Londrina Executivo
 *
 * KEYWORD: transfer executivo londrina guarulhos
 * INTENT: transacional — passageiro com voo no GRU
 * CANONICAL: https://londrinaexecutivo.com.br/londrina-guarulhos
 * CONTEÚDO: 100% exclusivo — zero sobreposição com o outro projeto
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaGuarulhos,
  alternates: { canonical: `${business.url}/londrina-guarulhos` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Executivo Londrina → Aeroporto Internacional de Guarulhos (GRU)",
  description:
    "Serviço de transfer executivo de Londrina ao Aeroporto Internacional de Guarulhos. " +
    "470 km com veículo premium, motorista profissional e monitoramento de voo em tempo real.",
  serviceType: "Transfer Executivo GRU",
  url: `${business.url}/londrina-guarulhos`,
  areaServed: ["Londrina", "Guarulhos", "Paraná", "São Paulo"],
  image: `${business.url}/og-londrina-guarulhos.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo leva o transfer de Londrina a Guarulhos?",
    answer:
      "O percurso de Londrina ao Aeroporto Internacional de Guarulhos cobre 470 km " +
      "pela BR-369 e Rodovia dos Bandeirantes. O tempo médio é de 5h30 a 6h em condições normais. " +
      "Para voos domésticos recomendamos sair de Londrina com 7 horas de antecedência. " +
      "Para voos internacionais, 8 horas garantem check-in, despacho de bagagem e controle de passaporte com conforto.",
  },
  {
    question: "O transfer executivo cobre todos os terminais do Aeroporto de Guarulhos?",
    answer:
      "Sim. Atendemos os três terminais do GRU: Terminal 1 (voos domésticos Latam), " +
      "Terminal 2 (voos domésticos Gol e Azul) e Terminal 3 (voos internacionais). " +
      "Informe o terminal e o número do voo no momento do agendamento.",
  },
  {
    question: "Como funciona o monitoramento de voo?",
    answer:
      "Ao agendar, você informa o número do voo. Acompanhamos a operação em tempo real — " +
      "se houver atraso ou alteração de horário, ajustamos a saída de Londrina automaticamente. " +
      "Você não precisa se preocupar com conexões ou mudanças de última hora.",
  },
  {
    question: "É possível fazer o percurso de madrugada?",
    answer:
      "Sim. O serviço opera 24 horas. Saídas noturnas entre 22h e 5h têm menor tráfego " +
      "na Rodovia dos Bandeirantes, reduzindo o tempo total da viagem. " +
      "Agendamentos noturnos devem ser confirmados com pelo menos 24 horas de antecedência.",
  },
  {
    question: "Qual veículo é utilizado no transfer executivo para Guarulhos?",
    answer:
      "Utilizamos sedan executivo premium, climatizado, com espaço amplo para bagagem despachada. " +
      "O veículo está em perfeito estado de conservação e higiene, " +
      "adequado para passageiros com malas de viagem internacional.",
  },
  {
    question: "Vocês emitem nota fiscal para o transfer Londrina Guarulhos?",
    answer:
      "Sim. Emitimos nota fiscal para pessoas físicas e jurídicas. " +
      "Para empresas que utilizam o transfer com frequência — como exportadoras e cooperativas " +
      "que embarcam executivos regularmente — oferecemos faturamento mensal centralizado " +
      "com relatório de todas as viagens do período.",
  },
  {
    question: "É possível contratar o transfer para grupos ou delegações?",
    answer:
      "Sim. Para grupos de até sete pessoas, contamos com vans executivas. " +
      "Equipes comerciais, delegações e grupos de colaboradores que viajam juntos " +
      "podem utilizar um único veículo, com o mesmo padrão de motorista uniformizado " +
      "e monitoramento de voo.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Londrina → Guarulhos", url: "/londrina-guarulhos" },
])

const waGRU = whatsappUrl(
  "Olá! Preciso de um transfer executivo de Londrina para o Aeroporto de Guarulhos (GRU). Gostaria de agendar."
)

const terminais = [
  { cod: "T1", cor: "#2563eb", nome: "Terminal 1", info: "Latam — voos domésticos" },
  { cod: "T2", cor: "#16a34a", nome: "Terminal 2", info: "Gol · Azul — voos domésticos" },
  { cod: "T3", cor: "#7c3aed", nome: "Terminal 3", info: "Voos internacionais — todas as companhias" },
]

const dadosRota = [
  { label: "Distância", valor: "470 km" },
  { label: "Tempo médio", valor: "5h30 – 6h" },
  { label: "Rota principal", valor: "BR-369 + Bandeirantes" },
  { label: "Antecedência doméstico", valor: "7h antes do voo" },
  { label: "Antecedência internacional", valor: "8h antes do voo" },
  { label: "Operação", valor: "24 horas" },
]

const diferenciais = [
  { icon: "📡", titulo: "Monitoramento de voo", desc: "Acompanhamos seu voo em tempo real. Atrasos são gerenciados automaticamente." },
  { icon: "🧳", titulo: "Espaço para bagagem", desc: "Veículo adequado para malas de viagem internacional — sem restrições de volume." },
  { icon: "⏰", titulo: "Pontualidade garantida", desc: "Saída calculada pelo horário do seu voo. Nunca atrasamos um embarque." },
  { icon: "🎩", titulo: "Motorista uniformizado", desc: "Apresentação formal, postura discreta e condução segura em toda a viagem." },
]

export default function LondrinaGuarulhosPage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(buildFAQSchema(faqItems)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Navegação estrutural"
          style={{ background: "#141414", padding: "0.75rem 1.5rem", fontSize: "0.8rem", borderBottom: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", color: "#6B6B6B" }}>
            <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem", color: "#2A2A2A" }}>›</span>
            <span style={{ color: "#C9A84C" }}>Londrina → Guarulhos</span>
          </div>
        </nav>

        {/* HERO */}
        <section aria-label="Transfer executivo Londrina Guarulhos GRU"
          style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          {/* Hero image */}
          <div aria-hidden="true" className="hero-image-wrapper" style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Image
              src="/fotos/hero-transfer-executivo.webp"
              alt="Transfer executivo Londrina Guarulhos — SUV executivo premium em viagem interestadual"
              priority
              fill
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  ✈️ Transfer Executivo · Londrina → Guarulhos · GRU · 470 km
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina → Guarulhos</span>
              </h1>
              <p style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Transporte executivo de Londrina ao Aeroporto Internacional de Guarulhos (GRU).
                Veículo premium, motorista profissional e monitoramento de voo em tempo real.
                Terminais T1, T2 e T3 atendidos.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waGRU} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WhatsAppIcon color="#0A0A0A" />
                  Agendar transfer GRU
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,0.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 470 km com hora marcada", "✓ T1 · T2 · T3", "✓ Monitoramento de voo", "✓ 24 horas"].map(item => (
                  <span key={item} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,0.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Executivo · Londrina → GRU</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>470 km · T1, T2 e T3 · Monitoramento de voo</p>
          </div>
          <a href={waGRU} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WhatsAppIcon color="#0A0A0A" size={16} />
            Agendar agora
          </a>
        </div>

        {/* DADOS DA ROTA */}
        <section aria-labelledby="rota-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rota-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
              Rota Londrina → Aeroporto de Guarulhos
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>BR-369 (Londrina) + Rodovia dos Bandeirantes (SP) → GRU</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
              {dadosRota.map(d => (
                <div key={d.label} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A", textAlign: "center" }}>
                  <p style={{ color: "#6B6B6B", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{d.label}</p>
                  <p style={{ color: "#F0F0F0", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>{d.valor}</p>
                </div>
              ))}
            </div>
            {/* Terminais */}
            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#F0F0F0", marginBottom: "1.25rem" }}>Terminais do Aeroporto de Guarulhos</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {terminais.map(t => (
                <div key={t.cod} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A", borderTop: `3px solid ${t.cor}` }}>
                  <span style={{ background: t.cor, color: "#fff", fontWeight: 800, fontSize: "0.8rem", padding: "3px 10px", borderRadius: "4px", display: "inline-block", marginBottom: "0.5rem" }}>{t.cod}</span>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.25rem" }}>{t.nome}</p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.8rem", margin: 0 }}>{t.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section aria-labelledby="dif-gru-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="dif-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Por que escolher o transfer executivo para Guarulhos
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {diferenciais.map(d => (
                <div key={d.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{d.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{d.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        {/* ════════ ROTA E DISTÂNCIA ════════ */}
        <section aria-labelledby="rota-dist-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rota-dist-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Distância e rota utilizada
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O percurso de Londrina ao Aeroporto Internacional de Guarulhos cobre <strong style={{ color: "#F0F0F0" }}>470 quilômetros</strong>,
                  com tempo médio de cinco horas e meia em condições normais de tráfego.
                  A rota principal segue pela BR-369 a partir de Londrina até a divisa com São Paulo,
                  passando por Ourinhos, e entra na Rodovia dos Bandeirantes (SP-348) para o trecho final até o aeroporto.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  A Rodovia dos Bandeirantes é classificada como uma das mais seguras do Brasil para viagens de longa
                  distância, com manutenção regular e boa sinalização. Em datas de alta demanda — como vésperas de feriados
                  prolongados — recomendamos sair de Londrina com uma hora de antecedência adicional.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  <strong style={{ color: "#C9A84C" }}>Pedágios:</strong> a rota inclui pedágios na Rodovia dos Bandeirantes e trechos
                  da SP-330. O valor dos pedágios é incluso no orçamento informado no momento do agendamento —
                  sem cobranças extras ou surpresas no final da viagem.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para voos com embarque antecipado — como voos internacionais que exigem check-in três horas antes —
                  calculamos o horário de saída de Londrina de forma a garantir a chegada ao aeroporto com
                  folga suficiente para despacho de bagagem e controle de passaporte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ TERMINAIS ════════ */}
        <section aria-labelledby="terminais-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="terminais-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Embarque nos terminais de Guarulhos
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              O Aeroporto Internacional de Guarulhos opera com três terminais distintos. Informe o seu no agendamento.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "3px solid #2563eb" }}>
                <span style={{ background: "#2563eb", color: "#fff", fontWeight: 800, fontSize: "0.8rem", padding: "3px 10px", borderRadius: "4px", display: "inline-block", marginBottom: "0.75rem" }}>T1</span>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>Terminal 1</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  Operado principalmente pela Latam para voos domésticos. Localizado na entrada leste do complexo aeroportuário.
                  Para chegadas, o motorista aguarda no saguão de desembarque com placa personalizada.
                </p>
              </div>
              <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "3px solid #16a34a" }}>
                <span style={{ background: "#16a34a", color: "#fff", fontWeight: 800, fontSize: "0.8rem", padding: "3px 10px", borderRadius: "4px", display: "inline-block", marginBottom: "0.75rem" }}>T2</span>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>Terminal 2</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  Utilizado pela Gol e Azul para voos domésticos. Conectado ao T3 por passarela interna.
                  Ideal para passageiros com conexão nacional antes de voos internacionais no T3.
                </p>
              </div>
              <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "3px solid #7c3aed" }}>
                <span style={{ background: "#7c3aed", color: "#fff", fontWeight: 800, fontSize: "0.8rem", padding: "3px 10px", borderRadius: "4px", display: "inline-block", marginBottom: "0.75rem" }}>T3</span>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>Terminal 3</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>
                  Terminal internacional, operado por todas as companhias aéreas em voos para destinos fora do Brasil.
                  Para executivos em viagens internacionais, recomendamos saída de Londrina com oito horas de antecedência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ MONITORAMENTO E INTERNACIONAL ════════ */}
        <section aria-labelledby="monitor-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="monitor-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Monitoramento de voos e viagens internacionais
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#C9A84C", marginBottom: "0.75rem" }}>Monitoramento em tempo real</h3>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  Ao agendar o transfer, informamos o número do voo. Nossa equipe acompanha o status do voo
                  até o embarque — em caso de atraso, antecipamos ou postergamos a saída de Londrina
                  automaticamente. O passageiro não precisa se preocupar em nos avisar: nós acompanhamos.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para chegadas em Guarulhos, o motorista aguarda no saguão de desembarque do terminal
                  correto, com placa personalizada com o nome do passageiro ou da empresa. Não há pressa —
                  o tempo de espera está incluso no serviço.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#C9A84C", marginBottom: "0.75rem" }}>Atendimento para viagens internacionais</h3>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  Executivos que embarcam em voos internacionais a partir do GRU precisam de mais tempo
                  para check-in, despacho de bagagem e controle de passaporte. Para esses casos,
                  recomendamos saída de Londrina com oito horas de antecedência, garantindo chegada ao
                  terminal T3 com duas a três horas antes do embarque.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O motorista bilíngue em inglês está disponível para executivos estrangeiros que desembarcam
                  em Guarulhos e precisam chegar a Londrina — seja para visitar clientes, cooperativas
                  ou plantas industriais no norte do Paraná.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ PARA EMPRESAS ════════ */}
        <section aria-labelledby="empresas-gru-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="empresas-gru-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Atendimento para executivos e empresas
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2rem", maxWidth: "640px" }}>
              Por que empresas do norte do Paraná utilizam o transfer Londrina Guarulhos regularmente.
            </p>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Cooperativas agrícolas, indústrias e distribuidoras do norte do Paraná têm em Guarulhos
                o principal aeroporto de conexão para voos internacionais — especialmente para destinos como
                Miami, Lisboa, Frankfurt e Amsterdã, que concentram parte significativa dos negócios do
                agronegócio brasileiro.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para essas empresas, o transfer executivo elimina o estresse da viagem de carro próprio,
                o custo do estacionamento no aeroporto por longos períodos e o risco de imprevistos
                sem suporte em rodovia. O executivo embarca descansado, sem ter dirigido 470 quilômetros.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Empresas com executivos que viajam frequentemente para o exterior podem contratar o serviço
                em regime de contrato mensal, com faturamento centralizado e nota fiscal para cada viagem.
                A reserva é feita diretamente pelo responsável administrativo via WhatsApp, sem necessidade
                de aprovação prévia para cada corrida.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ QUANDO VALE A PENA ════════ */}
        <section aria-labelledby="valepena-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="valepena-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Quando vale a pena contratar transfer privado
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { icon: "✅", titulo: "Voo com horário fixo e não cancelável", desc: "Passagens aéreas internacionais e executivas têm penalidade alta para cancelamento. Um transfer privado com motorista que monitora o trânsito é mais seguro que depender do próprio carro." },
                { icon: "✅", titulo: "Retorno de viagem longa ou cansativa", desc: "Após uma viagem de negócios de vários dias, dirigir 470 km de volta a Londrina representa risco real de cansaço. O transfer permite descanso imediato durante o trajeto." },
                { icon: "✅", titulo: "Bagagem volumosa para viagem internacional", desc: "Malas de despacho para viagens longas ocupam espaço no carro próprio e dificultam a condução. O veículo executivo é preparado para esse tipo de carga." },
                { icon: "✅", titulo: "Executivo estrangeiro que não conhece a rota", desc: "Visitantes internacionais que desembarcam em Guarulhos e precisam chegar a Londrina não conhecem a rota nem falam português. O motorista bilíngue resolve os dois problemas." },
              ].map(item => (
                <div key={item.titulo} style={{ background: "#141414", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A", display: "flex", gap: "0.875rem" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0, color: "#50c878" }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{item.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ COMO FUNCIONA A RESERVA ════════ */}
        <section aria-labelledby="reserva-gru-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="reserva-gru-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Como funciona a reserva
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { num: "01", titulo: "Informe os dados da viagem", desc: "Envie pelo WhatsApp: data de embarque, horário do voo, terminal de destino e número de passageiros." },
                { num: "02", titulo: "Confirme o agendamento", desc: "Nossa equipe confirma disponibilidade, informa o valor e envia os dados do motorista e veículo." },
                { num: "03", titulo: "Embarque sem preocupação", desc: "O motorista chega ao endereço combinado com antecedência. Para chegadas em GRU, aguarda no terminal com placa." },
                { num: "04", titulo: "Nota fiscal emitida", desc: "Após a viagem, a nota fiscal é emitida e enviada por e-mail ou WhatsApp no prazo acordado." },
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

        <section aria-labelledby="faq-gru-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-gru-heading" style={{ fontSize: "clamp(1.375rem, 2.8vw, 1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
              Perguntas frequentes
            </h2>
            <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{ background: "#1C1C1C", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
                  <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {faq.question}
                    <span aria-hidden="true" style={{ color: "#C9A84C", fontSize: "1rem", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                  </summary>
                  <div style={{ padding: "0 1.5rem 1.5rem", color: "#A8A8A8", lineHeight: 1.7, fontSize: "0.9rem" }}>{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>
              Pronto para garantir seu transfer para o GRU?
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              470 km com veículo premium, motorista profissional e monitoramento de voo.
              Agende pelo WhatsApp e receba confirmação em minutos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waGRU} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WhatsAppIcon color="#C9A84C" />
                Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section style={{ background: "#0A0A0A", padding: "4rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Outros serviços</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/londrina-sao-paulo",   label: "Londrina → São Paulo" },
                { href: "/airport-transfer-londrina", label: "Airport Transfer (LDB)" },
                { href: "/motorista-executivo-londrina", label: "Motorista Executivo" },
                { href: "/transfer-corporativo-londrina", label: "Transfer Corporativo" },
                { href: "/contato",              label: "Solicitar orçamento" },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ display: "inline-block", background: "#141414", color: "#A8A8A8", fontSize: "0.8rem", fontWeight: 500, padding: "7px 14px", borderRadius: "6px", border: "1px solid #2A2A2A", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
            <div>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", textDecoration: "none", fontFamily: "Georgia, serif" }}>Londrina Executivo</Link>
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                Transfer Executivo · {business.address.city}, {business.address.stateCode} ·{" "}
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

function WhatsAppIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
