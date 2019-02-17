"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 1] = "GET";
    HttpMethod[HttpMethod["POST"] = 2] = "POST";
    HttpMethod[HttpMethod["PUT"] = 4] = "PUT";
    HttpMethod[HttpMethod["DELETE"] = 8] = "DELETE";
    HttpMethod[HttpMethod["HEAD"] = 16] = "HEAD";
    HttpMethod[HttpMethod["OPTIONS"] = 32] = "OPTIONS";
    HttpMethod[HttpMethod["PATCH"] = 64] = "PATCH";
    HttpMethod[HttpMethod["BASIC"] = 3] = "BASIC";
    HttpMethod[HttpMethod["ALL"] = 127] = "ALL";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
//# sourceMappingURL=constants.js.map