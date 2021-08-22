import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../UI/LinkButton/LinkButton";

import Container from "../../UI/Container/Container";
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

        <LinkButton className={styles.Redirect} appearance="transparent" to="/">
          Go home
        </LinkButton>
      </Container>
    </main>
  );
};

export default ErrorPage;
