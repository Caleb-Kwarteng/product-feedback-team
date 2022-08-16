import EnhancementBtn from "./buttons/EnhancementBtn";
import { BsFillChatFill } from "react-icons/bs";
import { FaAngleUp } from "react-icons/fa";
const Suggestion = ({ feedback }) => {
  return (
    <>
      <div className="singleSuggestion pt-2 pb-2">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="btn btn-light">
                <FaAngleUp type="button" />
                <p>5</p>
              </div>
            </div>
            <div class="col-6">
              <h3 style={{ textAlign: "left" }}>Title</h3>
              <p style={{ textAlign: "left" }}>Detail</p>
              <div style={{ textAlign: "left" }}>
                <EnhancementBtn />
              </div>
            </div>
            <div class="col pt-4">
              <BsFillChatFill /> 2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
