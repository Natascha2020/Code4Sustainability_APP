import React from "react";
import PhotoGallery from "./PhotoGallery";
import LoremIpsum from "./LoremIpsum";
import Home from "./Home";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="content-wrapper">
          {/*  <LoremIpsum /> */}
          {/*  <PhotoGallery /> */}
          {/* <LoremIpsum /> */}
          <Home />
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
