import { Middleware } from "koa";
import * as Router from "koa-router";
import { HttpMethod } from "./constants";
export * from "./constants";
export declare const router: Router<any, {}>;
export declare function controller(path: string, ...middleware: Middleware[]): (target: any, key?: string | symbol | undefined, descriptor?: any) => void;
export declare function api(path?: string, method?: HttpMethod, ...middleware: Middleware[]): (target: any, key?: string | symbol | undefined, descriptor?: any) => void;
export * from "./useFile";
