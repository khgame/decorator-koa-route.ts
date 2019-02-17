"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.home = function (ctx) {
        ctx.status = 200;
        ctx.body = "index page";
    };
    UserController.prototype.ok = function (ctx) {
        ctx.status = 200;
        ctx.body = "hello world 1";
    };
    UserController.prototype.newtest = function (ctx) {
        ctx.status = 200;
        ctx.body = "new test";
    };
    UserController.prototype.ok2 = function (ctx) {
        ctx.status = 200;
        ctx.body = "hello world 2";
    };
    __decorate([
        index_1.api("/"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "home", null);
    __decorate([
        index_1.api(undefined, index_1.HttpMethod.GET | index_1.HttpMethod.POST),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "ok", null);
    __decorate([
        index_1.api(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "newtest", null);
    __decorate([
        index_1.api("/ok2222", index_1.HttpMethod.BASIC),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "ok2", null);
    UserController = __decorate([
        index_1.controller("/user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=testClass.js.map