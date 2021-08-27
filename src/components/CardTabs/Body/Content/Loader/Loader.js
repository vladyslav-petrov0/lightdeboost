import React from "react";
import { useMediaQuery } from "react-responsive";

import FadeLoader from "../../../../Loaders/FadeLoader/FadeLoader";

import styles from "./Loader.module.scss";

const CardTabsBodyLoader = () => {
  const isDefault = useMediaQuery({ query: "(min-width: 1025px)" });

  if (isDefault) {
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
  }

  return (
    <div className={styles.Loader}>
      <div className={styles.Wrapper}>
        <FadeLoader className={styles.Item} />
        <FadeLoader className={styles.Item} />
        <FadeLoader className={styles.Item} />
      </div>
    </div>
  );
};

export default CardTabsBodyLoader;
