const Model = require('./products');
export default class Methods {
  static getAll(): Promise<any[]> {
    return Model.Products.find();
  }

  static getById(_id: string): Promise<any> {
    const product = Model.Products.findOne({ _id });
    return Promise.resolve(product);
  }
}
