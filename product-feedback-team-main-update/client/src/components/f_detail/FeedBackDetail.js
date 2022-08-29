import { useNavigate, Routes, Route } from "react-router-dom";
import EditFeedback from "../added features/edit-feedback-page/EditFeedback";

const FeedBackDetail = ({ feedback }) => {
  const backNav = useNavigate();
  const navigateBack = () => {
    backNav("/dashboard");
  };

  const navigateToEdit = () => {
    backNav("/editFeedback");
  };
  return (
    <>
      <div className="container">
        <div
          className="container my-5"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h5
            type="button"
            onClick={navigateBack}
            style={{ cursor: "pointer" }}
          >
            &lt; Go Back
          </h5>
          <input
            type="button"
            className="btn btn-primary"
            value="Edit Feedback"
            onClick={navigateToEdit}
          />
        </div>
        <Routes>
          <Route path="/dashboard" element={<FeedBackDetail />} />
          <Route path="/editFeedback" element={<EditFeedback />} />
        </Routes>
        {/* <Suggestion feedback={feedback} /> */}
      </div>
    </>
  );
};

export default FeedBackDetail;
