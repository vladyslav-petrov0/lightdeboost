import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTabsContext } from "../../../customHooks";

import Button from "../../../UI/Button/Button";

import styles from "./Tab.module.scss";

const Tab = ({ index, className, children }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === index;

  const classes = cn(styles.Tab, className, {
    [styles.active]: isActive,
  });

  const onToggle = () => setActiveTab(index);

  return (
    <Button onClick={!isActive ? onToggle : null} className={classes}>
      {children}
    </Button>
  );
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  children: PropTypes.elementType.isRequired,
};

Tab.defaultProps = {
  className: "",
};

export default Tab;
