import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const AddFeedbackBtn = () => {
  return (
    <>
      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#AD1FEA", color: "white" }}
      >
        + Add Feedback
      </button>
    </>
  );
};

export default AddFeedbackBtn;
