import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import "./index.css";

const VIEWS = { SIGNUP: "signup", HOME: "home", QUIZ: "quiz", RESULT: "result" };

export default function App() {
  const [view, setView] = useState(VIEWS.SIGNUP);
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); 

  useEffect(() => {
    if (view === VIEWS.QUIZ) {
      fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
        .then((res) => res.json())
        .then((data) => {
          const formatted = data.results.map((q) => {
            const allOpts = [...q.incorrect_answers, q.correct_answer];
            return {
              question: q.question,
              options: allOpts.sort(() => Math.random() - 0.5),
              answer: q.correct_answer,
            };
          });
          setQuestions(formatted);
        });
    }
  }, [view]);

  const startQuiz = () => {
    setIndex(0);
    setScore(0);
    setAnswers([]);
    setView(VIEWS.QUIZ);
  };

  const handleAnswer = (selected) => {
    const correct = questions[index].answer;
    if (selected === correct) setScore((s) => s + 1);
    setAnswers((prev) => [...prev, { q: questions[index].question, selected, correct }]);

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
      <Navbar
        active={view}
        onNavigate={(v) => {
          if (v === "quiz") startQuiz();
          else setView(VIEWS.HOME);
        }}
      />

      {view === VIEWS.SIGNUP && (
        <Signup
          onContinue={(name) => {
            setUsername(name);
            setView(VIEWS.HOME);
          }}
        />
      )}

      {view === VIEWS.HOME && <Home onStart={startQuiz} name={username} />}

      {view === VIEWS.QUIZ && questions.length > 0 && (
        <Quiz questions={questions} index={index} onAnswer={handleAnswer} />
      )}

      {view === VIEWS.RESULT && (
        <Result
          score={score}
          total={questions.length}
          onRestart={restart}
          onHome={goHome}
          answers={answers}
        />
      )}
    </div>
  );
}
