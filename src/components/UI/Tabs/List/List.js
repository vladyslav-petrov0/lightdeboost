import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./List.module.scss";

const TabsList = ({ children, className }) => {
  const classes = cn(styles.List, className);
  return <div className={classes}>{children}</div>;
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

TabsList.defaultProps = {
  className: "",
};

export default TabsList;
