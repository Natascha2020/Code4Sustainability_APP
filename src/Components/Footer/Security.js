import React from "react";

import Modal from "react-bootstrap/Modal";
import "./Security.css";

const GitHub = (props) => {
  const { showSecurity, handleClose } = props;

  return (
    <div>
      <Modal show={showSecurity} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" centered>
        <Modal.Header closeButton>
          <Modal.Title className="titleModal" id="example-custom-modal-styling-title">
            May contain hackers...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h5 className="highlightModal">Our platform is designed as microservices</h5>
          <h6 className="boldModal">What the hell are microservices???</h6>
          <div>"Do one thing and do it well".</div>
          <br />
          <div>Approach to build complex applications by breaking down into components to perform single functions.</div>
          <br />
          <div>Robust, scalable, independent, compatible! </div>
          <br />
          <h5 className="highlightModal">Our platform is designed as security first.</h5>
          <h6>No need for sharing private data unless personal decision.</h6>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GitHub;
