import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, username, email, password };
      const response = await fetch("http://localhost:4001/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div class="container-fluid" style={{ height: "100vh" }}>
        <div class="row">
          <div class="col pt-5">
            <h2 style={{ textAlign: "center" }}>PRODUCT FEEDBACK APP</h2>{" "}
            <h2 className="p-5 pt-5 text-center">SIGN UP HERE</h2>{" "}
            <form className="form p-4 row" onSubmit={handleSubmit}>
              <div className="form-inputs mb-3 ">
                <label for="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  className="form-input form-control form-control-lg"
                  type="text"
                  name="fullname"
                  placeholder="Enter your username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  className="form-input form-control form-control-lg"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  className="form-input form-control form-control-lg"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  className="form-input form-control form-control-lg"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="form-input-btn" type="submit">
                Sign up
              </button>
              <span className="form-input-login">
                Already have an account? Login <a href="#">here</a>
              </span>
            </form>
          </div>
          <div class="col loginForm">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
