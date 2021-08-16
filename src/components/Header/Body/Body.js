import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import HeaderIconLinks from "../IconLinks/IconLinks";
import HeaderNav from "../Nav/Nav";

import headerLogo from "./img/header_logo.svg";

import styles from "./Body.module.scss";

const HeaderBody = () => {
  const isDefault = useMediaQuery({ query: "(min-width: 831px)" });

  return (
    <div className={styles.Body}>
      <Link to="/" className={styles.Logo}>
        <img src={headerLogo} alt="" />
      </Link>

      <HeaderNav />

      {isDefault && <HeaderIconLinks />}
    </div>
  );
};

export default HeaderBody;
