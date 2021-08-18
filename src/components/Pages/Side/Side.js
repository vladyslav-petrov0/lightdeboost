import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Container from "../../Container/Container";
import Title from "../../Title/Title";

const SidePage = ({ children, name, className }) => {
  return (
    <>
      <Breadcrumbs />
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
