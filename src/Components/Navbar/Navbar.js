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
    e.preventDefault();
    try {
      const response = await axiosInstance.get(settings.urlAuth + "/deleteAuth");
      console.log(response);
      window.location.href = "/";
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };
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
                {/* <FontAwesomeIcon className="navIcon" icon={faAnchor} size="lg" /> */}
                Home
              </Link>
            </li>
            <li className="liNav">
              <Link className="link" to="/howItWorks">
                {/* <FontAwesomeIcon className="navIcon" icon={faRocket} size="lg" /> */}
                How
              </Link>
            </li>

            <li className="liNav">
              <Link className="link" to="/about">
                {/* <FontAwesomeIcon className="navIcon" icon={faGlobeAmericas} size="lg" /> */}
                About
              </Link>
            </li>

            <li className="liNav">
              <Link className="link" to="/projects">
                {/* <FontAwesomeIcon className="navIcon" icon={faHeartbeat} size="lg" /> */}
                Projects
              </Link>
            </li>
          </div>
          <li>
            <Button className="linkLogin" primary label="LogIn" href="/logIn" />
          </li>
          <li>
            <Button className="linkLogin" primary label="LogOut" onClick={handleLogOut} />
          </li>

          <Authenticated WrappedComponent={NavMenu} {...props} />
        </ul>
      </Nav>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default Navbar;
