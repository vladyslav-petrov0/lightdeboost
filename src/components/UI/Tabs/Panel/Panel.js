import React from "react";
import PropTypes from "prop-types";
import { useTabsContext } from "../../../customHooks";

const TabsPanel = ({ children, className, index }) => {
  const { activeTab } = useTabsContext();

  if (activeTab !== index) {
    return null;
  }

  return <div className={className}>{children}</div>;
};

TabsPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.elementType.isRequired,
  index: PropTypes.number.isRequired,
};

TabsPanel.defaultProps = {
  className: "",
};

export default TabsPanel;
