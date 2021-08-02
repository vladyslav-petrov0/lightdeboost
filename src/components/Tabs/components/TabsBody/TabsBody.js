import React, { Children, useContext } from "react";
import classNames from "classnames";
import { TabsContext } from "../../../context/TabsContext";

const TabsBody = ({ children, className }) => {
  const { activeTab } = useContext(TabsContext);
  const classes = classNames("TabsBody", [`${className}`]);

  return (
    <div className={classes}>
      {Children.map(children, (child, idx) => {
        return idx == activeTab ? child : null;
      })}
    </div>
  );
};

TabsBody.defaultProps = {
  className: "",
};

export default TabsBody;
