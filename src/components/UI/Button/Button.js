import React from "react";
import PropTypes from "prop-types";
import BaseButton from "../../BaseButton/BaseButton";

const Button = ({ children, ...otherProps }) => {
  return (
    <BaseButton {...otherProps}>
      <button>{children}</button>
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
