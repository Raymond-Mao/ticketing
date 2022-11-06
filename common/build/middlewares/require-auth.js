"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireAuth = void 0;
const errors_1 = require("../errors");
const RequireAuth = (req, res, next) => {
    if (!req.currentUser) {
        throw new errors_1.NotAuthorizedError();
    }
    next();
};
exports.RequireAuth = RequireAuth;
