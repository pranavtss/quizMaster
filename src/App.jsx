import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { questions } from "./data/questions";
import "./index.css";

const VIEWS = { HOME: "home", QUIZ: "quiz", RESULT: "result" };

export default function App() {
  const [view, setView] = useState(VIEWS.HOME);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setIndex(0);
    setScore(0);
    setView(VIEWS.QUIZ);
  };

  const handleAnswer = (selected) => {
    if (selected === questions[index].answer) {
      setScore((s) => s + 1);
    }
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else {
      setView(VIEWS.RESULT);
    }
  };

  const restart = () => startQuiz();
  const goHome = () => setView(VIEWS.HOME);

  return (
    <div className="app">
      <Navbar active={view} onNavigate={(v) => {
        if (v === "quiz") startQuiz();
        else setView(VIEWS.HOME);
      }} />

      {view === VIEWS.HOME && <Home onStart={startQuiz} />}

      {view === VIEWS.QUIZ && (
        <Quiz
          questions={questions}
          index={index}
          onAnswer={handleAnswer}
        />
      )}

      {view === VIEWS.RESULT && (
        <Result
          score={score}
          total={questions.length}
          onRestart={restart}
          onHome={goHome}
        />
      )}
    </div>
  );
}
