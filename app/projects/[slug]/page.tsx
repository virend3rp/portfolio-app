import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import { marked } from "marked";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
    twitter: { title: project.title, description: project.description },
  };
}

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const bodyHtml = marked(project.body) as string;

  return (
    <main className="page-pad" style={{ paddingTop: "72px", paddingBottom: "72px", maxWidth: "800px", margin: "0 auto" }}>
      <Link
        href="/projects"
        style={{ fontSize: "13px", color: "var(--gray)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "40px" }}
      >
        ← all projects
      </Link>

      <div style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gray)", letterSpacing: "1px" }}>
            {project.year}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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

      {(project.liveUrl || project.githubUrl) && (
        <div style={{ display: "flex", gap: "12px", marginBottom: "48px", paddingBottom: "40px", borderBottom: "1.5px solid var(--border)", flexWrap: "wrap" }}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ background: "var(--red)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              Live site ↗
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ border: "1.5px solid var(--border)", color: "var(--black)", padding: "10px 22px", borderRadius: "999px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              GitHub →
            </a>
          )}
        </div>
      )}

      <article className="prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </main>
  );
}
