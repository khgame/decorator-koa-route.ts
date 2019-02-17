import { Middleware} from "koa";
import * as Router from "koa-router";
import { HttpMethod } from "./src/constants";

export * from "./src/constants";

const methodLst: Map<HttpMethod, any> = new  Map<HttpMethod, any>();
methodLst.set(HttpMethod.GET, Router.prototype.get);
methodLst.set(HttpMethod.POST, Router.prototype.post);
methodLst.set(HttpMethod.PUT, Router.prototype.put);
methodLst.set(HttpMethod.DELETE, Router.prototype.del);
methodLst.set(HttpMethod.HEAD, Router.prototype.head);
methodLst.set(HttpMethod.OPTIONS, Router.prototype.options);
methodLst.set(HttpMethod.PATCH, Router.prototype.patch);

export const router = new Router();

export function controller(path: string, ...middleware: Middleware[]) {
    // console.log("1 : ");
    return (target: any, key?: string | symbol, descriptor?: any): void => {
        // console.log("controller created : ", path, target.prototype.router);
        if (typeof target !== "function" || key !== undefined || descriptor !== undefined) { // instance 的情况
            console.error("controller error : the target 'controller' decorated must be a class.");
            return;
        }
        if (!target.prototype.router) {
            target.prototype.router = new Router();
        }
        if (middleware.length > 0) {
            target.prototype.router.use(...middleware);
        }
        // 注册
        // console.log("controller created : ", path); // , target.prototype.router);
        router.use(path, target.prototype.router.routes(), target.prototype.router.allowedMethods());
    };
}

export function api(path?: string, method?: HttpMethod, ...middleware: Middleware[]) {
    return (target: any, key?: string | symbol, descriptor?: any): void => {
        if (typeof target !== "object") {
                console.error("api error : the target 'api' decorated must be a function of instance.");
                return;
            }

        if (path === undefined) {
            path = "/" + (key as string);
        }

        if (!target.router) {
            target.router = new Router();
        }
        // console.log("Apply Path :", path, "of", method || HttpMethod.ALL);

        if (method === undefined || method === HttpMethod.ALL) {
            target.router.all(path, ...middleware, descriptor.value);
        } else {
            methodLst.forEach((cb, httpMethodKey) => {
                if (httpMethodKey & method) {
                    cb.apply(target.router, [path, ...middleware, descriptor.value]);
                }
            });
        }

    };
}

export * from "./src/useFile";
