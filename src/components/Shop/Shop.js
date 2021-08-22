import React from "react";

import Container from "../UI/Container/Container";
import ShopProducts from "./Products/Products";
import ShopSidebar from "./Sidebar/SidebarContainer";

import styles from "./Shop.module.scss";

const Shop = () => {
  return (
    <div>
      <Container className={styles.Body}>
        <ShopSidebar />
        <ShopProducts />
      </Container>
    </div>
  );
};

export default Shop;
