import React from "react";
import classNames from "classnames";

import ButtonLink from "../ButtonLink/ButtonLink";
import "./ShopCard.scss";

const ShopCard = ({ item, className }) => {
  const classes = classNames("ShopCard", [`${className}`]);
  const { title, price, background, description } = item;
  const style = { backgroundImage: `url(${background})` };

  return (
    <div style={style} className={classes}>
      <div className="ShopCardBody">
        <h3 className="ShopCardTitle">{title}</h3>

        <ul className="ShopCardUl">
          {description.map((text, idx) => {
            return <li key={`description_${idx}`}>{text}</li>;
          })}
        </ul>

        <ButtonLink href={"/"} className="ShopCardButton">
          Buy now
        </ButtonLink>

        <span className="ShopCardPrice">
          Cost: <span>${price}</span>
        </span>
      </div>
    </div>
  );
};

export default ShopCard;
