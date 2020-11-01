import React from "react";

import Modal from "react-bootstrap/Modal";
import "./Share.css";

const Share = (props) => {
  const { showShare, handleClose } = props;

  return (
    <div>
      <Modal show={showShare} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title className="titleModal" id="example-custom-modal-styling-title">
            Spread the word...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <h5>You know awesome people?</h5>
          <h5 className="highlightModal">Share!</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Share;
