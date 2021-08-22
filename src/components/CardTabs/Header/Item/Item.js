import React, { useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Button from "../../../UI/Button/Button";

import styles from "./Item.module.scss";

const CardTabsHeaderItem = ({ children, isActive, onToggle }) => {
  const classes = cn(styles.Item, {
    [styles.active]: isActive,
  });

  useEffect(() => isActive && onToggle(), []); // set fetchSrc at first mounting

  return (
    <Button className={classes} onClick={!isActive ? onToggle : null}>
      {children}
    </Button>
  );
};

CardTabsHeaderItem.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

CardTabsHeaderItem.defaultProps = {
  isActive: false,
};

export default CardTabsHeaderItem;
