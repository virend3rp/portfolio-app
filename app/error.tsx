"use client";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <main style={{ padding: "120px 48px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--red)", marginBottom: "16px" }}>
        Error
      </div>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: "16px" }}>
        Something went wrong
      </h1>
      <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: 1.7, marginBottom: "32px" }}>
        An unexpected error occurred. Try refreshing the page.
      </p>
      <button
        onClick={reset}
        style={{ background: "var(--red)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, border: "none", cursor: "pointer" }}
      >
        Try again
      </button>
    </main>
  );
}
