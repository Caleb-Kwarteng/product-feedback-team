import "../../App.css";
import AddFeedbackBtn from "../buttons/AddFeedbackBtn";
import CancelBtn from "../buttons/CancelBtn";

const NewFeedBackForm = ({
  title,
  category,
  detail,
  setDetail,
  setCategory,
  setTitle,
  handleSubmit,
}) => {
  return (
    <>
      <div className="genericPageStyles">
        <div className="addNewFormContainer container">
          <h3 className="new">Create New Feedback</h3>

          <form onSubmit={handleSubmit}>
            <div class="mb-3 mt-3">
              <label class="form-label">
                <b>Feedback Title</b>
                <br />
                Add a short, descriptive headline
              </label>
              <input
                type="text"
                class="form-control"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">
                <b>Category</b>
                <br />
                Choose a category for your feedback
              </label>
              <input
                type="text"
                class="form-control"
                value={category}
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <label>
              <b>Feedback Detail</b>
              <br />
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              class="form-control"
              rows="5"
              id="comment"
              name="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>

            <div class="mb-3 mt-3 btnDiv">
              <div>
                {" "}
                <CancelBtn />
              </div>

              <div>
                {/* <AddFeedbackBtn />*/}
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
    </>
  );
};

export default NewFeedBackForm;
