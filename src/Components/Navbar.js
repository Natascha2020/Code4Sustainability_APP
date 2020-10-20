import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faAnchor, faGlobeAmericas, faRocket } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Nav direction="row" pad="medium">
        <ul>
          <li>
            <div className="logoWrapper">
              <div className="logo">CoSy</div>
              <div className="logoSep">||</div>
              <div className="logoText">Code 4 Sustainability</div>
            </div>
          </li>

          <div className="navLinkWrapper">
            <li>
              <Link className="link" to="/">
                LogIn
                <FontAwesomeIcon icon={faAnchor} size="lg" />
              </Link>
            </li>
            <li>
              <Link className="link" to="/howItWorks">
                How
                <FontAwesomeIcon icon={faRocket} size="lg" />
              </Link>
            </li>

            <li>
              <Link className="link" to="/about">
                Why
                <FontAwesomeIcon icon={faGlobeAmericas} size="lg" />
              </Link>
            </li>

            <li>
              <Link className="link" to="/projects">
                Projects
                <FontAwesomeIcon icon={faHeartbeat} size="lg" />
              </Link>
            </li>
          </div>
        </ul>
      </Nav>
    </div>
  );
};

export default Navbar;
