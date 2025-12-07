import { check, ValidationChain } from 'express-validator';
import autoBind from 'auto-bind';

export default class AuthValidator {
  constructor() {
    autoBind(this);
  }

  registerValidator(): ValidationChain[] {
    return [
      check('email').isEmail().withMessage('email is invalid'),
      check('name').not().isEmpty().withMessage('name cant be Empty'),
      check('password').not().isEmpty().withMessage('password cant be Empty'),
    ];
  }

  loginValidator(): ValidationChain[] {
    return [
      check('email').isEmail().withMessage('email is invalid'),
      check('password').not().isEmpty().withMessage('password cant be Empty'),
    ];
  }
}

export const validator = new AuthValidator();
