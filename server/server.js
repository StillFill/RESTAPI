"use strict";
exports.__esModule = true;
var restify = require("restify");
var environment_1 = require("../common/environment");
var mongoose = require("mongoose");
var config = require("../config");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initRoutes = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.application = restify.createServer({
                    name: "projeto-ammo-varejo",
                    version: "1.0.0"
                });
                _this.application.use(restify.plugins.queryParser());
                routers.map(function (router) { return router.applyRoutes(_this.application); });
                _this.application.listen(environment_1.envinronment.server.port, function () {
                    console.log('-------------');
                    console.log(config.db.uri);
                    console.log('-------------');
                    mongoose.connect(config.db.uri);
                    var db = mongoose.connection;
                    db.on("error", function (err) {
                        console.error(err);
                        process.exit(1);
                    });
                    db.once("open", function () {
                        console.log("Server is listening on port " + config.port);
                    });
                    resolve(_this.application);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    };
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initRoutes(routers).then(function () { return _this; });
    };
    return Server;
}());
exports.Server = Server;
