"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
const mongoose = require("mongoose");
const config = require("../config");
const Model = require("../models/products/products.js");
class Server {
  initRoutes(routers) {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: "projeto-ammo-varejo",
          version: "1.0.0"
        });
        this.application.use(restify.plugins.queryParser());
        routers.map(router => router.applyRoutes(this.application));
        this.application.listen(environment_1.envinronment.server.port, () => {
          console.log("-------------");
          console.log(config.db.uri);
          console.log("-------------");
          mongoose.connect(config.db.uri);
          const db = mongoose.connection;
          db.on("error", err => {
            console.error(err);
            process.exit(1);
          });
          db.once("open", () => {
            try {
              Model.Products.deleteMany({}, () => {
                for (let i = 0; i < 20; i++) {
                  const prod = new Model.Products({
                    _id: new mongoose.mongo.ObjectId(),
                    images: Model.shuffleImages(),
                    name: `Lençol ${Math.floor(Math.random() * 20) + 1}`,
                    category: Model.getRandomCategories(),
                    price: Model.getRandomPrice(),
                    discount_percentage: 30
                  });
                  prod.save();
                }
              });
            } catch (err) {
              console.log(err);
            }
            console.log(`Server is listening on port ${config.port}`);
          });
          resolve(this.application);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  bootstrap(routers = []) {
    return this.initRoutes(routers).then(() => this);
  }
}
exports.Server = Server;
