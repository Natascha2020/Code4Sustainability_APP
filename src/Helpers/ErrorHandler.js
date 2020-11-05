import React from "react";
import { Redirect } from "react-router-dom";
import "./ErrorHandler.css";

// Centralized Error Handling, displaying error and console.log error message
const ErrorHandler = (props) => {
  const { errorMessage, redirectLogin } = props;
  console.error(errorMessage);
  return (
    <div id="errorWrapper">
      {errorMessage && errorMessage.length ? alert("There has been an Error") : null}
      {redirectLogin ? <Redirect to="/login" /> : null}
    </div>
  );
};
export default ErrorHandler;
