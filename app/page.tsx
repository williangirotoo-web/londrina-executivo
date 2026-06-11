/**
 * app/page.tsx — Home · Londrina Executivo — V2
 *
 * Keyword principal: transporte executivo premium londrina
 * Canonical: https://londrinaexecutivo.com.br/
 * SEO: canonical, schema, metadata, sitemap, robots, GA4, GSC — sem alteração
 */

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  serializeSchema,
} from "@/lib/schemas"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = pageMetadata.home

const serviceSchema = buildServiceSchema({
  name: "Londrina Executivo — Transporte Executivo Premium em Londrina",
  description: business.description,
  serviceType: "Transporte Executivo Premium",
  url: business.url,
  areaServed: ["Londrina", "Paraná", "São Paulo", "Curitiba", "Guarulhos"],
  image: `${business.url}/og-home.jpg`,
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Londrina Executivo", url: "/" },
])

const waHome = whatsappUrl(
  "Olá! Gostaria de solicitar um orçamento para transporte executivo em Londrina."
)

const rotas = [
  {
    icon: "✈️",
    nome: "Londrina → Guarulhos",
    sub: "Aeroporto Internacional GRU · T1, T2 e T3",
    km: "470 km",
    tempo: "≈ 5h30",
    href: "/londrina-guarulhos",
  },
  {
    icon: "🏙️",
    nome: "Londrina → São Paulo",
    sub: "Capital · Grande SP · Congonhas · Hospitais",
    km: "450 km",
    tempo: "≈ 5h",
    href: "/londrina-sao-paulo",
  },
  {
    icon: "🛬",
    nome: "Airport Transfer LDB",
    sub: "Aeroporto Gov. José Richa · Londrina",
    km: "Local",
    tempo: "Monit. de voo",
    href: "/airport-transfer-londrina",
  },
  {
    icon: "💼",
    nome: "Motorista Executivo",
    sub: "Com veículo premium incluso",
    km: "Sob demanda",
    tempo: "Por horas ou diária",
    href: "/motorista-executivo-londrina",
  },
]

const passos = [
  {
    num: "1",
    titulo: "Solicite pelo WhatsApp",
    desc: "Informe origem, destino, data e horário. Nossa equipe responde em minutos com confirmação e valor.",
  },
  {
    num: "2",
    titulo: "Receba a confirmação",
    desc: "Você recebe os dados do motorista, placa do veículo e horário confirmado antes do dia da viagem.",
  },
  {
    num: "3",
    titulo: "Embarque com conforto",
    desc: "Motorista no local combinado, pontual e uniformizado. Veículo climatizado e pronto para a viagem.",
  },
]

const setores = [
  { icon: "🌾", nome: "Agronegócio" },
  { icon: "🏥", nome: "Saúde" },
  { icon: "⚖️", nome: "Jurídico" },
  { icon: "🏭", nome: "Indústria" },
  { icon: "🏢", nome: "Corporativo" },
  { icon: "🌍", nome: "Internacional" },
]

const diferenciais = [
  {
    icon: "🎯",
    titulo: "Pontualidade que não negocia",
    desc: "Saída calculada pelo horário do seu compromisso. Monitoramos trânsito e voos em tempo real para garantir sua chegada.",
  },
  {
    icon: "🎩",
    titulo: "Motorista de apresentação executiva",
    desc: "Traje formal, postura discreta e comunicação profissional. Ideal para receber clientes e visitantes internacionais.",
  },
  {
    icon: "🚗",
    titulo: "Veículo premium em perfeito estado",
    desc: "Frota executiva climatizada, higienizada e revisada. Conforto e segurança em cada quilômetro.",
  },
  {
    icon: "📋",
    titulo: "Nota fiscal para CNPJ",
    desc: "Emissão imediata para pessoa física ou jurídica. Faturamento mensal disponível para empresas com demanda regular.",
  },
  {
    icon: "🗣️",
    titulo: "Atendimento bilíngue EN/PT",
    desc: "Motorista com fluência em inglês para executivos estrangeiros. Atendimento também em espanhol.",
  },
  {
    icon: "📱",
    titulo: "Reserva em minutos pelo WhatsApp",
    desc: "Sem app, sem cadastro, sem burocracia. Uma mensagem com origem, destino e horário é suficiente.",
  },
]

const servicos = [
  { icon: "✈️", titulo: "Airport Transfer",         desc: "Transfer executivo no Aeroporto Governador José Richa (LDB). Motorista uniformizado, monitoramento de voo e recepção personalizada.",           href: "/airport-transfer-londrina" },
  { icon: "🏙️", titulo: "Londrina → São Paulo",     desc: "Transfer executivo de 450 km com veículo premium. Paulista, Faria Lima, Congonhas, hospitais e toda a Grande SP.",                              href: "/londrina-sao-paulo" },
  { icon: "🌐", titulo: "Londrina → Guarulhos",     desc: "Transfer direto ao Aeroporto Internacional de Guarulhos (GRU). 470 km com pontualidade garantida para voos nacionais e internacionais.",        href: "/londrina-guarulhos" },
  { icon: "💼", titulo: "Motorista Executivo",       desc: "Motorista profissional à disposição por horas ou sob demanda. Agenda corporativa, reuniões e deslocamentos com veículo premium.",               href: "/motorista-executivo-londrina" },
  { icon: "🤝", titulo: "Transfer Corporativo",     desc: "Serviço de transfer premium para empresas. Nota fiscal, faturamento mensal e atendimento dedicado para equipes e visitantes.",                  href: "/transfer-corporativo-londrina" },
  { icon: "🚗", titulo: "Transporte Executivo",     desc: "Mobilidade executiva completa para empresas e profissionais. Rotas locais e interestaduais com padrão premium.",                                 href: "/transporte-terrestre-executivo-londrina" },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(serviceSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeSchema(breadcrumbSchema) }} />

      <main>

        {/* ════════ 1. HERO ════════ */}
        <section aria-label="Londrina Executivo — Transporte Executivo Premium"
          style={{ background: "#0A0A0A", minHeight: "92vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
          {/* Hero image — priority load, above the fold */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image
              src="/fotos/hero-transfer-executivo.webp"
              alt="Transporte executivo premium em Londrina"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.3) 100%)" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(to right,transparent,#C9A84C,transparent)", zIndex: 1 }} />
          <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "6rem 1.5rem", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: "680px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "6px 18px", marginBottom: "2rem" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                <span style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Transporte Executivo Premium · Londrina · Paraná
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Transporte Executivo Premium
                <span style={{ display: "block", color: "#C9A84C" }}>em Londrina</span>
              </h1>
              <p style={{ fontSize: "clamp(1rem,1.8vw,1.2rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "560px" }}>
                Transfer, motorista executivo e transporte corporativo.
                Atendemos empresas, executivos e visitantes internacionais com
                veículo premium, pontualidade e nota fiscal.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
                <a href={waHome} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                  <WaIcon color="#0A0A0A" /> Solicitar orçamento
                </a>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {["✓ Veículo premium","✓ Nota fiscal PJ","✓ Motorista bilíngue EN/PT","✓ 24h disponível"].map(i => (
                  <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 2. ROTAS ════════ */}
        <section aria-labelledby="rotas-heading" style={{ background: "#0d0d0d", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
              <h2 id="rotas-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                Rotas e serviços disponíveis
              </h2>
              <p style={{ color: "#6B6B6B", maxWidth: "520px" }}>
                Deslocamentos com hora marcada, veículo premium e motorista profissional.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {rotas.map(r => (
                <Link key={r.href} href={r.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "#141414", borderRadius: "10px", padding: "1.25rem 1.5rem", border: "1px solid #2A2A2A", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{r.icon}</span>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", margin: "0 0 0.2rem" }}>{r.nome}</p>
                        <p style={{ fontSize: "0.8rem", color: "#6B6B6B", margin: 0 }}>{r.sub}</p>
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <p style={{ fontWeight: 800, fontSize: "1rem", color: "#C9A84C", margin: "0 0 0.15rem" }}>{r.km}</p>
                      <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: "0 0 0.3rem" }}>{r.tempo}</p>
                      <span style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 600 }}>Agendar →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ESPAÇO PARA FOTO REAL — preparado para substituição futura */}
            <div style={{ marginTop: "3rem", borderRadius: "12px", overflow: "hidden", border: "1px solid #2A2A2A", background: "#141414", minHeight: "280px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: "1.75rem" }}>
                  🚗
                </div>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                  Frota executiva — fotografia em breve
                </p>
                <p style={{ color: "#2A2A2A", fontSize: "0.75rem", margin: 0 }}>
                  {/* SUBSTITUIR: <Image src="/fotos/veiculo-principal.jpg" alt="Veículo executivo Londrina Executivo" fill style={{objectFit:'cover'}} /> */}
                  Veículo premium · Climatizado · Revisado
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 3. COMO FUNCIONA ════════ */}
        <section aria-labelledby="como-funciona-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
              <h2 id="como-funciona-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                Como funciona
              </h2>
              <p style={{ color: "#6B6B6B", maxWidth: "440px", margin: "0 auto" }}>
                Do agendamento ao embarque em três etapas simples.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2rem", maxWidth: "900px", margin: "0 auto", position: "relative" }}>
              {passos.map((p, idx) => (
                <div key={p.num} style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#C9A84C", color: "#0A0A0A", fontWeight: 900, fontSize: "1.25rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {p.num}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{p.titulo}</h3>
                      <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <a href={waHome} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#0A0A0A" /> Solicitar agora pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ════════ 4. SETORES ════════ */}
        <section aria-labelledby="setores-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
              <h2 id="setores-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                Setores atendidos
              </h2>
              <p style={{ color: "#6B6B6B", maxWidth: "520px" }}>
                Atendemos empresas e profissionais de diferentes segmentos que exigem padrão executivo em seus deslocamentos.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "1rem" }}>
              {setores.map(s => (
                <div key={s.nome} style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.5rem", border: "1px solid #2A2A2A", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{s.icon}</span>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#E8E8E8" }}>{s.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 5. DIFERENCIAIS ════════ */}
        <section aria-labelledby="diferenciais-heading" style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
              <h2 id="diferenciais-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                O padrão executivo em cada detalhe
              </h2>
              <p style={{ color: "#6B6B6B", maxWidth: "500px", margin: "0 auto" }}>
                Por que empresas e profissionais escolhem a Londrina Executivo.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
              {diferenciais.map(d => (
                <div key={d.titulo} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", flexShrink: 0 }}>
                    {d.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#F0F0F0", marginBottom: "0.4rem" }}>{d.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ════════ 5b. FROTA ════════ */}
        <section aria-labelledby="frota-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <div>
                <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
                <h2 id="frota-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                  Nossa Frota Executiva
                </h2>
                <p style={{ color: "#6B6B6B", maxWidth: "480px" }}>
                  Veículos premium revisados e climatizados para cada tipo de deslocamento.
                </p>
              </div>
              <Link href="/frota-executiva-londrina"
                style={{ color: "#C9A84C", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
                Ver frota completa →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
              {[
                {
                  modelo: "Toyota Corolla Cross",
                  categoria: "Sedan Executivo Premium",
                  passageiros: "Até 4 passageiros",
                  ideal: "Transfer GRU · Transfer SP · Motorista executivo",
                  specs: ["Automático", "Climatizado", "Espaço para bagagem despachada"],
                  src: "/fotos/frota-corolla-cross.webp",
                  alt: "Toyota Corolla Cross utilizado para transporte executivo em Londrina",
                },
                {
                  modelo: "Jeep Compass",
                  categoria: "SUV Executivo",
                  passageiros: "Até 4 passageiros",
                  ideal: "Transfer corporativo · Agenda executiva · Viagens longas",
                  specs: ["4x4 disponível", "Alto padrão de conforto", "Ideal para viagens interestaduais"],
                  src: "/fotos/frota-jeep-compass.webp",
                  alt: "Jeep Compass para transfer executivo e viagens corporativas",
                },
                {
                  modelo: "Volkswagen T-Cross",
                  categoria: "SUV Compacto Executivo",
                  passageiros: "Até 4 passageiros",
                  ideal: "Deslocamentos locais · Airport transfer LDB · Agenda corporativa",
                  specs: ["Compacto e ágil", "Climatizado", "Conforto executivo"],
                  src: "/fotos/frota-t-cross.webp",
                  alt: "Volkswagen T-Cross para transporte executivo em Londrina",
                },
                {
                  modelo: "Vans Executivas",
                  categoria: "Transporte para Grupos",
                  passageiros: "Até 7 passageiros",
                  ideal: "Grupos corporativos · Equipes · Eventos · Feiras",
                  specs: ["Disponível sob consulta", "Ideal para grupos e eventos", "Nota fiscal disponível"],
                  src: "/fotos/frota-van-executiva.webp",
                  alt: "Van executiva para grupos e transporte corporativo",
                },
              ].map((v) => (
                <div key={v.modelo} style={{
                  background: "#1C1C1C", borderRadius: "10px", overflow: "hidden",
                  border: "1px solid #2A2A2A",
                  display: "flex", flexDirection: "column",
                }}>
                  {/* Imagem real do veículo — lazy load (below the fold) */}
                  <div style={{
                    height: "180px", position: "relative", overflow: "hidden",
                    borderBottom: "1px solid #2A2A2A",
                  }}>
                    <Image
                      src={v.src}
                      alt={v.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      loading="lazy"
                    />
                  </div>
                  {/* Dados do veículo */}
                  <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ fontWeight: 800, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.2rem" }}>{v.modelo}</p>
                    <p style={{ fontSize: "0.75rem", color: "#C9A84C", fontWeight: 600, marginBottom: "0.75rem" }}>{v.categoria}</p>
                    <p style={{ fontSize: "0.8rem", color: "#6B6B6B", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span>👥</span> {v.passageiros}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", marginBottom: "1rem", flex: 1 }}>
                      {v.specs.map(s => (
                        <span key={s} style={{ fontSize: "0.775rem", color: "#6B6B6B", display: "flex", alignItems: "center", gap: "5px" }}>
                          <span style={{ color: "#C9A84C", flexShrink: 0 }}>✓</span> {s}
                        </span>
                      ))}
                    </div>
                    <p style={{ fontSize: "0.775rem", color: "#A8A8A8", borderTop: "1px solid #2A2A2A", paddingTop: "0.75rem", marginTop: "auto", fontStyle: "italic" }}>
                      Ideal: {v.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/frota-executiva-londrina"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "0.9rem", padding: "0.75rem 1.75rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
                Ver especificações completas da frota →
              </Link>
            </div>
          </div>
        </section>

        {/* ════════ 6. SERVIÇOS ════════ */}
        <section aria-labelledby="servicos-heading" style={{ background: "#141414", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ width: "48px", height: "1px", background: "#C9A84C", margin: "0 auto 1.5rem" }} />
              <h2 id="servicos-heading" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "0.75rem" }}>
                Serviços de mobilidade executiva
              </h2>
              <p style={{ color: "#6B6B6B", maxWidth: "500px", margin: "0 auto" }}>
                Cada serviço é desenvolvido para atender o padrão exigido por empresas e profissionais.
              </p>
            </div>
            <style>{`
              .svc-card { border-color: #2A2A2A !important; transition: border-color 0.2s; }
              .svc-card:hover { border-color: rgba(201,168,76,0.4) !important; }
            `}</style>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem" }}>
              {servicos.map(s => (
                <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                  <div className="svc-card" style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.75rem", border: "1px solid #2A2A2A", height: "100%" }}>
                    <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{s.icon}</div>
                    <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{s.titulo}</h3>
                    <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                    <span style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 600 }}>Saiba mais →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════ 7. CTA FINAL ════════ */}
        <section aria-label="Solicitar orçamento" style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.875rem" }}>
              Solicite um orçamento agora
            </h2>
            <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "0.5rem" }}>
              Transfer, motorista executivo ou contrato corporativo.
            </p>
            <p style={{ color: "#1C1C1C", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "2rem", opacity: 0.8 }}>
              Respondemos em minutos · Nota fiscal disponível · Atendimento 24h
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "1.5rem" }}>
              <a href={waHome} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
                <WaIcon color="#C9A84C" /> Falar pelo WhatsApp
              </a>
              <a href={`tel:${business.phone}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
                📞 {business.phoneDisplay}
              </a>
            </div>
            <Link href="/contato"
              style={{ display: "inline-block", color: "rgba(0,0,0,0.6)", fontSize: "0.875rem", textDecoration: "underline" }}>
              Ou envie uma mensagem pelo formulário →
            </Link>
          </div>
        </section>

        {/* ════════ 8. FOOTER ════════ */}
        <footer aria-label="Rodapé" style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "3rem 1.5rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
              <div>
                <p style={{ color: "#C9A84C", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "Georgia,serif" }}>
                  Londrina Executivo
                </p>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  Transporte executivo premium em Londrina. Transfer, motorista executivo e transporte corporativo.
                </p>
                <a href={`tel:${business.phone}`}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#C9A84C", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
                  📞 {business.phoneDisplay}
                </a>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Serviços</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { href: "/airport-transfer-londrina",             label: "Airport Transfer" },
                    { href: "/londrina-guarulhos",                    label: "Londrina → Guarulhos" },
                    { href: "/londrina-sao-paulo",                    label: "Londrina → São Paulo" },
                    { href: "/motorista-executivo-londrina",          label: "Motorista Executivo" },
                    { href: "/transfer-corporativo-londrina",         label: "Transfer Corporativo" },
                    { href: "/transporte-terrestre-executivo-londrina", label: "Transporte Executivo" },
                  ].map(l => (
                    <Link key={l.href} href={l.href} style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>{l.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ color: "#A8A8A8", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>Contato</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", fontSize: "0.875rem", textDecoration: "none", fontWeight: 600 }}>{business.phoneDisplay}</a>
                  <a href={waHome} target="_blank" rel="noopener noreferrer" style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>WhatsApp</a>
                  <Link href="/contato" style={{ color: "#6B6B6B", fontSize: "0.875rem", textDecoration: "none" }}>Enviar mensagem</Link>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1C1C1C", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>
                © {new Date().getFullYear()} Londrina Executivo · Londrina, PR
              </p>
              <p style={{ fontSize: "0.8rem", color: "#2A2A2A" }}>londrinaexecutivo.com.br</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
