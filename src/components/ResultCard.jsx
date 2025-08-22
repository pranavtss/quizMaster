export default function ResultCard({ score, total, onRestart, onHome }) {
  const emoji = score === total ? "🤩" : score >= total / 2 ? "🎉" : "💪";

  return (
    <div className="card result">
      <h2>Quiz Finished {emoji}</h2>
      <p className="score">
        Your Score: <strong>{score}</strong> / {total}
      </p>
      <div className="actions">
        <button onClick={onRestart}>Retry</button>
        <button className="secondary" onClick={onHome}>Go Home</button>
      </div>
    </div>
  );
}
