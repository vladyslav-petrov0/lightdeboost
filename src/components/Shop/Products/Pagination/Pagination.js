import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import queryString from "query-string";
import styles from "./Pagination.module.scss";

import ReactPaginate from "react-paginate";
import arrow from "./img/arrow.svg";

import { ShopContext } from "../../../context/ShopContext";
import { useMediaQuery } from "react-responsive";

const checkPageParamForErrors = (maxLength, currentPage) => {
  return maxLength && (currentPage > maxLength || currentPage < 1);
};

const getRedirectUrl = (filter) => {
  const searchParams = { ...filter };
  searchParams["page"] = 1;
  return `/shop/?${queryString.stringify(searchParams)}`;
};

const ShopProductsPagination = ({ count }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 610px)" });
  const history = useHistory();

  const { filter } = useContext(ShopContext);
  const { page } = filter;

  const pageCountError = checkPageParamForErrors(count, filter.page);
  if (pageCountError) {
    const redirectUrl = getRedirectUrl(filter);
    return <Redirect to={redirectUrl} />;
  }

  const onPageChange = ({ selected }) => {
    const url = queryString.stringify({ ...filter, page: +selected + 1 });
    history.push(`/shop/?${url}`);
  };

  if (!count) {
    return null;
  }

  return (
    <ReactPaginate
      containerClassName={styles.Pagination}
      pageCount={count}
      pageRangeDisplayed={isMobile ? 3 : 2}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      forcePage={page - 1}
      disableInitialCallback
      activeClassName="active"
      breakClassName={styles.Break}
      nextLabel={<img src={arrow} alt="" className={styles.Arrow} />}
      previousLabel={
        <img src={arrow} alt="" className={cn(styles.Arrow, styles.Prev)} />
      }
    />
  );
};

ShopProductsPagination.propTypes = {
  count: PropTypes.number.isRequired,
};

ShopProductsPagination.defaultProps = {
  count: 0,
};

export default ShopProductsPagination;
