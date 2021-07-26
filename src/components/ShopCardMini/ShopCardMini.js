import React from "react";
import classNames from "classnames";

import '../ShopCard/ShopCard.scss';
import ButtonLink from "../ButtonLink/ButtonLink";

const ShopCardMini = ({ item, className }) => {
    const classes = classNames('shop-card', [`${className}`], 'shop-card--mini');

    const { title, price, background } = item;
    const style = {backgroundImage: `url(${background})`};

    return (
        <div style={style} className={classes}>

            <h3 className="shop-card__title shop-card__title--mini">
                { title }
            </h3>

            <ButtonLink href={'/32'}
            className="shop-card__btn shop-card__btn--mini"
            appearance="blured">
                Buy now
            </ButtonLink>

            <span className="shop-card__price  shop-card__price--mini">
                ${ price }
            </span>

        </div>
    )
};

export default ShopCardMini;