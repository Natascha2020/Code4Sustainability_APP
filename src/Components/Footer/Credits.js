import React from "react";

import Modal from "react-bootstrap/Modal";
import "./Credits.css";

const Share = (props) => {
  const { handleClose, showCredits } = props;

  return (
    <div>
      <Modal show={showCredits} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered>
        <Modal.Header closeButton>
          <Modal.Title className="titleModal" id="example-custom-modal-styling-title">
            Thanks...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyCredits">
          <h4 className="highlightModalCredits">Photos and graphics</h4>
          <ul>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="https://www.pexels.com/de-de/">
                Pexels
              </a>
            </li>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/">
                Pixaby
              </a>
            </li>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="https://de.freepik.com/">
                Freepik
              </a>
            </li>
          </ul>

          <h4 className="highlightModalCredits">Support</h4>
          <div className="boldModalCredits">Batch #6 - WBS coding school</div>
          <br />
          <h4 className="highlightModalCredits">Special thanks</h4>
          <div className="boldModalCredits">Jan: Graphic design && bugfixing superhero</div>
          <div className="boldModalCredits">Aria: Patience, Motivation && bugfixing superhero</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Share;
