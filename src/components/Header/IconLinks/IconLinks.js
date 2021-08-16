import React from "react";
import { Link } from "react-router-dom";

import userImg from "../Body/img/user.svg";
import cartImg from "../Body/img/cart.svg";

import styles from "./IconLinks.module.scss";

const HeaderIconLinks = () => {
  return (
    <div>
      <Link to="/loggin" className={styles.Loggin}>
        <img src={userImg} alt="" />
      </Link>

      <Link to="/cart" className={styles.Cart}>
        <img src={cartImg} alt="" />
      </Link>
    </div>
  );
};

export default HeaderIconLinks;
