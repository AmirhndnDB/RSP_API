import autoBind from 'auto-bind';
import { validationResult } from 'express-validator';
import User from './../Module/user.js';
export default class Controller {
    constructor() {
        this.User = User;
        autoBind(this);
    }
    validationBody(req, res) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            const errors = result.array();
            const message = [];
            errors.forEach((err) => message.push(err.msg));
            res.status(400).json({
                message: 'validation error',
                data: message,
            });
            return false;
        }
        return true;
    }
    validate(req, res, next) {
        if (!this.validationBody(req, res)) {
            return;
        }
        next();
    }
    response(res, message, code = 200, data = {}) {
        res.status(code).json({
            message,
            data,
        });
    }
}
//# sourceMappingURL=controller.js.map