import React from 'react';
import classNames from "classnames";

import './Spinner.scss';

const Spinner = ({ className }) => {
    const classes = classNames('loadingio-spinner-spinner-c652y62i7wr', [`${className}`]);

    return (
        <div className={classes}>
            <div className="ldio-pbihk53xvj">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;