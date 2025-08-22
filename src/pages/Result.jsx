import ResultCard from "../components/ResultCard";

export default function Result({ score, total, onRestart, onHome }) {
  return (
    <div className="page">
      <ResultCard score={score} total={total} onRestart={onRestart} onHome={onHome} />
    </div>
  );
}
