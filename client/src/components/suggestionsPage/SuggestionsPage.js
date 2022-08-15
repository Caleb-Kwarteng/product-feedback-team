import AllBtn from "../buttons/AllBtn";
import BugBtn from "../buttons/BugBtn";
import EnhancementBtn from "../buttons/EnhancementBtn";
import FeatureBtn from "../buttons/FeatureBtn";
import UIBtn from "../buttons/UIBtn";
import UXBtn from "../buttons/UXBtn";
import Board from "./sharedComponents/Board";
import Header from "./sharedComponents/Header";
import Roadmap from "./sharedComponents/Roadmap";

const SuggestionsPage = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundCOlor: "background: #F2F2F2;",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="suggestionsLeft">
          <Board />

          <div className="navDiv p-3">
            <div>
              <AllBtn />
            </div>

            <div>
              <UIBtn />
            </div>

            <div>
              <UXBtn />
            </div>

            <div>
              <EnhancementBtn />
            </div>

            <div>
              <BugBtn />
            </div>

            <div>
              <FeatureBtn />
            </div>
          </div>

          <div className="raodmap">
            <Roadmap />
          </div>
        </div>
        <div className="suggestionsRight">
          <Header />
        </div>
      </div>
    </>
  );
};

export default SuggestionsPage;
