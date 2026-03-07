"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/blog", label: "blog" },
  { href: "/goals", label: "goals" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
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

      <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: pathname === href ? "var(--red)" : "var(--gray)",
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
