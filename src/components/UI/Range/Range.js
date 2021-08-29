import React, { useState, useEffect, useRef } from "react";
import { func, string } from "prop-types";
import { rangeParamsType } from "../../../utils/types";
import cn from "classnames";

import RangeDrag from "./Drag/Drag";

import styles from "./Range.module.scss";

const Range = ({ min, max, minDistance, onChange, minDefault, className }) => {
  const [currentMin, setCurrentMin] = useState(minDefault);
  const [currentMax, setCurrentMax] = useState(minDefault + minDistance);

  const rangeSlider = useRef(null);

  const sliderWidth = rangeSlider.current?.offsetWidth || 0;

  useEffect(() => {
    onChange &&
      onChange({
        min: Math.floor(currentMin),
        max: Math.floor(currentMax),
      });
  }, [currentMin, currentMax]);

  const convertAbsToRel = (relMax, absMax, value) => value * (relMax / absMax);
  const convertRelToAbs = (relMax, absMax, value) => value * (absMax / relMax);

  const onHandle = (e, drag) => {
    const isTouch = e.touches?.[0].clientX;
    let currentX = isTouch ? e.touches[0].clientX : e.clientX;

    const onDragMove = (e) => {
      if (isTouch) {
        e.preventDefault(); // prevent pagescrolling on mobile devices while sliding range
      }

      const iterationX = isTouch ? e.touches[0].clientX : e.clientX;

      const setFunc = (prev) => {
        const res =
          prev + convertAbsToRel(max, sliderWidth, iterationX - currentX);

        if (res > max) return max;
        if (res < min) return min;

        /* limit drag position according minDistance */
        if (drag === "min" && res + minDistance > currentMax) {
          return currentMax - minDistance;
        }

        if (drag === "max" && res - minDistance < currentMin) {
          return currentMin + minDistance;
        }

        return res;
      };

      if (drag === "min") {
        setCurrentMin(setFunc);
      }

      if (drag === "max") {
        setCurrentMax(setFunc);
      }

      currentX = iterationX;
    };

    const moveEvent = isTouch ? "touchmove" : "mousemove";
    const endEvent = isTouch ? "touchend" : "mouseup";

    window.addEventListener(moveEvent, onDragMove, { passive: false });
    window.addEventListener(
      endEvent,
      () => window.removeEventListener(moveEvent, onDragMove),
      {
        once: true,
      }
    );
  };

  const classes = cn(styles.Range, className);
  const minClasses = cn(styles.Min, styles.StaticLimit, styles.Limit);
  const maxClasses = cn(styles.Max, styles.StaticLimit, styles.Limit);

  const onMinHandle = (e) => onHandle(e, "min");
  const onMaxHandle = (e) => onHandle(e, "max");

  return (
    <div className={classes}>
      <div className={styles.Slider} ref={rangeSlider}>
        <span className={minClasses}>{min}</span>
        <span className={maxClasses}>{max}</span>

        <svg className={styles.Indicator}>
          <rect
            style={{
              x: convertRelToAbs(max, sliderWidth, currentMin),
              y: 0,
              width:
                convertRelToAbs(max, sliderWidth, currentMax) -
                11 -
                (convertRelToAbs(max, sliderWidth, currentMin) - 11),
            }}
          />
        </svg>

        <RangeDrag
          output={Math.floor(currentMin)}
          pos={convertRelToAbs(max, sliderWidth, currentMin) - 11}
          setPos={onMinHandle}
        />

        <RangeDrag
          output={Math.floor(currentMax)}
          pos={convertRelToAbs(max, sliderWidth, currentMax) - 11}
          setPos={onMaxHandle}
        />
      </div>
    </div>
  );
};

Range.propTypes = {
  ...rangeParamsType,
  onChange: func,
  className: string,
};

Range.defaultProps = {
  minDefault: 0,
  minDistance: 0,
  className: "",
};

export default Range;
