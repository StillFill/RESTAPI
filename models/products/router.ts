import * as restify from "restify";
import { Router } from "../../common/router";
import { Products } from "./products";

class ProductsRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/get-products", async (req, res, next) => {
      const products = await Products.find();
      res.header("Access-Control-Allow-Origin", "*");
      return res.send(200, { response: products });
    });
  }
}

export const productsRouter = new ProductsRouter();
