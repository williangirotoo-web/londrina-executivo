/**
 * app/transfer-corporativo-londrina/page.tsx — Londrina Executivo
 * KEYWORD: transfer corporativo londrina
 * CANONICAL: https://londrinaexecutivo.com.br/transfer-corporativo-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.transferCorporativo,
  alternates: { canonical: `${business.url}/transfer-corporativo-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Corporativo Premium em Londrina",
  description:
    "Serviço de transfer corporativo para empresas em Londrina. " +
    "Veículo executivo, motorista profissional, nota fiscal e faturamento mensal disponíveis.",
  serviceType: "Transfer Corporativo Premium",
  url: `${business.url}/transfer-corporativo-londrina`,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba"],
  image: `${business.url}/og-transfer-corporativo.jpg`,
})

const faqItems = [
  {
    question: "O que é transfer corporativo e como funciona?",
    answer:
      "Transfer corporativo é o serviço de deslocamento executivo contratado por empresas " +
      "para transportar colaboradores, diretores, clientes ou visitantes. " +
      "Funciona com agendamento antecipado: a empresa informa os dados da viagem, " +
      "e nosso motorista está no local combinado com pontualidade garantida. " +
      "O serviço inclui veículo executivo, motorista uniformizado e nota fiscal.",
  },
  {
    question: "Vocês atendem empresas com faturamento mensal?",
    answer:
      "Sim. Para empresas com demanda recorrente oferecemos contrato de faturamento mensal " +
      "com relatório consolidado de todas as viagens realizadas no período, " +
      "incluindo data, horário, origem, destino e valor por corrida. " +
      "Ideal para departamentos financeiros que precisam de prestação de contas centralizada.",
  },
  {
    question: "É possível contratar transfer para receber visitantes no aeroporto?",
    answer:
      "Sim. Realizamos recepção de visitantes no Aeroporto Governador José Richa (LDB) " +
      "com placa personalizada e monitoramento de voo em tempo real. " +
      "Para visitantes que desembarcam em Guarulhos (GRU) ou Congonhas (CGH), " +
      "também realizamos o transfer até Londrina.",
  },
  {
    question: "Qual o prazo mínimo de agendamento para transfer corporativo?",
    answer:
      "Para corridas locais dentro de Londrina recomendamos agendamento com 2 horas de antecedência. " +
      "Para viagens interestaduais (São Paulo, Curitiba, Guarulhos), " +
      "o ideal é confirmar com no mínimo 24 horas de antecedência. " +
      "Para demandas urgentes, entre em contato pelo WhatsApp para verificar disponibilidade.",
  },
  {
    question: "Atendem viagens para outros estados além do Paraná?",
    answer:
      "Sim. As rotas interestaduais mais frequentes são Londrina → São Paulo (450 km), " +
      "Londrina → Guarulhos (470 km) e Londrina → Curitiba (398 km). " +
      "Para outros destinos, consulte disponibilidade e orçamento pelo WhatsApp.",
  },
  {
    question: "Como funciona a logística para receber visitantes de fora do Brasil?",
    answer:
      "Para visitantes internacionais que chegam ao Aeroporto de Guarulhos (GRU), " +
      "realizamos o transfer completo do aeroporto até Londrina, com motorista bilíngue " +
      "em inglês ou espanhol e placa personalizada na chegada. " +
      "O serviço é contratado diretamente pela empresa anfitriã, com nota fiscal incluída.",
  },
  {
    question: "Qual é o prazo para receber a nota fiscal após a viagem?",
    answer:
      "Para corridas avulsas, a nota fiscal é emitida em até dois dias úteis após a viagem. " +
      "Para empresas com contrato mensal, o pacote de notas fiscais e o relatório consolidado " +
      "são enviados até o quinto dia útil do mês seguinte, " +
      "facilitando o fechamento contábil do departamento financeiro.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Corporativo", url: "/transfer-corporativo-londrina" },
])

const waTC = whatsappUrl(
  "Olá! Gostaria de solicitar um orçamento para transfer corporativo em Londrina para a minha empresa."
)

const casosDeUso = [
  { icon: "✈️", titulo: "Recepção de executivos", desc: "Visitantes recebidos no aeroporto com motorista uniformizado e placa personalizada." },
  { icon: "🏢", titulo: "Deslocamentos internos", desc: "Transporte de colaboradores entre plantas, escritórios e reuniões com hora marcada." },
  { icon: "🤝", titulo: "Visitas comerciais", desc: "Clientes e parceiros transportados com padrão executivo — primeira impressão que conta." },
  { icon: "📋", titulo: "Contratos mensais", desc: "Faturamento consolidado, relatório de viagens e nota fiscal para CNPJ de qualquer porte." },
  { icon: "🌍", titulo: "Executivos internacionais", desc: "Atendimento bilíngue em inglês para visitantes estrangeiros em Londrina e região." },
  { icon: "🏨", titulo: "Transfer hotel/empresa", desc: "Rota fixa entre hotel e empresa para visitantes durante estadias corporativas." },
]

export default function TransferCorporativoLondrinaPage() {
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
            <span style={{ color: "#C9A84C" }}>Transfer Corporativo</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          {/* Hero image */}
          <div aria-hidden="true" className="hero-image-wrapper" style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Image
              src="/fotos/jeep-compass-executivo.webp"
              alt="Transfer corporativo Londrina — Jeep Compass executivo em prédio empresarial"
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
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🤝 Transfer Corporativo Premium · Londrina · Nota Fiscal</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Corporativo
                <span style={{ display: "block", color: "#C9A84C" }}>para Empresas em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Serviço de transfer executivo para empresas com nota fiscal, faturamento mensal e motorista profissional.
                Recepção de visitantes, deslocamentos internos e viagens interestaduais.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waTC} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar proposta corporativa
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Nota fiscal PJ", "✓ Faturamento mensal", "✓ Motorista bilíngue", "✓ 24 horas"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Corporativo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Nota fiscal · Faturamento mensal · Rotas locais e interestaduais</p>
          </div>
          <a href={waTC} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar proposta
          </a>
        </div>

        <section aria-labelledby="casos-corp" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="casos-corp" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>Como o transfer corporativo atende sua empresa</h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>Situações reais em que nossos clientes corporativos utilizam o serviço</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {casosDeUso.map(c => (
                <div key={c.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", borderTop: "2px solid rgba(201,168,76,.3)" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{c.titulo}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ O QUE É TRANSFER CORPORATIVO ════════ */}
        <section aria-labelledby="oque-corp-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="oque-corp-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              O que é transfer corporativo e por que empresas contratam
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Transfer corporativo é o serviço de transporte executivo contratado por empresas para mobilizar
                  colaboradores, diretores e visitantes com padrão e previsibilidade. Diferente do reembolso individual
                  de transporte, o transfer corporativo centraliza toda a logística em um único fornecedor —
                  com nota fiscal, relatório mensal e faturamento consolidado para o departamento financeiro.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para empresas que recebem clientes e parceiros externos, o transfer corporativo é também uma ferramenta
                  de representação: o visitante é recebido com motorista uniformizado, veículo premium e atenção
                  que transmite o nível de serviço da empresa antes mesmo da reunião começar.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  No norte do Paraná, onde o agronegócio, a indústria e o setor jurídico concentram empresas de médio
                  e grande porte, o transfer corporativo atende uma demanda crescente: executivos que viajam
                  regularmente para São Paulo e Guarulhos, equipes comerciais em feiras e eventos, e visitantes
                  internacionais que chegam ao GRU e precisam chegar a Londrina com conforto e segurança.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  A contratação via contrato mensal elimina o processo de aprovação individual para cada viagem —
                  o responsável administrativo agenda pelo WhatsApp e o serviço é executado no padrão acordado,
                  sem negociação por corrida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ QUANDO CONTRATAR ════════ */}
        <section aria-labelledby="quando-corp-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="quando-corp-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Situações em que o transfer corporativo faz diferença
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Casos reais em que empresas de Londrina utilizam o serviço regularmente.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                { icon: "✈️", titulo: "Recepção de visitantes no aeroporto", desc: "Clientes, parceiros e fornecedores chegam ao aeroporto de Londrina ou ao GRU e são recebidos com placa personalizada. Primeira impressão gerenciada pela empresa, não pelo acaso." },
                { icon: "🏢", titulo: "Deslocamentos internos e entre unidades", desc: "Diretores e equipes que se movem entre plantas, escritórios e clientes em Londrina e região metropolitana, com motorista disponível durante toda a agenda." },
                { icon: "🤝", titulo: "Visitas comerciais e negociações", desc: "Reuniões em São Paulo, Curitiba ou Guarulhos com executivos de outras empresas — o transporte premium reforça a credibilidade da proposta antes de qualquer palavra." },
                { icon: "🌍", titulo: "Executivos internacionais em Londrina", desc: "Visitantes de origem americana, europeia ou asiática chegam ao GRU e seguem para Londrina com motorista bilíngue. Zero barreira de comunicação no trajeto." },
                { icon: "📋", titulo: "Eventos, feiras e conferências", desc: "Logística de transporte para equipes que participam de eventos em SP ou no Paraná — sem preocupação com estacionamento, combustível ou fadiga de direção." },
                { icon: "💳", titulo: "Contratos com faturamento mensal", desc: "Para empresas com demanda regular, um contrato mensal elimina a aprovação individual de despesas e centraliza o relatório para a contabilidade." },
              ].map(item => (
                <div key={item.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A", display: "flex", gap: "0.875rem" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{item.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ SETORES ATENDIDOS ════════ */}
        <section aria-labelledby="setores-corp-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="setores-corp-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Setores que mais utilizam transfer corporativo em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Cada setor tem necessidades específicas — atendemos todas com o mesmo padrão de serviço.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              {[
                { setor: "🌾 Agronegócio", desc: "Cooperativas como Coamo e Cocamar têm diretores que viajam frequentemente para São Paulo e Guarulhos. O transfer corporativo com faturamento mensal elimina a gestão individual de reembolso de despesas de transporte." },
                { setor: "⚖️ Jurídico e Advocacia", desc: "Escritórios de advocacia de Londrina com clientes em outras praças utilizam o transfer para audiências em Curitiba e reuniões em SP. Pontualidade é mandatória — atrasos têm custo jurídico real." },
                { setor: "🏥 Saúde", desc: "Hospitais, clínicas e distribuidoras farmacêuticas recebem médicos, representantes e executivos com regularidade. O transfer corporativo garante recepção profissional na chegada ao aeroporto local." },
                { setor: "🏭 Indústria e Distribuição", desc: "Indústrias do norte do Paraná com fornecedores em SP utilizam o transfer para visitas técnicas e negociações. O relatório mensal de viagens simplifica a prestação de contas para o financeiro." },
              ].map(item => (
                <div key={item.setor} style={{ background: "#141414", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#C9A84C", marginBottom: "0.5rem" }}>{item.setor}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ COMO FUNCIONA O CONTRATO ════════ */}
        <section aria-labelledby="contrato-corp-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="contrato-corp-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Como funciona o contrato corporativo
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { num: "01", titulo: "Solicite a proposta", desc: "Entre em contato pelo WhatsApp informando o porte da empresa, as rotas mais frequentes e o volume mensal estimado de viagens." },
                { num: "02", titulo: "Receba a proposta personalizada", desc: "Elaboramos uma proposta com os valores por rota, condições de faturamento e SLA de atendimento para o perfil da sua empresa." },
                { num: "03", titulo: "Ativação e operação", desc: "Com o contrato firmado, todas as viagens são agendadas via WhatsApp pelo responsável administrativo. Confirmação em até 30 minutos." },
                { num: "04", titulo: "Relatório e nota fiscal mensal", desc: "No início de cada mês, enviamos o relatório de viagens do período com data, rota, passageiro e valor. Nota fiscal emitida no prazo acordado." },
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


        {/* ════════ VANTAGENS DO CONTRATO MENSAL ════════ */}
        <section aria-labelledby="contrato-vant-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="contrato-vant-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Vantagens do contrato corporativo mensal
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Empresas que contratam transfer executivo de forma recorrente — pelo menos quatro a seis viagens
                por mês — se beneficiam de um contrato corporativo com faturamento mensal. O processo é simples:
                a empresa designa um responsável pelo agendamento, que solicita as viagens via WhatsApp com os dados
                do passageiro, origem, destino e horário.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                O relatório mensal enviado ao departamento financeiro inclui: data e hora de cada viagem,
                nome do passageiro, rota realizada, valor individual e total do período.
                Isso elimina o processo de reembolso individual, onde cada colaborador precisa guardar recibo
                e solicitar devolução — um processo que consome tempo do RH e do financeiro.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para empresas que precisam comprovar despesas de transporte para fins fiscais ou de auditoria,
                a nota fiscal centralizada e o relatório detalhado fornecem toda a documentação necessária
                de forma organizada, sem esforço adicional da equipe interna.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-corp" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-corp" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Perguntas frequentes</h2>
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
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Solicite uma proposta para sua empresa</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Atendemos CNPJ de qualquer porte com nota fiscal, faturamento mensal e relatório de viagens.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waTC} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Falar pelo WhatsApp
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
                { href: "/motorista-executivo-londrina", label: "Motorista Executivo" },
                { href: "/londrina-guarulhos", label: "Transfer GRU" },
                { href: "/londrina-sao-paulo", label: "Transfer São Paulo" },
                { href: "/airport-transfer-londrina", label: "Airport Transfer (LDB)" },
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
                Transfer Corporativo · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
