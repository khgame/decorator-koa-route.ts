# decorator-koa-router.ts

decorator of koa route

## Usage

### install

`npm i --save @khgame/decorator-koa-router`   
or
`yarn add @khgame/decorator-koa-router`

### in code

> To use this lib with typescripts, option experimentalDecorators should be enabled in the tsconfig.json

1. import methods api, controller and constant HttpMethod
```js
import { api, controller, HttpMethod } from "@khgame/decorator-koa-router"
```
2. decorate `@controller` for your controller class and `@api` for your method
```js
@controller("user")
export class userController {
    @api("get_user")
    getUser(ctx){
    }
}
```
3. register them in your service entrance
```js
import { router, useController } from "@khgame/decorator-koa-router";
useController(`${__dirname}/your_controller_file`)
router.prefix("/api"); // is you want a api prefix
app.use(router.routes()).use(router.allowedMethods()); // the controller will registered automatically
````
if you are using index file to export all controllers, for example
```js
// controllers/index.ts or controllers/index.js
export * from './userController';
export * from './resController';
...
// service.js
import { router, useController } from "@khgame/decorator-koa-router";
useController(`${__dirname}/controllers`)
```
the only file need to apply `useController` is the index file
4. further more, you can use `useFolder` to load all controllers recursively in a folder
```js
// for folder structure:
// controllers/userController.ts
// controllers/resController.ts
// controllers/more/bookController.ts
import { router, useFolder } from "@khgame/decorator-koa-router";
useFolder(`${__dirname}/controllers`) // load: userController and resController
useFolder(`${__dirname}/controllers`, true) // recursice load: all controllers
```

### Detail of decorate

- `@controller(path: string, ...middleware: Middleware[])`  
    1. path are required
    2. must decorate to the class  
- `@api(path?: string, method?: HttpMethod, ...middleware: Middleware[])`    
    1. path are optioned, the slash "/" should be added manually  
        `@api("/show_me_the_money")`  
    2. when path are set as `undefined` or left empty, the api name is the methods name  
        `@api()`  
        `@api(undefined, HttpMethod.GET)`  
    3. using only one "/" to set path as the root of the controller
        `@api("/")`
    4. you can set method by bit operation, for example
        `api(path?: string, method?: HttpMethod, ...middleware: Middleware[])`
        
### More Example

see ./bench