import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("https://backend-quizmaster.onrender.com/users/leaderboard");
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f6fa",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: "#2d3436",
        }}
      >
        Leaderboard 🏆
      </h2>
      <div
        className="card"
        style={{
          maxWidth: "400px",
          width: "100%",
          margin: "0 auto",
          maxHeight: "400px",
          overflowY: "auto",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          padding: "2rem",
          border: "1px solid #e1e1e1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ol style={{ paddingLeft: "1.2rem", width: "100%" }}>
          {users.map((user, i) => (
            <li
              key={user._id}
              style={{
                marginBottom: "0.75rem",
                fontWeight: i === 0 ? "bold" : "normal",
                color: i === 0 ? "#fdcb6e" : "#636e72",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <span>{user.name}</span>
              <span>{user.score}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
