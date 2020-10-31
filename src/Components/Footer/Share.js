import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "./Share.css";

const Share = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Spread the word...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>You know awesome people?</h5>
          <h5>Share!</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Share;
