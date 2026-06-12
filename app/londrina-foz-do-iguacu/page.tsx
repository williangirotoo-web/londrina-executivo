/**
 * app/londrina-foz-do-iguacu/page.tsx — Londrina Executivo
 * KEYWORD: transfer londrina foz do iguacu
 * CANONICAL: https://londrinaexecutivo.com.br/londrina-foz-do-iguacu
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { buildServiceSchema, buildFAQSchema, buildBreadcrumbSchema, serializeSchema } from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.londrinaFoz,
  alternates: { canonical: `${business.url}/londrina-foz-do-iguacu` },
}

const serviceSchema = buildServiceSchema({
  name: "Transfer Executivo Londrina Foz do Iguaçu — 650 km",
  description:
    "Serviço de transfer executivo de Londrina para Foz do Iguaçu em 650 km. " +
    "Turismo corporativo, aeroporto internacional e viagens empresariais.",
  serviceType: "Transfer Executivo Interestadual Longa Distância",
  url: `${business.url}/londrina-foz-do-iguacu`,
  areaServed: ["Londrina", "Foz do Iguaçu", "Paraná"],
  image: `${business.url}/og-londrina-foz.jpg`,
})

const faqItems = [
  {
    question: "Quanto tempo leva o transfer de Londrina a Foz do Iguaçu?",
    answer:
      "O percurso de Londrina a Foz do Iguaçu cobre aproximadamente 650 km pela BR-369 e BR-277. " +
      "O tempo médio é de 7 a 8 horas em condições normais, " +
      "com paradas estratégicas para descanso e alimentação.",
  },
  {
    question: "O transfer atende o Aeroporto Internacional de Foz do Iguaçu?",
    answer:
      "Sim. O Aeroporto Internacional de Foz do Iguaçu (IATA: IGU) está a 14 km do centro da cidade " +
      "e recebe voos de São Paulo, Curitiba e destinos internacionais. " +
      "Realizamos transfer de Londrina diretamente ao aeroporto com monitoramento de voo em tempo real.",
  },
  {
    question: "O serviço atende viagens de turismo corporativo às Cataratas?",
    answer:
      "Sim. Foz do Iguaçu é um dos destinos de turismo corporativo mais visitados do Brasil, " +
      "com as Cataratas do Iguaçu, o Parque das Aves e o complexo hoteleiro de alto padrão. " +
      "Atendemos grupos corporativos, incentivos e viagens de negócios com van executiva para até 7 passageiros.",
  },
  {
    question: "Como funciona o transfer para a fronteira com Argentina e Paraguai?",
    answer:
      "Foz do Iguaçu faz fronteira com Puerto Iguazú (Argentina) e Ciudad del Este (Paraguai). " +
      "Para executivos com compromissos na Argentina, realizamos o transfer até a Ponte Internacional Tancredo Neves. " +
      "O motorista bilíngue em espanhol facilita a comunicação na fronteira.",
  },
  {
    question: "Têm serviço de motorista local durante a estadia em Foz do Iguaçu?",
    answer:
      "Sim. Para executivos que permanecem em Foz do Iguaçu por um ou mais dias, " +
      "disponibilizamos motorista executivo por horas ou diária com veículo premium, " +
      "cobrindo deslocamentos entre hotel, empresa, aeroporto e pontos turísticos corporativos.",
  },
  {
    question: "É possível fazer paradas durante o trajeto Londrina-Foz?",
    answer:
      "Sim. Para viagens de 7 a 8 horas, incluímos paradas estratégicas para descanso e alimentação " +
      "em cidades como Cascavel, principal polo regional no meio do trajeto. " +
      "As paradas são planejadas no agendamento para não comprometer o horário de chegada.",
  },
  {
    question: "Qual o veículo recomendado para a viagem Londrina-Foz do Iguaçu?",
    answer:
      "Para o percurso de 650 km, recomendamos o Jeep Compass ou Toyota Corolla Cross " +
      "pelo espaço interno superior e conforto em viagens longas. " +
      "Para grupos, a van executiva atende até 7 passageiros com bagageiro amplo.",
  },
]

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Transfer Londrina Foz do Iguaçu", url: "/londrina-foz-do-iguacu" },
])

const waFoz = whatsappUrl(
  "Olá! Gostaria de solicitar um transfer executivo de Londrina para Foz do Iguaçu."
)

export default function LondrinaFozPage() {
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
            <span style={{ color: "#C9A84C" }}>Transfer Londrina Foz do Iguaçu</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" className="hero-image-wrapper">
            <Image
              src="/fotos/hero-transfer-executivo.webp"
              alt="Transfer executivo Londrina Foz do Iguaçu — veículo premium para viagem longa"
              fill priority
              sizes="(max-width: 768px) 0px, 100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "660px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🌊 Transfer Executivo · Londrina → Foz do Iguaçu · 650 km</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Transfer Executivo
                <span style={{ display: "block", color: "#C9A84C" }}>Londrina → Foz do Iguaçu</span>
              </h1>
              <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
                650 km com veículo executivo premium para turismo corporativo, aeroporto internacional,
                Cataratas do Iguaçu e viagens de negócios. Motorista profissional e nota fiscal.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href={waFoz} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar transfer
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ 650 km · ≈ 7-8h", "✓ Veículo premium", "✓ Bilíngue EN/ES/PT", "✓ Nota fiscal PJ"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STICKY */}
        <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Transfer Londrina → Foz do Iguaçu · 650 km</p>
            <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>≈ 7-8h · Aeroporto IGU · Cataratas · Fronteira</p>
          </div>
          <a href={waFoz} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none", whiteSpace: "nowrap" }}>
            <WaIcon color="#0A0A0A" size={16} /> Solicitar agora
          </a>
        </div>

        {/* ROTA */}
        <section aria-labelledby="rota-foz-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="rota-foz-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Rota, distância e planejamento da viagem
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", maxWidth: "900px" }}>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  O transfer Londrina-Foz do Iguaçu percorre <strong style={{ color: "#F0F0F0" }}>650 quilômetros</strong> pela BR-369
                  até Cascavel e depois pela BR-277 até Foz do Iguaçu, na tríplice fronteira do Brasil com Argentina e Paraguai.
                  O tempo médio é de <strong style={{ color: "#F0F0F0" }}>7 a 8 horas</strong>, incluindo paradas estratégicas.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  A BR-277 é uma das principais rodovias do Paraná, conectando Curitiba a Foz do Iguaçu.
                  O trecho entre Cascavel e Foz é bem sinalizado e mantido, com pedágios inclusos no orçamento informado.
                </p>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Para viagens de longa distância como esta, recomendamos sair de Londrina com antecedência suficiente
                  para chegar ao destino descansado. O motorista profissional assume toda a condução — o passageiro
                  pode trabalhar, descansar ou se preparar para a agenda de negócios durante o trajeto.
                </p>
                <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  Cascavel é a principal cidade no percurso, localizada aproximadamente na metade do trajeto.
                  É o ponto ideal para a parada de descanso e alimentação, com opções de restaurantes e serviços.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TURISMO CORPORATIVO */}
        <section aria-labelledby="turismo-foz-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="turismo-foz-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1rem" }}>
              Turismo corporativo e viagens empresariais
            </h2>
            <p style={{ color: "#6B6B6B", marginBottom: "2.5rem", maxWidth: "600px" }}>
              Foz do Iguaçu concentra uma das maiores infraestruturas hoteleiras e de eventos do Brasil.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                { icon: "🌊", titulo: "Cataratas do Iguaçu", desc: "Uma das sete maravilhas naturais do mundo. Destino de incentivo e turismo corporativo de alto padrão, com hotéis como o Belmond Hotel das Cataratas." },
                { icon: "✈️", titulo: "Aeroporto Internacional IGU", desc: "O Aeroporto Internacional de Foz do Iguaçu (IGU) opera voos para São Paulo, Curitiba, Rio e destinos internacionais. Transfer direto de Londrina ao aeroporto." },
                { icon: "🏨", titulo: "Hotéis executivos", desc: "Foz concentra hotéis de bandeiras internacionais — Rafain, Bourbon, Wish e outros — ideais para grupos corporativos em eventos e convenções." },
                { icon: "🌎", titulo: "Fronteira Argentina e Paraguai", desc: "Puerto Iguazú (Argentina) e Ciudad del Este (Paraguai) a minutos do centro. Motorista bilíngue em espanhol para compromissos na fronteira." },
                { icon: "🏭", titulo: "Polo Industrial de Foz", desc: "A Usina Hidrelétrica de Itaipu e o polo industrial de Foz atraem executivos e fornecedores de todo o Brasil regularmente." },
                { icon: "🎪", titulo: "Eventos e convenções", desc: "O Centro de Convenções de Foz do Iguaçu recebe eventos nacionais e internacionais. Transfer para grupos com van executiva de 7 lugares." },
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

        {/* PARA EMPRESAS */}
        <section aria-labelledby="emp-foz-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="emp-foz-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>
              Por que escolher o transfer privado para Foz do Iguaçu
            </h2>
            <div style={{ maxWidth: "780px" }}>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Voos diretos entre Londrina e Foz do Iguaçu são inexistentes ou muito limitados.
                A alternativa comum é fazer conexão em São Paulo ou Curitiba — o que transforma uma viagem
                de 7 horas por terra em um processo de 10 a 12 horas porta a porta, com check-in, espera em aeroporto,
                embarque, desembarque e deslocamento final.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                O transfer executivo privado resolve esse problema com conforto real: o passageiro
                embarca em Londrina e desembarca diretamente em Foz do Iguaçu, sem conexões, sem filas
                e sem restrições de bagagem. Para grupos de 2 a 4 pessoas, o custo por pessoa é frequentemente
                inferior ao de passagens aéreas com conexão.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Para empresas com equipes que participam de eventos em Foz, a van executiva com capacidade para 7 passageiros
                permite transportar toda a equipe em um único veículo — eliminando os custos de múltiplos táxis ou aplicativos
                e garantindo que o grupo chegue junto e no horário.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-foz-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
            <h2 id="faq-foz-heading" style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>
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
              Agende seu transfer Londrina → Foz do Iguaçu
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              650 km com veículo premium, motorista profissional e nota fiscal disponível.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a href={waFoz} target="_blank" rel="noopener noreferrer"
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
                { href: "/londrina-guarulhos",            label: "Transfer → Guarulhos (GRU)" },
                { href: "/londrina-sao-paulo",            label: "Transfer → São Paulo" },
                { href: "/londrina-maringa",              label: "Transfer → Maringá" },
                { href: "/airport-transfer-londrina",    label: "Airport Transfer (LDB)" },
                { href: "/transfer-corporativo-londrina",label: "Transfer Corporativo" },
                { href: "/contato",                      label: "Solicitar orçamento" },
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
                Transfer Londrina Foz do Iguaçu · {business.address.city}, {business.address.stateCode} · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a>
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
