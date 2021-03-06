import React from "react";
import FadeLoader from "../../../Loaders/FadeLoader/FadeLoader";

import styles from "./Loader.module.scss";

const ShopSidebarLoader = () => {
  return (
    <div className={styles.Loader}>
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
    </div>
  );
};

export default ShopSidebarLoader;
