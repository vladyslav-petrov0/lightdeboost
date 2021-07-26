import React, {useEffect, useState} from "react";

import ShopCardMini from "../ShopCardMini/ShopCardMini";
import Spinner from "../Loaders/Spinner/Spinner";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import './ItemsTabsContent.scss';

import arrowIcon from './arrow.svg';
import withServiceContext from "../hoc/withServiceContext";
import {makeFlexRequest} from "../../utils";

SwiperCore.use([Navigation]);

const ItemsTabsContent = ({ fetchSrc, service }) => {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ data, setData ] = useState([]);

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
    }

    useEffect(fetchItems, [ fetchSrc ]);

    if (loading) {
        return <Spinner className="items-tabs__spinner" />;
    };

    if (error) {
        return <span>Error indicator</span>;
    };

    const cards = data.items?.map(card => {
        return (
            <ShopCardMini item={card} key={card.id}
            className="items-tabs__card" />
        );
    });

    if (cards && window.innerWidth <= 768) {
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
            <>
                <Swiper {...options}>
                    { cards.map(card => {
                        return (
                            <SwiperSlide
                                className="items-tabs__slide"
                                key={card.id}>
                                { card }
                            </SwiperSlide>
                        );
                    }) }
                </Swiper>

                <img src={arrowIcon} alt=''
                className="swiper-button-prev" />

                <img src={arrowIcon} alt=''
                className="swiper-button-next" />

            </>
        );
    }

    return (
        <div className="items-tabs__content">
            { cards }
        </div>
    );
};

export default withServiceContext(ItemsTabsContent);