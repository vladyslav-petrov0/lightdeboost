import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Form = ({ children, className, ...otherProps }) => {
    const classes = classNames('Form', [`${className}`]);

    return (
        <form {...otherProps} className={classes}>
            { children }
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

Form.defaultProps = {
    className: ''
};

export default Form;