import { useEffect } from "react";
import ResultCard from "../components/ResultCard";

export default function Result({ score, total, onRestart, onHome, answers, userName }) {

  useEffect(() => {
    const saveScore = async () => {
      try {
        const res = await fetch("http://localhost:5000/users/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: userName, score }),
        });
        const data = await res.json();
        console.log("Score saved:", data);
      } catch (err) {
        console.error("Error saving score:", err);
      }
    };

    if (userName) saveScore();
  }, [score, userName]);

  return (
    <div className="page">
      <ResultCard score={score} total={total} onRestart={onRestart} onHome={onHome} />

      <div className="card" style={{ maxHeight: "300px", overflowY: "auto", marginTop: "20px" }}>
        <h3>Correct Answers</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {answers.map((a, i) => (
            <li key={i} style={{ marginBottom: "12px" }}>
              <strong>Q{i + 1}:</strong> {a.q} <br />
              <span style={{ color: a.selected === a.correct ? "green" : "red" }}>
                Your Answer: {a.selected}
              </span>
              <br />
              <span style={{ color: "blue" }}>Correct: {a.correct}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
