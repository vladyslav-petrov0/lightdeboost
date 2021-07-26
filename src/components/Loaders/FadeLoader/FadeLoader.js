import React from 'react';
import classNames from "classnames";

import './FadeLoader.scss';

const FadeLoader = ({ className }) => {
    const classes = classNames('fade-loader', [`${className}`]);

    return <div className={classes}></div>;
};

export default FadeLoader;