import React, { useState } from "react";
import { useUser } from "./UserContext";
import styles from "./UserList.module.css";

const UserList = () => {
  const { users, updateUser, deleteUser } = useUser();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [newHobby, setNewHobby] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleUpdate = () => {
    if (selectedUserId !== null && (newHobby || newDescription)) {
      const updatedUser = {};
      if (newHobby) updatedUser.hobby = newHobby;
      if (newDescription) updatedUser.description = newDescription;

      updateUser(selectedUserId, updatedUser);
      setNewHobby("");
      setNewDescription("");
      setSelectedUserId(null);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userCard}>
            <img
              src={user.avatar || "/default-avatar.png"}
              alt={`${user.username}'s avatar`}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <h3>{user.username}</h3>
              <p>Description: {user.description}</p>
              <p>Hobby: {user.hobby}</p>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.updateButton}
                onClick={() => setSelectedUserId(user.id)}
              >
                Update
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
              <a
                href={user.avatar}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.avatarLink}
              >
                View Avatar
              </a>
            </div>
          </li>
        ))}
      </ul>
      {selectedUserId !== null && (
        <div className={styles.updateForm}>
          <label>
            New Hobby:
            <input
              type="text"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
            />
          </label>
          <label>
            New Description:
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default UserList;
