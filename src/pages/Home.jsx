export default function Home({ onStart, name }) {
  return (
    <div className="page">
      <h1>Welcome {name} 🎓</h1>
      <p className="subtitle">
      “Test your computer science knowledge with 10 fresh questions every time!”
      </p>
      <button className="start-btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}
