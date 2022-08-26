import LoginForm from "../../components/loginForm/LoginForm";
import { useState } from "react";

const LoginPage = ({ login, setLogin, setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        setAuth={setAuth}
      />
    </>
  );
};

export default LoginPage;
