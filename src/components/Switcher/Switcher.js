import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Switcher = ({ children, isActive, onToggle }) => {
  const className = classNames({ active: isActive });

  return (
    <span onClick={onToggle}>{cloneElement(children, { className })}</span>
  );
};

Switcher.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  className: PropTypes.string,
};

export default Switcher;
