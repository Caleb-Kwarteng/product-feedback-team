import AddFeedbackBtn from "../../buttons/AddFeedbackBtn";

const EmptySuggestions = () => {
  return (
    <>
      <div className="emptyDIv">
        <div className="textDiv">
          <p style={{ textAlign: "center" }} id="text1">
            <b>There is no feedback yet.</b>
          </p>
          <p>
            Got a suggestion? Found abug that needs to be squashed? <br />
            We love hearing about new ideas to improve our app
          </p>
          <br />
          <div
            style={{ display: "flex", justifyContent: "center" }}
            id="addbtn"
          >
            {" "}
            <AddFeedbackBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptySuggestions;
