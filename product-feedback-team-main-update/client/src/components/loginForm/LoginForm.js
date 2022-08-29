import React from "react";
import "../../App.css";
import { useState } from "react";
const LoginForm = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col pt-5 mx-5">
            <h1 className="p-5 pt-5 my-5 text-center">LOGIN HERE</h1>{" "}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control my-3"
                  id="exampleFormControlInput1"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                  onClick={() => setAuth(true)}
                />
              </div>
            </form>
          </div>
          <div className="col loginForm"></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
