import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-bootstrap/Modal";
import "./GitHub.css";

const GitHub = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">It's not a bug, it's a feature - It's not a feature, it's a bug!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Evolutions under coding:</h5>
          <ul>
            <li>OAuth 2.0 Authentication with Google and GitHub</li>
            <li>Lazy loading and endless scrolling for project list</li>
            <li>Possibility to have multiple projects as project owner or developer</li>
          </ul>

          <h5>Evolutions planned:</h5>
          <ul>
            <li>Live recording of pitch-videos directly on homepage</li>
            <li>Possibility to send live recorded video or voicemail when sending or accepting interest</li>
            <li>Ability to send projects via What's App etc. to friends</li>
            <li>Filtering through projects on different topics, kind of problems</li>
            <li>Video-Chat possibility on match</li>
            <li>Password reset</li>
            <li>Different languages: english and german</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <h5>Check out the GitHub Repos: </h5>
          <div>
            <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_APP.git">
              <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
              <span>React App</span>
            </a>
          </div>
          <div>
            <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_API.git">
              <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
              <span>Ressource server - API</span>
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
          <div>
            <a className="linkGit" target="_blank" rel="noopener noreferrer" href="https://github.com/Natascha2020/Code4Sustainability_Chat.git">
              <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
              <span>Chat server</span>
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GitHub;
