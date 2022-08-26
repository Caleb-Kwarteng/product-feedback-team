import { useState } from "react";
import SignUpForm from "../../components/signUpForm/SignUpForm";

const SignUpPage = ({ signUp, setSignUp, setAuth }) => {
  const [fullname, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUp(fullname, username, password);
    setName("");
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <SignUpForm
        fullname={fullname}
        username={username}
        password={password}
        setName={setName}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        setAuth={setAuth}
      />
    </>
  );
};

export default SignUpPage;
