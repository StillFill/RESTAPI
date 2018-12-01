import * as restify from "restify";
import { Router } from "../../common/router";
import Products from "../products/products";

class ProductsRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get("/get-products", async (req, res, next) => {
      const products = await Products.getAll();
      res.json({ products });
      return next();
    });
  }
}

export const productsRouter = new ProductsRouter();
