import React from "react";

import Shop from "../../Shop/Shop";
import Title from "../../Title/Title";
import Container from "../../Container/Container";

import "./ShopPage.scss";

const ShopPage = () => {
  return (
    <main>
      <Container className="ShopPageTitle">
        <Title>Shop</Title>
      </Container>

      <Shop />
    </main>
  );
};

export default ShopPage;
