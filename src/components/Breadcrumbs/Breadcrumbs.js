import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../customHooks";

import Container from "../UI/Container/Container";

import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div className={styles.Breadcrumbs}>
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
