import EnhancementBtn from "./buttons/EnhancementBtn";
import { BsFillChatFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { useNavigate, Routes, Route } from "react-router-dom";
import FeedBackDetail from "./f_detail/FeedBackDetail";

import FeatureBtn from "./buttons/FeatureBtn";
import UIBtn from "./buttons/UIBtn";
import UXBtn from "./buttons/UXBtn";
import BugBtn from "./buttons/BugBtn";
import { useState } from "react";
const Suggestion = ({ feedback }) => {
  //Upvote state
  const [vote, setUpvotes] = useState(0);

  //Route to individual feedback detail
  const feedbackDetailNav = useNavigate();

  const navigateToFeedback = () => {
    feedbackDetailNav("/feedbackDetail");
  };

  //Switch statement to handle conditional rendering of buttons
  const functionWithSwitch = (feedback) => {
    switch (feedback.category) {
      case "Feature":
        return <FeatureBtn />;
      case "UI":
        return <UIBtn />;
      case "UX":
        return <UXBtn />;
      case "Enhancement":
        return <EnhancementBtn />;
      case "Bug":
        return <BugBtn />;
      default:
        return "Not an option";
    }
  };
  return (
    <>
      <div
        className=" text-center"
        style={{ margin: "20px", borderRadius: "10px" }}
      >
        <div
          className="row pt-2 pb-2"
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <div className="col">
            <div className="btn btn-light">
              <FaAngleUp type="button" />
              <p>{feedback.upvotes}</p>
            </div>
          </div>
          <div className="col-6">
            <h3
              style={{ textAlign: "left" }}
              type="button"
              onClick={navigateToFeedback}
            >
              {feedback.title}
            </h3>
            <p style={{ textAlign: "left" }}>{feedback.description}</p>
            <div style={{ textAlign: "left" }}>
              {functionWithSwitch(feedback)}
            </div>
          </div>
          <div className="col pt-4">
            <BsFillChatFill /> {feedback.comments.length}
          </div>
        </div>
        <Routes>
          <Route path="/feedbackDetail" element={<FeedBackDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default Suggestion;
