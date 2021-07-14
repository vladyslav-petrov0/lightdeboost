import React from 'react';
import { connect } from 'react-redux';
import { useLoopedEvent } from "../customHooks";

import { changeCurrentIntroId } from '../../actions/index.js';
import IntroSliderItem from '../IntroSliderItem/IntroSliderItem.js';

import arrowIcon from './img/arrow.svg';
import './IntroSlider.scss';

const IntroSlider = ({ changeId }) => {
    const onChangeId = useLoopedEvent(changeId, 8000,1);

    return (
        <div className="slider">

            <div className="slider__body">
                <IntroSliderItem />
            </div>

            <div className="slider__btns">
                <button className="slider__btn"
                onClick={() => onChangeId(-1)}>
                    <img src={arrowIcon} alt=""/>
                </button>

                <button className="slider__btn"
                onClick={() => onChangeId(1)}>
                    <img src={arrowIcon} alt=""/>
                </button>
            </div>
            
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeId: (id) => {
            dispatch(changeCurrentIntroId(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(IntroSlider);