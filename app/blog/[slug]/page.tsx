import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { marked } from "marked";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export async function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const bodyHtml = marked(post.body) as string;

  return (
    <main className="page-pad" style={{ paddingTop: "72px", paddingBottom: "72px", maxWidth: "720px", margin: "0 auto" }}>
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

      <article className="prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </main>
  );
}
