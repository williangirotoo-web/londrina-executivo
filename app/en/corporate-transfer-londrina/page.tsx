/**
 * app/en/corporate-transfer-londrina/page.tsx
 * KEYWORDS: corporate transportation londrina, private chauffeur corporate
 */
import type { Metadata } from "next"
import Link from "next/link"
import { pageMetadata } from "@/lib/metadata"
import { business, whatsappUrl } from "@/lib/business"

export const metadata: Metadata = {
  ...pageMetadata.enCorporate,
  alternates: {
    canonical: `${business.url}/en/corporate-transfer-londrina`,
    languages: { "pt-BR": `${business.url}/transfer-corporativo-londrina` },
  },
}

const WA = whatsappUrl("Hello! I would like to get a corporate transportation quote for my company in Londrina, Brazil.")

function WaIcon({ color = "white", size = 20 }: { color?: string; size?: number }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

const faq = [
  { q: "What is corporate transportation and how does it work?", a: "Corporate transportation is a managed executive transport service contracted by companies for their employees, directors and corporate guests. We handle all bookings via WhatsApp from a designated contact at your company. At month-end, you receive a consolidated travel report with an invoice for all trips taken." },
  { q: "Can you receive international visitors at the airport?", a: "Yes. We receive international visitors at Londrina Airport (LDB) or at Guarulhos International (GRU) with a personalized name sign and bilingual service in English, Portuguese or Spanish. The visitor steps off the plane and is immediately in safe, professional hands." },
  { q: "What does the monthly contract include?", a: "The monthly contract includes: confirmed bookings via WhatsApp, a professional driver with formal attire, premium vehicle, consolidated monthly invoice, detailed travel report (date, time, passenger, route, amount) and priority availability for regular clients." },
  { q: "Do you serve multinational companies in Londrina?", a: "Yes. Several multinational companies have operations in Londrina and the northern Paraná region, particularly in agribusiness, industry and distribution. We provide bilingual executive transport that meets international corporate standards." },
  { q: "Can you handle last-minute bookings?", a: "For local trips within Londrina, we can often accommodate same-day bookings. For long-distance trips to São Paulo or Guarulhos, we recommend at least 24 hours notice to guarantee vehicle and driver availability." },
]

export default function EnCorporatePage() {
  return (
    <main>
      <div style={{ background: "#141414", borderBottom: "1px solid #1C1C1C", padding: "0.5rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: "0.8rem", color: "#6B6B6B" }}>
          <Link href="/en" style={{ color: "#6B6B6B", textDecoration: "none" }}>Home (EN)</Link>
          <span style={{ margin: "0 0.5rem" }}>›</span>
          <span style={{ color: "#C9A84C" }}>Corporate Transportation Londrina</span>
        </nav>
        <div style={{ display: "flex", gap: "1rem", fontSize: "0.75rem" }}>
          <Link href="/transfer-corporativo-londrina" style={{ color: "#6B6B6B", textDecoration: "none" }}>Português</Link>
          <span style={{ color: "#C9A84C", fontWeight: 700 }}>English</span>
        </div>
      </div>

      <section style={{ background: "linear-gradient(135deg,#0A0A0A,#141414)", padding: "6rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,.1)", border: "1px solid rgba(201,168,76,.25)", borderRadius: "999px", padding: "5px 16px", marginBottom: "1.75rem" }}>
            <span style={{ color: "#C9A84C", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🤝 Corporate Transportation · Londrina · Monthly Contracts · Invoicing</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4.5vw,3rem)", fontWeight: 900, color: "#F0F0F0", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Corporate Transportation
            <span style={{ display: "block", color: "#C9A84C" }}>in Londrina, Brazil</span>
          </h1>
          <p style={{ color: "#A8A8A8", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px" }}>
            Executive transport solutions for companies in Londrina. Monthly contracts with consolidated invoicing,
            bilingual drivers and premium fleet. One contact manages all your corporate mobility needs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", textDecoration: "none" }}>
              <WaIcon color="#0A0A0A" /> Request corporate proposal
            </a>
            <a href={`tel:${business.phone}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#C9A84C", fontWeight: 700, fontSize: "1rem", padding: "0.875rem 2rem", borderRadius: "6px", border: "1.5px solid rgba(201,168,76,.4)", textDecoration: "none" }}>
              📞 {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div style={{ background: "#0A0A0A", borderBottom: "1px solid rgba(201,168,76,.2)", padding: "0.875rem 1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", position: "sticky", top: 0, zIndex: 50 }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "0.875rem", color: "#C9A84C", margin: 0 }}>Corporate Transportation · Londrina</p>
          <p style={{ fontSize: "0.75rem", color: "#6B6B6B", margin: 0 }}>Monthly contracts · Invoicing · Bilingual drivers · Premium fleet</p>
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 700, fontSize: "0.875rem", padding: "0.65rem 1.25rem", borderRadius: "6px", textDecoration: "none" }}>
          <WaIcon color="#0A0A0A" size={16} /> Request proposal
        </a>
      </div>

      <section style={{ background: "#141414", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "1.5rem" }}>How corporate transport works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem", maxWidth: "900px" }}>
            {[
              { n: "01", t: "Request a proposal", d: "Contact us via WhatsApp with your company name, most-used routes and estimated monthly volume. We send a tailored proposal within 24 hours." },
              { n: "02", t: "Activate the contract", d: "Your designated admin contact books all trips via WhatsApp. Confirmation in up to 30 minutes." },
              { n: "03", t: "Service is delivered", d: "Our driver arrives at the confirmed location, formally dressed and ready. Bilingual service always available." },
              { n: "04", t: "Monthly invoice & report", d: "At month start, you receive the full travel report with dates, routes, passengers and amounts. Invoice issued to your company CNPJ." },
            ].map(p => (
              <div key={p.n} style={{ background: "#1C1C1C", borderRadius: "8px", padding: "1.25rem", border: "1px solid #2A2A2A" }}>
                <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "rgba(201,168,76,.3)", marginBottom: "0.5rem", fontFamily: "Georgia,serif" }}>{p.n}</p>
                <h3 style={{ fontWeight: 700, fontSize: "0.875rem", color: "#F0F0F0", marginBottom: "0.35rem" }}>{p.t}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.825rem", lineHeight: 1.6, margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ width: "48px", height: "1px", background: "#C9A84C", marginBottom: "1.5rem" }} />
          <h2 style={{ fontSize: "clamp(1.375rem,2.8vw,1.875rem)", fontWeight: 800, color: "#F0F0F0", marginBottom: "3rem" }}>Frequently asked questions</h2>
          <div style={{ maxWidth: "720px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faq.map((f, i) => (
              <details key={i} style={{ background: "#141414", borderRadius: "8px", border: "1px solid #2A2A2A", overflow: "hidden" }}>
                <summary style={{ padding: "1.25rem 1.5rem", fontWeight: 700, fontSize: "0.9rem", color: "#F0F0F0", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}<span aria-hidden="true" style={{ color: "#C9A84C", flexShrink: 0, marginLeft: "1rem" }}>▾</span>
                </summary>
                <div style={{ padding: "0 1.5rem 1.5rem", color: "#A8A8A8", lineHeight: 1.7, fontSize: "0.9rem" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#C9A84C", padding: "4rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ color: "#0A0A0A", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1rem" }}>Request a corporate proposal</h2>
          <p style={{ color: "#1C1C1C", marginBottom: "2rem" }}>Tell us your routes, frequency and team size. We build a solution for your company.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#0A0A0A", color: "#C9A84C", fontWeight: 800, padding: "1rem 2.5rem", borderRadius: "6px", textDecoration: "none" }}>
            <WaIcon color="#C9A84C" /> WhatsApp
          </a>
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "3rem 1.5rem", borderTop: "1px solid #1C1C1C" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {[
            { href: "/en", label: "← All Services (EN)" },
            { href: "/en/airport-transfer-londrina", label: "Airport Transfer" },
            { href: "/en/executive-driver-londrina", label: "Executive Driver" },
            { href: "/transfer-corporativo-londrina", label: "🇧🇷 Versão em Português" },
          ].map(l => (
            <Link key={l.href} href={l.href} style={{ display: "inline-block", background: "#141414", color: "#A8A8A8", fontSize: "0.8rem", padding: "7px 14px", borderRadius: "6px", border: "1px solid #2A2A2A", textDecoration: "none" }}>{l.label}</Link>
          ))}
        </div>
      </section>

      <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1C1C1C", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#C9A84C", fontWeight: 800, fontFamily: "Georgia,serif", margin: 0 }}>Londrina Executivo</p>
          <p style={{ color: "#6B6B6B", fontSize: "0.8rem", margin: 0 }}>Corporate Transportation · Londrina, PR, Brazil · <a href={`tel:${business.phone}`} style={{ , textDecoration: "none" }}>{business.phoneDisplay}</a></p>
        </div>
      </footer>
    </main>
  )
}
