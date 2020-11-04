import React from "react";
import HowItWorks from "./HowItWorks";
import PhotoGallery from "./PhotoGallery";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="titleWrapper">
        <h1 className="title">Connecting </h1>
        <h2 className="subTitle">
          developers <br /> with <br />
          social changemakers
        </h2>
        <br />
        <h3 className="slogan">"Join for the challenge, stay for the people!"</h3>
      </div>

      <div className="sectionIntroWrapper">
        <div className="sectionIntro middleSectionIntro">
          <div className="introWrapperCode">
            <div className="introDeveloper">
              <h3 className="typeOfUser">You are a developer</h3>
              <div> and you love to code for good? </div>
              <br />
              <div className="nice">Awesome </div>
              <br />
              <div className="nice">We need you! </div>
              {/* <Button className="linkLogin" primary label="We need you" href="/about" /> */}
            </div>
          </div>

          <div className="sectionIntro">
            <img className="landingGirl" src={require("../../Assets/Landing_girl.jpg")} alt="girl at coding" />
          </div>

          <div className="introWrapperProject">
            <div className="introProject">
              <div className="sectionIntro">
                <img className="landingBulb" src={require("../../Assets/Landing_bulb.png")} alt="girl at coding" />
              </div>
              <h3 className="typeOfUser">You are a project</h3>
              <div>and you have a tech problem? </div>
              <br />
              <div className="nice">No worries </div>
              <br />
              <div className="nice">We help you! </div>
              {/*  <Button className="linkLogin" primary label="We help you" href="/about" /> */}
            </div>
          </div>
        </div>
        <div className="sectionIntro">
          <img className="landingtree" src={require("../../Assets/Landing_tree.jpg")} alt="tree in hands" />
        </div>
      </div>
      <PhotoGallery />
      <HowItWorks />
    </div>
  );
};

export default Home;
