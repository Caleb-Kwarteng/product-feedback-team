//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import FeedbackDetailPage from "./containers/FeedbackDetailPage/FeedbackDetailPage";
import SignUpPage from "./containers/SignUpPage/SIgnUpPage";
import { Route, Routes } from "react-router-dom";
import SuggestionsPage from "./components/suggestionsPage/SuggestionsPage";
import LoginPage from "./containers/login/LoginPage";
import FeedBackDetail from "./components/f_detail/FeedBackDetail";
import EditFeedback from "./components/added features/edit-feedback-page/EditFeedback";
import RoadmapMain from "./components/added features/roadmap/RoadmapMain";

function App() {
  //usestate to check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <>
      <Routes>
        <Route
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
          path="/dashboard/*"
          element={
            isAuthenticated ? (
              <SuggestionsPage setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route exact path="/feedback" element={<FeedbackDetailPage />} />
        <Route exact path="/feedbackDetail" element={<FeedBackDetail />} />
        <Route exact path="/editFeedback" element={<EditFeedback />} />
        <Route exact path="/roadmap" element={<RoadmapMain />} />
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
