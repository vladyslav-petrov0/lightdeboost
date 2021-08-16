import React from "react";

import NavList from "./List/List";

import styles from "./Nav.module.scss";

const Nav = ({ children, ...otherProps }) => {
  return (
    <nav {...otherProps}>
      <NavList className={styles.HeaderList}>{children}</NavList>
    </nav>
  );
};

export default Nav;
