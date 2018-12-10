const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: { type: String },
  name: { type: String },
  images: { type: Array },
  category: { type: String },
  price: { type: Number },
  discount_percentage: { type: Number }
});

export const Products = mongoose.model("Products", productSchema);

const productsImages = [
  "https://assets.xtechcommerce.com/uploads/images/medium/fdcf9c1ec6aad047b355859421f8d0c8.jpg",
  "https://www.casasofia.com.br/cdn/imagens/produtos/det/lencol-avulso-solteiro-teka-b03f28bd44271ebedff353aee53c002d.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MGqjpoSleMNIotPP11zVQvGu-BwLlAghHkUlCftuMmIYc-YNeA",
  "https://www.casasofia.com.br/cdn/imagens/produtos/det/lencol-avulso-cotton-sisa-ddce91e96c12ba6095e1a208e5e15a0d.jpg"
];

const productsCategories = [
  "Classic 1",
  "Classic 2",
  "Classic 15",
  "Classic 22"
];

const discounts = Array.from({ length: 5 }, (v, k) => k * 5);

const prices = [3000, 2000, 1500, 6000]; // in centavos

export const getRandomCategories = () =>
  productsCategories[Math.floor(Math.random() * productsCategories.length) + 0];

export const getRandomPrice = () =>
  prices[Math.floor(Math.random() * prices.length) + 0];

export const getRandomDiscounts = () =>
  discounts[Math.floor(Math.random() * discounts.length) + 0];

export const shuffleImages = () => {
  const modifiedArray = productsImages;
  for (var i = productsImages.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = modifiedArray[i];
    modifiedArray[i] = modifiedArray[j];
    modifiedArray[j] = temp;
  }
  return modifiedArray;
};
