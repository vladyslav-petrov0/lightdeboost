import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Title from "../Title/Title";
import Container from "../UI/Container/Container";
import CardSectionBody from "./Body/Body";

import styles from "./CardSection.module.scss";

const CardSection = ({ fetchItems, className, title }) => {
  const classes = cn(styles.CardSection, className);

  return (
    <section className={classes}>
      <Container>
        <Title className={styles.Title} size="lg">
          {title}
        </Title>

        <CardSectionBody fetchItems={fetchItems} />
      </Container>
    </section>
  );
};

CardSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  fetchItems: PropTypes.func.isRequired,
};

CardSection.defaultProps = {
  className: "",
};

export default CardSection;
