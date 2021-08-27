import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../customHooks";

import Container from "../UI/Container/Container";

import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ className }) => {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  const classes = cn(styles.Breadcrumbs, className);

  return (
    <div className={classes}>
      <Container>
        <div className={styles.Body}>
          {breadcrumbs.map(
            ({ name, to }) =>
              name && (
                <Link key={name} to={to} className={styles.Item}>
                  {name}
                </Link>
              )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
