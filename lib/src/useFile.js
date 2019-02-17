"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs-extra");
function useController() {
    var ids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ids[_i] = arguments[_i];
    }
    return ids.map(function (id) { return require(id); });
}
exports.useController = useController;
function useFolder(dir, recursive) {
    if (recursive === void 0) { recursive = false; }
    return fs.readdirSync(dir)
        .map(function (f) { return dir + "/" + f; })
        .filter(function (path) { return path.endsWith(".js") || fs.statSync(path).isDirectory(); })
        .map(function (path) { return fs.statSync(path).isDirectory() ?
        (recursive ? useFolder(path, recursive) : []) :
        useController(path); });
}
exports.useFolder = useFolder;
//# sourceMappingURL=useFile.js.map