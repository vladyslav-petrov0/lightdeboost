import React from "react";

import Container from "../UI/Container/Container";
import Title from "../Title/Title";
import Text from "../UI/Text/Text";

import styles from "./MoreInfo.module.scss";

const MoreInfo = () => {
  return (
    <div className={styles.Wrapper}>
      <Container>
        <Title size="lg" className={styles.Title}>
          More info
        </Title>
        <div className={styles.TextWrapper}>
          <Text className={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio
          </Text>

          <Text className={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa vitae tortor condimentum lacinia quis vel eros
            donec ac odio
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default MoreInfo;
