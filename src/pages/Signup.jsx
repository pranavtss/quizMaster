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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(1000px 600px at 30% 20%, #ffffff40, transparent), linear-gradient(135deg, #a8edea, #fed6e2)",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "min(560px, 92vw)",
          background: "#ffffff",
          borderRadius: "14px",
          padding: "26px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "16px",
            fontSize: "22px",
            fontWeight: "600",
            color: "#2c3e50",
          }}
        >
          Sign Up
        </h2>
        <p
          style={{
            marginBottom: "18px",
            fontSize: "16px",
            color: "#6b7c93",
          }}
        >
          Enter your username to begin the quiz
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "12px 14px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              fontSize: "16px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px 18px",
              border: "none",
              borderRadius: "10px",
              background: "#3498db",
              color: "#fff",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#2d7fb7")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#3498db")}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
