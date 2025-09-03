import { useState } from "react";

export default function Signup({ onContinue }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const res = await fetch("https://backend-quizmaster.onrender.com/users/score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), score: 0 }), 
      });
      const data = await res.json();
      if (res.ok) onContinue(data.user.name);
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Sign Up</h2>
        <p className="subtitle">Enter your username to begin the quiz</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-box"
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}
