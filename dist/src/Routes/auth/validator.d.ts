import { ValidationChain } from 'express-validator';
export default class AuthValidator {
    constructor();
    registerValidator(): ValidationChain[];
    loginValidator(): ValidationChain[];
}
export declare const validator: AuthValidator;
//# sourceMappingURL=validator.d.ts.map