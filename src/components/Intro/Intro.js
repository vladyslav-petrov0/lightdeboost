import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchIntroItemList } from '../../actions/index.js';

import IntroDetails from '../IntroDetails/IntroDetails.js';
import IntroSlider from '../IntroSlider/IntroSlider.js';
import withServiceContext from '../hoc/withServiceContext.js';

import './Intro.scss';

const Intro = ({ fetchItemList }) => {
    useEffect(fetchItemList, []);

    return (
        <div className="intro">
            <div className="intro__container container">
                
                <div className="intro__body">
                    <IntroDetails />
                    <IntroSlider />                    
                </div>
                
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, { service }) => {
    return {
        fetchItemList: () => fetchIntroItemList(service, dispatch),
    }
}

export default withServiceContext(
    connect(null, mapDispatchToProps)(Intro)
);