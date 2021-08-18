import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Text.module.scss";

const Text = ({ children, className }) => {
  const classes = cn(styles.Text, className);

  return <p className={classes}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  className: "",
};

export default Text;
