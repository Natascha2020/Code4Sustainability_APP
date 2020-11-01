import React from "react";
import { Menu } from "grommet";

const NavMenu = () => {
  return (
    <div>
      <Menu
        label="Profile"
        items={[
          { label: "Personal data", href: "/personalData" },
          { label: "Matches pending", href: "/matchesPending" },
          { label: "Matches accepted", href: "/matchesAccepted" },
        ]}
        margin="large"
        weight="bold"
      />
    </div>
  );
};

export default NavMenu;
