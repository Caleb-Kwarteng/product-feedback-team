import EnhancementBtn from "./buttons/EnhancementBtn";
import { BsFillChatFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
const Suggestion = ({ feedback }) => {
  return (
    <>
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
      </div>
    </>
  );
};

export default Suggestion;
