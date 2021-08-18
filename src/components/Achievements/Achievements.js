import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import AchievementItem from "./Item/Item";
import Container from "../Container/Container";

import styles from "./Achievements.module.scss";
import { achievements } from "../../mocks/Static/achievements";

const Achievements = ({ className }) => {
  const classes = cn(className, styles.Achievements);

  return (
    <div className={classes}>
      <Container>
        <div className={styles.Body}>
          {achievements.map(({ id, ...props }) => (
            <AchievementItem key={id} {...props} />
          ))}
        </div>
      </Container>
    </div>
  );
};

Achievements.propTypes = {
  className: PropTypes.string,
};

Achievements.defaultProps = {
  className: "",
};

export default Achievements;
