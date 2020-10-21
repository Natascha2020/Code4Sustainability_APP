import React from "react";
import { Link } from "react-router-dom";
import { Nav, Menu } from "grommet";
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
              <div classname="textWrapper">
                <div className="logoText">Code 4</div>
                <div className="logoText">Sustainability</div>
              </div>
            </div>
          </li>

          <div className="navLinkWrapper">
            <li>
              <Link className="link" to="/">
                <FontAwesomeIcon className="navIcon" icon={faAnchor} size="lg" />
                LogIn
              </Link>
            </li>
            <li>
              <Link className="link" to="/howItWorks">
                <FontAwesomeIcon className="navIcon" icon={faRocket} size="lg" />
                How
              </Link>
            </li>

            <li>
              <Link className="link" to="/about">
                <FontAwesomeIcon className="navIcon" icon={faGlobeAmericas} size="lg" />
                Why
              </Link>
            </li>

            <li>
              <Link className="link" to="/projects">
                <FontAwesomeIcon className="navIcon" icon={faHeartbeat} size="lg" />
                Projects
              </Link>
            </li>
            <li>
              <Menu
                label="My Profile"
                items={[
                  { label: "Settings", onClick: () => {} },
                  { label: "Matches pending", onClick: () => {} },
                  { label: "Matches accepted", onClick: () => {} },
                ]}
              />
            </li>
          </div>
        </ul>
      </Nav>
    </div>
  );
};

export default Navbar;
