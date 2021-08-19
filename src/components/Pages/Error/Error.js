import React from "react";
import { Link } from "react-router-dom";
import ButtonLink from "../../ButtonLink/ButtonLink";

import Container from "../../Container/Container";
import Title from "../../Title/Title";

import styles from "./Error.module.scss";

const ErrorPage = () => {
  return (
    <main className={styles.ErrorPage}>
      <Container className={styles.Container}>
        <Title className={styles.Title}>oops!</Title>
        <h1 className={styles.Error404}>404</h1>

        <div className={styles.Description}>
          <span>error message</span>
          <span>
            Don`t worry let`s go <Link to="/">Home</Link>
          </span>
        </div>

        <ButtonLink className={styles.Redirect} appearance="transparent" to="/">
          Go home
        </ButtonLink>
      </Container>
    </main>
  );
};

export default ErrorPage;
