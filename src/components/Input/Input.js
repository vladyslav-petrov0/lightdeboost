import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = ({ className, children, onInput, ...otherProps }) => {
  const classes = classNames("Input", [`${className}`]);

  return (
    <input
      {...otherProps}
      onInput={onInput}
      className={classes}
      value={children}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func.isRequired,
};

Input.defaultProps = { className: "" };

export default Input;
