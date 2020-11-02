import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="worksWrapper">
      <h2>How it works</h2>
      <hr />
      <div className="howWrapper">
        <div className="howDeveloper">
          <h3>I'm a Developer</h3>
          <div>Sign up</div>
          <div>Search projects and get inspired</div>
          <div>Send your interest for working on solutions</div>
        </div>
        <div className="howProject">
          <h3>I'm a Project(owner)</h3>
          <div>Sign up</div>
          <div>Pitch your problem and get people excited</div>
          <div>Accept interest for joining your team</div>
        </div>
      </div>

      <div className="howMatch">Match.Code.Impact;</div>
    </div>
  );
};

export default HowItWorks;
