import React from "react";
import PropTypes from "prop-types";

import Title from "../Title/Title";

import "./CardSection.scss";
import Container from "../Container/Container";

const CardSection = ({ className, title, children }) => {
  return (
    <section className={className}>
      <Container>
        <Title className="CardSectionTitle" size="lg">
          {title}
        </Title>

        <ul className="CardSectionBody">{children}</ul>
      </Container>
    </section>
  );
};

CardSection.propTypes = { children: PropTypes.element.isRequired };

export default CardSection;
