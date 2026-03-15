"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/blog", label: "blog" },
  { href: "/goals", label: "goals" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "var(--bg)",
          borderBottom: "1.5px solid var(--border)",
          padding: "0 48px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: "16px",
            letterSpacing: "-0.5px",
            textDecoration: "none",
            color: "var(--black)",
          }}
        >
          vp<span style={{ color: "var(--red)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="nav-link"
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: pathname === href ? "var(--red)" : "var(--gray)",
                  textDecoration: "none",
                  letterSpacing: "0.3px",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "var(--black)", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "var(--bg)",
            borderBottom: "1.5px solid var(--border)",
            padding: "16px 24px 24px",
            display: "none",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "15px",
                fontWeight: pathname === href ? 700 : 500,
                color: pathname === href ? "var(--red)" : "var(--black)",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
