import React from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Icons.module.scss";

import icon1 from "../img/1.png";
import icon2 from "../img/2.png";
import icon3 from "../img/3.png";
import icon4 from "../img/4.png";
import icon5 from "../img/5.png";

const VersionListIcons = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  const items = [icon1, icon2, icon3, icon4, icon5];

  if (isMobile) {
    const options = {
      slidesPerView: "auto",
      spaceBetween: 15,
      freeMode: true,
    };

    return (
      <Swiper {...options}>
        {items.map((el) => {
          return (
            <SwiperSlide key={el} className={styles.Slide}>
              <img src={el} alt="" className={styles.Icon} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <div className={styles.Wrapper}>
      {items.map((el) => (
        <img key={el} src={el} alt="" className={styles.Icon} />
      ))}
    </div>
  );
};

export default VersionListIcons;
