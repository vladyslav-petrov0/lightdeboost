import axios from "axios";
import queryString from "query-string";

export default class LightBoostService {
  getIntroItemList = async () => {
    return axios.get("/introitems");
  };

  getItemsTabsHeaders = async () => {
    return axios.get("/itemstabsheaders");
  };

  getItemsTabsContent = async (id) => {
    return axios.get(`/itemstabscontent/${id}`);
  };

  getLimitedSaleItem = async () => {
    return axios.get("/limitedsaleitem");
  };

  getProductList = async () => {
    return axios.get("/productlist");
  };

  getTopSaleList = async () => {
    return axios.get("/topsalelist");
  };

  getShopCategories = async () => {
    return axios.get("/shopcategories");
  };

  getShopProducts = async (filter) => {
    const params = Object.entries(filter).filter((el) => el[0] !== "page");
    const paramsUrl = `/?${queryString.stringify(Object.fromEntries(params))}`;

    return axios.get(`/shopcardlist${paramsUrl}`);
  };
}
