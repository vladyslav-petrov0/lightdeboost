import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SubscribeForm from "../SubscribeForm/SubscribeForm";
import List from "../Nav/List/List";
import Container from "../Container/Container";

import "./Footer.scss";

import visa from "./img/visa.svg";
import masterCard from "./img/mastercard.svg";
import paypal from "./img/payPal.svg";

const Footer = ({ className }) => {
  const classes = classNames("Footer", [`${className}`]);

  return (
    <footer className={classes}>
      <Container>
        <div className="FooterBody">
          <div className="FooterLeft">
            <h3 className="FooterLogo">LIGHTBOOST</h3>
            <List className="FooterNavList" />
          </div>

          <div className="FooterRight">
            <span className="FooterSubscribeSpan">Subscribe to newsletter</span>
            <SubscribeForm />
          </div>
        </div>

        <div className="FooterTail">
          <span className="FooterCopyright">
            WoW © 2021. All Rights Reserved
          </span>

          <div className="FooterPayments">
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
