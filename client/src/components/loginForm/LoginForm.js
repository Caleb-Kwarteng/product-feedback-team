import React from "react";
import "../../App.css";
import { useState } from "react";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:4001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        /** headers: {
          authorization: API_KEY,
          Accept: "application/json",
        } */
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div class="container-fluid" style={{ height: "100vh" }}>
        <div class="row">
          <div class="col pt-5">
            <h2 className="p-5 pt-5 text-center">LOGIN HERE</h2>{" "}
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div class="col loginForm"></div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
