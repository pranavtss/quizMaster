export default function Home({ onStart }) {
  return (
    <div className="page">
      <h1>Welcome to QuizMaster 🎓</h1>
      <p className="subtitle">"Challenge yourself with this Web Development Fundamentals Quiz!"</p>
      <button className="start-btn" onClick={onStart}>Start Quiz</button>
    </div>
  );
}
