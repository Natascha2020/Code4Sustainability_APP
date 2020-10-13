import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">Code4Sustainability</li>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/howItWorks">
              How it works
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/signIn">
              SignIn
            </Link>
          </li>
          <li>
            <Link className="link" to="/profileDev">
              ProfileDev
            </Link>
          </li>
          <li>
            <Link className="link" to="/profileProject">
              ProfileProject
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
