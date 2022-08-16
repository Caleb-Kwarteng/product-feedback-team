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

  console.log(feedbacks);

  return (
    <>
      <div>
        <Board />
        <nav>
          <div className="navDiv p-2 ">
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
        <Roadmap />
      </div>
      <div>
        <Header />

        <div>
          {" "}
          {feedbacks.map((feedback) => {
            <Suggestion key={feedback.id} feedback={feedback} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SuggestionsPage;
/**
 *  <div class="container- text-center">
        <div class="row">
          <div class="col-4">
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
          </div>
          <div class="col-8">
            {" "}
            <Header />
            <Suggestion />
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          background: "#F7F8FD",
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
        }}
      ></div>
 */
