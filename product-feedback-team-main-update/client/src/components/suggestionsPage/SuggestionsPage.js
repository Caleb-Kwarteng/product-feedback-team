import AllBtn from "../buttons/AllBtn";
import BugBtn from "../buttons/BugBtn";
import EnhancementBtn from "../buttons/EnhancementBtn";
import FeatureBtn from "../buttons/FeatureBtn";
import UIBtn from "../buttons/UIBtn";
import UXBtn from "../buttons/UXBtn";
import Suggestion from "../Suggestion";
import Board from "./sharedComponents/Board";
import Header from "./sharedComponents/Header";
import Roadmap from "./sharedComponents/Roadmap";

import { useEffect, useState } from "react";

const SuggestionsPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const getProductFeatures = async () => {
    try {
      const response = await fetch("http://localhost:4001/get-feedback");
      const jsonData = await response.json();
      setFeedbacks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProductFeatures();
  }, []);

  //console.log(feedbacks);

  return (
    <>
      <div className="container pt-5">
        <div class="row">
          <div class="col-sm-4 suggestionsLeft">
            <div className="">
              <div style={{ width: "255px", height: "137px" }}>
                <Board />
              </div>

              <nav>
                <div
                  className="navDiv p-3 pt-3"
                  style={{ width: "255px", height: "166px" }}
                >
                  <div>
                    {" "}
                    <AllBtn />
                  </div>
                  <div>
                    {" "}
                    <UIBtn />
                  </div>

                  <div>
                    {" "}
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
              </nav>
              <div style={{ width: "255px", height: "178px" }} className="pt-3">
                <Roadmap />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div>
              <Header feedbacks={feedbacks} />
            </div>
            <div>
              {feedbacks.map((feedback) => (
                <Suggestion key={feedback.id} feedback={feedback} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuggestionsPage;
