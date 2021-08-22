import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import Spinner from "../../../Loaders/Spinner/Spinner";
import ShopCardMini from "../../../ShopCardMini/ShopCardMini";
import CardTabsSlider from "./Slider/Slider";

import styles from "./Content.module.scss";

const CardTabsContent = ({ loading, error, items }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  if (loading) {
    return <Spinner className="ItemsTabsSpinner" />;
  }

  if (error) {
    <span>Error indicator</span>;
  }

  if (!items) {
    return null;
  }

  const cards = items.map((card) => {
    return <ShopCardMini item={card} key={card.id} className={styles.Card} />;
  });

  return isMobile ? <CardTabsSlider cards={cards} /> : cards;
};

CardTabsContent.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.array,
  error: PropTypes.bool,
};

export default CardTabsContent;
