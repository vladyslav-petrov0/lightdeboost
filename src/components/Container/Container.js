import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Container.scss';

const Container = ({ className, children }) => {
    const classes = classNames('Container', [`${className}`]);

    return (
        <div className={classes}>
            { children }
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Container.defaultProps = {
    className: ''
};

export default Container;