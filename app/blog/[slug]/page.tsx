import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { blogPosts as blogPostsTable } from "@/lib/schema";
import { eq } from "drizzle-orm";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = db.select().from(blogPostsTable).where(eq(blogPostsTable.slug, slug)).get();
  if (!post) notFound();

  const lines = post.body.trim().split("\n");

  return (
    <main style={{ padding: "72px 48px", maxWidth: "720px", margin: "0 auto" }}>
      <Link
        href="/blog"
        style={{ fontSize: "13px", color: "var(--gray)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "40px" }}
      >
        ← all posts
      </Link>

      <div style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--gray)", letterSpacing: "1px", textTransform: "uppercase" }}>
            {post.date}
          </span>
          <span style={{ fontSize: "11px", fontWeight: 600, padding: "2px 10px", borderRadius: "999px", background: "var(--red-light)", color: "var(--red)" }}>
            {post.tag}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: "16px",
          }}
        >
          {post.title}
        </h1>

        <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: 1.7, borderBottom: "1.5px solid var(--border)", paddingBottom: "32px" }}>
          {post.excerpt}
        </p>
      </div>

      <article style={{ fontSize: "16px", lineHeight: 1.85, color: "#374151" }}>
        {lines.map((line, i) => {
          if (line.startsWith("## ")) {
            return (
              <h2
                key={i}
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "28px",
                  fontWeight: 900,
                  letterSpacing: "-0.5px",
                  color: "var(--black)",
                  marginTop: "48px",
                  marginBottom: "16px",
                }}
              >
                {line.replace("## ", "")}
              </h2>
            );
          }
          if (line.startsWith("```")) return null;
          if (line.trim() === "") return <br key={i} />;
          return <p key={i} style={{ marginBottom: "6px" }}>{line}</p>;
        })}
      </article>
    </main>
  );
}
