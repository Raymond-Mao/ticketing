"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseConnectionError extends custom_error_1.CustomError {
    constructor() {
        super("error connect db");
        this.statusCode = 500;
        this.reason = "Error connecting to databse";
    }
    serializeErrors() {
        return [
            {
                message: this.reason,
            },
        ];
    }
}
exports.DatabaseConnectionError = DatabaseConnectionError;
