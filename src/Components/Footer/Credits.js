import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import "./Share.css";

const Share = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Thanks...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Photos and graphics</h4>
          <a href="http://wwww.Pexels.com">Pexels</a>
          <a href="http://wwww.Pixabay.com">Pixaby</a>
          <a href="http://wwww.Freepik.com">Freepik</a>

          <h4>Support</h4>
          <div>Batch #6 - WBS coding school</div>

          <h4>Special thanks</h4>
          <div>Jan: Graphic design && bugfixing superhero</div>
          <div>Aria: Patience, Motivation && bugfixing superhero</div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Share;
