import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../customHooks";

import styles from "./Review.module.scss";
import StarRating from "../UI/StarRating/StarRating";
import UserIcon from "../UI/UserIcon/UserIcon";
import Text from "../UI/Text/Text";

const Review = ({ userImg, author, rating, comment }) => {
  const { register, fields } = useForm();

  return (
    <div className={styles.Review}>
      <UserIcon className={styles.UserIcon} src={userImg} />

      <div className={styles.Details}>
        <span className={styles.Author}>{author}</span>
        <Text className={styles.Comment}>{comment}</Text>
        <StarRating className={styles.Rating} value={rating} disabled />
      </div>
    </div>
  );
};

Review.propTypes = {};

export default Review;
