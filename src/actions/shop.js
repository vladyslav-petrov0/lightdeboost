import { BasicActions } from "../utils/classes/basicActions";

const categories = new BasicActions("SHOP-CATEGORIES_FETCH");

export const fetchCategories = (service) => () => (dispatch) => {
  dispatch(categories.request());
  service
    .getShopCategories()
    .then((res) => res.json())
    .then((data) => dispatch(categories.loaded(data)))
    .catch((error) => dispatch(categories.error(error)));
};

const products = new BasicActions("SHOP-PRODUCTS_FETCH");

export const fetchProducts = (service) => () => (dispatch) => {
  dispatch(products.request());
  service
    .getShopProducts()
    .then((res) => res.json())
    .then((data) => dispatch(products.loaded(data)))
    .catch((error) => dispatch(products.error(error)));
};

export const applyFilter = (sortCategory, sortValue) => {
  return {
    type: "SHOP-PRODUCTS_FILTER_APPLY",
    payload: { sortCategory, sortValue },
  };
};
