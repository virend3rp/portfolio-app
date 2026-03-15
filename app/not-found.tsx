import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "120px 48px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--red)", marginBottom: "16px" }}>
        404
      </div>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-1.5px", marginBottom: "16px" }}>
        Page not found
      </h1>
      <p style={{ fontSize: "15px", color: "var(--gray)", lineHeight: 1.7, marginBottom: "32px" }}>
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{ background: "var(--black)", color: "white", padding: "10px 22px", borderRadius: "999px", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}
      >
        Go home
      </Link>
    </main>
  );
}
