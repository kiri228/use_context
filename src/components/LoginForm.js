import React, { useState } from "react";
import { useUser } from "./UserContext";

const LoginForm = () => {
  const { users } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      console.log(`Welcome, ${username}!`);
      setIsModalOpen(false);
    } else {
      console.log("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => setIsModalOpen(true)}>Login</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
