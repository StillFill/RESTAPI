import * as restify from "restify";
import { envinronment } from "../common/environment";
import { Router } from "../common/router";

export class Server {
  application: restify.Server;
  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: "projeto-ammo-varejo",
          version: "1.0.0"
        });

        this.application.use(restify.plugins.queryParser());

        routers.map(router => router.applyRoutes(this.application));

        this.application.listen(envinronment.server.port, () => {
          resolve(this.application);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initRoutes(routers).then(() => this);
  }
}