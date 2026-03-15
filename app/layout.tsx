import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "Virender Parasariya", template: "%s | Virender Parasariya" },
  description: "Developer and content creator. Building in public, going deep on agentic AI.",
  openGraph: {
    type: "website",
    siteName: "Virender Parasariya",
    title: "Virender Parasariya",
    description: "Developer and content creator. Building in public, going deep on agentic AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virender Parasariya",
    description: "Developer and content creator. Building in public, going deep on agentic AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Nav />
        {children}
        <footer
          className="page-pad footer-inner"
          style={{
            borderTop: "1.5px solid var(--border)",
            paddingTop: "32px",
            paddingBottom: "32px",
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 800, letterSpacing: "-0.5px", color: "var(--black)" }}>
            vp<span style={{ color: "var(--red)" }}>.</span>
          </span>
          <span style={{ fontSize: "12px", color: "var(--gray)" }}>
            © {new Date().getFullYear()} Virender Parasariya
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { label: "GitHub", href: "https://github.com/virend3rp" },
              { label: "YouTube", href: "https://www.youtube.com/@virenderparasariya" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/virender-parasariya-120b7a379/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "12px", color: "var(--gray)", textDecoration: "none", fontWeight: 500 }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
