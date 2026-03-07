import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "72px 48px", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ maxWidth: "640px" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--red)", marginBottom: "12px" }}>
          About
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "40px",
          }}
        >
          Who&apos;s behind this
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "16px", lineHeight: 1.8, color: "#374151" }}>
          <p>
            I&apos;m Virender. Developer and content creator. I get obsessed with things — when I pick something up I don&apos;t dabble, I go all the way in until I actually understand it. That&apos;s happened with sports, with anime, with films, and now with code and building an audience online.
          </p>
          <p>
            I make videos on YouTube and create content around things I&apos;m genuinely into — mostly development, things I&apos;m building, and whatever rabbit hole I&apos;m currently in. The content isn&apos;t a side project, it&apos;s part of how I think. Explaining something forces you to understand it better.
          </p>
          <p>
            Right now I&apos;m deep into agentic AI — building systems where models don&apos;t just respond to prompts but actually take actions and work through complex tasks autonomously. It&apos;s the most interesting thing happening in the space and I want to understand it from first principles.
          </p>
          <p>
            Outside of all that: films (logged on Letterboxd), anime, sports. I read occasionally when something grabs me hard enough to pull me away from a screen.
          </p>
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1.5px solid var(--border)",
            display: "flex",
            gap: "24px",
          }}
        >
          {[
            { label: "YouTube", href: "#" },
            { label: "GitHub", href: "#" },
            { label: "Twitter", href: "#" },
            { label: "Letterboxd", href: "#" },
            { label: "Email", href: "mailto:#" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--red)",
                textDecoration: "none",
              }}
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
