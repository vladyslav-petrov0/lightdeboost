import React from "react";
import { string } from "prop-types";
import cn from "classnames";

import styles from "./UserIcon.module.scss";

const UserIcon = ({ src, className }) => {
  const classes = cn(styles.Wrapper, className);
  return (
    <div className={classes}>
      <img className={styles.Icon} src={src} alt="" />
    </div>
  );
};

UserIcon.propTypes = {
  src: string.isRequired,
  className: string,
};

UserIcon.defaultProps = {
  className: "",
};

export default UserIcon;
