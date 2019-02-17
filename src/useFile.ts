import * as fs from "fs-extra";

export function useController(... ids: string[]) {
    return ids.map((id) => require(id));
}

export function useFolder(dir: string, recursive: boolean = false): any {
    return fs.readdirSync(dir)
        .map((f) => `${dir}/${f}`)
        .filter((path) => path.endsWith(".js") || fs.statSync(path).isDirectory())
        .map((path) => fs.statSync(path).isDirectory() ?
            (recursive ? useFolder(path, recursive) : []) :
            useController(path));
}
