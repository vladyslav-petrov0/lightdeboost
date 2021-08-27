import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import ShopCardMini from "../../../ShopCardMini/ShopCardMini";
import CardTabsSlider from "./Slider/Slider";

import styles from "./Content.module.scss";
import CardTabsBodyLoader from "./Loader/Loader";

const CardTabsContent = ({ loading, error, items }) => {
  const withSlider = useMediaQuery({ query: "(max-width: 1024px)" });

  if (loading || !items) {
    return <CardTabsBodyLoader />;
  }

  if (error) {
    <span>Error indicator</span>;
  }

  const cards = items.map((card) => {
    return <ShopCardMini item={card} key={card.id} className={styles.Card} />;
  });

  return withSlider ? <CardTabsSlider items={items} /> : cards;
};

CardTabsContent.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  error: PropTypes.bool,
};

export default CardTabsContent;
