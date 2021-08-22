import React from "react";
import classNames from "classnames";

import LinkButton from "../UI/LinkButton/LinkButton";
import "../ShopCard/ShopCard.scss";

const ShopCardMini = ({ item, className }) => {
  const classes = classNames("ShopCard", [`${className}`], "ShopCard--mini");

  const { title, price, background } = item;
  const style = { backgroundImage: `url(${background})` };

  return (
    <div style={style} className={classes}>
      <h3 className="ShopCardTitle ShopCardTitle--mini">{title}</h3>

      <LinkButton
        href={"/32"}
        className="ShopCardButton ShopCardButton--mini"
        appearance="blured"
      >
        Buy now
      </LinkButton>

      <span className="ShopCardPrice  ShopCardPrice--mini">${price}</span>
    </div>
  );
};

export default ShopCardMini;
