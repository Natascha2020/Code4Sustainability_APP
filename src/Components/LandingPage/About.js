import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faRocket, faGlobeAmericas, faLightbulb, faDove, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="aboutMain">
      <h2 className="aboutTitle">
        IT-community <span className="aboutTitleMeets">meets</span> social-impact-community
      </h2>

      <div className="techWrapper">
        <div className="techWrapperInside">
          <h3 className="aboutSubtitle">What we love about the tech community?</h3>

          <div className="backgroundStrength">
            <ul className="strengthWrapper">
              <li className="strength">
                Sharing is caring <FontAwesomeIcon className="navIcon" icon={faHandsHelping} size="lg" />
              </li>
              <li className="strength">
                Continuous support <FontAwesomeIcon className="navIcon" icon={faAnchor} size="lg" />
              </li>

              <li className="strength">
                Problem solvers <FontAwesomeIcon className="navIcon" icon={faLightbulb} size="lg" />
              </li>
            </ul>
          </div>
          <div className="targetGroupWrapper">
            <div className="targetGroup">
              You are a young developer and you want to gain tech experiences while working in a creative, non-job-related environment?
            </div>
            <div className="targetGroup">
              You are a senior developer and you want to share your tech experiences and consult and support sustainable ideas getting started and
              transformed into life?
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
            <li className="strength">
              Great ideas <FontAwesomeIcon className="navIcon" icon={faRocket} size="lg" />{" "}
            </li>

            <li className="strength">
              Society first <FontAwesomeIcon className="navIcon" icon={faGlobeAmericas} size="lg" />{" "}
            </li>

            <li className="strength">
              Change makers <FontAwesomeIcon className="navIcon" icon={faDove} size="lg" />
            </li>
          </ul>

          <div className="targetGroupWrapper">
            <div className="targetGroup">You are seeking for motivated poeple with tech skills to enrich your voluntary team?</div>
            <div className="targetGroup">You have a great idea, but you don't know exaclty how to transform it techwise in the best way?</div>
            <div className="targetGroup">You have a need for digitalization and better web presence to reach more people with your initiative? </div>
          </div>
        </div>
      </div>
      <h4 className="aboutSubtitle">The core values of this plattform:</h4>
      <div className="valueWrapper">
        <div className="valuePart">
          <div className="liAbout">
            It’s all about the <span className="spanValues">challenge</span>, not the solution!
          </div>
          <div className="liAbout">
            It’s all about the people and their <span className="spanValues">motivation</span>, not about tools and skills!
          </div>
        </div>
        <div className="valuePart">
          <div className="liAbout">
            It’s all about <span className="spanValues">teams</span> and not cheap workforce!
          </div>
          <div className="liAbout">
            It’s all about <span className="spanValues">communication</span>, <span className="spanValues">appreciation, </span>
            <span className="spanValues">experience</span> and <span className="spanValues">relationships!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
