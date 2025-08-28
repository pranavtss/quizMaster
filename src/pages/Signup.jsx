import { useState } from "react";

export default function Signup({ onContinue }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onContinue(name.trim());
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
