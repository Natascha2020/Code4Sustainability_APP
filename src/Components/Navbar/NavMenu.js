import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";
import { Menu } from "grommet";
import "./NavMenu.css";

const NavMenu = (props) => {
  return (
    <div>
      <div className="dropdownWrapper"></div>
      <Menu
        label="Profile"
        items={[
          { label: "Personal data", href: "/personalData", margin: "0.8em" },
          { label: "Matches pending", href: "/matchesPending", margin: "0.8em" },
          { label: "Matches accepted", href: "/matchesAccepted", margin: "0.8em" },
        ]}
        weight="bold"
        size="medium"
        dropAlign={{ top: "bottom", left: "left" }}
        margin={{ left: "1em", top: "1em" }}
        dropBackground={{ color: "#333A3E" }}
        textDecoration="none"
      />
    </div>
  );
};

export default NavMenu;
