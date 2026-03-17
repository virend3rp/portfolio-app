"use client";

import { useState } from "react";

export default function SubscribeButton() {
  const [state, setState] = useState<"idle" | "clicked" | "done">("idle");

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (state !== "idle") return;
    setState("clicked");
    setTimeout(() => setState("done"), 150);
    setTimeout(() => setState("idle"), 2200);
  }

  const label =
    state === "idle" ? "Subscribe" : state === "clicked" ? "Subscribe" : "Subscribed ✓";

  const bg =
    state === "done" ? "var(--red)" : "var(--black)";

  return (
    <button
      onClick={handleClick}
      style={{
        background: bg,
        color: "white",
        padding: "10px 22px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: 700,
        border: "none",
        cursor: state === "idle" ? "pointer" : "default",
        flexShrink: 0,
        transition: "background 0.25s ease, transform 0.1s ease, opacity 0.25s ease",
        transform: state === "clicked" ? "scale(0.93)" : "scale(1)",
        minWidth: "110px",
      }}
    >
      {label}
    </button>
  );
}
