import AddFeedbackBtn from "../../buttons/AddFeedbackBtn";
import { useNavigate } from "react-router-dom";

const EmptySuggestions = () => {
  const nav = useNavigate();

  const navigateLogin = () => {
    nav("/feedback");
  };
  return (
    <>
      <div
        className=" text-center"
        style={{ margin: "20px", borderRadius: "10px" }}
      >
        <div
          className="row  pb-2 p-5"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          {/*  <img src="public/images/illustration-empty.svg" /> */}
          <p style={{ textAlign: "center" }} className="p-4">
            <b>There is no feedback yet.</b>
          </p>
          <p className="p-4">
            Got a suggestion? Found abug that needs to be squashed? <br />
            We love hearing about new ideas to improve our app
          </p>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="mt-5"
          >
            {" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptySuggestions;
