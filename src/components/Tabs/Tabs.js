import React, { useState } from "react";
import classNames from "classnames";
import { TabsContext } from "../context/TabsContext";

const Tabs = ({ children, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const classes = classNames("Tabs", [`${className}`]);

  return (
    <div className={classes}>
      <TabsContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.defaultProps = {
  className: "",
};

export default Tabs;
