import React from "react";
import PropTypes from "prop-types";

import Review from "../../../Review/Review";
import ReviewsForm from "./Form/Form";

import styles from "./Reviews.module.scss";

const Reviews = ({ data }) => {
  return (
    <div className={styles.Reviews}>
      <ReviewsForm />

      {data.map(({ id, ...props }) => {
        return <Review key={id} {...props} />;
      })}
    </div>
  );
};

Reviews.propTypes = {};

export default Reviews;
