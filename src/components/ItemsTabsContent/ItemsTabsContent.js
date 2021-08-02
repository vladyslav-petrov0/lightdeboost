import React, { useContext, useEffect, useState } from "react";

import ShopCardMini from "../ShopCardMini/ShopCardMini";
import Spinner from "../Loaders/Spinner/Spinner";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "./ItemsTabsContent.scss";

import arrowIcon from "./arrow.svg";
import { makeFlexRequest } from "../../utils";
import { ServiceContext } from "../context/ServiceContext";

SwiperCore.use([Navigation]);

const ItemsTabsContent = ({ fetchSrc }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const { service } = useContext(ServiceContext);

  const fetchItems = () => {
    setLoading(true);

    return makeFlexRequest(
      () => service.getItemsTabsContent(fetchSrc),
      (data) => {
        setData(data);
        setLoading(false);
      },
      setError
    );
  };

  useEffect(fetchItems, [fetchSrc]);

  if (loading) {
    return <Spinner className="ItemsTabsSpinner" />;
  }

  if (error) {
    return <span>Error indicator</span>;
  }

  const cards = data.items?.map((card) => {
    return <ShopCardMini item={card} key={card.id} className="ItemsTabsCard" />;
  });

  if (cards && window.innerWidth <= 768) {
    const options = {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 15,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    return (
      <>
        <Swiper {...options}>
          {cards.map((card) => {
            return (
              <SwiperSlide className="ItemsTabsSlide" key={card.id}>
                {card}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <img src={arrowIcon} alt="" className="swiper-button-prev" />

        <img src={arrowIcon} alt="" className="swiper-button-next" />
      </>
    );
  }

  return <div className="ItemsTabsContent">{cards}</div>;
};

export default ItemsTabsContent;
