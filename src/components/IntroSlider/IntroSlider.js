import React from 'react';
import './IntroSlider.scss';

import arrowIcon from './img/arrow.svg';

const IntroSlider = ({ slide, onChangeId }) => {
    return (
        <div className="slider">

            <div className="slider__body">
                <img className="slider__item"
                src={slide} alt="" />
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
}

export default IntroSlider;