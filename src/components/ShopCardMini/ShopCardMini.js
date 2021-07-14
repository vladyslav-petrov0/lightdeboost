import React from "react";
import { Link } from "react-router-dom";

import '../ShopCard/ShopCard.scss';

const ShopCardMini = ({ title, price, background }) => {
    return (
        <div style={{
            backgroundImage: `url(${background})`
        }}
        className="shop-card shop-card--mini items-tabs__card">

            <h3 className="shop-card__title shop-card__title--mini">
                { title }
            </h3>

            <Link className="shop-card__btn  shop-card__btn--blured">
                Buy now
            </Link>

            <span className="shop-card__price  shop-card__price--mini">
                ${ price }
            </span>

        </div>
    )
};

export default ShopCardMini;