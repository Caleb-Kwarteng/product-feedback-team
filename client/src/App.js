//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [signUp, setSignUp] = useState([]);

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
      {/* <FeedbackDetailPage feedbacks={feedbacks} addFeedback={addFeedback} /> */}
      {/* <SignUpPage signUp={signUp} setSignUp={setSignUp} /> */}
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
      <Header />
      <Outlet />
    </>
  );
}

export default App;
