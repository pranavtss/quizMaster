import QuestionCard from "../components/questionCard";

export default function Quiz({ questions, index, onAnswer }) {
  const q = questions[index];

  const progressPercent = ((index + 1) / questions.length) * 100;

  return (
    <div className="page">
      <p className="progress">
        Question {index + 1} / {questions.length}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <QuestionCard
        question={q.question}
        options={q.options}
        onSelect={onAnswer}
      />
    </div>
  );
}
