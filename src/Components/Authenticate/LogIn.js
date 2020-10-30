import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div>
      <form class="text-center border border-light p-5 logInForm" value="loginData" onSubmit={(e) => handleLogIn(e)}>
        <p class="h4 mb-4">LogIn</p>

        <input
          type="email"
          id="defaultLoginFormEmail"
          class="form-control mb-4"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          id="defaultLoginFormPassword"
          class="form-control mb-4"
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
            <a href="">Forgot password?</a>
          </div>
        </div>

        <button class="btn btn-info btn-block my-4" type="submit">
          LogIn
        </button>

        <p>
          Not part of community?
          <a href="/signIn">Sign in</a>
        </p>

        <p>or sign in with:</p>

        <a href="#" class="mx-2" role="button">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
        </a>
        <a href="#" class="mx-2" role="button">
          <FontAwesomeIcon className="navIcon" icon={faGoogle} size="lg" />
        </a>
        <a href="#" class="mx-2" role="button">
          <i class="fab fa-linkedin-in light-blue-text"></i>
        </a>
        <a href="#" class="mx-2" role="button">
          <i class="fab fa-github light-blue-text"></i>
        </a>
      </form>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default LogIn;
