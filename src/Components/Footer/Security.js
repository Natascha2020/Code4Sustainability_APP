import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "./Security.css";

const GitHub = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">May contain hackers...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Our platform is designed as a microservice architecture.</h5>
          <div>What the hell are microservices?</div>
          <div>
            "Do one thing and do it well". Approach to build complex applications by breaking it down into components which perform a single function.
          </div>
          <div>Main advantages: Robustness, scalability, independency, compatibility </div>
          <h4>Our platform is designed to give all members of the community most data security.</h4>
          <h5>No need for sharing any private data like email unless personal decision on chat.</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GitHub;
