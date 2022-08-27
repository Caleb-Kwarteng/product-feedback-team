//import logo from './logo.svg';
import "./App.css";
import { Fragment, useState } from "react";
import { Link, Navigate, Outlet, Router } from "react-router-dom";
import AddFeedbackBtn from "./components/buttons/AddFeedbackBtn";
import FeedbackDetailPage from "./containers/FeedbackDetailPage/FeedbackDetailPage";
import SignUpPage from "./containers/SignUpPage/SIgnUpPage";
import AllBtn from "./components/buttons/AllBtn";
import UIBtn from "./components/buttons/UIBtn";
import UXBtn from "./components/buttons/UXBtn";
import EnhancementBtn from "./components/buttons/EnhancementBtn";
import BugBtn from "./components/buttons/BugBtn";
import FeatureBtn from "./components/buttons/FeatureBtn";
import Board from "./components/suggestionsPage/sharedComponents/Board";
import Roadmap from "./components/suggestionsPage/sharedComponents/Roadmap";
import Header from "./components/suggestionsPage/sharedComponents/Header";
import EmptySuggestions from "./components/suggestionsPage/sharedComponents/EmptySuggestions";
import SignUpForm from "./components/signUpForm/SignUpForm";
import LoginForm from "./components/loginForm/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SuggestionsPage from "./components/suggestionsPage/SuggestionsPage";
import LoginPage from "./containers/login/LoginPage";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [signUp, setSignUp] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  //CallBack function to create SignUp
  const addSignupDetails = (fullname, username, password) => {
    setSignUp([
      ...signUp,
      {
        fullname: fullname,
        username: username,
        password: password,
      },
    ]);
  };

  //Calback function to add new feedback
  const addFeedback = (feedbackTitle, feedbackCategory, feedbackDetail) => {
    setFeedbacks([
      ...feedbacks,
      {
        feedbackTitle: feedbackTitle,
        feedbackCategory: feedbackCategory,
        feedbackDetail: feedbackDetail,
      },
    ]);
  };
  return (
    <>
      {/* <SuggestionsPage /> */}
      {/* <FeedbackDetailPage feedbacks={feedbacks} addFeedback={addFeedback} /> */}

      {/* <SignUpPage signUp={signUp} setSignUp={setSignUp} /> */}

      {/* {<div className="suggestionsEmpty">
        <div>
          <Board />
          <nav>
            <div className="navDiv p-2 ">
              <Link to="/All">
                <AllBtn />
              </Link>{" "}
              <Link to="/UI">
                <UIBtn />
              </Link>{" "}
              <Link to="/UX">
                <UXBtn />
              </Link>{" "}
              <Link to="/Enhancement">
                <EnhancementBtn />
              </Link>{" "}
              <Link to="/Bug">
                <BugBtn />
              </Link>{" "}
              <Link to="/Feature">
                <FeatureBtn />
              </Link>
            </div>
          </nav>
          <Roadmap />
        </div>
        <Header />
        <EmptySuggestions />
      </div>
      <Outlet />} */}
      {/*  <SignUpForm /> */}
      {/*  <LoginForm /> */}

      {/* <FeedbackDetailPage /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Product Feedback</h1>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> |
          <Link to="/feedback">Feedback</Link> |
          <Link to="/dashboard">Dashboard</Link> |
        </nav>
        <Outlet />
      </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<LoginPage />} />

            <Route path="signup" element={<SignUpPage />} />

            <Route path="dashboard" element={<FeedbackDetailPage />} />
          </Route>

          {/* test 3 <Route
            exact
            path="/login"
            element={(props) =>
              !isAuthenticated ? (
                <LoginPage {...props} setAuth={setAuth} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          <Route
            exact
            path="/signup"
            element={(props) =>
              !isAuthenticated ? (
                <SignUpPage {...props} setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/"
            element={(props) =>
              !isAuthenticated ? (
                <FeedbackDetailPage {...props} setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> 
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
