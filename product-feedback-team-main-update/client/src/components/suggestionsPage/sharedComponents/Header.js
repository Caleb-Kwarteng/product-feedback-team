import AddFeedbackBtn from "../../buttons/AddFeedbackBtn";
import { Routes, Route, useNavigate } from "react-router-dom";
import FeedbackDetailPage from "../../../containers/FeedbackDetailPage/FeedbackDetailPage";

const Header = ({ feedbacks }) => {
  const nav = useNavigate();

  const navigateLogin = () => {
    nav("/feedback");
  };
  return (
    <>
      <div className="header p-3">
        <div>{feedbacks.length} Suggestions</div>
        <div>
          <p>Sort by : </p>
        </div>
        <div>
          <button
            style={{ backgroundColor: "#AD1FEA", color: "white" }}
            className="btn"
            type="submit"
            value=" + Add Feedback"
            onClick={navigateLogin}
          >
            {" "}
            + Add Feedback
          </button>

          <Routes>
            <Route path="/feedback" element={<FeedbackDetailPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Header;
