import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";
import { Box, Button, Card, Form, FormField, TextInput } from "grommet";

import "../Styles/LogIn.css";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(settings.urlAuth, { email, password }, { withCredentials: true });
      const loggedUser = jwt.decode(response.data);
      const loggedUserId = loggedUser.idUser;
      console.log(loggedUserId);
      setUserId(loggedUserId);
    } catch (err) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <div className="titleWrapper">
        <h1>HELLO WORLD!</h1>
        <br />
        <div>Matching developers with social changemakers</div>
        <br />
      </div>

      <div className="loginWrapper">
        <div className="introWrapper">
          <div>You are a developer</div>
          <div> and you love to code for good? </div>
          <br />
          <div>Awesome </div>
          <br />
          <div>We need you! </div>
        </div>

        <img alt="globe" src="../Assets/globeComic.jpg" />

        <div className="introWrapper">
          <div>You are a sustainable project </div>
          <div>and you have a tech problem? </div>
          <br />
          <div>No worries </div>
          <br />
          <div>We help you! </div>
        </div>
      </div>
      <Card className="loginCard" height="medium" width="medium" background="light-4">
        <Form className="loginForm" value="loginData" onReset={(e) => {}} onSubmit={(e) => handleLogIn(e)}>
          <h3 className="cardTitle">&lt; Ready to connect? &gt;</h3>
          <FormField name="email" htmlfor="text-input-id" label="Email">
            <TextInput id="text-input-id" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormField>
          <FormField name="password" htmlfor="password" label="Password" type="password">
            <TextInput id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </FormField>

          <Box direction="row" gap="medium">
            <Button type="submit" primary label="LogIn" />
          </Box>
          <Box>
            <Link className="linkSignUp" to="/signUp">
              Sign up
            </Link>
          </Box>
        </Form>
      </Card>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default LogIn;
