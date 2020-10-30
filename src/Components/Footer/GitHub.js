import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./GitHub.css";

const gitHub = () => {
  return (
    <div>
      <h3>It's not a feature, it's a bug! </h3>

      <h4>Evolutions planned:</h4>
      <ul></ul>

      <h4>Evolutions under coding:</h4>
      <ul></ul>
      <div>Check out the gitHub Repos: </div>
      <div>
        <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_APP.git">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>React App</span>
        </a>
      </div>
      <div>
        <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_API.git">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>API</span>
        </a>
      </div>
      <div>
        <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_Auth.git">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>Authentication server</span>
        </a>
      </div>
      <div>
        <a
          className="linkGit"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Natascha2020/Code4Sustainability_VideoStreaming.git">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>Videostreaming server</span>
        </a>
      </div>
    </div>
  );
};

export default gitHub;
