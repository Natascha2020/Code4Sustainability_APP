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
          <div>Find project</div>
          <div>Send interest</div>
        </div>
        <div className="howProject">
          <h3>I'm a Project</h3>
          <div>Sign up</div>
          <div>Pitch project</div>
          <div>Accept interest</div>
        </div>
      </div>

      <div className="howMatch">Match</div>
    </div>
  );
};

export default HowItWorks;
