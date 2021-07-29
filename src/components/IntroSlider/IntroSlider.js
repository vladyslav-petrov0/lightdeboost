import React from "react";
import { connect } from "react-redux";
import { useLoopedEvent } from "../customHooks";

import { changeCurrentIntroId } from "../../actions/index.js";
import IntroSliderItem from "../IntroSliderItem/IntroSliderItem.js";

import arrowIcon from "./img/arrow.svg";
import "./IntroSlider.scss";

const IntroSlider = ({ changeId }) => {
  const onChangeId = useLoopedEvent(changeId, 8000, 1);

  const onInc = () => onChangeId(1);
  const onDec = () => onChangeId(-1);

  return (
    <div className="Slider">
      <div className="SliderBody">
        <IntroSliderItem />
      </div>

      <div className="SliderButtons">
        <button className="SliderButton" onClick={onDec}>
          <img src={arrowIcon} alt="" />
        </button>

        <button className="SliderButton" onClick={onInc}>
          <img src={arrowIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeId: (id) => {
      dispatch(changeCurrentIntroId(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(IntroSlider);
