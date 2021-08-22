import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import styles from "./Slider.module.scss";

import arrowIcon from "./arrow.svg";

SwiperCore.use([Navigation]);

const CardTabsSlider = ({ cards }) => {
  const classesBtnPrev = cn(styles.NavBtn, styles.NavBtnPrev);
  const classesBtnNext = cn(styles.NavBtn, styles.NavBtnNext);

  const options = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: true,
    navigation: {
      nextEl: `.${styles.NavBtnNext}`,
      prevEl: `.${styles.NavBtnPrev}`,
    },
  };

  return (
    <>
      <Swiper {...options}>
        {cards.map((card) => {
          return (
            <SwiperSlide className={styles.Slide} key={card.id}>
              {card}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <img src={arrowIcon} alt="" className={classesBtnPrev} />
      <img src={arrowIcon} alt="" className={classesBtnNext} />
    </>
  );
};

CardTabsSlider.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardTabsSlider;
