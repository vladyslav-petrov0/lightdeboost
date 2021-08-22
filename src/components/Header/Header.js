import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";

import Container from "../UI/Container/Container";
import HeaderBody from "./Body/Body";

import styles from "./Header.module.scss";

const Header = () => {
  const [isAttached, setAttached] = useState(true);
  const header = useRef(null);

  const onScroll = () => {
    const elemHeight = parseFloat(getComputedStyle(header.current).height);

    let y = 0,
      yPrev = 0;

    return () => {
      y = window.pageYOffset;

      if (y > yPrev && y > elemHeight) {
        setAttached(false);
      } else {
        setAttached(true);
      }

      yPrev = y;
    };
  };

  useEffect(() => {
    const f = onScroll();

    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const classes = cn(styles.Header, {
    [styles.showed]: isAttached,
  });

  return (
    <header className={classes} ref={header}>
      <Container>
        <HeaderBody />
      </Container>
    </header>
  );
};

export default Header;
