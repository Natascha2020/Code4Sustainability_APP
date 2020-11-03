import React, { useState } from "react";
import { Link } from "react-router-dom";
import Authenticated from "../Authenticate/Authenticated";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import NavMenu from "./NavMenu";
import * as settings from "../../Helpers/Settings";
import { Button, Nav } from "grommet";

import "./Navbar.css";

const Navbar = (props) => {
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
    <Authenticated
      {...props}
      withRedirect={false}
      noCheck={true}
      WrappedComponent={(secondProps) => {
        return <NavBarComponent {...secondProps} handleLogOut={handleLogOut} error={error} />;
      }}
    />
  );
};

export default Navbar;

const NavBarComponent = (props) => {
  const { idUser, onLoginPress } = props;
  return (
    <div>
      <Nav className="nav" direction="row" pad="medium">
        <ul className="ulNav">
          <li className="liNav">
            <div className="logoWrapper">
              <div className="logo">CoSy</div>
              <div className="logoSep">||</div>
              <div classname="textWrapper">
                <div className="logoText">Code 4</div>
                <div className="logoText">Sustainability</div>
              </div>
            </div>
          </li>
          <div className="navLinkWrapper">
            <li className="liNav">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="liNav">
              <Link className="link" to="/howItWorks">
                How
              </Link>
            </li>
            <li className="liNav">
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li className="liNav">
              <Link className="link" to="/projects">
                Projects
              </Link>
            </li>
          </div>
          {idUser ? (
            <>
              <li>
                <Button className="linkLogin" primary label="LogOut" onClick={props.handleLogOut} />
              </li>
              <NavMenu {...props} />
            </>
          ) : (
            <li>
              {/* <Button className="linkLogin" primary label="LogIn" href="/logIn" /> */}
              <Button className="linkLogin" primary label="LogIn" onClick={onLoginPress} />
            </li>
          )}
        </ul>
      </Nav>
      {props.error ? <ErrorHandler errorMessage={props.error} /> : null}
    </div>
  );
};
