import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import Modal from "react-bootstrap/Modal";
import "./LogIn.css";

const SignUp = () => {
  /* const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); */
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    typeOfUser: "",
  });

  /* const [typeOfUser, setTypeOfUser] = useState(""); */
  const [signedIn, setSignedIn] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => setShowModal(!showModal);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(settings.urlUsers, { formValue });
      console.log(response);
      if (response.status === 200) {
        setSignedIn(true);
      }
    } catch (err) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const inputHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {signedIn ? (
        <Redirect to="/personalData" />
      ) : (
        <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
          <form class="text-center border border-light p-5 logInForm" value="Data" onSubmit={(e) => handleSignUp(e)}>
            <p class="h4 mb-4">Sign Up</p>

            <input
              type="email"
              id="defaultLoginFormEmail"
              class="form-control mb-4"
              name="email"
              value={formValue.email}
              placeholder="E-mail"
              onChange={inputHandler}
            />

            <input
              type="password"
              id="defaultLoginFormPassword"
              class="form-control mb-4"
              placeholder="Password"
              name="password"
              value={formValue.password}
              onChange={inputHandler}
            />

            <div class="form-check">
              <input class="form-check-input" type="radio" name="typeOfUser" id="developer" value="Developer" checked />
              <label class="form-check-label" for="developer">
                Developer
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="typeOfUser" id="project" value="Project" />
              <label class="form-check-label" for="project">
                Project
              </label>
            </div>

            <button class="btn btn-info btn-block my-4 btnLogin" type="submit">
              Sign Up
            </button>

            <p clyssName="notCommunity">
              Already part of community?
              <a href="/logIn">Log In</a>
            </p>
          </form>
        </Modal>
      )}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default SignUp;
