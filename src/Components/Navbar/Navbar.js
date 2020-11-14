import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authenticated from "../Authenticate/Authenticated";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import NavMenu from "./NavMenu";
import * as settings from "../../Helpers/Settings";
import { Button } from "grommet";
import "./Navbar.css";

const NavBar = (props) => {
  const [error, setError] = useState("");

  const handleLogOut = async (e) => {
    try {
      await axiosInstance.get(settings.urlAuth + "/deleteAuth");

      window.location.href = "/";
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <Authenticated
        {...props}
        withRedirect={false}
        noCheck={true}
        WrappedComponent={(secondProps) => {
          return <NavBarComponent {...secondProps} handleLogOut={handleLogOut} error={error} />;
        }}
      />
    </div>
  );
};

export default NavBar;

const NavBarComponent = (props) => {
  const { idUser, onLoginPress } = props;
  return (
    <header class="cosy-header">
      <div className="cosy-logo">
        <img src={require("../../Assets/logoCosy/logoCosy.svg")} alt="logo cosy" />
      </div>
      <input type="checkbox" id="btn-menu" />
      <label className="icon-menu" for="btn-menu">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/howItWorks">
            How
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>

        {idUser ? (
          <div>
            <li>
              <Button className="linkLogin" primary label="LogOut" onClick={props.handleLogOut} />
            </li>
            <NavMenu {...props} />
          </div>
        ) : (
          <li>
            <Button className="linkLogin" primary label="LogIn" onClick={onLoginPress} />
          </li>
        )}
      </ul>
      {props.error ? <ErrorHandler errorMessage={props.error} /> : null}
    </header>
  );
};
