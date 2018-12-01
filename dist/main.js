"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const router_1 = require("./models/products/router");
const server = new server_1.Server();
server
    .bootstrap([router_1.productsRouter])
    .then(server => {
    console.log("Server is listening on: ", server.application.address());
})
    .catch(err => {
    console.log("Server failed");
    console.log(err);
    process.exit(1);
});
