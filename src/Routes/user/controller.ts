import type { Response } from 'express';
import Controller, { CustomRequest } from '../controller.js';
import _ from 'lodash';

export default class UserController extends Controller {
  async dashboard(req: CustomRequest, res: Response): Promise<void> {
    res.send('user dashboard');
  }

  async me(req: CustomRequest, res: Response): Promise<void> {
    this.response(
      res,
      undefined,
      200,
      _.pick(req.user, ['name', 'email'])
    );
  }
}

export const userController = new UserController();
