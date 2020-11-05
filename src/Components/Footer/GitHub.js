import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./GitHub.css";

const GitHub = () => {
  return (
    <div className="gitPage">
      <h3 className="gitTitle">It's not a bug, it's a feature - it's not a feature, it's a bug!</h3>
      <h3 className="gitTitleNext">Evolutions</h3>
      <div className="gitFirstBlock">
        <div className="gitSubBlock">
          <h5 className="gitSubtitle">...under coding</h5>
          <ul>
            <li>OAuth 2.0 authentication with Google and GitHub</li>
            <li>Lazy loading and endless scrolling for project list</li>
            <li>Possibility to have multiple projects as project owner or developer</li>
            <li>Possibility to have chat rooms with multiple people</li>
            <li>Landing page: photo wall right and left sided</li>
            <li>Image upload for profile page and avatar display</li>
          </ul>
        </div>
        <div className="gitSubBlock">
          <h5 className="gitSubtitle">...planned</h5>
          <ul className="gitList">
            <li>Live recording of pitch videos directly on homepage</li>
            <li>Possibility to send live recorded video or voicemail</li>
            <li>Possibility to like projects</li>
            <li>Ability to send projects via what's app etc. to friends</li>
            <li>Filtering through projects on different topics, kind of challenges</li>
            <li>Video chat possibility on match</li>
            <li>Password reset</li>
            <li>Email forgotten password</li>
            <li>World map with projects</li>
            <li>Different languages: english and german</li>
          </ul>
        </div>
      </div>
      <div className="gitLastBlock">
        <h5 className="gitSubtitle">Check out the GitHub Repos </h5>
        <div className="gitRepo">
          <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_APP.git">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
            <span>React App</span>
          </a>
        </div>
        <div className="gitRepo">
          <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_API.git">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
            <span>Ressources server</span>
          </a>
        </div>
        <div className="gitRepo">
          <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_Auth.git">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
            <span>Authentication server</span>
          </a>
        </div>
        <div className="gitRepo">
          <a
            className="linkGit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Natascha2020/Code4Sustainability_VideoStreaming.git">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
            <span>Videostreaming server</span>
          </a>
        </div>
        <div className="gitRepo">
          <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_Chat.git">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
            <span>Chat server</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHub;
