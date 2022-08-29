import React from "react";
import Nav from "./Roadmap-nav";
import Planned from "./Planned";
import InProgress from "./InProgress";
import Live from "./Live";
import "./roadmap.css";

const RoadmapMain = () => {
  return (
    <div className="roadmap-container">
      <Nav />
      <div className="roadmap-grid">
        <Planned />
        <InProgress />
        <Live />
      </div>
    </div>
  );
};

export default RoadmapMain;
