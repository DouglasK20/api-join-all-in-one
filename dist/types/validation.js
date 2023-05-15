"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
function validate(Emprego) {
    const validation = (req, res, next) => {
        console.log(req.body);
        return next();
    };
    return validation;
}
exports.validate = validate;
