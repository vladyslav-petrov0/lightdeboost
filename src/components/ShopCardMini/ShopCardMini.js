import React from "react";
import { Link } from "react-router-dom";

import '../ShopCard/ShopCard.scss';

const ShopCardMini = ({ title, price, background, className }) => {
    return (
        <div style={{
            backgroundImage: `url(${background})`
        }}
        className={`shop-card shop-card--mini ${className}`}>

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