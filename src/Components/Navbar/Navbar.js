import React from "react";
import { Link } from "react-router-dom";
import Authenticated from "../Authenticate/Authenticated";
import NavMenu from "./NavMenu";
import { Button, Nav } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faAnchor, faGlobeAmericas, faRocket } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = (props) => {
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
            <Button primary label="LogIn" href="/logIn" />
          </li>

          <Authenticated WrappedComponent={NavMenu} {...props} />
        </ul>
      </Nav>
    </div>
  );
};

export default Navbar;
