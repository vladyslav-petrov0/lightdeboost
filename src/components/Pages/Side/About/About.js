import React from "react";

import Container from "../../../UI/Container/Container";
import SidePage from "../Side";
import Text from "../../../UI/Text/Text";
import Advantages from "../../../Advantages/Advantages";
import MoreInfo from "../../../MoreInfo/MoreInfo";
import Achievements from "../../../Achievements/Achievements";
import VersionList from "../../../VersionList/VersionList";

import styles from "./About.module.scss";

const AboutPage = () => {
  return (
    <SidePage name={"About us"} className={styles.About}>
      <Container className={styles.TextWrapper}>
        <Text className={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis vel eros donec ac odio
        </Text>
      </Container>

      <Advantages className={styles.Advantages} />
      <MoreInfo />
      <Achievements className={styles.Achievements} />
      <VersionList className={styles.Versions} />
    </SidePage>
  );
};

export default AboutPage;
