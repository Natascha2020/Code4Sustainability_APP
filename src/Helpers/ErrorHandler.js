import React from "react";
import { Redirect } from "react-router-dom";
import "../Styles/ErrorHandler.css";

// Centralized Error Handling, displaying error and console.log error message
const ErrorHandler = (props) => {
  const { errorMessage, redirectLogin } = props;
  console.log(errorMessage);
  console.log(redirectLogin);
  return (
    <div id="errorWrapper">
      {errorMessage ? alert("There has been an Error") : null}
      {redirectLogin ? <Redirect to="/login" /> : null}
    </div>
  );
};
export default ErrorHandler;
