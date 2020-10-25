import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "./axios";
import jwt from "jsonwebtoken";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";
import { Box, Button, Card, Form, FormField, TextInput, RadioButtonGroup } from "grommet";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(settings.urlUsers, { email, password, typeOfUser });
      console.log(response);
      setSignedIn(true);
    } catch (err) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };
  return (
    <div>
      <Card className="logInCard" height="medium" width="medium" background="light-4">
        <Form className="loginForm" value="loginData" onReset={(e) => {}} onSubmit={(e) => handleLogIn(e)}>
          <h3 className="cardTitle">&lt; Ready to connect? &gt;</h3>
          <FormField name="email" htmlfor="text-input-id" label="Email">
            <TextInput id="text-input-id" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormField>
          <FormField name="password" htmlfor="password" label="Password" type="password">
            <TextInput id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </FormField>
          <RadioButtonGroup
            name="doc"
            options={["Developer", "Project"]}
            value={typeOfUser}
            onChange={(event) => setTypeOfUser(event.target.value)}
          />
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="SignUp" />
          </Box>
          <Box>
            <Link className="linkSignUp" to="/logIn">
              Sign up
            </Link>
          </Box>
        </Form>
      </Card>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default SignUp;
