import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Container from "../Container/Container";

import { TabsContext } from "../../context/TabsContext";

import styles from "./Tabs.module.scss";

const Tabs = ({ children, className, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const classes = classNames(styles.Tabs, [`${className}`]);

  return (
    <div className={classes}>
      <Container>
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
          {children}
        </TabsContext.Provider>
      </Container>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  initialTab: PropTypes.number,
};

Tabs.defaultProps = {
  className: "",
  initialTab: 0,
};

export default Tabs;
