import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Switcher = ({ children, isActive, onToggle, activeClassName }) => {
  const classes = classNames({ [activeClassName]: isActive });

  return (
    <span onClick={onToggle}>
      {cloneElement(children, {
        className: children.props.className + " " + classes,
      })}
    </span>
  );
};

Switcher.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  activeClassName: PropTypes.string,
};

Switcher.defaultProps = {
  isActive: false,
  activeClassName: "active",
};

export default Switcher;
