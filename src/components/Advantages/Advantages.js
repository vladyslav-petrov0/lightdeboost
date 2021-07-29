import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Container from "../Container/Container";
import Title from "../Title/Title";
import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";

import { advantagesItems } from "../../mocks/advantagesItems/advantagesItems";
import "./Advantages.scss";

const Advantages = ({ className }) => {
  const classes = classNames("Advantages", [`${className}`]);

  return (
    <div className={classes}>
      <Container>
        <div className="AdvantagesBody">
          <Title className="AdvantagesTitle" color="white" size="lg">
            OUR ADVANTAGES
          </Title>

          <div className="AdvantagesItemList">
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
