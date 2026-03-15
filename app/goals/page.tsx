type Goal = {
  text: string;
  status: "done" | "in-progress" | "pending";
};

const goals: Goal[] = [
  { text: "visit LA", status: "pending" },
  { text: "visit New York", status: "pending" },
  { text: "one foreign trip with the amigos", status: "pending" },
  { text: "hit 10CR", status: "pending" },
  { text: "start a YouTube channel", status: "pending" },
  { text: "YouTube hits 100k", status: "pending" },
  { text: "finish all the books I've bought", status: "pending" },
  { text: "get a FAANG job", status: "pending" },
  { text: "fall in love", status: "pending" },
  { text: "complete writing my book", status: "pending" },
];

function GoalCard({ goal }: { goal: Goal }) {
  const isDone = goal.status === "done";
  const isActive = goal.status === "in-progress";

  const cardBg = isDone
    ? "#ede8e0"
    : isActive
    ? "var(--red-light)"
    : "white";

  const borderColor = isDone
    ? "#d6cfc4"
    : isActive
    ? "var(--red-light)"
    : "var(--border)";

  const checkBg = isDone || isActive ? "var(--black)" : "transparent";
  const checkBorder = isDone || isActive ? "none" : "2px solid #c9c4bc";

  return (
    <div
      style={{
        background: cardBg,
        border: `1.5px solid ${borderColor}`,
        borderRadius: "10px",
        padding: "18px 20px",
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
        cursor: "default",
      }}
    >
      {/* Circle */}
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          flexShrink: 0,
          marginTop: "1px",
          background: checkBg,
          border: checkBorder,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(isDone || isActive) && (
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      {/* Text */}
      <span
        style={{
          fontSize: "14px",
          fontWeight: isDone ? 400 : 500,
          lineHeight: 1.45,
          color: isDone ? "#7a7167" : "var(--black)",
          textDecoration: isDone ? "line-through" : "none",
          textDecorationColor: "#a09890",
        }}
      >
        {goal.text}
      </span>
    </div>
  );
}

export default function Goals() {
  return (
    <main className="page-pad" style={{ paddingTop: "72px", paddingBottom: "72px", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ marginBottom: "48px" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--red)", marginBottom: "8px" }}>
          Goals
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
          The list
        </h1>
        <p style={{ fontSize: "14px", color: "var(--gray)" }}>keeping it honest, keeping it public</p>
      </div>

      <div className="grid-3" style={{ gap: "10px" }}>
        {goals.map((goal) => (
          <GoalCard key={goal.text} goal={goal} />
        ))}
      </div>
    </main>
  );
}
