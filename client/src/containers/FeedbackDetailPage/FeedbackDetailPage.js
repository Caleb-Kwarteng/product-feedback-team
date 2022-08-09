import { useState } from "react";
import NewFeedBackForm from "../../components/NewFeedBackForm/NewFeedbackForm";
const FeedbackDetailPage = ({ feedbacks, addFeedback }) => {
  //Local state variables for adding feedback
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [detail, setDetail] = useState("");

  //logic for adding a feedback when addfeedback button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    //Add feedback to array of feedbacks
    addFeedback(title, category, detail);

    //Successfull submission clears form
    setTitle("");
    setCategory("");
    setDetail("");
  };
  return (
    <>
      <NewFeedBackForm
        title={title}
        category={category}
        detail={detail}
        setTitle={setTitle}
        setCategory={setCategory}
        setDetail={setDetail}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default FeedbackDetailPage;