/**
 * app/airport-transfer-londrina/page.tsx — Londrina Executivo
 * KEYWORD: airport transfer londrina / transfer aeroporto londrina
 * CANONICAL: https://londrinaexecutivo.com.br/airport-transfer-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.airportTransfer,
  alternates: { canonical: `${business.url}/airport-transfer-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Airport Transfer Londrina — Executive Service at LDB",
  description:
    "Executive airport transfer service at Governador José Richa Airport in Londrina. " +
    "Arrivals and departures with uniformed driver, flight monitoring and personalized sign.",
  serviceType: "Executive Airport Transfer",
  url: `${business.url}/airport-transfer-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-airport-transfer.jpg`,
})

const faqItems = [
  {
    question: "What airport does the transfer service cover in Londrina?",
    answer:
      "We serve Governador José Richa Airport (IATA: LDB), " +
      "the main airport in Londrina, Paraná. " +
      "Located 4 km from the city center, LDB operates domestic flights to São Paulo (GRU and CGH), " +
      "Curitiba, Brasília and other major Brazilian cities.",
  },
  {
    question: "O transfer aeroporto inclui monitoramento de voo?",
    answer:
      "Sim. Para chegadas, monitoramos o voo em tempo real. " +
      "Se houver atraso ou alteração de horário, o motorista é notificado automaticamente " +
      "e aguarda a chegada real do passageiro. " +
      "Você informa o número do voo no agendamento e nós cuidamos do resto.",
  },
  {
    question: "Do you offer meet and greet service with a name sign?",
    answer:
      "Yes. For arrivals, our driver waits at the arrivals hall with a personalized sign " +
      "showing the passenger's name or company. " +
      "This service is especially recommended for first-time visitors to Londrina " +
      "or for corporate guests who may not be familiar with the airport layout.",
  },
  {
    question: "Posso agendar transfer de retorno ao aeroporto com quanto tempo de antecedência?",
    answer:
      "Recomendamos que o transfer de saída seja agendado com no mínimo 2 horas de antecedência " +
      "para voos domésticos e 2h30 para maior conforto. " +
      "O motorista chega ao endereço combinado com 10 minutos de antecedência " +
      "para garantir uma saída tranquila.",
  },
  {
    question: "O serviço atende empresas com executivos frequentes em Londrina?",
    answer:
      "Sim. Para empresas com executivos que viajam regularmente, " +
      "oferecemos contrato de transfer aeroporto com faturamento mensal, " +
      "relatório de utilizações e nota fiscal. " +
      "Uma única solicitação pelo WhatsApp ou e-mail organiza todas as viagens do mês.",
  },
  {
    question: "Qual o tempo recomendado de antecedência para o transfer de saída?",
    answer:
      "Para voos domésticos, recomendamos que o transfer de saída seja agendado para chegar " +
      "ao Aeroporto de Londrina com 1h30 a 2h de antecedência em relação ao horário do voo. " +
      "O motorista chega ao endereço de origem 10 minutos antes do horário combinado, " +
      "garantindo saída tranquila e pontual.",
  },
  {
    question: "O transfer inclui auxílio com a bagagem?",
    answer:
      "Sim. O motorista auxilia com o carregamento da bagagem do endereço de origem até o veículo " +
      "e do veículo até o setor de check-in. " +
      "Para viagens com bagagem volumosa ou equipamentos especiais, " +
      "informe no agendamento para confirmarmos o veículo mais adequado.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Airport Transfer Londrina", url: "/airport-transfer-londrina" },
])

const waAT = whatsappUrl(
  "Olá! Preciso de um transfer executivo no Aeroporto de Londrina (LDB). Gostaria de agendar."
)

const servicos = [
  { icon: "🛬", titulo: "Chegadas (Arrivals)", desc: "Motorista aguarda na saída dos desembarques com placa personalizada e monitoramento de voo em tempo real." },
  { icon: "🛫", titulo: "Partidas (Departures)", desc: "Transfer pontual para embarque. Motorista chega 10 minutos antes do horário combinado." },
  { icon: "🏢", titulo: "Transfer empresa ↔ LDB", desc: "Rota dedicada entre escritórios ou hotéis em Londrina e o Aeroporto Governador José Richa." },
  { icon: "🌍", titulo: "Bilíngue EN/PT/ES", desc: "Atendimento em inglês, português e espanhol para executivos nacionais e internacionais." },
]

export default function AirportTransferLondrinaPage() {
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
            <span style={{ color: "#C9A84C" }}>Airport Transfer Londrina</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          {/* Hero image */}
          <div aria-hidden="true" className="hero-image-wrapper" style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Image
              src="/fotos/airport-transfer-executivo.webp"
              alt="Serviço de transfer executivo para aeroportos em Londrina"
              priority
              fill
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.05) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>✈️ Airport Transfer · Londrina LDB · Executive Service</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Airport Transfer
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina — Executive Standard</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Serviço de transfer executivo no Aeroporto Governador José Richa (LDB).
                Chegadas com placa personalizada · Partidas pontuais · Monitoramento de voo ·
                Atendimento bilíngue EN/PT.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waAT} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Agendar transfer LDB
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Aeroporto LDB", "✓ Placa personalizada", "✓ Monitoramento de voo", "✓ Bilíngue EN/PT"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Airport Transfer · LDB · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Chegadas · Partidas · Bilíngue · Monitoramento de voo</p>
          </div>
          <a href={waAT} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Agendar agora
          </a>
        </div>

        <section aria-labelledby="servicos-at" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="servicos-at" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Serviços de transfer no Aeroporto de Londrina</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
              {servicos.map(s => (
                <div key={s.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "2px solid rgba(201,168,76,.3)" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{s.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ AEROPORTO DE LONDRINA ════════ */}
        <section aria-labelledby="aeroporto-ldb-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="aeroporto-ldb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Aeroporto Governador José Richa — o que saber
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O Aeroporto Governador José Richa (IATA: LDB) está localizado a 4 quilômetros do centro de Londrina,
                  na Zona Norte da cidade. Opera voos domésticos regulares para São Paulo (Congonhas e Guarulhos),
                  Curitiba, Brasília e outros destinos, com operações das companhias Latam, Gol e Azul.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Por ser um aeroporto de médio porte, o LDB não exige o mesmo tempo de antecedência dos grandes
                  terminais — check-in para voos domésticos pode ser feito com 1h a 1h30 de antecedência.
                  Para executivos com passagens de primeira classe ou acesso ao lounge, recomendamos 1h30.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O acesso ao aeroporto pela Avenida Saul Elkind é descomplicado fora dos horários de pico.
                  Para saídas entre 6h e 8h ou entre 17h e 19h, o trânsito no entorno pode acrescentar 10 a 15
                  minutos ao trajeto — nosso motorista considera esse fator no cálculo do horário de saída.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para chegadas de voos com atraso, monitoramos a operação em tempo real. Se o voo atrasar,
                  o motorista permanece na área de desembarque aguardando — sem cobrança adicional
                  por tempo de espera dentro do prazo razoável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ COMO FUNCIONA CHEGADAS E PARTIDAS ════════ */}
        <section aria-labelledby="operacao-ldb-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="operacao-ldb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Como funciona o transfer para chegadas e partidas
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Procedimento detalhado para cada tipo de atendimento no LDB.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "3px solid #C9A84C" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "1rem" }}>🛬 Chegadas (Arrivals)</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { step: "01", desc: "Informe o número do voo no agendamento" },
                    { step: "02", desc: "Monitoramos o status do voo em tempo real" },
                    { step: "03", desc: "Motorista aguarda no saguão com placa personalizada" },
                    { step: "04", desc: "Auxílio com bagagem e embarque no veículo" },
                    { step: "05", desc: "Transfer direto ao destino em Londrina" },
                  ].map(s => (
                    <div key={s.step} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ background: "#C9A84C", color: "#0A0A0A", fontSize: "0.65rem", fontWeight: 800, padding: "2px 7px", borderRadius: "4px", flexShrink: 0, marginTop: "1px" }}>{s.step}</span>
                      <p style={{ color: "#A8A8A8", fontSize: "0.85rem", margin: 0 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "3px solid rgba(201,168,76,.4)" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "1rem" }}>🛫 Partidas (Departures)</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { step: "01", desc: "Informe endereço de origem e horário do voo" },
                    { step: "02", desc: "Calculamos o horário ideal de saída" },
                    { step: "03", desc: "Motorista chega 10 min antes do combinado" },
                    { step: "04", desc: "Auxílio com bagagem até o check-in" },
                    { step: "05", desc: "Chegada ao aeroporto com folga garantida" },
                  ].map(s => (
                    <div key={s.step} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ background: "rgba(201,168,76,.3)", color: "#C9A84C", fontSize: "0.65rem", fontWeight: 800, padding: "2px 7px", borderRadius: "4px", flexShrink: 0, marginTop: "1px" }}>{s.step}</span>
                      <p style={{ color: "#A8A8A8", fontSize: "0.85rem", margin: 0 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ PARA EMPRESAS ════════ */}
        <section aria-labelledby="empresas-ldb-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="empresas-ldb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Transfer aeroporto para empresas em Londrina
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Empresas que recebem visitas regulares de parceiros, fornecedores ou clientes utilizam o transfer
                aeroporto como parte da gestão de hospitalidade corporativa. O visitante desce do avião e já encontra
                o motorista aguardando com o nome da empresa — impressão imediata de profissionalismo e organização.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para o departamento administrativo, o contrato de transfer aeroporto com faturamento mensal
                elimina a necessidade de reembolsar cada corrida individualmente. Todas as viagens do período
                são consolidadas em um único relatório com nota fiscal, pronto para a aprovação do financeiro.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                O serviço também atende executivos da própria empresa que viajam com frequência.
                Ao invés de deixar o carro no estacionamento do aeroporto por dias ou depender de familiares,
                o executivo agenda o transfer e tem o veículo esperando na chegada — independente do horário do voo.
              </p>
            </div>
          </div>
        </section>


        {/* ════════ POR QUE USAR TRANSFER PRIVADO NO AEROPORTO ════════ */}
        <section aria-labelledby="porque-at-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="porque-at-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Por que usar transfer privado no Aeroporto de Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2rem", maxWidth: "600px" }}>
              Comparativo direto entre o transfer executivo e as alternativas mais comuns.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { titulo: "Transfer executivo vs carro próprio", pontos: ["Motorista dirige enquanto você descansa ou trabalha", "Sem custo de estacionamento por dias (R$30–60/dia no LDB)", "Sem risco de voltar após viagem longa ao volante", "Veículo aguarda exatamente onde combinado"] },
                { titulo: "Transfer executivo vs aplicativo de carona", pontos: ["Motorista confirmado com antecedência — sem cancelamentos", "Veículo premium, não carro popular aleatório", "Monitoramento de voo em tempo real incluído", "Nota fiscal e faturamento corporativo disponíveis"] },
                { titulo: "Transfer executivo vs ônibus coletivo", pontos: ["Porta a porta sem paradas intermediárias", "Privacidade total para chamadas e descanso", "Sem restrição de bagagem ou horário fixo", "Atendimento personalizado em inglês ou espanhol"] },
              ].map(item => (
                <div key={item.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", marginBottom: "0.875rem" }}>{item.titulo}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {item.pontos.map(p => (
                      <div key={p} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "#50c878", flexShrink: 0, fontSize: "0.75rem", marginTop: "3px" }}>✓</span>
                        <p style={{ color: "#A8A8A8", fontSize: "0.825rem", lineHeight: 1.55, margin: 0 }}>{p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ DICAS E CONEXÕES ════════ */}
        <section aria-labelledby="dicas-ldb-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="dicas-ldb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Transfer LDB para conexões e viagens internacionais
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#C9A84C", marginBottom: "0.75rem" }}>Voos com escala em Guarulhos</h3>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  Executivos que embarcam em Londrina com conexão no Aeroporto de Guarulhos (GRU) para voos
                  internacionais precisam de um cálculo cuidadoso de tempo. O transfer de Londrina ao LDB
                  deve garantir chegada com pelo menos 1h30 antes do voo doméstico, que normalmente tem
                  duração de 50 a 55 minutos até Guarulhos.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para quem prefere ir diretamente ao GRU por terra — especialmente com bagagem volumosa
                  ou para evitar a conexão aérea — nosso serviço de transfer Londrina-Guarulhos cobre
                  os 470 km em aproximadamente 5 horas e meia com atendimento nos três terminais.
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#C9A84C", marginBottom: "0.75rem" }}>Horários de pico no LDB</h3>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  O Aeroporto Governador José Richa tem maior movimento entre 6h e 9h (embarques para SP)
                  e entre 18h e 21h (chegadas de São Paulo). Para embarques nesse horário, recomendamos
                  sair com 30 a 45 minutos extras de antecedência para absorver eventuais congestionamentos
                  na Avenida Saul Elkind, principal acesso ao aeroporto.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para executivos que chegam com frequência em voos noturnos — especialmente retornos de
                  São Paulo entre 22h e 23h — o transfer noturno garante veículo esperando na chegada
                  independente do horário, sem a incerteza de encontrar opções de transporte disponíveis
                  nesse período.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-at" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-at" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Perguntas frequentes / FAQ</h2>
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
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Agende seu transfer no Aeroporto de Londrina</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Chegadas e partidas com padrão executivo. Motorista uniformizado e monitoramento de voo incluso.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waAT} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 Ligar agora
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: "#0A0A0A", padding: "3.5rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Outros serviços</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/londrina-guarulhos", label: "Transfer GRU (Guarulhos)" },
                { href: "/londrina-sao-paulo", label: "Transfer São Paulo" },
                { href: "/motorista-executivo-londrina", label: "Motorista Executivo" },
                { href: "/transfer-corporativo-londrina", label: "Transfer Corporativo" },
                { href: "/contato", label: "Solicitar orçamento" },
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
                Airport Transfer · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
