import React from "react";

import Shop from "../../../Shop/ShopContainer";
import SidePage from "../Side";

import styles from "./Shop.module.scss";

const ShopPage = () => {
  return (
    <SidePage name={"Shop"} className={styles.Shop}>
      <Shop />
    </SidePage>
  );
};

export default ShopPage;
