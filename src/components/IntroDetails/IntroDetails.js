import React from 'react';
import { connect } from 'react-redux';

import FadeLoader from "../Loaders/FadeLoader/FadeLoader";

import './IntroDetails.scss';
import ButtonLink from "../ButtonLink/ButtonLink";
import Title from "../Title/Title";

const IntroDetails = (props) => {
    return (
        <div className="intro__details">
            <IntroDetailsContent {...props} />
        </div>
    );
};

const IntroDetailsContent = ({ item = {}, loading }) => {
    const { title, text, linkTo } = item;

    if (loading) {
        return (
            <div className="intro__details--loader">
                <FadeLoader />
                <FadeLoader />
                <FadeLoader />
            </div>
        );
    }

    return (
        <>
            <Title className="intro__title" size='xl'>
                { title }
            </Title>

            <p className="intro__text text text--black">
                { text }
            </p>

            <ButtonLink href={linkTo}
            className="intro__btn"
            appearance="transparent">
                Buy now
            </ButtonLink>
        </>
    );
};

const mapStateToProps = ({ intro: { itemList, currentId, loading } }) => {
    return {
        item: itemList[currentId],
        loading,
    };
};

export default connect(mapStateToProps)(IntroDetails);