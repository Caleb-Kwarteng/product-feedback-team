//import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import AddFeedbackBtn from "./components/buttons/AddFeedbackBtn";
import FeedbackDetailPage from "./containers/FeedbackDetailPage/FeedbackDetailPage";
import SignUpPage from "./containers/SignUpPage/SIgnUpPage";

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
      <SignUpPage signUp={signUp} setSignUp={setSignUp} />
    </>
  );
}

export default App;
