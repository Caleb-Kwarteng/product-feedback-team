import React from "react";
import Nav from "./Roadmap-nav";
import Planned from "./Planned";
import InProgress from "./InProgress";
import Live from "./Live";
import "./roadmap.css";

const RoadmapMain = () => {
  return (
    <>
      <div className="container">
        {/* Nav DIv */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#373F68",
            color: "white",
            borderRadius: "10px",
            msFlexDirection: "row",
          }}
        >
          <div>
            <p>&lt; Go Back</p>
          </div>
          <div>
            {" "}
            <button
              style={{ backgroundColor: "#AD1FEA", color: "white" }}
              className="btn"
              type="submit"
              value=" + Add Feedback"
            >
              {" "}
              + Add Feedback
            </button>
          </div>
        </div>
      </div>
    </>
    /**<div className="roadmap-container">
      <Nav />
      <div className="roadmap-grid">
        <Planned />
        <InProgress />
        <Live />
      </div>
    </div> */
  );
};

export default RoadmapMain;
