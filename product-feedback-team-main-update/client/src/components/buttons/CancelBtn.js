import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CancelBtn = () => {
  return (
    <>
      <button
        type="button"
        className="btn"
        style={{ backgroundColor: "#3A4374", color: "white" }}
      >
        Cancel
      </button>
    </>
  );
};

export default CancelBtn;
