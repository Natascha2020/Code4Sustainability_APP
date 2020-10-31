import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [typeOfUser, setTypeOfUser] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(settings.urlUsers, { email, password, typeOfUser });
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

  return (
    <div>
      {signedIn ? (
        <Redirect to="/personalData" />
      ) : (
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

          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="developer" value="Developer" checked />
            <label class="form-check-label" for="developer">
              Default radio
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="project" value="Project" />
            <label class="form-check-label" for="project">
              Second default radio
            </label>
          </div>

          <div class="d-flex justify-content-around">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
              <label class="custom-control-label" for="defaultLoginFormRemember">
                Remember me
              </label>
            </div>
          </div>

          <button class="btn btn-info btn-block my-4" type="submit">
            LogIn
          </button>

          <p>
            Already part of community?
            <a href="/logIn">LogIn</a>
          </p>
        </form>
      )}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default SignUp;
