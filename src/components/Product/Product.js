import React from "react";
import { string, number } from "prop-types";
import { productOptionsType } from "../../utils/types";
import { useForm } from "../customHooks";

import Container from "../UI/Container/Container";
import Title from "../Title/Title";
import Button from "../UI/Button/Button";
import LinkButton from "../UI/LinkButton/LinkButton";
import ProductOptions from "./Options/Options";

import styles from "./Product.module.scss";

const Product = ({ img, title, options, price, id }) => {
  const { fields, register } = useForm({ title, price, id });

  return (
    <div className={styles.Product}>
      <Container className={styles.Container}>
        <div className={styles.Img}>
          <img src={img} alt="" />
        </div>

        <div className={styles.Details}>
          <Title size="sm" className={styles.Title}>
            {title}
          </Title>

          <ProductOptions register={register} options={options} />

          <div className={styles.Footer}>
            <span className={styles.Price}>${price}</span>

            <div className={styles.Actions}>
              <Button
                onClick={() => console.log(fields)}
                className={styles.Btn}
              >
                Add to card
              </Button>
              <LinkButton className={styles.Btn} href={"/buy"}>
                Buy now
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

Product.propTypes = {
  img: string.isRequired,
  title: string.isRequired,
  options: productOptionsType,
  price: number.isRequired,
};

export default Product;
