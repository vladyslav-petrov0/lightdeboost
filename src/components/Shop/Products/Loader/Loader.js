import React from "react";
import FadeLoader from "../../../Loaders/FadeLoader/FadeLoader";

import styles from "./Loader.module.scss";

const ShopCategoryLoader = () => {
  return (
    <>
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
    </>
  );
};

export default ShopCategoryLoader;
