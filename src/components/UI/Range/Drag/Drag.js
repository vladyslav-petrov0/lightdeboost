import React from "react";
import { oneOfType, func, number, string } from "prop-types";

import styles from "./Drag.module.scss";

const RangeDrag = ({ output, pos, setPos, ...otherProps }) => {
  return (
    <span
      className={styles.Drag}
      onMouseDown={setPos}
      onTouchStart={setPos}
      style={{ left: `${pos}px` }}
      {...otherProps}
    >
      <span className={styles.Value}>{output}</span>
    </span>
  );
};

RangeDrag.propTypes = {
  output: oneOfType([string, number]),
  pos: number.isRequired,
  setPos: func.isRequired,
};

export default RangeDrag;
