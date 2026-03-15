import Link from "next/link";
import Image from "next/image";

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
      <div style={{ width: "100%", height: "220px", position: "relative", overflow: "hidden" }}>
        <Image
          src="/final-banner.png"
          alt="Banner"
          fill
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
        />
        {/* Red color grade */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(150,0,0,0.15)", mixBlendMode: "multiply" }} />
        {/* Vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)" }} />
        {/* Bottom fade into page */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, var(--bg) 100%)" }} />
      </div>

      {/* Channel Header */}
      <div className="page-pad" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Avatar row — avatar overlaps banner, text sits below */}
        <div style={{ marginTop: "-44px", marginBottom: "16px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              border: "4px solid var(--bg)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/avatar-2.JPEG"
              alt="Virender Parasariya"
              width={88}
              height={88}
              style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
            />
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

          <div className="grid-2" style={{ maxWidth: "900px", marginBottom: "40px" }}>
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

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/projects"
              style={{ background: "var(--red)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}
            >
              See the work
            </Link>
            {[
              { label: "YouTube", href: "https://www.youtube.com/@virenderparasariya" },
              { label: "GitHub", href: "https://github.com/virend3rp" },
              { label: "Instagram", href: "https://www.instagram.com/virender_parasariya/" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/virender-parasariya-120b7a379/" },
              { label: "Letterboxd", href: "https://letterboxd.com/VirenderP/" },
              { label: "LeetCode", href: "https://leetcode.com/u/Vir3nd3rp/" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--black)",
                  fontSize: "13px",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "1.5px solid var(--border)",
                  background: "white",
                  display: "inline-block",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        {/* Now Strip */}
        <section
          className="grid-now"
          style={{
            margin: "56px 0 0",
            padding: "32px 0 0",
            borderTop: "1.5px solid var(--border)",
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
