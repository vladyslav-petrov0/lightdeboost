import React from "react";

import Title from "../../Title/Title";

import styles from "./Item.module.scss";

const AchievementItem = ({ count, title, description }) => {
  return (
    <div className={styles.Item}>
      <Title className={styles.Count} color={"white"}>
        {count}
      </Title>
      <span className={styles.Title}>{title}</span>
      <p className={styles.Text}>{description}</p>
    </div>
  );
};

export default AchievementItem;
