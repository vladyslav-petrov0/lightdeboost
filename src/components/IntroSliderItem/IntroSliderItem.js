import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../Loaders/Spinner.js';
import './IntroSliderItem.scss';

const IntroSliderItem = ({ itemProps, children }) => {
    return (
        <Fragment>
            <img {...itemProps} alt="" />
            { children }
        </Fragment>
    );
};

const IntroSliderItemContainer = ({ slide }) => {
    const [ loading, setLoading ] = useState(true);
    const [ animating, setAnimating ] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => setAnimating(false);
    }, [slide]);

    let classes = "slider__item";
    
    if (animating) {
        classes += " animated";
    }

    if (loading) {
        classes += " hidden";
    }

    return (
        <IntroSliderItem
        itemProps={{
        className: classes,
        onLoad: () => {
            setAnimating(true)
            setLoading(false)
        },
        src: slide }} >
            { loading ? <Spinner /> : null }
        </IntroSliderItem>
    );
}

const mapStateToProps = ({ intro: { itemList, currentId } }) => {
    const el = itemList[currentId];
    return !el ? {} : { slide: el.img };  
};

export default connect(mapStateToProps)(IntroSliderItemContainer);