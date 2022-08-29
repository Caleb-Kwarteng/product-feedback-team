import { useState } from "react";
import NewFeedBackForm from "../../components/NewFeedBackForm/NewFeedbackForm";
const FeedbackDetailPage = ({ feedbacks, addFeedback }) => {
  //Local state variables for adding feedback
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDetail] = useState("");

  //logic for adding a feedback when addfeedback button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { title, category, description };
      const response = await fetch("http://localhost:4001/products-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }

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
        detail={description}
        setTitle={setTitle}
        setCategory={setCategory}
        setDetail={setDetail}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default FeedbackDetailPage;
