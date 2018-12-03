"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
class Methods {
    static getAll() {
        return products_1.Products.find();
    }
    static getById(_id) {
        const product = products_1.Products.findOne({ _id });
        return Promise.resolve(product);
    }
}
exports.default = Methods;
