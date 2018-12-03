import { Products } from "./products";

export default class Methods {
  static getAll(): Promise<any[]> {
    return Products.find();
  }

  static getById(_id: string): Promise<any> {
    const product = Products.findOne({ _id });
    return Promise.resolve(product);
  }
}
