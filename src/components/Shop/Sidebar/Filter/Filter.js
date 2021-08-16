import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

import Button from "../../../Button/Button";
import Modal from "../../../UI/Modal/Modal";
import CloseButton from "../../../UI/CloseButton/CloseButton";

import filterIcon from "./filter.svg";

const SidebarFilter = ({ body }) => {
  const [isShowed, setShowed] = useState(false);

  const onHandleModal = () => setShowed((prevState) => !prevState);
  const onCloseModal = () => setShowed(false);

  return (
    <>
      <Button className={styles.Btn} onClick={onHandleModal}>
        <img src={filterIcon} alt="" /> Filter
      </Button>

      <Modal
        isActive={isShowed}
        className={styles.Modal}
        activeClassName={styles.showed}
        onCloseModal={onCloseModal}
      >
        <CloseButton onClose={onCloseModal} className={styles.CloseBtn} />
        {body}
      </Modal>
    </>
  );
};

SidebarFilter.propTypes = {
  body: PropTypes.node.isRequired,
};

SidebarFilter.defaultProps = {
  body: null,
};

export default SidebarFilter;
