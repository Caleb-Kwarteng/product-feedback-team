import React from "react";
//import "../../added features/edit-feedback-page/editfeedback.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import FeedBackDetail from "../../f_detail/FeedBackDetail";

const EditFeedback = () => {
  const editNav = useNavigate();
  const navigateToFeedDet = () => {
    editNav("/feedbackDetail");
  };
  return (
    <>
      <div
        className="container my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h5
            className="p-4"
            type="button"
            style={{ cursor: "pointer" }}
            onClick={navigateToFeedDet}
          >
            &lt; Go Back
          </h5>

          <Routes>
            <Route path="/feedbackDetail" element={<FeedBackDetail />} />
          </Routes>
        </div>
        <div
          className="mx-5 p-5"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            width: "540px",
          }}
        >
          <h3 className="pt-4">Editing 'Add a dark theme option'</h3>
          <form className="pt-4">
            <div class="mb-3">
              <label class="form-label">Feedback Title</label>
              <p>Add a short, descriptive headline</p>
              <input type="text" class="form-control" />
            </div>
            <label class="form-label">Category</label>
            <br />
            Choose a category for your feedback
            <select class="form-select" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">Feature</option>
              <option value="2">UI</option>
              <option value="3">UX</option>
              <option value="4">Bug</option>
              <option value="5">Enhancement</option>
            </select>
            <br />
            <label class="form-label">Update Status</label>
            <br />
            Change feedback state
            <select class="form-select" aria-label="Default select example">
              <option selected>Planned</option>
              <option value="1">In-Progress</option>
              <option value="2">Live</option>
            </select>
            <br />
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Feedback Detail
              </label>
              <br />
              Include any specific comments on what should be improved, added,
              etc.
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Delete"
                />
              </div>
              <div>
                <input
                  type="button"
                  className="btn btn-secondary"
                  value="Cancel"
                />
              </div>
              <div>
                <input
                  type="button"
                  className="btn btn-danger"
                  value="Add Feedback"
                  style={{ background: "#AD1FEA" }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFeedback;
/**<div>
      <button className="back btn">Go Back</button>
      <div className="container">
        <img src="./icon-edit-feedback.svg" className="circle"></img>

        <h3>Editing 'Add a dark theme option'</h3>
        <form className="form">
          <div className="form-inputs">
            <h5>Feedback Title</h5>
            <label for="headline" className="form-label">
              Add a short, descriptive headline
            </label>
            <input
              id="headline"
              className="form-input"
              type="text"
              name="headline"
              placeholder="Add a dark theme option"
            />
          </div>
          <div className="form-inputs">
            <h5>Category</h5>
            <label for="category" className="form-label">
              Choose a category for your feedback
            </label>
            <select id="category" name="category">
              <option value="feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Bugs">Bugs</option>
            </select>
          </div>
          <div className="form-inputs">
            <h5>Update Status</h5>
            <label for="status" className="form-label">
              Change feature state
            </label>
            <select id="status" name="status" size="1">
              <option value="suggestion">Suggestion</option>
              <option value="planned">Planned</option>
              <option value="in-progress">In-Progress</option>
              <option value="live">Live</option>
            </select>
          </div>

          <div className="form-inputs">
            <h5>Feedback Detail</h5>
            <label for="headline" className="form-label">
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <input
              id="headline"
              className="form-input"
              type="text"
              name="headline"
              placeholder="It would help people with light sensitivity"
            />
          </div>

          <div className="buttons">
            <button className="delete-btn" type="submit">
              Delete
            </button>

            <div className="save-cancel-btn">
              <button className="cancel-btn" type="submit">
                Cancel
              </button>

              <button className="feedback-btn" type="submit">
                +Add feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </div> */
