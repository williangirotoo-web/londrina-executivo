/**
 * app/en/page.tsx — Londrina Executivo
 * English hub — international visitors
 * CANONICAL: https://londrinaexecutivo.com.br/en
 */
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { pageMetadata } from "@/lib/metadata"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.enHome,
  alternates: {
    canonical: `${business.url}/en`,
    languages: { "pt-BR": `${business.url}` },
  },
}

const WA = whatsappUrl("Hello! I would like to request a quote for executive transportation in Londrina, Brazil.")

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const services = [
  { href: "/en/airport-transfer-londrina",   icon: "✈️", title: "Airport Transfer",       desc: "Executive transfer at Londrina Airport (LDB) and direct service to Guarulhos International (GRU). Flight monitoring included." },
  { href: "/en/executive-driver-londrina",   icon: "💼", title: "Executive Driver",        desc: "Professional bilingual chauffeur with premium vehicle by the hour or full day. Corporate agenda management." },
  { href: "/en/corporate-transfer-londrina", icon: "🤝", title: "Corporate Transportation",desc: "Dedicated transport solutions for companies. Monthly contracts, invoicing and consolidated reporting." },
]

export default function EnHomePage() {
  return (
    <main>
      {/* Lang switcher */}
      <div style={{ background: "#141414", borderBottom: "1px solid #1C1C1C", padding: "0.5rem 1.5rem", display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem" }}>
          <Link href="/" style={{ color: "#6B6B6B", textDecoration: "none" }}>Português</Link>
          <span style={{ color: "#C9A84C", fontWeight: 700 }}>English</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ background: "#0A0A0A", padding: "6rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" className="hero-image-wrapper">
          <Image src="/fotos/hero-transporte-executivo.webp" alt="Executive transportation in Londrina Brazil" fill priority sizes="(max-width: 768px) 0px, 100vw" style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.35) 100%)" }} />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 70% 50%,rgba(201,168,76,.04) 0%,transparent 60%)" }} />
        <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
            <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🇧🇷 Executive Transportation · Londrina · Paraná · Brazil</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Executive Transportation
            <span style={{ display: "block", color: "#C9A84C" }}>in Londrina, Brazil</span>
          </h1>
          <p style={{ fontSize: "clamp(.95rem,1.8vw,1.1rem)", color: "#A8A8A8", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
            Premium executive transport for international visitors, corporations and executives.
            Airport transfers, private chauffeur and corporate solutions with bilingual service in English, Portuguese and Spanish.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
              <WaIcon color="#0A0A0A" /> Request a quote
            </a>
            <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
              📞 {business.phoneDisplay}
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {["✓ Premium fleet", "✓ Bilingual EN/PT/ES", "✓ Corporate invoicing", "✓ 24/7 available"].map(i => (
              <span key={i} style={{ color: "#6B6B6B", fontSize: "0.875rem" }}>{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#141414", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Our Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
            {services.map(s => (
              <Link key={s.href} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#1C1C1C", borderRadius: "10px", padding: "1.75rem", border: "1px solid #2A2A2A", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{s.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#F0F0F0", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem", flex: 1 }}>{s.desc}</p>
                  <span style={{ color: "#C9A84C", fontSize: "0.8rem", fontWeight: 600 }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT LONDRINA */}
      <section style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>Executive transport in Londrina, Paraná</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "2rem", maxWidth: "900px" }}>
            <div>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Londrina is the second largest city in Paraná state and one of the most important agribusiness and industrial hubs in Brazil.
                Located 450 km from São Paulo and 470 km from Guarulhos International Airport, it attracts executives, international investors and corporate visitors throughout the year.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Our executive transportation service covers the entire Londrina metropolitan region, long-distance routes to São Paulo and GRU, and dedicated airport transfers at Londrina's Governador José Richa Airport (LDB).
              </p>
            </div>
            <div>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                All vehicles are premium SUVs — Toyota Corolla Cross, Jeep Compass and VW T-Cross — maintained to executive standards with regular inspections and cleaning before every service.
              </p>
              <p style={{ color: "#A8A8A8", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Every driver is professionally trained, formally dressed and fluent in English.
                Spanish-speaking service is also available for visitors from Argentina, Paraguay and other Spanish-speaking countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#C9A84C", padding: "5rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <h2 style={{ color: "#0A0A0A", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "1rem" }}>Request a quote now</h2>
          <p style={{ color: "#1C1C1C", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
            Airport transfer, executive driver or corporate transport. We respond in minutes. Corporate invoicing available.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
              <WaIcon color="#C9A84C" /> WhatsApp
            </a>
            <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#0A0A0A", fontWeight: 700, fontSize: "1rem", padding: "1rem 2.5rem", borderRadius: "6px", border: "2px solid #0A0A0A", textDecoration: "none" }}>
              📞 Call us
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <div>
            <p style={{ color: "#C9A84C", fontWeight: 800, fontSize: "0.95rem", fontFamily: "Georgia,serif", margin: 0 }}>Londrina Executivo</p>
            <p style={{ color: "#6B6B6B", fontSize: "0.8rem", marginTop: "0.25rem" }}>Executive Transportation · Londrina, PR, Brazil · <a href={`tel:${business.phone}`} style={{ color: "#C9A84C", textDecoration: "none" }}>{business.phoneDisplay}</a></p>
          </div>
          <Link href="/" style={{ fontSize: "0.8rem", color: "#6B6B6B", textDecoration: "none" }}>← Versão em Português</Link>
        </div>
      </footer>
    </main>
  )
}
