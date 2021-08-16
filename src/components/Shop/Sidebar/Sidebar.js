import React from "react";

import ShopSidebarLoader from "./Loader/Loader";

import styles from "./Sidebar.module.scss";

const ShopSidebar = ({ children, loading, error }) => {
  return (
    <div className={styles.Sidebar}>
      {loading ? <ShopSidebarLoader /> : children}
    </div>
  );
};

export default ShopSidebar;
