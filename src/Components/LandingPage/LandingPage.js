import React from "react";
import Home from "./Home";
import "./LandingPage.css";

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page">
        <div className="content-wrapper">
          <Home {...props} />
          <div className="content-limit"></div>
        </div>
        <div className="bg-wrapper">
          <div className="backdrop-back">
            <img src="https://co4sy.org/cosy-images/background-back-layer.jpg" alt="new" />
          </div>
          <div className="backdrop-front">
            <img src="https://co4sy.org/cosy-images/background-front-layer-comp.png" alt="new" />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
