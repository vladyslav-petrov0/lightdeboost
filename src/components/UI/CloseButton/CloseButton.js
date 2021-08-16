import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./CloseButton.module.scss";

const CloseButton = ({ className, onClose, ...props }) => {
  const classes = cn(styles.Btn, [`${className}`]);

  return (
    <button {...props} className={classes} onClick={onClose}>
      <span className={styles.LeftStick}></span>
      <span className={styles.RightStick}></span>
    </button>
  );
};

CloseButton.defaultProps = {
  className: "",
};

CloseButton.propTypes = {
  className: PropTypes.string,
};

export default CloseButton;
