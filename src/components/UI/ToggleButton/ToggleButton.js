import React from "react";
import PropTypes from "prop-types";

import Button from "../Button/Button";

const ToggleButton = ({
  isActive,
  className,
  onToggle,
  children,
  inactiveAppearance,
  activeAppearance,
}) => {
  return (
    <Button
      className={className}
      onClick={onToggle}
      appearance={isActive ? activeAppearance : inactiveAppearance}
    >
      {children}
    </Button>
  );
};

ToggleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onToggle: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inactiveAppearance: PropTypes.string,
  activeAppearance: PropTypes.string,
};

ToggleButton.defaultProps = {
  isActive: false,
  className: "",
  inactiveAppearance: "inactive",
  activeAppearance: "orange",
};

export default ToggleButton;
