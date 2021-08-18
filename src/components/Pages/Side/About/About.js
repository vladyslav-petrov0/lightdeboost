import React from "react";

import Container from "../../../Container/Container";
import SidePage from "../Side";
import Text from "../../../UI/Text/Text";
import Title from "../../../Title/Title";
import Advantages from "../../../Advantages/Advantages";
import MoreInfo from "../../../MoreInfo/MoreInfo";
import Achievements from "../../../Achievements/Achievements";

import icon1 from "./img/1.png";
import icon2 from "./img/2.png";
import icon3 from "./img/3.png";
import icon4 from "./img/4.png";
import icon5 from "./img/5.png";

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

      <div className={styles.IconsSection}>
        <Container>
          <Title size={"lg"} className={styles.IconsTitle}>
            WE ARE WORKING SINCE 2011
          </Title>

          <div className={styles.IconsWrapper}>
            <img src={icon1} className={styles.Icon} alt="" />
            <img src={icon2} className={styles.Icon} alt="" />
            <img src={icon3} className={styles.Icon} alt="" />
            <img src={icon4} className={styles.Icon} alt="" />
            <img src={icon5} className={styles.Icon} alt="" />
          </div>
        </Container>
      </div>
    </SidePage>
  );
};

export default AboutPage;
