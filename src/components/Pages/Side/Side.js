import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Container from "../../UI/Container/Container";
import Title from "../../Title/Title";

import styles from "./Side.module.scss";

const SidePage = ({ children, name, className }) => {
  return (
    <>
      <Breadcrumbs className={styles.Breadcrumbs} />
      <Container>
        <Title>{name}</Title>
      </Container>
      <main className={className}>{children}</main>
    </>
  );
};

SidePage.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SidePage;
