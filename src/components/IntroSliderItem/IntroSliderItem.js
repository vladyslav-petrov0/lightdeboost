import React, { Fragment, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Spinner from '../Loaders/Spinner.js';
import './IntroSliderItem.scss';
import '../../utils/scss/transition-group-anims/fade-out-left.scss';

const IntroSliderItem = ({ slide }) => {
    const [ loading, setLoading ] = useState(true);
    // сделать отмену загрузки, если человек пролистывает дальше слайд.
    useLayoutEffect(() => {
        setLoading(true);
    }, [ slide ]);
    
    return (
        <Fragment>
            <CSSTransition
            in={!loading}
            timeout={500}
            classNames={'fade-out-left'} >

                <img src={slide} alt='' 
                className="slider__item"
                onLoad={() => setLoading(false)} />

            </CSSTransition>

            { loading && <Spinner className="slider__spinner" /> }
        </Fragment>
    );
}

const mapStateToProps = ({ intro: { itemList, currentId } }) => {
    const el = itemList[currentId];
    return !el ? {} : { slide: el.img };
};

export default connect(mapStateToProps)(IntroSliderItem);