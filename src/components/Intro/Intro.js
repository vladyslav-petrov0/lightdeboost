import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { fetchIntroItemList } from "../../actions/index.js";

import IntroDetails from "../IntroDetails/IntroDetails.js";
import IntroSlider from "../IntroSlider/IntroSlider.js";
import Container from "../Container/Container";

import "./Intro.scss";
import { ServiceContext } from "../context/ServiceContext";

const Intro = ({ className }) => {
  const { service } = useContext(ServiceContext);
  const dispatch = useDispatch();

  const fetchItemList = () => fetchIntroItemList(service, dispatch);

  useEffect(fetchItemList, []);
  const classes = classNames("Intro", [`${className}`]);

  return (
    <div className={classes}>
      <Container className="IntroContainer">
        <div className="IntroBody">
          <IntroDetails />
          <IntroSlider />
        </div>
      </Container>
    </div>
  );
};

Intro.defaultProps = {
  className: "",
};

export default Intro;
