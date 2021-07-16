import React, {Fragment} from "react";

import ShopCardMini from "../ShopCardMini/ShopCardMini";
import Spinner from "../Loaders/Spinner";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './ItemsTabsBodyItem.scss';

import arrowIcon from './arrow.svg';

SwiperCore.use([Navigation]);

const ItemsTabsBodyItem = ({ elem, loading, error }) => {

    if (loading) {
        return <Spinner className="items-tabs__spinner" />;
    };

    if (error) {
        return <span>Error indicator</span>;
    };

    const items = elem.items?.map(itm => {
        return (
            <ShopCardMini {...itm} key={itm.id}
            className='items-tabs__card'/>
        );
    });

    if (items && window.innerWidth <= 768) {
        const options = {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };

        return (
            <Fragment>
                <Swiper {...options}>
                    { items.map(elem => {
                        return (
                            <SwiperSlide
                            className="items-tabs__slide"
                            key={elem.props.id}>
                                { elem }
                            </SwiperSlide>
                        );
                    }) }
                </Swiper>

                <img src={arrowIcon} alt=''
                className="swiper-button-prev" />

                <img src={arrowIcon} alt=''
                className="swiper-button-next" />

            </Fragment>
        );
    }

    return [ items ];
};

export default ItemsTabsBodyItem;