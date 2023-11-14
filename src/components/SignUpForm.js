import React, { useState } from "react";
import { useUser } from "./UserContext";

const SignUpForm = () => {
  const { addUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [hobby, setHobby] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUp = () => {
    const newUser = {
      id: Date.now(),
      username,
      password,
      avatar,
      description,
      hobby,
    };
    addUser(newUser);
    setUsername("");
    setPassword("");
    setAvatar("");
    setDescription("");
    setHobby("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={() => setIsModalOpen(true)}>Sign Up</button>
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
            <label>
              Photo:
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Hobby:
              <input
                type="text"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
              />
            </label>
            <br />
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
