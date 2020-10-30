import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="aboutMain">
      <h2 className="aboutTitle">IT-community meets social-impact-community</h2>

      <div className="techWrapper">
        <div className="techWrapperInside">
          <h3 className="aboutSubtitle">What we love about the tech community?</h3>

          <div className="backgroundStrength">
            <ul className="strengthWrapper">
              <li className="strength">Sharing is caring</li>
              <li className="strength">Continuous support</li>
              <li className="strength">Problem solvers</li>
            </ul>
          </div>
          <div className="targetGroupWrapper">
            <div className="targetGroup">
              You are a young developer and you want to gain tech experiences while working in a creative, non-job-related environment?
            </div>
            <div className="targetGroup">
              You are a senior developer and you want to share your tech experiences and consult and supporort sustainable ideas getting started and
              transformed into life
            </div>
            <div className="targetGroup">
              You love to code in your free time and you want to meet new people and collaborate on social and environmental problems?
            </div>
          </div>
        </div>
      </div>

      <div className="techWrapper">
        <div className="techWrapperInside">
          <h3 className="aboutSubtitle">What we love about the social-impact-community?</h3>
          <ul className="strengthWrapper">
            <li className="strength">Great ideas</li>
            <li className="strength">Society and environment first</li>
            <li className="strength">Change makers and action takers</li>
          </ul>

          <div className="targetGroupWrapper">
            <div className="targetGroup">You are seeking for motivated poeple with tech skills to enrich your voluntary team?</div>
            <div className="targetGroup">You have a great idea, but you don't know exaclty how to transform that in the best tech way?</div>
            <div className="targetGroup">You have a need for digitalization and better web presence to reach more people with your initiative? </div>
          </div>
        </div>
      </div>
      <h4>The core values of this plattform:</h4>
      <ul className="ulAbout">
        <li className="liAbout">it’s all about the problem, not (yet) the solution!</li>
        <li className="liAbout">it’s all about the people and their motivation, not about tools and skills!</li>
        <li className="liAbout">it’s all about teams and not cheap workforce!</li>
        <li className="liAbout">it’s all about communication, appreciation, gaining experience and relationships!</li>
      </ul>
    </div>
  );
};

export default About;
