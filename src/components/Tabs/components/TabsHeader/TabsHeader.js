import React, { Children, cloneElement } from "react";
import classNames from "classnames";

const TabsHeader = ({ children, className }) => {
  const classes = classNames("TabsHeader", [`${className}`]);

  return (
    <div className={classes}>
      {Children.map(children, (child, idx) => {
        return cloneElement(child, { idx });
      })}
    </div>
  );
};

TabsHeader.defaultProps = {
  className: "",
};

export default TabsHeader;
