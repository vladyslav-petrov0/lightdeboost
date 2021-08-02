import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { TabsContext } from "../../../context/TabsContext";
import BaseButton from "../../../BaseButton/BaseButton";
import Button from "../../../Button/Button";

const TabsHeaderItem = ({ children, className, idx }) => {
  const { setActiveTab, activeTab } = useContext(TabsContext);

  let classes = classNames("TabsHeaderItem", [`${className}`], {
    active: idx === activeTab,
  });

  const handleButton = () => setActiveTab(idx);

  useEffect(() => {
    return () => setActiveTab(0);
  }, []);

  return (
    <Button onClick={handleButton} className={classes}>
      {children}
    </Button>
  );
};

TabsHeaderItem.defaultProps = {
  className: "",
};

export default TabsHeaderItem;
