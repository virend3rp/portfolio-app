"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/content";

export default function ProjectsClient({
  projects,
  allTags,
}: {
  projects: Project[];
  allTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <main className="page-pad" style={{ paddingTop: "40px", paddingBottom: "72px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
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
          The rabbit holes
        </h1>
        <p style={{ fontSize: "13px", color: "var(--gray)" }}>some finished, some ongoing, all obsessive</p>
      </div>

      {/* YouTube-style pill filters */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
        <button
          onClick={() => setActiveTag(null)}
          style={{
            background: activeTag === null ? "var(--black)" : "#e5e7eb",
            color: activeTag === null ? "white" : "var(--black)",
            border: "none",
            borderRadius: "999px",
            padding: "7px 16px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            style={{
              background: activeTag === tag ? "var(--black)" : "#e5e7eb",
              color: activeTag === tag ? "white" : "var(--black)",
              border: "none",
              borderRadius: "999px",
              padding: "7px 16px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Video grid */}
      {filtered.length === 0 ? (
        <p style={{ color: "var(--gray)", fontSize: "14px" }}>no projects with that tag yet.</p>
      ) : (
        <div className="grid-3">
          {filtered.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card-hover" style={{ cursor: "pointer" }}>
                {/* Thumbnail */}
                <div
                  className="card-thumbnail"
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: "12px",
                    position: "relative",
                    marginBottom: "12px",
                    overflow: "hidden",
                    background: "#1a1a1a",
                  }}
                >
                  {p.thumbnail && (
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                    }}
                  />
                  {/* Year badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      background: "rgba(0,0,0,0.6)",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "3px 7px",
                      borderRadius: "4px",
                    }}
                  >
                    {p.year}
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "5px", flexWrap: "wrap" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: t === activeTag ? "var(--red)" : "var(--gray)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.3px", marginBottom: "5px" }}>
                  {p.title}
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
                  {p.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
