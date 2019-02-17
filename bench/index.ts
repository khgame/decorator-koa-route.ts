import * as Koa from "koa";
import * as Router from "koa-router";
import { router, useController, useFolder } from "../src";

// console.log("useFolder", useFolder(`${__dirname}/controllers`, true));

useController(`${__dirname}/controllers`)

const app = new Koa();

router.prefix("/api");
router.get("/", async (ctx) => { ctx.body = "home page "; });

app.use(router.routes()).use(router.allowedMethods());
const port: string = process.env.PORT || "8080";
app.listen(port);
console.log(`listen at http://localhost:${port}`);
