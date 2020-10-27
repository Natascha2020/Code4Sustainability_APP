import React from "react";
import { Menu } from "grommet";

const NavMenu = () => {
  return (
    <div>
      <Menu
        label="My Profile"
        items={[
          { label: "Personal data", href: "/personalData" },
          { label: "Matches pending", href: "/matchesPending" },
          { label: "Matches accepted", href: "/matchesPending" },
        ]}
      />
    </div>
  );
};

export default NavMenu;
