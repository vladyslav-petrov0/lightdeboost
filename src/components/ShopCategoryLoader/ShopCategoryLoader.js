import React from "react";
import FadeLoader from "../Loaders/FadeLoader/FadeLoader";

import styles from "./StopCategoryLoader.module.scss";

const ShopCategoryLoader = () => {
  return (
    <div className={styles.Loader}>
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
    </div>
  );
};

export default ShopCategoryLoader;
