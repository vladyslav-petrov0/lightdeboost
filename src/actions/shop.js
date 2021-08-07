import { BasicActions } from "../utils/classes/basicActions";
import { makeFlexRequest } from "../utils/funcs/request";

const categories = new BasicActions("SHOP-CATEGORIES_FETCH");

export const fetchCategories = (service, dispatch) => {
  dispatch(categories.request());
  return makeFlexRequest(
    service.getShopCategories,
    (data) => dispatch(categories.loaded(data)),
    (error) => dispatch(categories.error(error))
  );
};

const products = new BasicActions("SHOP-PRODUCTS_FETCH");

export const fetchProducts = (service, filter, dispatch) => {
  dispatch(products.request());
  return makeFlexRequest(
    () => service.getShopProducts(filter),
    (data) => dispatch(products.loaded(data)),
    (error) => dispatch(products.error(error))
  );
};

export const cleanShop = () => {
  return {
    type: "SHOP_CLEAN",
  };
};

export const applyFilter = (obj) => {
  return {
    type: "SHOP-PRODUCTS_FILTER_APPLY",
    payload: obj,
  };
};
