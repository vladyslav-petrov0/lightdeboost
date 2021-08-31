import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Button from "../../../../UI/Button/Button";

import styles from "./Form.module.scss";
import StarRating from "../../../../UI/StarRating/StarRating";
import { useForm } from "../../../../customHooks";

const ReviewsForm = () => {
  const { register, fields } = useForm();
  const [isShowed, setIsShowed] = useState(false);

  const onHandleShowBtn = () => setIsShowed((prev) => !prev);

  return (
    <>
      <Button
        className={cn(styles.Btn, styles.ShowBtn)}
        onClick={onHandleShowBtn}
      >
        {isShowed ? "Hide" : "Leave a review"}
      </Button>

      {isShowed && (
        <form className={styles.Form}>
          <label>
            <span>Your name:</span>
            <input {...register("name")} />
          </label>

          <label>
            <span>Your comment:</span>
            <input {...register("comment")} />
          </label>

          <label className={styles.RatingWrapper}>
            <span>Your rating:</span>
            <StarRating {...register("rating")} />
          </label>

          <Button className={cn(styles.Btn, styles.SubmitBtn)}>Send</Button>
        </form>
      )}
    </>
  );
};

ReviewsForm.propTypes = {};

export default ReviewsForm;
