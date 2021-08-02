import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Title.module.scss";

const elements = {
  xl: "h1",
  lg: "h2",
  rg: "h3",
  sm: "h4",
  xs: "h5",
  xxs: "h6",
};

const Title = ({ size, children, className, color, ...otherProps }) => {
  const Heading = elements[size];

  const classes = classNames(styles.Title, styles[color], styles[size], [
    `${className}`,
  ]);

  return (
    <Heading {...otherProps} className={classes}>
      {children}
    </Heading>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Title.defaultProps = {
  size: "xl",
  color: "black",
  className: "",
};

export default Title;
