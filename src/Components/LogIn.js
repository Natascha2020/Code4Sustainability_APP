import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../Helpers/axios";
import jwt from "jsonwebtoken";
import ErrorHandler from "../Helpers/ErrorHandler";
import * as settings from "../Helpers/Settings";
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
      const response = await axiosInstance.post(settings.urlAuth + "/generateAuth", { email, password });
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
      <Card className="loginCard" height="medium" width="medium" background="light-4">
        <Form className="loginForm" value="loginData" onReset={(e) => {}} onSubmit={(e) => handleLogIn(e)}>
          <h3 className="cardTitle">LogIn</h3>
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
