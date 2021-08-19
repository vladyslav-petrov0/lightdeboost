import React from "react";
import { connect } from "react-redux";

import FadeLoader from "../Loaders/FadeLoader/FadeLoader";

import "./IntroDetails.scss";
import ButtonLink from "../ButtonLink/ButtonLink";
import Title from "../Title/Title";

const IntroDetails = (props) => {
  return (
    <div className="IntroDetails">
      <IntroDetailsContent {...props} />
    </div>
  );
};

const IntroDetailsContent = ({ item = {}, loading }) => {
  const { title, text, linkTo } = item;

  if (loading) {
    return (
      <div className="IntroDetailsLoader">
        <FadeLoader />
        <FadeLoader />
        <FadeLoader />
      </div>
    );
  }

  return (
    <>
      <Title className="IntroTitle" size="xl">
        {title}
      </Title>

      <p className="IntroText Text Text--black">{text}</p>

      <ButtonLink
        href={linkTo}
        className="IntroButton"
        appearance="transparent"
      >
        Buy now
      </ButtonLink>
    </>
  );
};

const mapStateToProps = ({ intro: { itemList, currentId, loading } }) => {
  return {
    item: itemList[currentId],
    loading,
  };
};

export default connect(mapStateToProps)(IntroDetails);
