"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogService {
    static log(...arg) {
        // tslint:disable-next-line:no-console
        console.log(...arg);
    }
    static error(...arg) {
        // tslint:disable-next-line:no-console
        console.error(...arg);
    }
}
exports.default = LogService;
//# sourceMappingURL=log.js.map