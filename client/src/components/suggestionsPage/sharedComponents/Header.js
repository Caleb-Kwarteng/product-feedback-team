import AddFeedbackBtn from "../../buttons/AddFeedbackBtn";

const Header = () => {
  return (
    <>
      <div className="header p-3">
        <div>0 suggestions</div>
        <div>
          <p>Sort by : </p>
        </div>
        <div>
          <AddFeedbackBtn />
        </div>
      </div>
    </>
  );
};

export default Header;
