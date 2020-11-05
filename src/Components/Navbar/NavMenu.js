import React from "react";
import { Menu } from "grommet";

const NavMenu = (props) => {
  return (
    <div>
      <Menu
        label="Profile"
        items={[
          { label: "Personal data", href: "/personalData", margin: "0.5em" },
          { label: "Matches pending", href: "/matchesPending", margin: "0.5em" },
          { label: "Matches accepted", href: "/matchesAccepted", margin: "0.5em" },
        ]}
        weight="bold"
        size="medium"
        margin={{ left: "1em" }}
        dropBackground={{ color: "#333A3E" }}
        textDecoration="none"
      />
    </div>
  );
};

export default NavMenu;
