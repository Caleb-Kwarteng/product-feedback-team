import { useNavigate, Routes, Route } from "react-router-dom";
import EditFeedback from "../added features/edit-feedback-page/EditFeedback";
import Axios from "axios";

const FeedBackDetail = ({ feedback }) => {
  const myId = feedback.id;
  const getSingleFeedback = () => {
    Axios.get("http://localhost:4001/get-feedback/", {
      params: { id: myId },
    }).then((response) => {
      console.log(response);
    });
  };
  /** const [sinlgeFeedback, setFeedback] = useState([]);
  //Function to make get requests
  const getSingleProduct = async () => {
    try {
      const response = await fetch("http://localhost:4001/get-feedback/:id");
      const jsonData = await response.json();
      setFeedback(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []); */

  //console.log(sinlgeFeedback(myId));
  const backNav = useNavigate();
  const navigateBack = () => {
    backNav("/dashboard");
  };

  const navigateToEdit = () => {
    backNav("/editFeedback");
  };
  return (
    <>
      {/* <button onClick={getSingleFeedback(myId)}>Click Me</button> */}
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
