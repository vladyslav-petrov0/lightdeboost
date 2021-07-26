import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Title.scss';

const elements = {
    xl: 'h1',
    lg: 'h2',
    rg: 'h3',
    sm: 'h4',
    xs: 'h5',
    xxs: 'h6',
};

const Title = ({ size, children, className, color, ...otherProps }) => {
    const Heading = elements[size];

    const classes = classNames('title', [`title--${color}`],
        [`title--${size}`], [`${className}`]);

    return (
        <Heading {...otherProps} className={classes}>
            { children }
        </Heading>
    );
}

Title.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string
}

Title.defaultProps = {
    size: 'xl',
    color: 'black'
}

export default Title;