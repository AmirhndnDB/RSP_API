import type { Request, Response, NextFunction } from 'express';
import autoBind from 'auto-bind';
import { validationResult } from 'express-validator';
import User, { IUser } from './../Module/user.js';

export interface CustomRequest extends Request {
  user?: IUser;
}

export interface ResponsePayload {
  message?: string;
  data?: unknown;
}

export default class Controller {
  protected User = User;

  constructor() {
    autoBind(this);
  }

  validationBody(req: Request, res: Response): boolean {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const message: string[] = [];
      errors.forEach((err) => message.push(err.msg));
      res.status(400).json({
        message: 'validation error',
        data: message,
      });
      return false;
    }
    return true;
  }

  validate(req: Request, res: Response, next: NextFunction): void {
    if (!this.validationBody(req, res)) return;
    return next();
  }

  response(
    res: Response,
    message?: string,
    code: number = 200,
    data: unknown = {}
  ): void {
    res.status(code).json({
      message,
      data,
    });
  }
}
