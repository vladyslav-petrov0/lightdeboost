import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormClue = ({ children, className }) => {
    const classes = classNames('form__clue', [`${className}`]);

    return (
        <span className={classes}>
            { children }
        </span>
    );
}

FormClue.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

FormClue.defaultProps = { className: '' };

export default FormClue;