import EnhancementBtn from "./buttons/EnhancementBtn";
import { BsFillChatFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
import { useNavigate, Routes, Route } from "react-router-dom";
import FeedBackDetail from "./f_detail/FeedBackDetail";
const Suggestion = ({ feedback }) => {
  //Route to individual feedback detail
  const feedbackDetailNav = useNavigate();

  const navigateToFeedback = () => {
    feedbackDetailNav("/feedbackDetail");
  };
  return (
    <>
      {/* Version 1
      <div className="singleSuggestion pt-2 pb-2">
          <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="btn btn-light">
                <FaAngleUp type="button" />
                <p>{feedback.upvotes}</p>
              </div>
            </div>
            <div className="col-6">
              <h3 style={{ textAlign: "left" }}>{feedback.title}</h3>
              <p style={{ textAlign: "left" }}>{feedback.description}</p>
              <div style={{ textAlign: "left" }}>
                <EnhancementBtn />
              </div>
            </div>
            <div className="col pt-4">
              <BsFillChatFill /> {feedback.comments.length}
            </div>
          </div>
        </div> 
      </div> */}
      {/* Version 2  */}
      <div
        className=" text-center"
        style={{ margin: "20px", borderRadius: "10px" }}
      >
        <div
          className="row pt-2 pb-2"
          style={{ backgroundColor: "white", borderRadius: "10px" }}
          type="button"
          onClick={navigateToFeedback}
        >
          <div className="col">
            <div className="btn btn-light">
              <FaAngleUp type="button" />
              <p>{feedback.upvotes}</p>
            </div>
          </div>
          <div className="col-6">
            <h3 style={{ textAlign: "left" }}>{feedback.title}</h3>
            <p style={{ textAlign: "left" }}>{feedback.description}</p>
            <div style={{ textAlign: "left" }}>
              <EnhancementBtn />
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
