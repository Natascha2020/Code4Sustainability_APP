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

  //toggler for showing or not showing modal
  const handleShowSecurity = () => setShowSecurity(!showSecurity);
  const handleShowShare = () => setShowShare(!showShare);
  const handleShowCredits = () => setShowCredits(!showCredits);
  return (
    <div classname="navFooter">
      <hr />
      <Footer pad="medium" background="footer">
        <a className="linkFooter" onClick={handleShowSecurity}>
          <FontAwesomeIcon className="navIcon" icon={faUserSecret} size="lg" />

          <span>Security</span>
          <Security showSecurity={showSecurity} handleClose={() => setShowSecurity(!showSecurity)} />
        </a>

        <a className="linkFooter" href="/gitHub">
          <FontAwesomeIcon className="navIcon" icon={faGithub} size="lg" />
          <span>Source code</span>
        </a>

        <a className="linkFooter" onClick={handleShowShare}>
          <FontAwesomeIcon className="navIcon" icon={faShareAlt} size="lg" />
          <span>Share</span>
          <Share showShare={showShare} handleClose={() => setShowShare(!showShare)} />
        </a>

        <a className="linkFooter" onClick={handleShowCredits}>
          <FontAwesomeIcon className="navIcon" icon={faGift} size="lg" />
          <span>Credits</span>
          <Credits showCredits={showCredits} handleClose={() => setShowCredits(!showCredits)} />
        </a>

        <br />
        <Text> &lt;/ Ready to impact! &gt;</Text>
      </Footer>
    </div>
  );
};

export default NavFooter;
