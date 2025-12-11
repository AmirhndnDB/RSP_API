import { check } from 'express-validator';
import autoBind from 'auto-bind';
export default class AuthValidator {
    constructor() {
        autoBind(this);
    }
    registerValidator() {
        return [
            check('name').trim().notEmpty().withMessage('name cannot be empty'),
            check('email').trim().isEmail().withMessage('email is invalid'),
            check('password').trim().notEmpty().isLength({ min: 6 }).withMessage('password must be at least 6 characters long')
        ];
    }
    loginValidator() {
        return [
            check('email').trim().isEmail().withMessage('email is invalid'),
            check('password').trim().notEmpty().withMessage('password cannot be empty'),
        ];
    }
}
export const validator = new AuthValidator();
//# sourceMappingURL=validator.js.map