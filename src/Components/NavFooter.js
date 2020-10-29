import React from "react";
import { Footer, Text } from "grommet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret, faShareAlt, faGift } from "@fortawesome/free-solid-svg-icons";

import "../Styles/NavFooter.css";

const NavFooter = () => {
  return (
    <div classname="navFooter">
      <hr />
      <Footer pad="medium" background="footer">
        <a className="link" href="http: ">
          <FontAwesomeIcon className="navIcon" icon={faUserSecret} size="lg" />
          <span>Security</span>
        </a>

        <a className="link" href="/gitHub">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>Source code</span>
        </a>

        <a className="link" href="http: ">
          <FontAwesomeIcon className="navIcon" icon={faShareAlt} size="lg" />
          <span>Share</span>
        </a>

        <a className="link" href="http: ">
          <FontAwesomeIcon className="navIcon" icon={faGift} size="lg" />
          <span>Credits</span>
        </a>

        <br />
        <Text> &lt;/ Ready to impact! &gt;</Text>
      </Footer>
    </div>
  );
};

export default NavFooter;
