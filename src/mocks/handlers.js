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
import { divideArr } from "../utils/funcs/divideArr";

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
    const { page, ...params } = queryString.parse(req.url.search);
    let data = shopCardList;

    if (Object.keys(params).length) {
      data = shopCardList.filter((card) => {
        return Object.entries(params).every(
          ([key, value]) => card[key] == value
        );
      });
    }

    data = divideArr(data, 6);

    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({ length: data.length, products: data[page - 1] })
    );
  }),

  rest.get("/shopcategories", (req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(shopCategories));
  }),
];
