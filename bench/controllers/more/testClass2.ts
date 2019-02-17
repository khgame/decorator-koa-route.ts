import { Context } from "koa";
import { api, controller, HttpMethod } from "../../../src/index";

@controller("/tt3")
class TT3 {

    @api()
    public ok(ctx: Context) {
        ctx.status = 200;
        ctx.body = "hello world 1";
    }

    @api()
    public newtest(ctx: Context) {
        ctx.status = 200;
        ctx.body = "new test";
    }

    @api("ok2222", HttpMethod.BASIC)
    public ok2(ctx: Context) {
        ctx.status = 200;
        ctx.body = "hello world 2";
    }
}
