const Roadmap = () => {
  return (
    <>
      <div className="roadmapDiv p-3">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <b>Roadmap</b>
          </p>
          <p>View</p>
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
