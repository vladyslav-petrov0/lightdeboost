import React from "react";
import classNames from "classnames";

import Title from "../Title/Title";
import Container from "../UI/Container/Container";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import "./SubscribeSection.scss";

const SubscribeSection = ({ className }) => {
  const classes = classNames("SubscribeSection", [`${className}`]);

  return (
    <div className={classes}>
      <Container>
        <div className="SubscribeSectionBody">
          <div className="SubscribeSectionContent">
            <Title className="SubscribeSectionTitle" size="xl" color="white">
              SUBSCRIBE
            </Title>

            <p className="SubscribeSectionText">
              Subscribe us and you won't miss the new arrivals, as well as
              discounts and sales.
            </p>

            <SubscribeForm />
          </div>

          <img
            className="SubscribeSectionImg"
            src="https://i.ibb.co/2PBb0j1/image-18.png"
          />
        </div>
      </Container>
    </div>
  );
};

SubscribeSection.defaultProps = {
  className: "",
};

export default SubscribeSection;
