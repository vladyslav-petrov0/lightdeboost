import React from "react";
import PropTypes from "prop-types";

import ShopCard from "../ShopCard/ShopCard";
import Spinner from "../Loaders/Spinner/Spinner";

import {Swiper, SwiperSlide} from "swiper/react";

const CardSectionContent = ({ loading, items = [] }) => {
    const withSlider = (window.innerWidth <= 1200);

    if (withSlider && !loading) {
        const options = {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
        };

        return (
            <Swiper {...options}>
            {
                items.map(el => {
                    return (
                        <SwiperSlide key={el.id}
                        className="CardSectionSlide">
                            <ShopCard item={el} />
                        </SwiperSlide>
                    );
                })
            }
            </Swiper>
        );
    }

    if (loading) {
        return <Spinner />;
    }

    return items.map(el => <ShopCard key={el.id} item={el} />);
};

CardSectionContent.propTypes = {
    loading: PropTypes.bool,
    items: PropTypes.array
};

export default CardSectionContent;