import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Container from "../Container/Container";
import Title from "../Title/Title";
import AdvantagesItem from "./Item/Item";

import { advantagesItems } from "../../mocks/Static/advantagesItems/advantagesItems";
import styles from "./Advantages.module.scss";

const Advantages = ({ className }) => {
  const classes = classNames(styles.Advantages, className);

  return (
    <div className={classes}>
      <Container>
        <div className={styles.Body}>
          <Title className={styles.Title} color="white" size="lg">
            OUR ADVANTAGES
          </Title>

          <div className={styles.Items}>
            {advantagesItems.map(({ img, id, label }) => (
              <AdvantagesItem img={img} key={id}>
                {label}
              </AdvantagesItem>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

Advantages.propTypes = {
  className: PropTypes.string,
};

Advantages.defaultProps = {
  className: "",
};

export default Advantages;
