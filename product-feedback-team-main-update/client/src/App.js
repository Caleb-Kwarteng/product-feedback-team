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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage setAuth={setAuth} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          exact
          path="/signup"
          element={
            !isAuthenticated ? (
              <SignUpPage setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/dashboard"
          element={
            isAuthenticated ? (
              <SuggestionsPage setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route exact path="/feedback" element={<FeedbackDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
/**const [feedbacks, setFeedbacks] = useState([]);
  const [signUp, setSignUp] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }; */
//CallBack function to create SignUp
/** const addSignupDetails = (fullname, username, password) => {
    setSignUp([
      ...signUp,
      {
        fullname: fullname,
        username: username,
        password: password,
      },
    ]);
  }; */

//Calback function to add new feedback
/** const addFeedback = (feedbackTitle, feedbackCategory, feedbackDetail) => {
    setFeedbacks([
      ...feedbacks,
      {
        feedbackTitle: feedbackTitle,
        feedbackCategory: feedbackCategory,
        feedbackDetail: feedbackDetail,
      },
    ]);
  }; */
