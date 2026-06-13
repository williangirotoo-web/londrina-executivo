/**
 * app/motorista-particular-londrina/page.tsx
 * KEYWORD: motorista particular londrina
 * PÚBLICO: diferente de /motorista-executivo-londrina
 * Particular = famílias, idosos, viagens pessoais, eventos sociais
 * Executivo = empresas, diretoria, reuniões corporativas
 */
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaParticular,
  alternates: { canonical: `${business.url}/motorista-particular-londrina` },
}

const serviceSchema = buildServiceSchema({
  name: "Motorista Particular em Londrina",
  description:
    "Motorista particular em Londrina para viagens pessoais, aeroporto, consultas médicas, " +
    "eventos sociais, formaturas e deslocamentos por hora. Disponível para idosos e famílias.",
  serviceType: "Motorista Particular",
  url: `${business.url}/motorista-particular-londrina`,
  areaServed: ["Londrina", "Paraná"],
  image: `${business.url}/og-motorista-particular.jpg`,
})

const faqItems = [
  {
    question: "Qual a diferença entre motorista particular e motorista executivo?",
    answer:
      "O motorista executivo atende o ambiente corporativo: reuniões de diretoria, visitas a clientes empresariais, " +
      "recepção de parceiros e transferências para aeroportos em viagens de negócios. " +
      "O motorista particular atende necessidades pessoais e familiares: levar idosos a consultas, " +
      "buscar filhos em formaturas, fazer viagens de lazer, ir a festas e eventos sociais " +
      "ou simplesmente não querer dirigir em determinados momentos. " +
      "O veículo e o padrão de serviço são os mesmos — o contexto e o público são diferentes.",
  },
  {
    question: "O serviço atende idosos e pessoas com dificuldade de locomoção?",
    answer:
      "Sim. O motorista particular é amplamente utilizado por famílias para levar idosos a consultas médicas, " +
      "exames de rotina, fisioterapia e visitas. O motorista auxilia no embarque e desembarque " +
      "com paciência e cuidado, sem pressa. Para idosos que não têm familiar disponível para conduzir " +
      "ou que preferem não depender de familiares, o serviço oferece independência e segurança.",
  },
  {
    question: "Posso contratar o motorista particular para levar e buscar em eventos sociais?",
    answer:
      "Sim. Casamentos, formaturas, festas de aniversário, eventos de gala e confraternizações " +
      "são situações em que muitas pessoas preferem não dirigir — seja pelo trânsito, " +
      "pela possibilidade de consumir bebidas alcóolicas ou simplesmente pelo conforto. " +
      "O motorista busca no endereço, aguarda durante o evento ou retorna em horário combinado.",
  },
  {
    question: "O motorista particular atende viagens para aeroportos?",
    answer:
      "Sim. Transfer para o Aeroporto de Londrina (LDB) e para aeroportos de outras cidades — " +
      "como Guarulhos (GRU), Congonhas (CGH) e Curitiba (CWB) — são serviços muito utilizados " +
      "por pessoas físicas que preferem não deixar o carro no aeroporto por dias " +
      "ou que querem ser conduzidas com conforto para voos de lazer e viagens pessoais.",
  },
  {
    question: "É possível contratar o motorista particular por hora para compromissos no mesmo dia?",
    answer:
      "Sim. Para quem tem vários compromissos em Londrina no mesmo dia — consulta médica de manhã, " +
      "almoço com familiar, compras e retorno — o motorista particular por horas resolve tudo " +
      "com um único contato. Sem a preocupação de estacionar em cada local, " +
      "sem Uber em horário de pico, sem depender de outra pessoa.",
  },
  {
    question: "O serviço atende viagens intermunicipais para cidades vizinhas?",
    answer:
      "Sim. Viagens pessoais para Maringá (120 km), Apucarana, Cambé, Rolândia e outras cidades " +
      "da região são atendidas normalmente. Para viagens mais longas — como Londrina a Curitiba " +
      "ou Londrina a São Paulo — o motorista conduz com segurança e o passageiro aproveita " +
      "o trajeto para descansar ou se preparar para o compromisso.",
  },
  {
    question: "O motorista particular emite recibo ou nota fiscal?",
    answer:
      "Sim. Emitimos nota fiscal para pessoa física. " +
      "Para quem precisa de comprovante de transporte para reembolso de plano de saúde " +
      "ou simplesmente para controle pessoal, o documento é emitido com data, origem, " +
      "destino e valor, enviado por e-mail ou WhatsApp após a viagem.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Motorista Particular Londrina", url: "/motorista-particular-londrina" },
])

const waParticular = whatsappUrl("Olá! Gostaria de contratar um motorista particular em Londrina.")

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const situacoes = [
  { icon: "👴", titulo: "Para idosos e familiares", desc: "Consultas médicas, exames, fisioterapia e compras sem depender de familiares em horário de trabalho. O motorista auxilia no embarque e desembarque com atenção e paciência." },
  { icon: "✈️", titulo: "Para viagens de lazer", desc: "Transfer para aeroporto em viagens pessoais sem deixar o carro estacionado por dias. Ida com conforto, chegada sem estresse de trânsito e sem custo de estacionamento." },
  { icon: "🎉", titulo: "Para festas e eventos sociais", desc: "Casamentos, formaturas, aniversários e confraternizações. Motorista busca, aguarda ou retorna em horário combinado — sem se preocupar com trânsito ou bevidas." },
  { icon: "🏥", titulo: "Para consultas e tratamentos", desc: "Consultas regulares, exames de rotina e tratamentos de saúde. Ida e volta sem depender de ninguém, com veículo climatizado e motorista respeitoso." },
  { icon: "🗺️", titulo: "Para viagens intermunicipais", desc: "Maringá, Apucarana, Curitiba, São Paulo. Viagens pessoais de qualquer distância com segurança e conforto — o passageiro descansa durante o trajeto." },
  { icon: "📅", titulo: "Para múltiplos compromissos no dia", desc: "Mercado, banco, farmácia, médico, almoço. Um único motorista gerencia todos os deslocamentos do dia — sem estacionar, sem aplicativo, sem espera." },
]

export default function MotoristaParticularPage() {
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
            <span style={{ color: "#C9A84C" }}>Motorista Particular Londrina</span>
          </div>
        </nav>

        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image src="/fotos/motorista-executivo.webp" alt="Motorista particular em Londrina para viagens pessoais, idosos e eventos sociais" fill priority sizes="(max-width: 768px) 0px, 100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(10,10,10,0.92) 0%,rgba(10,10,10,0.75) 50%,rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🚗 Motorista Particular · Londrina · Por Hora ou Diária · 24h</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Motorista Particular
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                Motorista para viagens pessoais, consultas médicas, aeroporto, eventos sociais e deslocamentos do dia a dia.
                Veículo climatizado, disponível por hora ou diária. Para famílias, idosos e quem não quer dirigir.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waParticular} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Contratar motorista
                </a>
                <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Por hora ou diária", "✓ Idosos e famílias", "✓ Eventos sociais", "✓ Aeroporto e viagens"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Motorista Particular · Londrina</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Viagens pessoais · Idosos · Festas · Aeroporto · Por hora ou diária</p>
          </div>
          <a href={waParticular} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Contratar agora
          </a>
        </div>

        <section aria-labelledby="situacoes-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="situacoes-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Quando contratar um motorista particular em Londrina
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>Situações do dia a dia em que ter um motorista faz diferença real.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {situacoes.map(s => (
                <div key={s.titulo} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{s.icon}</span>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{s.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="quem-usa-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="quem-usa-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Para quem é o motorista particular em Londrina
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O motorista particular não é exclusividade de executivos ou grandes empresas.
                  Em Londrina, o serviço é cada vez mais utilizado por famílias que precisam
                  de mobilidade confiável para situações específicas — levar os pais idosos ao médico
                  sem precisar tirar folga do trabalho, buscar filhos em formaturas longe da cidade,
                  ou simplesmente não querer dirigir no final de semana após uma festa.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Para quem tem autonomia reduzida — por idade, por condição de saúde ou por
                  simplesmente não ter carteira de motorista — o serviço oferece independência real.
                  Com um agendamento pelo WhatsApp, a pessoa tem um veículo e um motorista
                  disponíveis para qualquer compromisso, sem depender da agenda de familiares.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Jovens que ainda não têm carteira de motorista, turistas em visita a Londrina,
                  pessoas que estão se recuperando de cirurgia e não podem dirigir, e quem simplesmente
                  prefere chegar descansado a compromissos importantes — todos são usuários naturais
                  do motorista particular.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  A contratação é direta: WhatsApp, data, horário e destino.
                  O motorista chega ao endereço combinado, conduz com segurança e retorna
                  no horário acordado. Sem aplicativo, sem avaliação de estrela,
                  sem motorista diferente a cada vez. O mesmo padrão, sempre.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="viagens-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="viagens-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Motorista para viagens intermunicipais e aeroportos
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Uma das maiores demandas do motorista particular em Londrina é o transporte para aeroportos —
                tanto no Aeroporto Governador José Richa (LDB) quanto para aeroportos de outras cidades em viagens
                de lazer. Deixar o carro no estacionamento do aeroporto por 10 ou 15 dias custa mais
                do que o transfer de ida e volta. E retornar de uma viagem longa para ainda ter que dirigir
                é um desgaste desnecessário.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Para viagens pessoais a Maringá, Curitiba ou São Paulo — para visitar família, fazer tratamento médico
                especializado ou simplesmente viajar sem a fadiga de dirigir centenas de quilômetros —
                o motorista particular oferece o conforto de uma viagem tranquila, com paradas quando o passageiro
                precisar e chegada descansada ao destino.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para idosos que viajam sozinhos ou que precisam de apoio durante deslocamentos mais longos,
                o serviço oferece um nível de cuidado que vai além do transporte — o motorista é também
                um acompanhante de confiança durante o trajeto, garantindo que a viagem seja feita
                com segurança e sem imprevistos.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-part-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-part-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Perguntas frequentes</h2>
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
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Contratar motorista particular em Londrina</h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>Por hora, diária ou viagem. Famílias, idosos, festas e aeroporto. Resposta em minutos.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waParticular} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
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
                { href: "/motorista-executivo-londrina",              label: "Motorista Executivo" },
                { href: "/airport-transfer-londrina",                 label: "Airport Transfer (LDB)" },
                { href: "/transporte-hospital-londrina",              label: "Transporte para Hospitais" },
                { href: "/transporte-executivo-24-horas-londrina",    label: "Atendimento 24 Horas" },
                { href: "/londrina-guarulhos",                        label: "Transfer → Guarulhos" },
                { href: "/contato",                                   label: "Solicitar orçamento" },
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
              <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>Motorista Particular · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a></p>
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
