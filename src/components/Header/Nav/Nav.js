import React from "react";
import { useMediaQuery } from "react-responsive";

import NavSidebar from "../../Nav/Sidebar/Sidebar";
import Nav from "../../Nav/Nav";
import HeaderIconLinks from "../IconLinks/IconLinks";

const HeaderNav = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 830px)" });

  if (isMobile) {
    return (
      <NavSidebar>
        <HeaderIconLinks />
      </NavSidebar>
    );
  }

  return <Nav />;
};

export default HeaderNav;
