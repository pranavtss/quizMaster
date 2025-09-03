import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("https://backend-quizmaster.onrender.com/usersleaderboard");
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: "400px", margin: "0 auto" ,maxHeight:"300px", overflowY:"auto"}}>
        <h2>Leaderboard 🏆</h2>
        <ol>
          {users.map((user, i) => (
            <li key={user._id}>
              {user.name} - {user.score}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
