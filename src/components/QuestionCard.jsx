export default function QuestionCard({ question, options, onSelect }) {
  return (
    <div className="card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((opt, i) => (
          <button key={i} onClick={() => onSelect(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
