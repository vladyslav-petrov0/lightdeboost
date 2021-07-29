import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchIntroItemList } from '../../actions/index.js';

import IntroDetails from '../IntroDetails/IntroDetails.js';
import IntroSlider from '../IntroSlider/IntroSlider.js';
import Container from "../Container/Container";
import withServiceContext from '../hoc/withServiceContext.js';

import './Intro.scss';

const Intro = ({ fetchItemList, className }) => {
    useEffect(fetchItemList, []);
    const classes = classNames('Intro', [`${className}`]);

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
    className: ''
};

const mapDispatchToProps = (dispatch, { service }) => {
    return {
        fetchItemList: () => fetchIntroItemList(service, dispatch),
    }
}

export default withServiceContext(
    connect(null, mapDispatchToProps)(Intro)
);