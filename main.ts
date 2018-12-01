import { Server } from "./server/server";
import { productsRouter } from "./models/products/router";

const server = new Server();
server
  .bootstrap([productsRouter])
  .then(server => {
    console.log("Server is listening on: ", server.application.address());
  })
  .catch(err => {
    console.log("Server failed");
    console.log(err);
    process.exit(1);
  });
