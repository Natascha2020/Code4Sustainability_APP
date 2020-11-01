import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../Helpers/axios";
import jwt from "jsonwebtoken";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

import "./LogIn.css";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");

  //post credentials and check for validity, set uderId
  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(settings.urlAuth + "/generateAuth", { email, password });
      const loggedUser = jwt.decode(response.data);
      const loggedUserId = loggedUser.idUser;
      setUserId(loggedUserId);
    } catch (err) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  //on successful authentication redirect to project overview page
  return (
    <div>
      {userId && userId.length ? (
        <Redirect to="/projects" />
      ) : (
        <form class="text-center border border-light p-5" value="loginData" onSubmit={(e) => handleLogIn(e)}>
          <p class="h4 mb-4">Log In</p>

          <input
            type="email"
            id="defaultLoginFormEmail"
            class="form-control mb-4 logInForm"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="defaultLoginFormPassword"
            class="form-control mb-4 logInForm"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div class="d-flex justify-content-around">
            <div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                <label class="custom-control-label" for="defaultLoginFormRemember">
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a className="linkLogIn" href="">
                Forgot password?
              </a>
            </div>
          </div>

          <button class="btn btn-info btn-block my-4 btnLogin" type="submit">
            Log In
          </button>

          <p className="notCommunity">
            Not yet part of community?{" "}
            <a className="linkLogIn" href="/signIn">
              Sign In
            </a>
          </p>

          <p>or log in in with:</p>

          <a href="#" class="mx-2" role="button">
            <FontAwesomeIcon className="navIcon" icon={faGithub} size="2x" />
          </a>
          <a href="#" class="mx-2" role="button">
            <FontAwesomeIcon className="navIcon" icon={faGoogle} size="2x" />
          </a>
        </form>
      )}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default LogIn;