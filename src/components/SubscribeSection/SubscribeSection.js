import React from 'react';

import Title from "../Title/Title";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import './SubscribeSection.scss';

const SubscribeSection = () => {
    return (
        <div className="subscribe-section">
            <div className="container">
                <div className="subscribe-section__body">
                    <div className="subscribe-section__content">
                        <Title className="subscribe-section__title"
                        size='xl' color="white">
                            SUBSCRIBE
                        </Title>

                        <p className="subscribe-section__text">
                            Subscribe us and you won't miss the new arrivals,
                            as well as discounts and sales.
                        </p>

                        <SubscribeForm />
                    </div>

                    <img className="subscribe-section__img"
                     src="https://i.ibb.co/2PBb0j1/image-18.png"/>
                </div>
            </div>
        </div>
    );
}

export default SubscribeSection;