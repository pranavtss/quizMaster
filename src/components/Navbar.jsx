export default function Navbar({ active = "home", onNavigate }) {
  return (
    <nav className="navbar">
      <div className="logo">QuizMaster 🎯</div>
      <div className="nav-links">
        <button
          className={`nav-button ${active === "home" ? "active" : ""}`}
          onClick={() => onNavigate("home")}
        >
          Home
        </button>
        <button
          className={`nav-button ${active === "quiz" ? "active" : ""}`}
          onClick={() => onNavigate("quiz")}
        >
          Quiz
        </button>
      </div>
    </nav>
  );
}
