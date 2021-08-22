import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useFetch } from "../../customHooks";
import PropTypes from "prop-types";

import ShopCard from "../../ShopCard/ShopCard";
import FreeCardSlider from "../../UI/FreeCardSlider/FreeCardSlider";

import styles from "./Body.module.scss";
import FreeCardSliderLoader from "../../UI/FreeCardSlider/Loader/Loader";

const CardSectionBody = ({ fetchItems }) => {
  const withSlider = useMediaQuery({ query: "(max-width: 1200px)" });

  const { fetchData, data: items = [], loading } = useFetch(fetchItems);
  useEffect(() => fetchData(), []);

  return (
    <div className={styles.Body}>
      {loading ? (
        <FreeCardSliderLoader />
      ) : withSlider ? (
        <FreeCardSlider items={items} />
      ) : (
        items.map((el) => <ShopCard key={el.id} item={el} />)
      )}
    </div>
  );
};

CardSectionBody.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

export default CardSectionBody;
