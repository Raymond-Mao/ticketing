"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const _1 = require(".");
class NotFoundError extends _1.CustomError {
    constructor() {
        super("not found");
        this.statusCode = 404;
    }
    serializeErrors() {
        return [
            {
                message: "not found",
            },
        ];
    }
}
exports.NotFoundError = NotFoundError;
