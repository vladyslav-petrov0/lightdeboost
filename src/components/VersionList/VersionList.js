import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Container from "../Container/Container";
import Title from "../Title/Title";
import VersionListIcons from "./Icons/Icons";

import styles from "./VersionList.module.scss";

const VersionList = ({ className }) => {
  const classes = cn(className, styles.VersionList);

  return (
    <div className={classes}>
      <Container>
        <Title size={"lg"} className={styles.Title}>
          WE ARE WORKING SINCE 2011
        </Title>

        <VersionListIcons />
      </Container>
    </div>
  );
};

VersionList.propTypes = {
  className: PropTypes.string,
};

VersionList.defaultProps = {
  className: "",
};

export default VersionList;
