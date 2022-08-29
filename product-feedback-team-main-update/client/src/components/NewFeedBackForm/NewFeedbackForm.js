import "../../App.css";
import CancelBtn from "../buttons/CancelBtn";
import { Route, Routes, useNavigate } from "react-router-dom";
import FeedbackDetailPage from "../../containers/FeedbackDetailPage/FeedbackDetailPage";

const NewFeedBackForm = ({
  title,
  category,
  detail,
  setDetail,
  setCategory,
  setTitle,
  handleSubmit,
}) => {
  const navDash = useNavigate();
  const navigateToDash = () => {
    navDash("/dashboard");
  };
  return (
    <>
      <div className="container ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h5
            className="p-4 my-5 mx-5"
            style={{
              cursor: "pointer",
              textAlign: "left",
            }}
            type="button"
            onClick={navigateToDash}
          >
            &lt; Go Back
          </h5>
          <Routes>
            <Route path="/dashboard" element={<FeedbackDetailPage />} />
          </Routes>
          <div
            className="p-3"
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <h3 className="new mx-4">Create New Feedback</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3 p-4">
                <label className="form-label">
                  <b>Feedback Title</b>
                </label>
                <br />
                Add a short, descriptive headline
                <input
                  type="text"
                  className="form-control textInput"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ background: "#F7F8FD" }}
                />
              </div>
              <div className="mb-3 p-4">
                <label class="form-label">Category</label>
                <br />
                Choose a category for your feedback
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ background: "#F7F8FD" }}
                >
                  <option selected>All</option>
                  <option
                    value="1"
                    onSelect={(e) => setCategory(e.target.value)}
                  >
                    Feature
                  </option>
                  <option
                    value="2"
                    onSelect={(e) => setCategory(e.target.value)}
                  >
                    UI
                  </option>
                  <option
                    value="3"
                    onSelect={(e) => setCategory(e.target.value)}
                  >
                    UX
                  </option>
                  <option
                    value="4"
                    onSelect={(e) => setCategory(e.target.value)}
                  >
                    Bug
                  </option>
                  <option
                    value="5"
                    onSelect={(e) => setCategory(e.target.value)}
                  >
                    Enhancement
                  </option>
                </select>
              </div>

              <div className="p-4">
                <label>
                  <b>Feedback Detail</b>
                  <br />
                  Include any specific comments on what should be improved,
                  added, etc.
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  name="detail"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  style={{ background: "#F7F8FD" }}
                ></textarea>
              </div>

              <div className="mb-3 mt-3 p-4 btnDiv">
                <div>
                  <CancelBtn />
                </div>{" "}
                <div className="mx-1">
                  <input
                    style={{ backgroundColor: "#AD1FEA", color: "white" }}
                    className="btn"
                    type="submit"
                    value=" + Add Feedback"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <div>
          <h5 className="p-5 mx-4" style={{ cursor: "pointer" }}>
            {" "}
            &lt; Go Back
          </h5>
        </div>
        <div
          className="addNewFormContainer container mx-5 p-4"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h3 className="new mx-4">Create New Feedback</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3 p-4">
              <label className="form-label">
                <b>Feedback Title</b>
              </label>
              <br />
              Add a short, descriptive headline
              <input
                type="text"
                className="form-control textInput"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 p-4">
              <label class="form-label">Category</label>
              <br />
              Choose a category for your feedback
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ background: "#F7F8FD" }}
              >
                <option selected>All</option>
                <option value="1" onSelect={(e) => setCategory(e.target.value)}>
                  Feature
                </option>
                <option value="2" onSelect={(e) => setCategory(e.target.value)}>
                  UI
                </option>
                <option value="3" onSelect={(e) => setCategory(e.target.value)}>
                  UX
                </option>
                <option value="4" onSelect={(e) => setCategory(e.target.value)}>
                  Bug
                </option>
                <option value="5" onSelect={(e) => setCategory(e.target.value)}>
                  Enhancement
                </option>
              </select>
            </div>

            <div className="p-4">
              <label>
                <b>Feedback Detail</b>
                <br />
                Include any specific comments on what should be improved, added,
                etc.
              </label>
              <textarea
                className="form-control"
                rows="5"
                id="comment"
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
            </div>

            <div class="mb-3 mt-3 p-4 btnDiv">
              <div>
                <CancelBtn />
              </div>{" "}
              <div className="mx-1">
                <input
                  style={{ backgroundColor: "#AD1FEA", color: "white" }}
                  className="btn"
                  type="submit"
                  value=" + Add Feedback"
                />
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default NewFeedBackForm;
