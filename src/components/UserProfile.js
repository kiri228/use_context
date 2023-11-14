import React from "react";
// import "./styles.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.username}</h3>
      <p>
        <strong>Description:</strong> {user.description}
      </p>
      <p>
        <strong>Hobby:</strong> {user.hobby}
      </p>
    </div>
  );
};

export default UserProfile;
