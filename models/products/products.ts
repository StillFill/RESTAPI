const products = [
  {
    _id: '1',
    images: ["123", "234", "456", "789"],
    name: "Produto 1",
    category: "sheets",
    price: 3000,
    discount_percentage: 30
  },
  {
    _id: '2',
    images: ["dsa13", "dsada12312", "132dasasd", "321312dsdsa"],
    name: "Produto 1",
    category: "sheets",
    price: 2000,
    discount_percentage: 15
  }
];

export default class Products {
    static getAll(): Promise<any[]> {
        return Promise.resolve(products);
    }

    static getById(_id: string): Promise<any> {
      const product = products.find(prod => prod._id === _id);
      return Promise.resolve(product);
    }
}