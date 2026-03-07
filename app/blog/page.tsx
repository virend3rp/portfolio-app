import Link from "next/link";
import { db } from "@/lib/db";
import { blogPosts as blogPostsTable } from "@/lib/schema";

const thumbnailGradients = [
  "linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 60%, #0f0f2e 100%)",
  "linear-gradient(135deg, #0a1a0a 0%, #1a3320 60%, #0d2a0d 100%)",
  "linear-gradient(135deg, #1a0a0a 0%, #3d1515 60%, #2a0f0f 100%)",
];

export default function Blog() {
  const blogPosts = db.select().from(blogPostsTable).all();
  return (
    <main style={{ padding: "40px 48px 72px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "28px" }}>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: "6px",
          }}
        >
          Thoughts & rants
        </h1>
        <p style={{ fontSize: "13px", color: "var(--gray)" }}>things I figured out, or am still figuring out</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {blogPosts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ cursor: "pointer" }}>
              {/* Thumbnail */}
              <div
                style={{
                  aspectRatio: "16/9",
                  background: thumbnailGradients[i % thumbnailGradients.length],
                  borderRadius: "12px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  overflow: "hidden",
                }}
              >
                {/* Play button */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "var(--red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "18px solid white",
                      marginLeft: "5px",
                    }}
                  />
                </div>
                {/* Tag badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    background: "var(--red)",
                    color: "white",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {post.tag}
                </div>
              </div>

              {/* Info */}
              <div style={{ fontSize: "11px", color: "var(--gray)", marginBottom: "5px" }}>{post.date}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.3px", marginBottom: "5px" }}>
                {post.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--gray)",
                  lineHeight: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.excerpt}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
