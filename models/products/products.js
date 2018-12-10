"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var productSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    images: { type: Array },
    category: { type: String },
    price: { type: Number },
    discount_percentage: { type: Number }
});
exports["default"] = mongoose.model("Products", productSchema);
var productsImages = [
    "https://assets.xtechcommerce.com/uploads/images/medium/fdcf9c1ec6aad047b355859421f8d0c8.jpg",
    "https://www.casasofia.com.br/cdn/imagens/produtos/det/lencol-avulso-solteiro-teka-b03f28bd44271ebedff353aee53c002d.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MGqjpoSleMNIotPP11zVQvGu-BwLlAghHkUlCftuMmIYc-YNeA",
    "https://www.casasofia.com.br/cdn/imagens/produtos/det/lencol-avulso-cotton-sisa-ddce91e96c12ba6095e1a208e5e15a0d.jpg"
];
var productsCategories = [
    "Classic 1",
    "Classic 2",
    "Classic 15",
    "Classic 22"
];
var discounts = Array.from({ length: 5 }, function (v, k) { return k * 5; });
var prices = [3000, 2000, 1500, 6000]; // in centavos
exports.getRandomCategories = function () {
    return productsCategories[Math.floor(Math.random() * productsCategories.length - 1) + 0];
};
exports.getRandomPrice = function () {
    return prices[Math.floor(Math.random() * prices.length - 2) + 0];
};
exports.getRandomDiscount = function () {
    return discounts[Math.floor(Math.random() * discounts.length - 1) + 0];
};
exports.shuffleImages = function () {
    var modifiedArray = productsImages;
    for (var i = productsImages.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = modifiedArray[i];
        modifiedArray[i] = modifiedArray[j];
        modifiedArray[j] = temp;
    }
    return modifiedArray;
};
