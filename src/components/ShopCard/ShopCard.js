import React from "react";
import classNames from "classnames";

import ButtonLink from "../ButtonLink/ButtonLink";
import './ShopCard.scss';

const ShopCard = ({ item, className }) => {
    const classes = classNames('shop-card', [`${className}`]);
    const { title, price, background, description} = item;
    const style = {backgroundImage: `url(${background})`};

    return (
        <div style={style} className={classes}>

            <div className="shop-card__body">
                <h3 className="shop-card__title">
                    { title }
                </h3>

                <ul className="shop-card__ul">
                {
                    description.map((text, idx) => {
                        return (
                            <li key={`description_${idx}`}>
                                { text }
                            </li>
                        );
                    })
                }
                </ul>

                <ButtonLink href={'/'}
                className="shop-card__btn">
                    Buy now
                </ButtonLink>

                <span className="shop-card__price">
                    Cost: <span>${ price }</span>
                </span>
            </div>

        </div>
    )
};

export default ShopCard;