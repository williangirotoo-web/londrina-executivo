/**
 * app/motorista-executivo-londrina/page.tsx — Londrina Executivo
 * KEYWORD: motorista executivo londrina
 * CANONICAL: https://londrinaexecutivo.com.br/motorista-executivo-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.motoristaExecutivo,
  alternates: { canonical: `${business.url}/motorista-executivo-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Motorista Executivo Profissional em Londrina",
  description:
    "Motorista executivo profissional em Londrina por horas ou diária. " +
    "Veículo premium, agenda corporativa completa e atendimento bilíngue.",
  serviceType: "Serviço de Motorista Executivo",
  url: `${business.url}/motorista-executivo-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-motorista-executivo.jpg`,
})

const faqItems = [
  {
    question: "Como funciona o serviço de motorista executivo por horas?",
    answer:
      "Você contrata o motorista por um período definido — meio período (4h), diária (8h) ou diária estendida (12h). " +
      "Durante esse tempo, o motorista permanece à sua disposição: " +
      "aguarda entre compromissos, gerencia o estacionamento e conduz conforme o seu roteiro. " +
      "O serviço inclui o veículo executivo premium.",
  },
  {
    question: "O veículo é do motorista ou preciso fornecer o meu?",
    answer:
      "O serviço padrão inclui o veículo do motorista — sedan executivo premium, climatizado e em perfeito estado. " +
      "Se preferir utilizar o seu próprio veículo com nosso motorista, " +
      "consulte o serviço de condutor particular disponível sob solicitação.",
  },
  {
    question: "O motorista executivo atende viagens para outras cidades?",
    answer:
      "Sim. O motorista executivo atende deslocamentos locais em Londrina e região metropolitana, " +
      "além de viagens interestaduais para São Paulo, Curitiba e Guarulhos. " +
      "Para viagens acima de 6 horas, o orçamento é feito por rota.",
  },
  {
    question: "Vocês atendem agendamentos de última hora?",
    answer:
      "Para solicitações de meio período ou diária dentro de Londrina, " +
      "atendemos com a maior brevidade possível — em muitos casos com disponibilidade no mesmo dia. " +
      "Entre em contato pelo WhatsApp com antecedência mínima de 2 horas para verificar disponibilidade.",
  },
  {
    question: "O motorista fala inglês?",
    answer:
      "Sim. Nosso serviço inclui atendimento bilíngue em português e inglês, " +
      "adequado para executivos estrangeiros em visita a Londrina. " +
      "Para visitantes de países hispânicos, também oferecemos atendimento em espanhol.",
  },
  {
    question: "É possível contratar o motorista executivo para viagens de vários dias?",
    answer:
      "Sim. Para agendas que envolvem múltiplos dias em São Paulo, Curitiba ou outra cidade, " +
      "disponibilizamos o motorista em regime de diárias com hospedagem por conta do contratante. " +
      "Ideal para executivos em missões comerciais prolongadas ou para delegações em eventos de múltiplos dias.",
  },
  {
    question: "Qual a diferença entre motorista executivo e transfer executivo?",
    answer:
      "No transfer executivo, o motorista realiza um deslocamento pontual de origem a destino — " +
      "como de Londrina ao aeroporto ou a São Paulo. " +
      "No serviço de motorista executivo, o profissional fica à disposição do contratante " +
      "durante um período definido (4h, 8h ou 12h), aguardando entre compromissos " +
      "e conduzindo conforme a agenda do executivo. " +
      "São serviços distintos com aplicações diferentes.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Motorista Executivo", url: "/motorista-executivo-londrina" },
])

const waME = whatsappUrl(
  "Olá! Gostaria de contratar um motorista executivo em Londrina. Pode me passar informações sobre disponibilidade?"
)

const pacotes = [
  { label: "Meio período", horas: "4h", desc: "Manhã ou tarde. Compromissos pontuais, visitas e reuniões de curta duração.", popular: false },
  { label: "Diária completa", horas: "8h", desc: "Jornada executiva completa. O motorista aguarda entre compromissos.", popular: true },
  { label: "Diária estendida", horas: "12h", desc: "Para agendas corporativas intensas ou eventos que se prolongam.", popular: false },
]

export default function MotoristaExecutivoLondrinaPage() {
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
            <span style={{ color: "#C9A84C" }}>Motorista Executivo</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          {/* Imagem de fundo do hero */}
          <div aria-hidden="true" className="hero-image-wrapper" style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", zIndex: 0 }}>
            <Image
              src="/fotos/motorista-executivo.webp"
              alt="Motorista executivo para atendimento corporativo em Londrina"
              fill
              priority
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 55%, rgba(10,10,10,0.4) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>💼 Motorista Executivo · Londrina · Por Horas ou Diária</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Motorista Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Profissional em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Motorista profissional com veículo premium à disposição por horas ou diária completa.
                Atendimento bilíngue, agenda corporativa e pontualidade garantida.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waME} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Contratar motorista
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Veículo premium incluso", "✓ 4h · 8h · 12h", "✓ Bilíngue EN/PT", "✓ Agenda corporativa"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Motorista Executivo · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Meio período · Diária · Diária estendida · Veículo incluso</p>
          </div>
          <a href={waME} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Verificar disponibilidade
          </a>
        </div>

        <section aria-labelledby="pacotes-me" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="pacotes-me" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>Formas de contratar o motorista executivo</h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem" }}>Escolha o período que melhor atende à sua agenda</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.25rem", maxWidth: "820px" }}>
              {pacotes.map(p => (
                <div key={p.label} style={{ background: "#1C1C1C", borderRadius: "10px", padding: "2rem 1.5rem", border: p.popular ? "2px solid #C9A84C" : "1px solid #2A2A2A", position: "relative", textAlign: "center" }}>
                  {p.popular && (
                    <div style={{ position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "0.7rem", padding: "3px 12px", borderRadius: "999px", whiteSpace: "nowrap" }}>MAIS CONTRATADO</div>
                  )}
                  <p style={{ color: "#6B6B6B", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{p.label}</p>
                  <p style={{ color: "#C9A84C", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem" }}>{p.horas}</p>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                  <a href={waME} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: p.popular ? "#C9A84C" : "transparent", color: p.popular ? "#0A0A0A" : "#C9A84C", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", border: p.popular ? "none" : "1.5px solid rgba(201,168,76,.4)" }}>
                    <WaIcon color={p.popular ? "#0A0A0A" : "#C9A84C"} size={16} /> Contratar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ O QUE É ════════ */}
        <section aria-labelledby="oque-me-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="oque-me-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              O que é o serviço de motorista executivo
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O serviço de motorista executivo disponibiliza um profissional habilitado, com veículo premium,
                  à disposição do contratante por um período definido — meio período, diária ou diária estendida.
                  Durante esse tempo, o motorista conduz conforme a agenda do executivo, aguarda entre compromissos
                  e cuida de toda a logística de deslocamento.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  A principal vantagem em relação ao transfer pontual é a flexibilidade: não há horário fixo de
                  término nem limitação de destinos. Se a reunião se estender, o motorista aguarda. Se surgir
                  um compromisso adicional, o deslocamento já está garantido. Para executivos com agenda densa
                  em Londrina ou em outra cidade, esse modelo elimina a gestão de transporte durante o dia.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O serviço é ideal para diretores com múltiplos compromissos no mesmo dia, para visitas técnicas
                  entre unidades e clientes, e para executivos em deslocamento a outras cidades que precisam
                  de mobilidade local após chegarem ao destino.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para empresas, o motorista executivo resolve a recepção de visitantes de alto nível
                  que chegam a Londrina e precisam ser conduzidos entre hotel, empresa, fornecedores e parceiros
                  ao longo do dia — com o mesmo motorista e o mesmo veículo, sem necessidade de múltiplos agendamentos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ AGENDA TÍPICA ════════ */}
        <section aria-labelledby="agenda-me-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="agenda-me-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Como é uma agenda com motorista executivo em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Exemplos reais de como o serviço se encaixa na rotina de diferentes perfis.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                { icon: "💼", perfil: "Diretor com reuniões em Londrina", agenda: "08h: saída do hotel → cliente A. 10h: aguarda 45min. 11h: parceiro B. 14h: sede da empresa. 17h: aeroporto LDB. Motorista disponível durante todo o trajeto sem nenhum agendamento adicional." },
                { icon: "🌍", perfil: "Executivo estrangeiro em visita", agenda: "Chegada no GRU → transfer até Londrina → hotel. Dia seguinte: motorista disponível das 8h às 18h para visitas técnicas à planta e reuniões com a diretoria. Comunicação em inglês durante todo o serviço." },
                { icon: "🤝", perfil: "Sócio em negociação em SP", agenda: "Saída de Londrina às 5h → reuniões na Paulista das 10h às 16h → motorista aguarda → retorno a Londrina. Um único motorista para todo o trajeto, ida e volta, com as paradas necessárias." },
                { icon: "🏥", perfil: "Paciente em tratamento em SP", agenda: "Transfer Londrina-SP, motorista aguarda durante consulta e exames, conduz para hotel ou retorna a Londrina. Agenda médica imprevisível — o motorista acompanha sem custo de reagendamento." },
              ].map(item => (
                <div key={item.perfil} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A" }}>
                  <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "0.5rem" }}>{item.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", marginBottom: "0.5rem" }}>{item.perfil}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.7, margin: 0 }}>{item.agenda}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ PADRÃO DO MOTORISTA ════════ */}
        <section aria-labelledby="padrao-me-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="padrao-me-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Padrão de atendimento do motorista executivo
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              {[
                { icon: "🎩", titulo: "Apresentação formal", desc: "Traje social completo em todos os atendimentos. O motorista representa a empresa do contratante em cada corrida." },
                { icon: "🗣️", titulo: "Comunicação bilíngue", desc: "Atendimento em português, inglês e espanhol. Para visitantes estrangeiros, a comunicação começa no aeroporto sem fricção." },
                { icon: "🔒", titulo: "Discrição corporativa", desc: "Reuniões, negociações e informações sensíveis ficam dentro do veículo. Treinamento para o ambiente executivo." },
                { icon: "⏱️", titulo: "Pontualidade calculada", desc: "Chegada ao local combinado com margem de segurança. Em caso de imprevisto no trânsito, o contratante é avisado proativamente." },
                { icon: "🚗", titulo: "Veículo premium incluso", desc: "Toyota Corolla Cross, Jeep Compass ou VW T-Cross — climatizado, higienizado e revisado para cada atendimento." },
                { icon: "📱", titulo: "Contato direto com o motorista", desc: "Após a confirmação do agendamento, o contratante recebe o contato direto do motorista para comunicação durante o serviço." },
              ].map(b => (
                <div key={b.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{b.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ QUANDO CONTRATAR ════════ */}
        <section aria-labelledby="quando-me-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="quando-me-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Quando contratar o motorista executivo
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Situações em que o serviço por horas supera qualquer outra opção de deslocamento.
            </p>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                O motorista executivo por horas é a escolha certa quando a agenda é imprevisível ou intensa.
                Enquanto um transfer pontual tem origem e destino fixos, o motorista executivo segue o ritmo
                do contratante — se a reunião se estende, ele aguarda; se surge um compromisso adicional,
                o veículo já está disponível.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para executivos com múltiplas reuniões em Londrina no mesmo dia, o serviço elimina
                a preocupação com estacionamento, o custo do táxi entre compromissos e o desgaste de
                conduzir sob pressão de horário. O foco fica inteiramente na agenda.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para empresas que recebem visitantes de outras cidades, o motorista executivo por diária
                resolve a mobilidade completa do visitante: do hotel ao escritório, às visitas técnicas,
                ao almoço de negócios e ao aeroporto no final do dia. Um único contato, um único motorista,
                toda a logística resolvida.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                O serviço também é utilizado por profissionais liberais — médicos, advogados e consultores
                que precisam de mobilidade em São Paulo durante visitas à capital — e por famílias
                que acompanham pacientes em tratamentos em hospitais especializados fora de Londrina.
                Em todos esses casos, a tranquilidade de ter o motorista aguardando não tem preço.
              </p>
            </div>
          </div>
        </section>


        {/* ════════ MOTORISTA VS TRANSFER ════════ */}
        <section aria-labelledby="dif-me-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="dif-me-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Motorista executivo por horas ou transfer pontual — qual escolher
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                A escolha entre o motorista executivo por horas e o transfer pontual depende da natureza da agenda.
                Para um deslocamento com origem e destino fixos — como ir ao aeroporto ou a uma reunião em outra cidade —
                o transfer executivo é a opção mais objetiva e econômica.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Já quando a agenda tem múltiplos compromissos, horários imprevisíveis ou necessidade de retorno
                no mesmo período, o motorista por horas entrega mais valor. O profissional aguarda nos intervalos,
                realiza deslocamentos intermediários e finaliza o serviço no horário acordado — sem a necessidade
                de agendar corridas separadas para cada trecho.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para executivos que viajam a São Paulo e precisam de mobilidade local durante a visita — reuniões
                na Paulista pela manhã, almoço em Pinheiros, apresentação na Faria Lima à tarde — o motorista
                por horas contratado em São Paulo garante conforto e pontualidade durante toda a agenda,
                sem o custo e o desgaste de usar aplicativos de carona em cada trecho.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Nossa equipe ajuda a identificar a modalidade mais adequada para cada demanda.
                Entre em contato com os detalhes da sua agenda e sugerimos a opção que melhor
                atende ao seu objetivo com o melhor custo-benefício.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-me" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-me" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Perguntas frequentes</h2>
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
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Motorista executivo disponível em Londrina</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Veículo premium, pontualidade e atendimento bilíngue. Confirme disponibilidade pelo WhatsApp.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waME} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Verificar disponibilidade
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
                { href: "/transfer-corporativo-londrina", label: "Transfer Corporativo" },
                { href: "/londrina-guarulhos", label: "Transfer GRU" },
                { href: "/londrina-sao-paulo", label: "Transfer São Paulo" },
                { href: "/airport-transfer-londrina", label: "Airport Transfer (LDB)" },
                { href: "/transporte-hospital-londrina", label: "Transporte para Hospitais" },
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
                Motorista Executivo · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
