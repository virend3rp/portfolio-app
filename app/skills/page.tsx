const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    learning: false,
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Prisma"],
    learning: false,
  },
  {
    category: "Tools & Infra",
    skills: ["Git", "Docker", "Vercel", "Supabase", "Figma"],
    learning: false,
  },
  {
    category: "Currently learning",
    skills: ["Agentic AI", "LLM orchestration", "LangGraph", "Tool use patterns"],
    learning: true,
  },
];

export default function Skills() {
  return (
    <main>
      {/* Header */}
      <section style={{ padding: "72px 48px 56px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--red)", marginBottom: "8px" }}>
          Skills
        </div>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: "8px",
          }}
        >
          The tools
        </h1>
        <p style={{ fontSize: "14px", color: "var(--gray)" }}>what I actually reach for</p>
      </section>

      {/* Editorial row layout — on cream */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px 80px" }}>
        <div style={{ borderTop: "1.5px solid var(--border)" }}>
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                alignItems: "center",
                padding: "40px 0",
                borderBottom: i < skillGroups.length - 1 ? "1.5px solid var(--border)" : "none",
                gap: "48px",
              }}
            >
              {/* Category name */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    color: group.learning ? "var(--red)" : "var(--black)",
                    fontStyle: group.learning ? "italic" : "normal",
                  }}
                >
                  {group.category}
                </div>
                {group.learning && (
                  <div style={{ fontSize: "11px", color: "var(--red)", marginTop: "6px", fontWeight: 600, letterSpacing: "0.5px" }}>
                    in progress ↗
                  </div>
                )}
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "7px 16px",
                      borderRadius: "999px",
                      background: group.learning ? "var(--red-light)" : "white",
                      color: group.learning ? "var(--red)" : "var(--black)",
                      border: `1.5px solid ${group.learning ? "var(--red-light)" : "var(--border)"}`,
                      letterSpacing: "0.2px",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
