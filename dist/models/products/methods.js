"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model = require('./products');
class Methods {
    static getAll() {
        return Model.Products.find();
    }
    static getById(_id) {
        const product = Model.Products.findOne({ _id });
        return Promise.resolve(product);
    }
}
exports.default = Methods;
