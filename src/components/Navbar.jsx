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
        <button
          className={`nav-button ${active === "leaderboard" ? "active" : ""}`}
          onClick={() => onNavigate("leaderboard")}
        >
          Leaderboard
        </button>
        <button
          className={`nav-button ${active === "about" ? "active" : ""}`}
          onClick={() => onNavigate("about")}
        >
          About Us
        </button>
        <button
          className={`nav-button ${active === "signup" ? "active" : ""}`}
          onClick={() => onNavigate("signup")}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
