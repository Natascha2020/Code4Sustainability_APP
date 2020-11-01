import React from "react";

import Modal from "react-bootstrap/Modal";
import "./Credits.css";

const Share = (props) => {
  const { handleClose, showCredits } = props;

  return (
    <div>
      <Modal show={showCredits} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title className="titleModal" id="example-custom-modal-styling-title">
            Thanks...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h4 className="highlightModal">Photos and graphics</h4>
          <ul>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="http://wwww.Pexels.com">
                Pexels
              </a>
            </li>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="http://wwww.Pixabay.com">
                Pixaby
              </a>
            </li>
            <li className="liCredits">
              <a className="linkCredits" target="_blank" rel="noopener noreferrer" href="http://wwww.Freepik.com">
                Freepik
              </a>
            </li>
          </ul>

          <h4 className="highlightModal">Support</h4>
          <div className="boldModal">Batch #6 - WBS coding school</div>
          <br />
          <h4 className="highlightModal">Special thanks</h4>
          <div className="boldModal">Jan: Graphic design && bugfixing superhero</div>
          <div className="boldModal">Aria: Patience, Motivation && bugfixing superhero</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Share;
