import React from "react";
import PropTypes from "prop-types";
import styles from "./FreeCardSlider.module.scss";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import ShopCard from "../../ShopCard/ShopCard";
import FreeCardSliderLoader from "./Loader/Loader";

const FreeCardSlider = ({
  items,
  className,
  sliderClassName,
  cardClassName,
  loaderClassName,
  loading,
}) => {
  const classes = cn(styles.Container, [`${className}`]);

  const options = {
    slidesPerView: "auto",
    spaceBetween: 15,
    freeMode: true,
    className: cn(styles.Slider, [`${sliderClassName}`]),
  };

  if (loading) {
    return <FreeCardSliderLoader className={loaderClassName} />;
  }

  return (
    <div className={classes}>
      <span className={styles.Clue}>SWIPE IT</span>
      <Swiper {...options}>
        {items?.map((el) => {
          return (
            <SwiperSlide key={el.id} className={styles.Slide}>
              <ShopCard item={el} className={cardClassName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

FreeCardSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  sliderClassName: PropTypes.string,
  loaderClassName: PropTypes.string,
  cardClassName: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
};

FreeCardSlider.defaultProps = {
  items: [],
  sliderClassName: "",
  cardClassName: "",
  loaderClassName: "",
  className: "",
  loading: false,
};

export default FreeCardSlider;
