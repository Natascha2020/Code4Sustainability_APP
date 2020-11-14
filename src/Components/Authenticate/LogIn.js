import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../Helpers/axios";

import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-bootstrap/Modal";

import "./LogIn.css";

const LogIn = ({ displayModal, setDisplayModal }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showLogIn, setShowLogIn] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const handleClose = () => {
    setDisplayModal(false);
  };

  //post credentials and check for validity, set uderId
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post(settings.urlAuth + "/generateAuth", { email, password });
      setShowLogIn(false);
      window.location.href = "/";
    } catch (err) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  //on successful authentication redirect to project overview page
  return (
    <div>
      <Modal
        className="form-horizontal text-center"
        show={displayModal}
        onHide={handleClose}
        dialogClassName="modal-90w "
        aria-labelledby="example-custom-modal-styling-title"
        centered>
        <form className="text-center border border-light p-5 logInForm" onSubmit={(e) => handleLogIn(e)}>
          <p className="h4 mb-4">LogIn</p>
          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4 logInInput"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            class="form-control mb-4 logInInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label" for="defaultLoginFormRemember">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a className="linkLogIn" href>
                Forgot password?
              </a>
            </div>
          </div>

          <button className="btn btn-info btn-block my-4 btnLogin" type="submit">
            LogIn
          </button>

          <p className="notCommunity">
            Not yet part of community?
            <a className="linkLogIn" href="/signUp">
              Sign Up
            </a>
          </p>

          <p>or log in in with:</p>

          <a href class="mx-2" role="button">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="2x" />
          </a>
          <a href class="mx-2" role="button">
            <FontAwesomeIcon className="navIcon" icon={faGoogle} size="2x" />
          </a>
        </form>
      </Modal>

      {error ? <ErrorHandler errorMessage={error} /> : null}
      {redirect ? <Redirect to="/" /> : null}
    </div>
  );
};

export default LogIn;
