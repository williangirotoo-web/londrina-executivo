/**
 * app/londrina-curitiba/page.tsx — Londrina Executivo
 * KEYWORD: transfer londrina curitiba
 * CANONICAL: https://londrinaexecutivo.com.br/londrina-curitiba
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaCuritiba,
  alternates: { canonical: `${business.url}/londrina-curitiba` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Executivo Londrina Curitiba — 398 km",
  description:
    "Transfer executivo de Londrina para Curitiba em 398 km pela BR-376. " +
    "Aeroporto Afonso Pena, hospitais especializados e centros empresariais.",
  serviceType: "Transfer Executivo Interestadual",
  url: `${business.url}/londrina-curitiba`,
  areaServed: ["Londrina", "Curitiba", "Paraná"],
  image: `${business.url}/og-londrina-curitiba.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo leva o transfer de Londrina a Curitiba?",
    answer:
      "O percurso de Londrina a Curitiba cobre 398 km pela BR-376. " +
      "O tempo médio é de 4 horas e 30 minutos em condições normais. " +
      "Em horários de pico nas saídas das cidades ou em dias chuvosos — comuns na Serra do Mar — " +
      "recomendamos adicionar 30 minutos ao planejamento.",
  },
  {
    question: "Qual rota é utilizada no transfer Londrina-Curitiba?",
    answer:
      "A rota principal segue pela BR-376, que atravessa o norte do Paraná até a região metropolitana de Curitiba. " +
      "No trecho da Serra do Mar, a BR-376 oferece paisagens privilegiadas mas exige atenção redobrada " +
      "em dias de neblina e chuva — razão adicional para preferir um motorista profissional que conhece o percurso.",
  },
  {
    question: "O transfer atende o Aeroporto Afonso Pena em Curitiba?",
    answer:
      "Sim. O Aeroporto Internacional Afonso Pena (IATA: CWB) está localizado em São José dos Pinhais, " +
      "a 18 km do centro de Curitiba. Realizamos transfer de Londrina diretamente ao aeroporto " +
      "com monitoramento de voo em tempo real. Para voos internacionais com saída de Curitiba, " +
      "recomendamos sair de Londrina com sete horas de antecedência.",
  },
  {
    question: "Quais hospitais em Curitiba são atendidos pelo transfer?",
    answer:
      "Curitiba é referência nacional em saúde, com hospitais como o Hospital Erasto Gaertner " +
      "(oncologia), Hospital de Clínicas da UFPR, Hospital Marcelino Champagnat, " +
      "Hospital Pequeno Príncipe (pediatria) e Hospital Nossa Senhora das Graças. " +
      "Atendemos pacientes e acompanhantes de Londrina que precisam de transporte confortável " +
      "para tratamentos e procedimentos na capital paranaense.",
  },
  {
    question: "Como funcionam os pedágios na rota Londrina-Curitiba?",
    answer:
      "A BR-376 possui pedágios nos trechos concessionados entre Apucarana e a região metropolitana de Curitiba. " +
      "O valor total dos pedágios é incluído no orçamento informado no momento do agendamento — " +
      "sem cobranças adicionais ou surpresas no final da viagem.",
  },
  {
    question: "O serviço atende centros empresariais e reuniões em Curitiba?",
    answer:
      "Sim. Curitiba concentra sedes regionais de grandes empresas, escritórios de advocacia, " +
      "escritórios de contabilidade e centros de negócios como o CIC (Cidade Industrial de Curitiba) " +
      "e o bairro Batel. Para executivos com agenda de reuniões em Curitiba, " +
      "disponibilizamos motorista por horas para deslocamentos entre compromissos durante a visita.",
  },
  {
    question: "É possível contratar o transfer para Curitiba com retorno no mesmo dia?",
    answer:
      "Sim. Para executivos com reuniões em Curitiba e retorno no mesmo dia, " +
      "o motorista aguarda na capital durante toda a agenda e retorna a Londrina ao final. " +
      "O serviço é cobrado como diária incluindo ida e volta, sem custo adicional por tempo de espera " +
      "dentro do horário acordado.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Londrina Curitiba", url: "/londrina-curitiba" },
])

const waCuritiba = whatsappUrl(
  "Olá! Gostaria de solicitar um transfer executivo de Londrina para Curitiba."
)

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function LondrinaCuritibaPage() {
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
            <span style={{ color: "#C9A84C" }}>Transfer Londrina Curitiba</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image src="/fotos/hero-transporte-executivo.webp"
              alt="Transfer executivo Londrina Curitiba — veículo premium BR-376"
              fill priority sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  🏙️ Transfer Executivo · Londrina → Curitiba · 398 km
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina → Curitiba</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                398 km pela BR-376 com veículo executivo premium e motorista profissional.
                Aeroporto Afonso Pena, hospitais especializados, centros empresariais e retorno no mesmo dia.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 398 km · ≈ 4h30", "✓ Pedágios inclusos", "✓ Aeroporto CWB", "✓ Nota fiscal PJ"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Londrina → Curitiba · 398 km</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>≈ 4h30 · BR-376 · Aeroporto CWB · Pedágios inclusos</p>
          </div>
          <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        {/* ROTA E DISTÂNCIA */}
        <section aria-labelledby="rota-cwb-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rota-cwb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Rota BR-376, pedágios e tempo médio
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O transfer de Londrina a Curitiba percorre <strong style={{ color: "#F0F0F0" }}>398 quilômetros</strong> pela
                  BR-376 — a principal rodovia que conecta o norte do Paraná à capital do estado.
                  O tempo médio é de <strong style={{ color: "#F0F0F0" }}>4 horas e 30 minutos</strong> em condições normais,
                  com o percurso passando por Apucarana, Maringá, Campo Mourão e Ponta Grossa antes
                  de chegar à região metropolitana de Curitiba.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O trecho mais exigente da BR-376 é a descida da Serra do Mar — especialmente entre
                  Guaratuba e São José dos Pinhais. Em dias de chuva ou neblina intensa,
                  esse trecho pode acrescentar 20 a 30 minutos ao trajeto. Nosso motorista conhece
                  a rota e adapta a velocidade às condições climáticas, priorizando sempre a segurança.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  <strong style={{ color: "#C9A84C" }}>Pedágios:</strong> a BR-376 possui praças de pedágio nos trechos
                  entre Apucarana e a região de Curitiba. O valor total está incluso no orçamento confirmado
                  no agendamento — sem cobranças adicionais após a viagem.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para compromissos com horário fixo — voo no Afonso Pena, reunião com hora marcada
                  ou consulta médica — calculamos a saída de Londrina considerando o tempo de percurso
                  mais uma margem de segurança de 30 a 45 minutos, garantindo chegada tranquila.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AEROPORTO AFONSO PENA */}
        <section aria-labelledby="aeroporto-cwb-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="aeroporto-cwb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Aeroporto Internacional Afonso Pena — CWB
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O Aeroporto Internacional Afonso Pena (IATA: CWB) está localizado em São José dos Pinhais,
                  a 18 km do centro de Curitiba. É o principal aeroporto do Paraná, operando voos domésticos
                  para São Paulo, Rio de Janeiro, Brasília, Florianópolis e Salvador, além de voos
                  internacionais para destinos como Miami, Lisboa e Buenos Aires.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para executivos de Londrina que precisam embarcar em voos internacionais a partir de Curitiba,
                  o transfer executivo oferece a alternativa mais prática: sair de Londrina com sete horas
                  de antecedência, chegar ao CWB descansado e com tempo para check-in, despacho de bagagem
                  e controle de passaporte.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Para chegadas no Afonso Pena, nosso motorista aguarda no saguão de desembarque com placa
                  personalizada e monitoramento do voo em tempo real. Em caso de atraso, ajustamos o horário
                  de chegada ao aeroporto automaticamente.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  O Afonso Pena é uma alternativa estratégica ao Guarulhos para voos com destino ao Sul do Brasil
                  ou Mercosul. Londrina a CWB (398 km · 4h30) vs Londrina a GRU (470 km · 5h30) —
                  para voos com destino ao Cone Sul, Curitiba pode ser a escolha mais eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOSPITAIS E EMPRESAS */}
        <section aria-labelledby="destinos-cwb-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="destinos-cwb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Hospitais, centros empresariais e destinos atendidos em Curitiba
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Curitiba concentra os principais hospitais especializados e centros de negócios do Paraná.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                { icon: "🏥", titulo: "Hospitais especializados", desc: "Hospital Erasto Gaertner (oncologia), HC-UFPR, Hospital Marcelino Champagnat, Hospital Pequeno Príncipe e Hospital Nossa Senhora das Graças. Atendemos pacientes e acompanhantes de Londrina em tratamentos regulares." },
                { icon: "✈️", titulo: "Aeroporto Afonso Pena (CWB)", desc: "18 km do centro de Curitiba. Voos domésticos e internacionais. Transfer com monitoramento de voo e motorista aguardando no saguão para chegadas." },
                { icon: "🏢", titulo: "Centro empresarial e Batel", desc: "Escritórios corporativos no Batel, Centro Cívico, CIC e Pinheirinho. Reuniões, negociações e visitas a clientes com motorista disponível por horas durante toda a agenda." },
                { icon: "⚖️", titulo: "Fóruns e tribunais", desc: "TJ-PR, TRF-4 e TRT-9 concentram advogados e procuradores de todo o Paraná. Audiências e julgamentos com hora marcada que não admitem atraso." },
                { icon: "🎓", titulo: "Universidades e pesquisa", desc: "UFPR, PUC-PR, UTFPR e institutos de pesquisa. Professores visitantes, bancas doutorais e eventos acadêmicos com transporte executivo." },
                { icon: "🛒", titulo: "Eventos e feiras em Curitiba", desc: "Expo Unimed, Espaço das Américas e centros de convenções. Transfer para grupos com van executiva para equipes corporativas em eventos em Curitiba." },
              ].map(d => (
                <div key={d.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{d.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{d.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATIVO */}
        <section aria-labelledby="corp-cwb-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="corp-cwb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Por que escolher o transfer privado Londrina-Curitiba
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Londrina e Curitiba são as duas maiores cidades do Paraná e concentram juntas a maior parte
                do movimento empresarial do estado. Advogados, contadores, executivos do agronegócio
                e profissionais de saúde de Londrina viajam regularmente à capital para audiências,
                reuniões e tratamentos médicos.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                O transfer executivo privado elimina o desgaste de dirigir 398 km em rodovia —
                especialmente no trecho da Serra do Mar, que exige concentração constante.
                O executivo embarca em Londrina, trabalha ou descansa durante as 4h30 de percurso,
                e chega a Curitiba pronto para a agenda. O retorno no mesmo dia está disponível
                com motorista aguardando durante toda a programação.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para empresas com executivos que viajam a Curitiba com regularidade,
                o contrato mensal com faturamento centralizado elimina o processo de reembolso individual
                e oferece relatório de viagens e nota fiscal para o departamento financeiro.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-cwb-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-cwb-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
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
              Agende seu transfer Londrina → Curitiba
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              398 km pela BR-376 com veículo premium. Pedágios inclusos. Nota fiscal disponível.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waCuritiba} target="_blank" rel="noopener noreferrer"
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
                { href: "/transfer-congonhas-londrina",               label: "Transfer → Congonhas (CGH)" },
                { href: "/londrina-maringa",                          label: "Transfer → Maringá" },
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
                Transfer Londrina Curitiba · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
