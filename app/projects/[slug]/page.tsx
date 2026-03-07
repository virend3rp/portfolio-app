import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { projects as projectsTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const row = db.select().from(projectsTable).where(eq(projectsTable.slug, slug)).get();
  if (!row) notFound();
  const project = { ...row, tags: JSON.parse(row.tags) as string[] };

  const lines = project.body.trim().split("\n");

  return (
    <main style={{ padding: "72px 48px", maxWidth: "800px", margin: "0 auto" }}>
      <Link
        href="/projects"
        style={{ fontSize: "13px", color: "var(--gray)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "40px" }}
      >
        ← all projects
      </Link>

      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gray)", letterSpacing: "1px" }}>
            {project.year}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            {project.tags.map((t) => (
              <span key={t} style={{ fontSize: "11px", fontWeight: 600, padding: "2px 10px", borderRadius: "999px", background: "var(--red-light)", color: "var(--red)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h1>

        <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: 1.7 }}>
          {project.description}
        </p>
      </div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <div style={{ display: "flex", gap: "16px", marginBottom: "48px", paddingBottom: "40px", borderBottom: "1.5px solid var(--border)" }}>
          {project.liveUrl && (
            <Link href={project.liveUrl} style={{ background: "var(--red)", color: "white", padding: "10px 22px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              Live site ↗
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} style={{ border: "1.5px solid var(--border)", color: "var(--black)", padding: "10px 22px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              GitHub →
            </Link>
          )}
        </div>
      )}

      {/* Body rendered from plain text/markdown-like */}
      <article style={{ fontSize: "15px", lineHeight: 1.8, color: "#374151" }}>
        {lines.map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2
                key={i}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "26px",
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                  color: "var(--black)",
                  marginTop: "40px",
                  marginBottom: "12px",
                }}
              >
                {line.replace("## ", "")}
              </h2>
            );
          }
          if (line.startsWith("```")) return null;
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} style={{ marginBottom: "4px" }}>{line}</p>;
        })}
      </article>
    </main>
  );
}
