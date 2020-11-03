import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HowItWorks.css";

const HowItWorks = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="worksWrapper">
      <h2 className="titleHowItWorks">How it works</h2>
      <div className="howWrapper">
        <div className="howDeveloper">
          <h3 className="subTitleHIW">I'm a Developer</h3>
          <div className="stepHIW">Sign up</div>
          <img className="imgHIW" src={require("../../Assets/Landing_login.jpg")} alt="Search for a project" />
          <div className="stepHIW">Search projects, get inspired and introduce yourself and your motivation</div>
          <div className="imgWrapperHIW">
            <img className="imgHIW" src={require("../../Assets/Landing_search.jpg")} alt="Search for a project" />
          </div>
          <div className="stepHIW">Send your interest for joining a project team and work together on digital solutions</div>
          <img className="imgHIW" src={require("../../Assets/Landing_profile.jpg")} alt="Search for a project" />
        </div>

        <div className="howProject">
          <h3 className="subTitleHIW">I'm a Project</h3>
          <div className="stepHIW">Sign up</div>
          <img className="imgHIW" src={require("../../Assets/Landing_problem.png")} alt="Search for a project" />
          <div className="stepHIW">Pitch your problem in a 100s video and get developers excited about your project</div>
          <div className="imgWrapperHIW">
            <img className="imgHIW" src={require("../../Assets/Landing_problem.png")} alt="Search for a project" />
          </div>
          <div className="stepHIW">Accept interest and enrich your team through joining of awesome new people</div>
          <img className="imgHIW" src={require("../../Assets/Landing_group.jpg")} alt="Search for a project" />
        </div>
      </div>

      <div className="howMatch">Match . Code . Impact.</div>

      {/* <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
        <Carousel.Item>
          <img className="d-block w-100 imgHIW" src={require("../../Assets/Landing_search.jpg")} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=282c34" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default HowItWorks;
