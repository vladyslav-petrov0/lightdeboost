import React, { useState } from 'react';
import { connect } from 'react-redux';

import IntroDetails from '../IntroDetails/IntroDetails.js';
import IntroSlider from '../IntroSlider/IntroSlider.js';

import './Intro.scss';

const Intro = ({ slide, detailsItem, onChangeId}) => {
    return (
        <div className="intro">
            <div className="intro__container container">
                
                <div className="intro__body">
                    <IntroDetails item={detailsItem} />

                    <IntroSlider 
                    slide={slide}
                    onChangeId={onChangeId} />                    
                </div>
                
            </div>
        </div>
    );
};

const IntroContainer = ({ itemList }) => {
    const [ currentId, setCurrentId ] = useState(0);
    
    const onChangeId = (maxValue, quantity) => {
        setCurrentId(id => {
            const sum = id + quantity;
            return (sum > maxValue) ? 0 
            : (sum < 0) ? maxValue 
            : sum; 
        });
    };

    return (
        <Intro 
        slide={itemList[currentId].img}
        onChangeId={onChangeId.bind(null, itemList.length - 1)}
        detailsItem={itemList[currentId]}
        />
    );
}

const mapStateToProps = ({ itemList }) => ({ itemList });

export default connect(mapStateToProps)(IntroContainer);