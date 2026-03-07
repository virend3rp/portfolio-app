import Link from "next/link";

const now = {
  learning: "Agentic AI",
  watching: "Frieren",
  letterboxd: "Interstellar",
  reading: null as string | null,
};

export default function Home() {
  return (
    <main>
      {/* Channel Banner */}
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 50%, #cc0000 100%)",
        }}
      />

      {/* Channel Header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>
        {/* Avatar row — avatar overlaps banner, text sits below */}
        <div style={{ marginTop: "-44px", marginBottom: "16px" }}>
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              background: "var(--red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "26px",
              color: "white",
              letterSpacing: "-1px",
              border: "4px solid var(--bg)",
            }}
          >
            VP
          </div>
        </div>

        {/* Channel info row */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px", marginBottom: "3px" }}>
              Virender Parasariya
            </h1>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", fontSize: "13px", color: "var(--gray)", flexWrap: "wrap" }}>
              <span style={{ fontWeight: 600 }}>@virender</span>
              <span>·</span>
              <span>4 projects</span>
              <span>·</span>
              <span>3 posts</span>
              <span>·</span>
              <span>Building in public</span>
            </div>
          </div>

          {/* Subscribe */}
          <a
            href="#"
            style={{
              background: "var(--black)",
              color: "white",
              padding: "10px 22px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            Subscribe
          </a>
        </div>

        {/* Divider */}
        <div style={{ borderBottom: "1.5px solid var(--border)", marginBottom: "48px" }} />

        {/* Hero text */}
        <section style={{ paddingTop: "8px" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(52px, 7vw, 86px)",
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: "-2px",
              maxWidth: "820px",
              marginBottom: "40px",
            }}
          >
            I pick things up
            <br />
            and go{" "}
            <em style={{ fontStyle: "italic", color: "var(--red)" }}>too deep.</em>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "900px", marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", lineHeight: 1.8, color: "#374151" }}>
              <p>
                I&apos;m Virender. Developer and content creator. When I pick something up I don&apos;t dabble — I go all the way in. That&apos;s happened with sports, with anime, with films, and now with code and building an audience online.
              </p>
              <p>
                I make videos on YouTube around things I&apos;m genuinely into — mostly development, things I&apos;m building, and whatever rabbit hole I&apos;m currently in.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "15px", lineHeight: 1.8, color: "#374151" }}>
              <p>
                Right now I&apos;m deep into agentic AI — building systems where models don&apos;t just respond to prompts but actually take actions autonomously.
              </p>
              <p>
                Outside of all that: films on Letterboxd, anime, sports. I read occasionally when something grabs me hard enough.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/projects"
              style={{ background: "var(--red)", color: "white", padding: "12px 26px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}
            >
              see the work
            </Link>
            {[
              { label: "YouTube", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Twitter", href: "#" },
              { label: "Letterboxd", href: "#" },
            ].map((l) => (
              <Link key={l.label} href={l.href} style={{ color: "var(--gray)", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Now Strip */}
        <section
          style={{
            margin: "56px 0 0",
            padding: "32px 0 0",
            borderTop: "1.5px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {[
            { label: "Currently learning", value: now.learning },
            { label: "Watching", value: now.watching },
            { label: "Last on Letterboxd", value: now.letterboxd },
            { label: "Reading", value: now.reading },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                paddingLeft: i === 0 ? 0 : "32px",
                paddingRight: i === 3 ? 0 : "32px",
                borderRight: i < 3 ? "1.5px solid var(--border)" : "none",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--red)", marginBottom: "6px" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "13px", fontWeight: item.value ? 600 : 400, color: item.value ? "var(--black)" : "var(--gray)", fontStyle: item.value ? "normal" : "italic" }}>
                {item.value ?? "nothing right now"}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
