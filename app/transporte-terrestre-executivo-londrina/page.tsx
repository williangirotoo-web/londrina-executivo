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
    question: "O que é transporte terrestre executivo?",
    answer:
      "Transporte terrestre executivo é o serviço de deslocamento profissional com veículo premium, " +
      "motorista habilitado e agendamento antecipado. " +
      "Diferencia-se do transporte convencional por garantir pontualidade, " +
      "apresentação formal do motorista, veículo padronizado e higienizado, " +
      "emissão de nota fiscal e cobertura de rotas locais e interestaduais. " +
      "É o padrão adotado por executivos, diretores e empresas que precisam de mobilidade confiável " +
      "sem abrir mão do conforto e da segurança.",
  },
  {
    question: "Quais rotas de longa distância a empresa atende a partir de Londrina?",
    answer:
      "As rotas principais são: Londrina → Aeroporto Internacional de Guarulhos (GRU, 470 km), " +
      "Londrina → São Paulo — capital e Grande SP (450 km pela Rodovia Castelo Branco), " +
      "Londrina → Curitiba (398 km pela BR-376) " +
      "e Londrina → Maringá (118 km pela PR-317). " +
      "Para destinos fora dessas rotas, consulte disponibilidade e orçamento pelo WhatsApp.",
  },
  {
    question: "A empresa atende contratos corporativos para mobilidade recorrente?",
    answer:
      "Sim. Para empresas com demanda regular, oferecemos contratos de mobilidade corporativa " +
      "com faturamento mensal centralizado, relatório detalhado de todas as viagens realizadas " +
      "e nota fiscal para CNPJ de qualquer porte. " +
      "A proposta comercial é elaborada conforme o volume mensal de viagens e as rotas utilizadas. " +
      "Atendemos indústrias, cooperativas, escritórios de advocacia e empresas de todos os segmentos.",
  },
  {
    question: "Como funciona o agendamento do transporte executivo?",
    answer:
      "O agendamento é feito pelo WhatsApp ou por telefone. " +
      "Informe a origem, o destino, a data e o horário desejado — " +
      "nossa equipe confirma disponibilidade e envia os dados do motorista e do veículo antes da viagem. " +
      "Para viagens interestaduais, recomendamos agendamento com ao menos 24 horas de antecedência. " +
      "Para corridas locais em Londrina, atendemos com prazos menores mediante disponibilidade.",
  },
  {
    question: "Qual veículo é utilizado no transporte executivo?",
    answer:
      "A frota é composta por veículos executivos premium: Toyota Corolla Cross, Jeep Compass " +
      "e Volkswagen T-Cross para até quatro passageiros, " +
      "além de vans executivas para grupos de até sete pessoas. " +
      "Todos os veículos são revisados periodicamente, climatizados e mantidos em perfeito estado de higiene " +
      "para garantir o padrão exigido por empresas e executivos.",
  },
  {
    question: "É possível contratar transporte executivo para eventos corporativos?",
    answer:
      "Sim. Atendemos logística de transporte para eventos corporativos, conferências, feiras e convenções. " +
      "O serviço inclui transfer do aeroporto ou hotel para o local do evento, " +
      "transporte entre pontos durante a programação " +
      "e retorno ao final, com motorista disponível por toda a duração do evento se necessário.",
  },
  {
    question: "O serviço emite nota fiscal para empresas?",
    answer:
      "Sim. Emitimos nota fiscal para pessoas físicas e jurídicas. " +
      "Para empresas com contrato mensal, o faturamento é centralizado com relatório de todas as viagens, " +
      "facilitando a prestação de contas interna. " +
      "A nota fiscal é emitida no prazo acordado e enviada por e-mail ou WhatsApp.",
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
          <div aria-hidden="true" className="hero-image-wrapper" style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Image
              src="/fotos/hero-transporte-executivo.webp"
              alt="Transporte terrestre executivo em Londrina — veículo premium com motorista"
              priority
              fill
              sizes="(max-width: 768px) 0px, 100vw"
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


        {/* ════════ O QUE É ════════ */}
        <section aria-labelledby="oque-e-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="oque-e-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              O que é transporte terrestre executivo
            </h2>
            <div style={{ maxWidth: "780px", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Transporte terrestre executivo é o serviço de deslocamento profissional que combina veículo premium,
                motorista qualificado e agendamento com hora marcada. Diferente do transporte por aplicativo ou do
                táxi convencional, o serviço executivo é contratado com antecedência e segue um padrão rígido de
                apresentação, pontualidade e atendimento ao cliente.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                A principal distinção está no nível de previsibilidade e confiança. Empresas que utilizam transporte
                executivo para diretores, visitantes e equipes comerciais sabem exatamente o que esperar: veículo
                identificado, motorista uniformizado, pontualidade no local combinado e emissão de nota fiscal para
                CNPJ. Não há surpresas de preço nem risco de cancelamento de última hora.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para viagens de longa distância — como o trajeto de Londrina ao Aeroporto de Guarulhos ou à capital
                paulista — o transporte executivo oferece ainda a vantagem do conforto em viagens de cinco a seis
                horas de duração, com veículos amplos, climatizados e preparados para receber bagagem de despacho.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ QUANDO CONTRATAR ════════ */}
        <section aria-labelledby="quando-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="quando-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Quando contratar transporte executivo em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "640px" }}>
              Situações em que o padrão executivo faz diferença real para empresas e profissionais.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { icon: "✈️", titulo: "Viagem com hora marcada para aeroporto", desc: "Voos domésticos e internacionais com horário fixo não admitem atraso. O transporte executivo calcula a saída com base no horário do voo e monitora o trânsito em tempo real." },
                { icon: "🏢", titulo: "Recepção de visitantes e clientes", desc: "A primeira impressão importa. Receber um cliente ou parceiro de negócios com motorista uniformizado e veículo premium transmite profissionalismo antes mesmo da reunião começar." },
                { icon: "🗺️", titulo: "Viagens interestaduais de longa distância", desc: "Para rotas de 400 a 500 km, o transporte executivo privado compete diretamente com o voo regional em custo e supera em praticidade — sem fila, sem conexão, sem espera." },
                { icon: "📅", titulo: "Agenda corporativa com múltiplos compromissos", desc: "Executivos com reuniões em locais diferentes no mesmo dia utilizam o motorista por horas para otimizar deslocamentos sem preocupação com estacionamento ou trânsito." },
                { icon: "🌍", titulo: "Visita de executivo ou parceiro estrangeiro", desc: "Para visitantes internacionais, o atendimento bilíngue em inglês e espanhol garante comunicação fluida do aeroporto até o hotel ou sede da empresa." },
                { icon: "🏛️", titulo: "Eventos, feiras e conferências", desc: "Logística de transporte para grupos em eventos corporativos, com vans executivas para até sete passageiros e motorista disponível durante toda a programação." },
              ].map(item => (
                <div key={item.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{item.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ EMPRESAS E EXECUTIVOS ════════ */}
        <section aria-labelledby="empresas-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="empresas-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Transporte para empresas e executivos
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Empresas de qualquer porte utilizam o serviço de transporte executivo para padronizar
                  a mobilidade de diretores, gerentes e visitantes. A vantagem do contrato corporativo
                  é a previsibilidade: um único fornecedor, faturamento mensal centralizado e nota fiscal
                  para cada viagem realizada.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Setores como agronegócio, saúde, jurídico e indústria em Londrina e no norte do Paraná
                  utilizam o serviço regularmente para deslocamentos entre unidades, visitas a clientes
                  em São Paulo e transferências para o Aeroporto de Guarulhos.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Para executivos e profissionais liberais, o serviço por horas ou diária oferece um motorista
                  dedicado com veículo premium durante toda a agenda. Enquanto o motorista conduz,
                  o executivo pode revisar documentos, fazer ligações ou simplesmente descansar —
                  especialmente relevante em viagens longas.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O atendimento bilíngue em inglês e espanhol permite que a empresa receba executivos
                  estrangeiros com o mesmo nível de serviço oferecido em capitais como São Paulo e Curitiba,
                  sem depender de intermediários.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ AEROPORTOS E ROTAS ════════ */}
        <section aria-labelledby="aeroportos-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="aeroportos-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Transporte para aeroportos e viagens intermunicipais
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "640px" }}>
              As rotas de maior demanda a partir de Londrina e os serviços de transfer para cada aeroporto.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "820px" }}>
              {[
                { rota: "Londrina → Guarulhos (GRU)", km: "470 km", tempo: "≈ 5h30", desc: "Transfer para o Aeroporto Internacional de Guarulhos, principal hub de voos internacionais do Brasil. Atendemos os três terminais com monitoramento de voo em tempo real.", href: "/londrina-guarulhos" },
                { rota: "Londrina → São Paulo", km: "450 km", tempo: "≈ 5h", desc: "Transfer para reuniões, hospitais, Congonhas e qualquer endereço na capital paulista ou Grande SP. Rodovia Castelo Branco com saída calculada pelo horário do compromisso.", href: "/londrina-sao-paulo" },
                { rota: "Airport Transfer LDB", km: "Local", tempo: "Monit. de voo", desc: "Chegadas e partidas no Aeroporto Governador José Richa (LDB). Motorista com placa personalizada e monitoramento de atrasos para garantia de embarque.", href: "/airport-transfer-londrina" },
              ].map(r => (
                <Link key={r.rota} href={r.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem 1.5rem", border: "1px solid #2A2A2A", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.25rem" }}>{r.rota}</p>
                      <p style={{ fontSize: "0.8rem", color: "#6B6B6B", margin: 0 }}>{r.desc}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontWeight: 800, fontSize: "0.9rem", color: "#C9A84C", margin: "0 0 0.15rem" }}>{r.km}</p>
                      <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: "0 0 0.25rem" }}>{r.tempo}</p>
                      <span style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 600 }}>Ver rota →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ BENEFÍCIOS ════════ */}
        <section aria-labelledby="beneficios-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="beneficios-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Benefícios do transporte executivo profissional
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "640px" }}>
              Por que empresas e executivos migram do transporte convencional para o serviço executivo.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
              {[
                { icon: "⏱️", titulo: "Pontualidade previsível", desc: "O horário de saída é calculado com base no compromisso, não na disponibilidade do motorista. Chegadas dentro do prazo, sempre." },
                { icon: "🎩", titulo: "Motorista de apresentação formal", desc: "Traje social, postura discreta e condução segura. O motorista representa a empresa do contratante em cada atendimento." },
                { icon: "📋", titulo: "Documentação e nota fiscal", desc: "Nota fiscal para PF e PJ, relatório de viagens para contratos mensais e comprovante de cada corrida realizada." },
                { icon: "🔒", titulo: "Sigilo e discrição", desc: "Reuniões, negociações e informações confidenciais ficam dentro do veículo. Nossos motoristas são treinados para a discrição necessária no ambiente corporativo." },
                { icon: "🗣️", titulo: "Comunicação bilíngue", desc: "Atendimento em português, inglês e espanhol para visitantes internacionais e executivos de empresas multinacionais." },
                { icon: "💳", titulo: "Faturamento facilitado", desc: "Contratos mensais com faturamento centralizado, eliminando o reembolso individual de despesas de transporte." },
              ].map(b => (
                <div key={b.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{b.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ COMO FUNCIONA A CONTRATAÇÃO ════════ */}
        <section aria-labelledby="contratacao-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="contratacao-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Como funciona a contratação
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem", maxWidth: "560px" }}>
              Processo simples, sem burocracia. Do primeiro contato à confirmação em minutos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              {[
                { num: "01", titulo: "Solicite pelo WhatsApp ou telefone", desc: "Informe origem, destino, data e horário. Para viagens com voo, informe também o número do voo para monitoramento." },
                { num: "02", titulo: "Receba a confirmação", desc: "Nossa equipe confirma disponibilidade e envia os dados do motorista, placa do veículo e horário de saída. Tudo por escrito." },
                { num: "03", titulo: "Motorista no local combinado", desc: "O motorista chega com antecedência, uniformizado e com o veículo preparado. Para aeroportos, aguarda com placa personalizada." },
                { num: "04", titulo: "Nota fiscal após a viagem", desc: "Emitimos a nota fiscal no prazo acordado. Para contratos mensais, o relatório completo é enviado no fechamento do mês." },
              ].map(p => (
                <div key={p.num} style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A" }}>
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "rgba(201,168,76,.3)", marginBottom: "0.75rem", fontFamily: "Georgia,serif" }}>{p.num}</p>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{p.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <a href={waHub} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#0A0A0A" /> Solicitar agora pelo WhatsApp
              </a>
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
