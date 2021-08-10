import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";

import styles from "./Pagination.module.scss";
import Button from "../../../Button/Button";
import Switcher from "../../../Switcher/Switcher";

const ShopProductsPagination = ({ count }) => {
  const { filter } = useContext(ShopContext);
  const { page } = filter;
  const history = useHistory();

  if (count < 2) {
    return null;
  }

  const pages = [];
  let curr = +page;

  if (page - 1 != 1 && page - 1 != 0) {
    pages.push(1);
  }

  for (let i = curr - 1; i <= +curr + 1; i++) {
    if (!i) {
      curr += 1;
    }

    pages.push(i);
  }

  pages[4] = +page + 2 != count ? "..." : undefined;
  pages[5] = count;

  console.log(pages);

  return (
    <div className={styles.Pagination}>
      {pages.map((el) => {
        if (!el) {
          return null;
        }

        const onChangePage = () => {
          const url = queryString.stringify({ ...filter, page: el });
          history.push(`/shop/?${url}`);
        };

        return (
          <Switcher isActive={el === +page}>
            <Button onClick={onChangePage} className={styles.Btn}>
              {el}
            </Button>
          </Switcher>
        );
      })}
    </div>
  );
};

ShopProductsPagination.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ShopProductsPagination;
