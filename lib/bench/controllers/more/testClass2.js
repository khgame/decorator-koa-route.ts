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
var index_1 = require("../../../src/index");
var TT3 = (function () {
    function TT3() {
    }
    TT3.prototype.ok = function (ctx) {
        ctx.status = 200;
        ctx.body = "hello world 1";
    };
    TT3.prototype.newtest = function (ctx) {
        ctx.status = 200;
        ctx.body = "new test";
    };
    TT3.prototype.ok2 = function (ctx) {
        ctx.status = 200;
        ctx.body = "hello world 2";
    };
    __decorate([
        index_1.api(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TT3.prototype, "ok", null);
    __decorate([
        index_1.api(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TT3.prototype, "newtest", null);
    __decorate([
        index_1.api("ok2222", index_1.HttpMethod.BASIC),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TT3.prototype, "ok2", null);
    TT3 = __decorate([
        index_1.controller("/tt3")
    ], TT3);
    return TT3;
}());
//# sourceMappingURL=testClass2.js.map