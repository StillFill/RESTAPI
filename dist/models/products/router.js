"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../common/router");
const products_1 = require("./products");
class ProductsRouter extends router_1.Router {
    applyRoutes(application) {
        application.get("/get-products", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const products = yield products_1.Products.find();
            res.header("Access-Control-Allow-Origin", "*");
            return res.send(200, { response: products });
        }));
    }
}
exports.productsRouter = new ProductsRouter();
