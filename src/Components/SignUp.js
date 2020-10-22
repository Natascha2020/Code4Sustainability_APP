import React from "react";
import "../Styles/SignIn.css";

const SignUp = () => {
  return (
    <div>
      <h1>READY TO IMPACT!?</h1>
      <div className="logInWrapper">
        <form className="logInForm">
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
