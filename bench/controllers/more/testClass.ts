import { Context } from "koa";
import { api, controller, HttpMethod } from "../../../index";

@controller("/tt2")
export class TT2 {

    @api("/")
    public home(ctx: Context) {
        ctx.status = 200;
        ctx.body = "index page";
    }

    @api(undefined, HttpMethod.GET | HttpMethod.POST)
    public ok(ctx: Context) {
        ctx.status = 200;
        ctx.body = "hello world 1";
    }

    @api()
    public newtest(ctx: Context) {
        ctx.status = 200;
        ctx.body = "new test";
    }

    @api("/ok2222", HttpMethod.BASIC)
    public ok2(ctx: Context) {
        ctx.status = 200;
        ctx.body = "hello world 2";
    }
}
