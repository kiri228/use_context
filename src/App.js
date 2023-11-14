import React from "react";
import { UserProvider } from "./components/UserContext";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import UserList from "./components/UserList";

function App() {
  return (
    <UserProvider>
      <div>
        <SignUpForm />
        <hr />
        <LoginForm />
        <hr />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
