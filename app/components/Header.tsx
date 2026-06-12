"use client"

/**
 * components/Header.tsx — Londrina Executivo
 * Header premium sticky com dropdown, mobile menu e blur
 * 'use client' apenas neste componente — layout.tsx permanece Server Component
 */

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const WA_URL = "https://wa.me/5544998913040?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20transporte%20executivo%20em%20Londrina."
const EN_URL = "/en"

const rotasLinks = [
  { href: "/londrina-guarulhos",      label: "Londrina → Guarulhos (GRU)" },
  { href: "/londrina-sao-paulo",      label: "Londrina → São Paulo" },
  { href: "/londrina-maringa",        label: "Londrina → Maringá" },
  { href: "/londrina-foz-do-iguacu",  label: "Londrina → Foz do Iguaçu" },
]

const servicosLinks = [
  { href: "/transfer-corporativo-londrina",          label: "Transfer Corporativo" },
  { href: "/motorista-executivo-londrina",           label: "Motorista Executivo" },
  { href: "/airport-transfer-londrina",              label: "Airport Transfer (LDB)" },
  { href: "/transporte-terrestre-executivo-londrina",label: "Transporte Executivo" },
]

const mobileLinks = [
  { href: "/",                                        label: "Home" },
  { href: "/frota-executiva-londrina",               label: "Nossa Frota" },
  { href: "/londrina-guarulhos",                     label: "Londrina → Guarulhos" },
  { href: "/londrina-sao-paulo",                     label: "Londrina → São Paulo" },
  { href: "/transfer-corporativo-londrina",          label: "Transfer Corporativo" },
  { href: "/motorista-executivo-londrina",           label: "Motorista Executivo" },
  { href: "/airport-transfer-londrina",              label: "Airport Transfer" },
  { href: "/transporte-terrestre-executivo-londrina",label: "Transporte Executivo" },
  { href: "/contato",                                label: "Contato" },
]

function WaIcon({ size = 16, color = "#0A0A0A" }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color}
      width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
      style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
      <path d="M2 4l4 4 4-4" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [rotasOpen, setRotasOpen]     = useState(false)
  const [servicosOpen, setServicosOpen] = useState(false)
  const rotasRef   = useRef<HTMLDivElement>(null)
  const servicosRef = useRef<HTMLDivElement>(null)

  // Detectar scroll para ativar blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rotasRef.current && !rotasRef.current.contains(e.target as Node)) setRotasOpen(false)
      if (servicosRef.current && !servicosRef.current.contains(e.target as Node)) setServicosOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  // Fechar mobile ao mudar de página
  useEffect(() => { setMobileOpen(false); setRotasOpen(false); setServicosOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const navLinkStyle = (href: string): React.CSSProperties => ({
    color: isActive(href) ? "#C9A84C" : "#A8A8A8",
    fontSize: "0.85rem",
    fontWeight: isActive(href) ? 700 : 500,
    textDecoration: "none",
    letterSpacing: "0.02em",
    transition: "color 0.15s",
    borderBottom: isActive(href) ? "1px solid #C9A84C" : "1px solid transparent",
    paddingBottom: "2px",
  })

  const dropdownItem: React.CSSProperties = {
    display: "block",
    padding: "0.625rem 1.25rem",
    color: "#A8A8A8",
    fontSize: "0.8rem",
    fontWeight: 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "color 0.15s, background 0.15s",
    letterSpacing: "0.02em",
  }

  return (
    <>
      {/* ── HEADER ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0.75)",
        backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "blur(8px)",
        borderBottom: `1px solid ${scrolled ? "rgba(201,168,76,0.2)" : "rgba(201,168,76,0.08)"}`,
        transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
      }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>

          {/* ── LOGO ── */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "6px", background: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#0A0A0A", fontSize: "0.7rem", fontWeight: 900, fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>LE</span>
            </div>
            <div>
              <p style={{ color: "#F0F0F0", fontSize: "0.875rem", fontWeight: 700, fontFamily: "Georgia, serif", margin: 0, lineHeight: 1.1, letterSpacing: "0.01em" }}>Londrina Executivo</p>
              <p style={{ color: "#6B6B6B", fontSize: "0.6rem", fontWeight: 500, margin: 0, letterSpacing: "0.08em", textTransform: "uppercase" }}>Transporte Premium</p>
            </div>
          </Link>

          {/* ── NAV DESKTOP ── */}
          <nav aria-label="Navegação principal" style={{ display: "flex", alignItems: "center", gap: "1.75rem", flex: 1, justifyContent: "center" }}
            className="le-nav-desktop">
            <Link href="/" style={navLinkStyle("/")}>Home</Link>
            <Link href="/frota-executiva-londrina" style={navLinkStyle("/frota-executiva-londrina")}>Frota</Link>

            {/* Dropdown Rotas */}
            <div ref={rotasRef} style={{ position: "relative" }}>
              <button
                onClick={() => { setRotasOpen(o => !o); setServicosOpen(false) }}
                style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: 0, color: (isActive("/londrina-guarulhos") || isActive("/londrina-sao-paulo")) ? "#C9A84C" : "#A8A8A8", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.15s" }}>
                Rotas <ChevronIcon open={rotasOpen} />
              </button>
              {rotasOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", background: "#0F0F0F", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", overflow: "hidden", minWidth: "220px", boxShadow: "0 20px 40px rgba(0,0,0,0.6)", animation: "le-fade 0.15s ease" }}>
                  {rotasLinks.map(l => (
                    <Link key={l.href} href={l.href}
                      style={{ ...dropdownItem, color: isActive(l.href) ? "#C9A84C" : "#A8A8A8", borderLeft: isActive(l.href) ? "2px solid #C9A84C" : "2px solid transparent" }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dropdown Serviços */}
            <div ref={servicosRef} style={{ position: "relative" }}>
              <button
                onClick={() => { setServicosOpen(o => !o); setRotasOpen(false) }}
                style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: 0, color: servicosLinks.some(l => isActive(l.href)) ? "#C9A84C" : "#A8A8A8", fontSize: "0.85rem", fontWeight: 500, letterSpacing: "0.02em", transition: "color 0.15s" }}>
                Serviços <ChevronIcon open={servicosOpen} />
              </button>
              {servicosOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)", background: "#0F0F0F", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "8px", overflow: "hidden", minWidth: "220px", boxShadow: "0 20px 40px rgba(0,0,0,0.6)", animation: "le-fade 0.15s ease" }}>
                  {servicosLinks.map(l => (
                    <Link key={l.href} href={l.href}
                      style={{ ...dropdownItem, color: isActive(l.href) ? "#C9A84C" : "#A8A8A8", borderLeft: isActive(l.href) ? "2px solid #C9A84C" : "2px solid transparent" }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contato" style={navLinkStyle("/contato")}>Contato</Link>
          </nav>

          {/* ── DIREITA: CTA + HAMBURGUER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
            {/* EN link */}
            <a href={EN_URL}
              className="le-cta-desktop"
              style={{ color: "#6B6B6B", fontSize: "0.75rem", fontWeight: 500, textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.15s" }}>
              EN
            </a>

            {/* CTA WhatsApp desktop */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="le-cta-desktop"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#C9A84C", color: "#0A0A0A", fontSize: "0.8rem", fontWeight: 800, padding: "0.5rem 1.1rem", borderRadius: "6px", textDecoration: "none", letterSpacing: "0.02em", whiteSpace: "nowrap", transition: "opacity 0.15s" }}>
              <WaIcon size={14} color="#0A0A0A" />
              WhatsApp
            </a>

            {/* Hamburguer */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              className="le-hamburger"
              style={{ background: "none", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "6px", padding: "0.45rem 0.6rem", cursor: "pointer", display: "flex", flexDirection: "column", gap: "4px" }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: "18px", height: "1.5px", background: "#C9A84C",
                  borderRadius: "1px", transition: "transform 0.2s, opacity 0.2s",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)" : i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ── */}
        <div style={{
          overflow: "hidden",
          maxHeight: mobileOpen ? "600px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "rgba(8,8,8,0.97)",
          borderTop: mobileOpen ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}>
          <nav aria-label="Navegação mobile" style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0" }}>
            {/* Linha dourada decorativa */}
            <div style={{ width: "32px", height: "1px", background: "#C9A84C", marginBottom: "1.25rem", opacity: 0.6 }} />

            {mobileLinks.map((l, idx) => (
              <Link key={l.href} href={l.href}
                style={{
                  color: isActive(l.href) ? "#C9A84C" : "#A8A8A8",
                  fontSize: "0.9rem",
                  fontWeight: isActive(l.href) ? 700 : 400,
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: idx < mobileLinks.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  letterSpacing: "0.02em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                {l.label}
                {isActive(l.href) && <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />}
              </Link>
            ))}

            {/* CTA WhatsApp mobile */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#C9A84C", color: "#0A0A0A", fontWeight: 800, fontSize: "0.9rem", padding: "0.875rem", borderRadius: "6px", textDecoration: "none", marginTop: "1.25rem", letterSpacing: "0.02em" }}>
              <WaIcon size={16} color="#0A0A0A" />
              Solicitar orçamento pelo WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* ── SPACER — empurra o conteúdo 64px para baixo ── */}
      <div style={{ height: "64px" }} aria-hidden="true" />

      {/* Estilos globais do header */}
      <style>{`
        @keyframes le-fade {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .le-nav-desktop { display: flex !important; }
        .le-cta-desktop { display: inline-flex !important; }
        .le-hamburger   { display: none !important; }

        @media (max-width: 768px) {
          .le-nav-desktop { display: none !important; }
          .le-cta-desktop { display: none !important; }
          .le-hamburger   { display: flex !important; }
        }

        /* Hover states */
        .le-nav-desktop a:hover { color: #C9A84C !important; }
        .le-nav-desktop button:hover { color: #C9A84C !important; }
        .le-cta-desktop:hover { opacity: 0.88 !important; }
      `}</style>
    </>
  )
}
