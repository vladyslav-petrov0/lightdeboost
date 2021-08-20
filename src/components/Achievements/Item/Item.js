import React from "react";
import PropTypes from "prop-types";

import Title from "../../Title/Title";

import styles from "./Item.module.scss";

const AchievementItem = ({ count, title, description }) => {
  return (
    <div className={styles.Item}>
      <Title className={styles.Count} color={"white"}>
        {count.toString()}
      </Title>
      <span className={styles.Title}>{title}</span>
      <p className={styles.Text}>{description}</p>
    </div>
  );
};

AchievementItem.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default AchievementItem;
