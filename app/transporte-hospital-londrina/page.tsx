/**
 * app/transporte-hospital-londrina/page.tsx — Londrina Executivo
 * KEYWORD: transporte para hospital londrina
 * CANONICAL: https://londrinaexecutivo.com.br/transporte-hospital-londrina
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaHospital,
  alternates: { canonical: `${business.url}/transporte-hospital-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Transporte Executivo para Hospitais em Londrina",
  description:
    "Transporte executivo para hospitais e clínicas em Londrina. " +
    "Atendimento porta a porta para pacientes, acompanhantes e visitantes. Disponível 24 horas.",
  serviceType: "Transporte para Saúde",
  url: `${business.url}/transporte-hospital-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-transporte-hospital.jpg`,
})

const faqItems = [
  {
    question: "O transporte para hospital funciona de madrugada e nos fins de semana?",
    answer:
      "Sim. O serviço opera 24 horas por dia, 7 dias por semana, incluindo feriados. " +
      "Cirurgias, internações e emergências médicas não seguem horário comercial — " +
      "e nosso serviço também não. " +
      "Para atendimentos de madrugada ou em horários fora do expediente, " +
      "entre em contato pelo WhatsApp ou telefone a qualquer momento.",
  },
  {
    question: "O veículo tem espaço para cadeira de rodas, bengalas ou equipamentos médicos?",
    answer:
      "Nossos veículos executivos — Toyota Corolla Cross, Jeep Compass e VW T-Cross — " +
      "têm porta-malas amplos compatíveis com cadeiras de rodas dobráveis, andadores e bolsas médicas. " +
      "Para equipamentos de maior porte ou necessidades de acessibilidade específicas, " +
      "informe no agendamento para confirmarmos o veículo mais adequado.",
  },
  {
    question: "É possível agendar o transporte de volta após a consulta ou alta hospitalar?",
    answer:
      "Sim. Agendamos tanto a ida quanto a volta. Para procedimentos com duração imprevisível — " +
      "como quimioterapia, hemodiálise ou exames de imagem — " +
      "o motorista aguarda no local até a conclusão do atendimento " +
      "ou retorna no horário informado pelo paciente via WhatsApp. " +
      "Para consultas com horário estimado, confirmamos a disponibilidade antes do retorno.",
  },
  {
    question: "O serviço atende pacientes de outras cidades que precisam chegar a hospitais de Londrina?",
    answer:
      "Sim. Londrina é referência médica para toda a região norte do Paraná. " +
      "Pacientes de Apucarana, Cornélio Procópio, Bandeirantes, Cambé e cidades vizinhas " +
      "utilizam nosso serviço para chegar a tratamentos no Hospital do Câncer, " +
      "no Hospital Universitário ou na Unimed Londrina. " +
      "O transfer inclui busca no endereço de origem e entrega na entrada do hospital.",
  },
  {
    question: "Como funciona o agendamento do transporte hospitalar?",
    answer:
      "Entre em contato pelo WhatsApp ou telefone informando: endereço de origem, " +
      "hospital ou clínica de destino, data e horário da consulta ou procedimento. " +
      "Nossa equipe confirma disponibilidade e envia os dados do motorista e da placa " +
      "antes da viagem. Para tratamentos recorrentes — como quimioterapia semanal — " +
      "é possível programar todas as viagens do mês em um único agendamento.",
  },
  {
    question: "O serviço atende acompanhantes e familiares de pacientes internados?",
    answer:
      "Sim. Familiares e acompanhantes que precisam visitar pacientes internados " +
      "em hospitais de Londrina utilizam o serviço com frequência, " +
      "especialmente quando o visitante vem de outra cidade ou precisa chegar " +
      "fora do horário de ônibus e transporte coletivo. " +
      "O motorista conduz até a entrada do hospital e combina o retorno conforme necessário.",
  },
  {
    question: "O transporte hospitalar emite nota fiscal?",
    answer:
      "Sim. Emitimos nota fiscal para pessoa física e jurídica. " +
      "Para empresas ou planos de saúde que precisam de comprovante de deslocamento " +
      "para fins de reembolso ou auditoria, a nota fiscal é emitida com os dados completos " +
      "da viagem — data, origem, destino e valor — e enviada por e-mail ou WhatsApp " +
      "em até dois dias úteis após o serviço.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transporte para Hospital Londrina", url: "/transporte-hospital-londrina" },
])

const waHospital = whatsappUrl(
  "Olá! Gostaria de solicitar transporte executivo para hospital em Londrina."
)

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function TransporteHospitalPage() {
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
            <span style={{ color: "#C9A84C" }}>Transporte para Hospital Londrina</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image
              src="/fotos/motorista-executivo.webp"
              alt="Transporte executivo para hospitais em Londrina — veículo premium porta a porta"
              fill priority
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🏥 Transporte para Saúde · Londrina · Porta a Porta · 24 Horas
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transporte para Hospital
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Transporte executivo porta a porta para pacientes, acompanhantes e visitantes
                em hospitais e clínicas de Londrina. Veículo climatizado, motorista profissional
                e agendamento com hora marcada — disponível 24 horas.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waHospital} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Agendar transporte
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Porta a porta", "✓ Disponível 24h", "✓ Motorista profissional", "✓ Veículo climatizado"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transporte para Hospital · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Porta a porta · 24 horas · Pacientes e acompanhantes</p>
          </div>
          <a href={waHospital} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Agendar agora
          </a>
        </div>

        {/* O QUE É O SERVIÇO */}
        <section aria-labelledby="oque-hospital-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="oque-hospital-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Transporte para hospitais em Londrina
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Ir ao hospital ou à clínica com tranquilidade faz diferença real no dia de uma consulta,
                  exame ou procedimento. Para pacientes em tratamento, idosos, pessoas em recuperação
                  e acompanhantes que precisam de pontualidade e conforto, o transporte executivo
                  oferece uma alternativa segura ao carro próprio e ao transporte coletivo.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O serviço funciona porta a porta: o motorista busca no endereço de origem,
                  aguarda se necessário e conduz de volta ao final do atendimento.
                  Para tratamentos recorrentes — quimioterapia, hemodiálise, fisioterapia — é possível
                  programar todas as viagens do mês em um único contato, com confirmação antecipada.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Londrina é o maior polo de saúde do norte do Paraná, recebendo pacientes de dezenas
                  de municípios da região. Para quem vem de Apucarana, Cornélio Procópio, Cambé,
                  Rolândia ou cidades vizinhas, chegar ao hospital de referência com hora marcada
                  e sem precisar depender de terceiros é um alívio real em um momento já difícil.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O veículo é climatizado, silencioso e com espaço para bagagem e equipamentos médicos.
                  O motorista mantém postura discreta e respeitosa, ciente de que muitos passageiros
                  estão em situação delicada — o ambiente dentro do veículo é de cuidado, não de pressa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOSPITAIS ATENDIDOS */}
        <section aria-labelledby="hospitais-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="hospitais-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Principais hospitais atendidos em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Atendemos qualquer hospital, clínica ou centro médico de Londrina.
              Os de maior demanda são:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                {
                  icon: "🏥",
                  nome: "Hospital do Câncer de Londrina (HCSL)",
                  desc: "Referência em oncologia para toda a região norte do Paraná. " +
                    "Pacientes em tratamento de quimioterapia, radioterapia e cirurgias oncológicas " +
                    "utilizam o transporte recorrente com frequência semanal ou quinzenal.",
                },
                {
                  icon: "🏥",
                  nome: "Hospital Evangélico de Londrina",
                  desc: "Um dos maiores hospitais do Paraná, com atendimento de média e alta complexidade. " +
                    "Internações, cirurgias eletivas e pronto-socorro com acesso facilitado " +
                    "pela Av. Juscelino Kubitschek.",
                },
                {
                  icon: "🏥",
                  nome: "Hospital Universitário Regional do Norte do Paraná (HU)",
                  desc: "Vinculado à Universidade Estadual de Londrina (UEL), atende pelo SUS com " +
                    "especialidades como cardiologia, neurologia, transplantes e maternidade de alto risco.",
                },
                {
                  icon: "🏥",
                  nome: "Unimed Londrina",
                  desc: "A Unimed Londrina opera complexo hospitalar e ambulatório com atendimento em " +
                    "diversas especialidades. Pacientes conveniados de cidades vizinhas utilizam " +
                    "o transporte executivo para consultas e procedimentos eletivos.",
                },
                {
                  icon: "🏥",
                  nome: "Hospital Zona Norte e demais unidades",
                  desc: "Hospital Santa Casa de Londrina, Hospital de Olhos, clínicas de diagnóstico " +
                    "por imagem, centros de quimioterapia e oncologia ambulatorial. " +
                    "Qualquer endereço médico em Londrina é atendido.",
                },
                {
                  icon: "🔬",
                  nome: "Clínicas, laboratórios e centros médicos",
                  desc: "Laboratórios de análises clínicas, centros de diagnóstico por imagem, " +
                    "clínicas de fisioterapia, hemodiálise e reabilitação. " +
                    "Tratamentos recorrentes com agendamento programado para o mês.",
                },
              ].map(h => (
                <div key={h.nome} style={{ background: "#141414", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{h.nome}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section aria-labelledby="para-quem-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="para-quem-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Para quem é o serviço
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              O transporte para hospitais em Londrina atende perfis muito diferentes —
              o que todos têm em comum é a necessidade de pontualidade, conforto e segurança.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              {[
                { icon: "👴", perfil: "Idosos e pessoas com mobilidade reduzida", desc: "Pacientes que têm dificuldade de usar transporte coletivo ou de depender de familiares em horários de trabalho. O motorista auxilia no embarque e desembarque com paciência." },
                { icon: "🩺", perfil: "Pacientes em tratamento contínuo", desc: "Quimioterapia, radioterapia, hemodiálise e fisioterapia exigem viagens semanais ou mais frequentes. Programamos todas as sessões do mês em um único agendamento." },
                { icon: "👨‍👩‍👧", perfil: "Acompanhantes e familiares", desc: "Familiares que visitam pacientes internados ou que precisam acompanhar consultas de rotina. Especialmente útil quando o familiar vem de outra cidade e não conhece Londrina." },
                { icon: "🏙️", perfil: "Pacientes de cidades vizinhas", desc: "Apucarana, Cornélio Procópio, Cambé, Rolândia, Ibiporã e outras cidades que buscam atendimento nos hospitais de referência de Londrina." },
                { icon: "🏢", perfil: "Empresas com funcionários em tratamento", desc: "Algumas empresas custeiam o transporte de colaboradores em tratamento médico como benefício. Nota fiscal disponível para reembolso ou benefício corporativo." },
                { icon: "✈️", perfil: "Pacientes que chegam de outras cidades por voo", desc: "Pacientes que vêm de São Paulo, Curitiba ou outras cidades pelo aeroporto de Londrina e precisam ser transferidos diretamente ao hospital na chegada." },
              ].map(p => (
                <div key={p.perfil} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{p.perfil}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUANDO CONTRATAR */}
        <section aria-labelledby="quando-hospital-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="quando-hospital-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Quando contratar o transporte para hospital
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                O transporte executivo para hospitais é ideal sempre que o deslocamento até o hospital
                envolve algum nível de complexidade — seja pela condição do paciente, pelo horário do
                procedimento, pela necessidade de pontualidade ou pela distância percorrida.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para procedimentos cirúrgicos, a internação geralmente exige chegada em horário específico
                — muitas vezes às 6h ou 7h da manhã — e o paciente não pode conduzir de volta após a alta.
                O transporte executivo resolve os dois momentos: a ida pontual e o retorno confortável
                após o procedimento, quando o paciente precisa de descanso e não de direção.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para tratamentos de quimioterapia e radioterapia, que costumam durar meses com sessões
                regulares, o transporte recorrente com agendamento mensal elimina a preocupação de
                organizar a locomoção a cada semana. O paciente sabe que o motorista estará lá,
                no horário certo, sem precisar pedir favor a familiares ou aguardar aplicativo.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para visitas a pacientes internados que chegam de outras cidades pelo aeroporto de Londrina,
                o transfer do aeroporto diretamente ao hospital elimina uma etapa logística em um
                momento já emotivamente carregado. O motorista conduz com calma e discrição,
                sem que o visitante precise se preocupar com estacionamento, GPS ou trânsito desconhecido.
              </p>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section aria-labelledby="como-hospital-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="como-hospital-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Como funciona o agendamento
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "3rem", maxWidth: "560px" }}>
              Processo simples e sem burocracia — para quem já tem muito o que se preocupar.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
              {[
                { num: "01", titulo: "Entre em contato pelo WhatsApp", desc: "Informe o endereço de origem, o hospital de destino, a data e o horário do procedimento ou consulta." },
                { num: "02", titulo: "Receba a confirmação", desc: "Nossa equipe confirma disponibilidade e envia os dados do motorista e placa antes da viagem — por escrito." },
                { num: "03", titulo: "Motorista no endereço combinado", desc: "O motorista chega com antecedência, pronto para auxiliar no embarque com todo o cuidado necessário." },
                { num: "04", titulo: "Retorno programado", desc: "O retorno é combinado conforme o tempo estimado do procedimento. Para imprevistos, o motorista aguarda ou retorna no horário confirmado." },
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

        {/* VANTAGENS */}
        <section aria-labelledby="vantagens-hospital-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="vantagens-hospital-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Vantagens do transporte executivo para saúde
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Por que pacientes e familiares escolhem o transporte executivo para consultas e tratamentos.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem", maxWidth: "900px" }}>
              {[
                { icon: "❄️", titulo: "Veículo climatizado em qualquer horário", desc: "Temperatura controlada durante todo o trajeto — essencial para pacientes imunossuprimidos, idosos sensíveis ao calor ou qualquer pessoa que precise de conforto térmico durante o deslocamento." },
                { icon: "🚪", titulo: "Embarque porta a porta", desc: "O motorista vai ao endereço do paciente — não a um ponto de ônibus, não a um terminal. Ideal para quem tem dificuldade de locomoção, usa andador ou cadeira de rodas dobrável." },
                { icon: "⏱️", titulo: "Pontualidade calculada", desc: "Saída calculada para chegar com antecedência ao hospital. Para cirurgias e procedimentos com horário rígido, isso não é preferência — é necessidade." },
                { icon: "🤫", titulo: "Ambiente silencioso e respeitoso", desc: "Motorista treinado para conduzir com cuidado e manter discrição. Sem conversas desnecessárias, sem pressa. O paciente descansa ou se prepara mentalmente para o procedimento." },
                { icon: "🔁", titulo: "Agendamento recorrente", desc: "Tratamentos que se repetem semanalmente podem ser programados para o mês inteiro em um único contato. Sem precisar agendar cada sessão individualmente." },
                { icon: "🌙", titulo: "Disponibilidade 24 horas", desc: "Internações de emergência, cirurgias de madrugada e chegadas tardias no aeroporto têm o mesmo padrão de atendimento — independente do horário." },
              ].map(v => (
                <div key={v.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.3rem" }}>{v.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-hospital-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-hospital-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
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
              Agende o transporte para o hospital
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Porta a porta, 24 horas, veículo climatizado. Motorista profissional com cuidado e pontualidade.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waHospital} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Agendar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 {business.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS */}
        <section style={{ background: "#0A0A0A", padding: "3.5rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Serviços relacionados</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {[
                { href: "/transporte-executivo-24-horas-londrina", label: "Atendimento 24 Horas" },
                { href: "/motorista-executivo-londrina",           label: "Motorista Executivo" },
                { href: "/airport-transfer-londrina",              label: "Airport Transfer (LDB)" },
                { href: "/londrina-curitiba",                      label: "Transfer → Curitiba" },
                { href: "/londrina-sao-paulo",                     label: "Transfer → São Paulo" },
                { href: "/transfer-corporativo-londrina",          label: "Transfer Corporativo" },
                { href: "/contato",                                label: "Solicitar orçamento" },
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
                Transporte para Hospital · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
