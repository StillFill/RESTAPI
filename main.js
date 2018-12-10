"use strict";
exports.__esModule = true;
var server_1 = require("./server/server");
var router_1 = require("./models/products/router");
var server = new server_1.Server();
server
    .bootstrap([router_1.productsRouter])
    .then(function (server) {
    console.log("Server is listening on: ", server.application.address());
})["catch"](function (err) {
    console.log("Server failed");
    console.log(err);
    process.exit(1);
});
