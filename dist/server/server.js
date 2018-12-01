"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
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
                    resolve(this.application);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    bootstrap(routers = []) {
        return this.initRoutes(routers).then(() => this);
    }
}
exports.Server = Server;
