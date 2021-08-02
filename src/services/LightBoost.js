export default class LightBoostService {
  coreURL = "https://60fa787b7ae59c001716617a.mockapi.io/lightboost";
  secondURL = "https://60fabb3a7ae59c00171662c6.mockapi.io/lightdeboost/";

  getIntroItemList = async () => {
    return fetch(`${this.coreURL}/introitemlist`);
  };

  getItemsTabsHeaders = async () => {
    return fetch(`${this.coreURL}/itemtabsheaders`);
  };

  getItemsTabsContent = async (id) => {
    return fetch(`${this.coreURL}/itemtabscontent/${id}`);
  };

  getLimitedSaleItem = async () => {
    return fetch(`${this.coreURL}/limitedsaleitem`);
  };

  getProductList = async () => {
    return fetch(`${this.secondURL}/productlist`);
  };

  getTopSaleList = async () => {
    return fetch(`${this.secondURL}/topsalelist`);
  };

  getShopCategories = async () => {
    return fetch(`${this.secondURL}/shopcategories`);
  };

  getShopProducts = async () => {
    return fetch(`${this.secondURL}/shopcardlist`);
  };
}
