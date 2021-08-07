import queryString from "query-string";
import { rest } from "msw";
import { introItems } from "./introItems";
import { itemsTabsHeaders } from "./itemsTabsHeaders";
import { itemsTabsContent } from "./itemsTabsContent";
import { limitedSaleItem } from "./limitedSaleItem";
import { productList } from "./productList";
import { topSaleList } from "./topSaleList";
import { shopCardList } from "./shopCardList";
import { shopCategories } from "./shopCategories";

export const handlers = [
  rest.get("/introitems", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(introItems));
  }),

  rest.get("/itemstabsheaders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(itemsTabsHeaders));
  }),

  rest.get("/itemstabscontent/:id", (req, res, ctx) => {
    const { id } = req.params;
    if (id) {
      let item = itemsTabsContent.find((el) => el.id == id);
      return res(ctx.status(200), ctx.json(item));
    } else {
      return res(ctx.status(200), ctx.json({}));
    }
  }),

  rest.get("/itemstabscontent/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),

  rest.get("/limitedsaleitem", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(limitedSaleItem));
  }),

  rest.get("/productlist", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productList));
  }),

  rest.get("/topsalelist", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(topSaleList));
  }),

  rest.get("/shopcardlist/", (req, res, ctx) => {
    const params = Object.entries(queryString.parse(req.url.search));
    let data = shopCardList;

    if (params.length) {
      data = shopCardList.filter((card) => {
        return params.every(([key, value]) => card[key] == value);
      });
    }

    return res(ctx.delay(1000), ctx.status(200), ctx.json(data));
  }),

  rest.get("/shopcategories", (req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(shopCategories));
  }),
];
