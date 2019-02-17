"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("koa-router");
var constants_1 = require("./constants");
__export(require("./constants"));
var methodLst = new Map();
methodLst.set(constants_1.HttpMethod.GET, Router.prototype.get);
methodLst.set(constants_1.HttpMethod.POST, Router.prototype.post);
methodLst.set(constants_1.HttpMethod.PUT, Router.prototype.put);
methodLst.set(constants_1.HttpMethod.DELETE, Router.prototype.del);
methodLst.set(constants_1.HttpMethod.HEAD, Router.prototype.head);
methodLst.set(constants_1.HttpMethod.OPTIONS, Router.prototype.options);
methodLst.set(constants_1.HttpMethod.PATCH, Router.prototype.patch);
exports.router = new Router();
function controller(path) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return function (target, key, descriptor) {
        var _a;
        if (typeof target !== "function" || key !== undefined || descriptor !== undefined) {
            console.error("controller error : the target 'controller' decorated must be a class.");
            return;
        }
        if (!target.prototype.router) {
            target.prototype.router = new Router();
        }
        if (middleware.length > 0) {
            (_a = target.prototype.router).use.apply(_a, middleware);
        }
        exports.router.use(path, target.prototype.router.routes(), target.prototype.router.allowedMethods());
    };
}
exports.controller = controller;
function api(path, method) {
    var middleware = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        middleware[_i - 2] = arguments[_i];
    }
    return function (target, key, descriptor) {
        var _a;
        if (typeof target !== "object") {
            console.error("api error : the target 'api' decorated must be a function of instance.");
            return;
        }
        if (path === undefined) {
            path = "/" + key;
        }
        if (!target.router) {
            target.router = new Router();
        }
        if (method === undefined || method === constants_1.HttpMethod.ALL) {
            (_a = target.router).all.apply(_a, [path].concat(middleware, [descriptor.value]));
        }
        else {
            methodLst.forEach(function (cb, httpMethodKey) {
                if (httpMethodKey & method) {
                    cb.apply(target.router, [path].concat(middleware, [descriptor.value]));
                }
            });
        }
    };
}
exports.api = api;
__export(require("./useFile"));
//# sourceMappingURL=index.js.map