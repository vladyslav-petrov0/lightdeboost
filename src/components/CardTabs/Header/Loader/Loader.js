import React from "react";
import PropTypes from "prop-types";

import FadeLoader from "../../../Loaders/FadeLoader/FadeLoader.js";

import styles from "./Loader.module.scss";
import { useMediaQuery } from "react-responsive";

const CardTabsHeaderLoader = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return !isMobile ? (
    <FadeLoader className={styles.Item} />
  ) : (
    <>
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
      <FadeLoader className={styles.Item} />
    </>
  );
};

export default CardTabsHeaderLoader;
