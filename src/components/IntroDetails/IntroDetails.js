import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './IntroDetails.scss';

const IntroDetails = ({ item = {} }) => {
    const { title, text, linkTo } = item;

    return (
        <div className="intro__details">
            <h1 className="intro__title title title--big title--black">
                { title }
            </h1>

            <p className="intro__text text text--black">
                { text }
            </p>

            <Link to={linkTo} className="intro__btn btn btn--transparent">
                Buy now
            </Link>
        </div>
    );
};

const mapStateToProps = ({ intro: { itemList, currentId } }) => {
    return { item: itemList[currentId] };
};

export default connect(mapStateToProps)(IntroDetails);