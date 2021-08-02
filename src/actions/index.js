import { fetchIntroItemList, changeCurrentIntroId } from "./intro.js";
import { fetchCategories, applyFilter, fetchProducts } from "./shop.js";

export {
  fetchIntroItemList,
  changeCurrentIntroId,
  fetchCategories,
  applyFilter,
  fetchProducts,
};

export const burgerMenuUpdate = (state) => {
  return {
    type: "UPDATE_MENU-STATUS",
    payload: state,
  };
};
