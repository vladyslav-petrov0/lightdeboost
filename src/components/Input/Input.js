import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({ className, children, onInput, status, ...otherProps }) => {
    const classes = classNames('input', [`${status}`], [`${className}`]);

    return (
        <input {...otherProps}
        onInput={onInput}
        className={classes}
        value={children} />
    );
}

Input.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    status: PropTypes.string
};

Input.defaultProps = { className: '', status: '' };

export default Input;