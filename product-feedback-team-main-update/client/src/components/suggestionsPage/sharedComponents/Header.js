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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>Sort by :</p>
          <select
            class="form-select form-select-sm"
            aria-label="Default select example"
          >
            <option selected>Most Upvotes</option>
            <option value="1">Least Upvotes</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
