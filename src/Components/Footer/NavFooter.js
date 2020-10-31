import React, { useState } from "react";
import GitHub from "./GitHub";
import Security from "./Security";
import Share from "./Share";
import Credits from "./Credits";
import { Footer, Text } from "grommet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret, faShareAlt, faGift } from "@fortawesome/free-solid-svg-icons";

import "./NavFooter.css";

const NavFooter = () => {
  const [showSecurity, setShowSecurity] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  const handleShowSecurity = () => setShowSecurity(true);
  const handleShowShare = () => setShowShare(true);
  const handleShowCredits = () => setShowCredits(true);
  return (
    <div classname="navFooter">
      <hr />
      <Footer pad="medium" background="footer">
        <a className="linkFooter" onClick={handleShowSecurity}>
          <FontAwesomeIcon className="navIcon" icon={faUserSecret} size="lg" />

          <span>Security</span>
          <Security showSecurity={showSecurity} handleClose={() => setShowSecurity(false)} />
        </a>

        <a className="linkFooter" href="/src/Components/Footer/GitHubjs">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>Source code</span>
        </a>

        <a className="linkFooter" onClick={handleShowShare}>
          <FontAwesomeIcon className="navIcon" icon={faShareAlt} size="lg" />
          <span>Share</span>
          <Share showShare={showShare} handleClose={() => setShowShare(false)} />
        </a>

        <a className="linkFooter" onClick={handleShowCredits}>
          <FontAwesomeIcon className="navIcon" icon={faGift} size="lg" />
          <span>Credits</span>
          <Credits showCredits={showCredits} handleClose={() => setShowCredits(false)} />
        </a>

        <br />
        <Text> &lt;/ Ready to impact! &gt;</Text>
      </Footer>
    </div>
  );
};

export default NavFooter;
