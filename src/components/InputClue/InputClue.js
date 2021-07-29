import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const InputClue = ({ children, className }) => {
  const classes = classNames("InputClue", [`${className}`]);

  return <span className={classes}>{children}</span>;
};

InputClue.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

InputClue.defaultProps = { className: "" };

export default InputClue;
