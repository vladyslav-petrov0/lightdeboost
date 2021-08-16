import React from "react";
import PropTypes from "prop-types";

import ShopCard from "../ShopCard/ShopCard";
import FreeCardSlider from "../UI/FreeCardSlider/FreeCardSlider";

import { useMediaQuery } from "react-responsive";

const CardSectionContent = ({ loading, items = [] }) => {
  const withSlider = useMediaQuery({ query: "(max-width: 1200px)" });

  if (withSlider) {
    return <FreeCardSlider items={items} loading={loading} />;
  }

  return items.map((el) => <ShopCard key={el.id} item={el} />);
};

CardSectionContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default CardSectionContent;
