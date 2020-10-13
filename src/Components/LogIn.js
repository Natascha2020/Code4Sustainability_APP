import React from "react";
import "../Styles/LogIn.css";

const LogIn = () => {
  return (
    <div>
      <h1>HELLO WORLD!</h1>
      <div className="signInWrapper">
        <form className="signInForm">
          <input placeholder="Email"></input>
          <input placeholder="Password"></input>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
