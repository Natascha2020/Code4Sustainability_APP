import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="worksWrapper">
      <div className="howItWorksBlocker"></div>
      <h2 className="titleHowItWorks">How it works</h2>
      <div className="howWrapper">
        <h3 className="subTitleHIW">I'm a Developer</h3>
        <div className="howDeveloper">
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_login.jpg")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWDev">Sign up and introduce yourself</div>
          </div>
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_search.jpg")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWDev">
              Get inspired and <br />
              send your interest
            </div>
          </div>
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_profile.jpg")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWDev">Join the team and work on digital solutions</div>
          </div>
        </div>

        <h3 className="subTitleHIW subTitleProject">I'm a Project</h3>
        <div className="howProject">
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_problem.png")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWPro">Sign up and introduce your challenge</div>
          </div>
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_videorecord.jpg")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWPro">Pitch a 100s video and get developers excited</div>
          </div>
          <div className="imgTextWrapperHIW">
            <div className="imgWrapperHIW">
              <img className="imgHIW" src={require("../../Assets/Landing_group.jpg")} alt="Search for a project" />
            </div>
            <div className="stepHIW HIWPro">Accept interest and empower your team</div>
          </div>
        </div>
      </div>

      <div className="howMatch">Match . Code . Impact.</div>
    </div>
  );
};

export default HowItWorks;
