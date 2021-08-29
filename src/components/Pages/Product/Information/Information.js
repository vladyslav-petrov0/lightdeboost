import React from "react";
import PropTypes from "prop-types";

import Text from "../../../UI/Text/Text";
import Title from "../../../Title/Title";

import styles from "./Information.module.scss";

const ProductPageInformation = ({ data }) => {
  return data.map(({ id, title, text }) => {
    return (
      <div key={id} className={styles.Wrapper}>
        <Title size="rg" className={styles.Title}>
          {title}
        </Title>

        <div className={styles.TextBlock}>
          {text.map((el, idx) => {
            return (
              <Text className={styles.TextPart} key={idx}>
                {el}
              </Text>
            );
          })}
        </div>
      </div>
    );
  });
};

ProductPageInformation.propTypes = {};

export default ProductPageInformation;
