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
    if (!filter["page"]) {
      filter["page"] = 1;
    }

    const paramsUrl = `/?${queryString.stringify(filter)}`;
    return axios.get(`/shopcardlist${paramsUrl}`);
  };

  getProductById = async (id) => axios.get(`/products?id=${id}`);
}
