import React from "react";
import { Button } from "grommet";
import LogIn from "../Authenticate/LogIn";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="titleWrapper">
        <h1 className="title">Connecting </h1>
        <h2 className="subTitle">developers with social changemakers</h2>
        <br />
        <h3 className="slogan">"Join for a problem, stay for the people!"</h3>
      </div>

      <div className="sectionIntroWrapper">
        <div className="sectionIntro">
          <img className="landingGirl" src={require("../../Assets/Landing_girl.jpg")} alt="girl at coding" />
        </div>

        <div className="sectionIntro middleSectionIntro">
          <div className="introWrapperCode">
            <h3 className="typeOfUser">You are a developer</h3>
            <div> and you love to code for good? </div>
            <br />
            <div className="nice">Awesome! </div>
            <br />
            <Button primary label="We need you" />
          </div>

          <div className="introWrapperProject">
            <h3 className="typeOfUser">You are a project </h3>
            <div>and you have a tech problem? </div>
            <br />
            <div className="nice">No worries! </div>
            <br />
            <Button primary label="We help you" />
          </div>
        </div>
        <div className="sectionIntro">
          <img className="landingtree" src={require("../../Assets/Landing_tree.jpg")} alt="tree in hands" />
        </div>
      </div>
    </div>
  );
};

export default Home;
