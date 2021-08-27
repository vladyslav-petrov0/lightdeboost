import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SubscribeForm from "../SubscribeForm/SubscribeForm";
import NavList from "../Nav/List/List";
import Container from "../UI/Container/Container";

import styles from "./Footer.module.scss";

import visa from "./img/visa.svg";
import masterCard from "./img/mastercard.svg";
import paypal from "./img/payPal.svg";

const Footer = ({ className }) => {
  const classes = classNames(styles.Footer, [`${className}`]);

  return (
    <footer className={classes}>
      <Container>
        <div className={styles.Body}>
          <div className={styles.LeftSide}>
            <h3 className={styles.Logo}>LIGHTBOOST</h3>
            <NavList className={styles.NavList} />
          </div>

          <div className={styles.RightSide}>
            <span className={styles.SubscribeSpan}>
              Subscribe to newsletter
            </span>
            <SubscribeForm />
          </div>
        </div>

        <div className={styles.Tail}>
          <span className={styles.Copyright}>
            WoW © 2021. All Rights Reserved
          </span>

          <div className={styles.Payments}>
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
            <img src={paypal} alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: "",
};

export default Footer;
