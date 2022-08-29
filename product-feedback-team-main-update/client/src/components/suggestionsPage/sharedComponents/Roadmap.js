import { Route, Routes, useNavigate } from "react-router-dom";
import RoadmapMain from "../../added features/roadmap/RoadmapMain";
const Roadmap = () => {
  const roadmapNav = useNavigate();

  const navigateToRoadmap = () => {
    //navigate to roadmap
    roadmapNav("/roadmap");
  };
  return (
    <>
      <div className="roadmapDiv p-3">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <b>Roadmap</b>
          </p>
          <p
            type="button"
            style={{ cursor: "pointer" }}
            onClick={navigateToRoadmap}
          >
            View
          </p>

          <Routes>
            <Route path="/roadmap" element={<RoadmapMain />} />
          </Routes>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul>
            <li className="listColor">Planned</li>

            <li>In-Progress</li>
            <li>Live</li>
          </ul>
          <ul style={{ listStyleType: "none" }}>
            <li>0</li>
            <li>0</li>
            <li>0</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
