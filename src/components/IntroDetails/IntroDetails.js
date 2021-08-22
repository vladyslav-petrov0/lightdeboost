import React from "react";
import { connect } from "react-redux";

import FadeLoader from "../Loaders/FadeLoader/FadeLoader";
import LinkButton from "../UI/LinkButton/LinkButton";

import "./IntroDetails.scss";
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

      <LinkButton
        href={linkTo}
        className="IntroButton"
        appearance="transparent"
      >
        Buy now
      </LinkButton>
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
