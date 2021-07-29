import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./InputContainer.scss";

const InputContainer = ({ children, className }) => {
  const classes = classNames("InputContainer", [`${className}`]);

  return <label className={classes}>{children}</label>;
};

InputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

InputContainer.defaultProps = {
  className: "",
};

export default InputContainer;
