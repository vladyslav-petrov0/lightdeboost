import { cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./BaseButton.scss";

const BaseButton = ({ className, children, appearance, ...otherProps }) => {
  const classes = classNames(
    "Button",
    [`Button--${appearance}`],
    [`${className}`]
  );

  return cloneElement(children, {
    ...otherProps,
    className: classes,
  });
};

BaseButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  appearance: PropTypes.string,
};

BaseButton.defaultProps = {
  appearance: "orange",
  className: "",
};

export default BaseButton;
