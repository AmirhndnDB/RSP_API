import type { Response } from 'express';
import Controller, { CustomRequest } from './../controller.js';
import dotenv from 'dotenv';
import _ from 'lodash';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const jwtkey = process.env.JWT_SECRET || 'secret';

export default class AuthController extends Controller {
  async register(req: CustomRequest, res: Response): Promise<void> {
    const  isExist = await this.User.exists({ email: req.body.email });
    if (isExist) {
     return this.response(res, 'this user already registered', 400);
    }

   let user = new this.User(_.pick(req.body, ['name', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    this.response(res, 'the user successfully registered', 200, _.pick(user, ['_id', 'name', 'email']));
  }

  async login(req: CustomRequest, res: Response): Promise<void> {
    const user = await this.User.findOne({ email: req.body.email });
    if (!user) {
      this.response(res, 'invalid email or password', 400);
      return;
    }
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
      this.response(res, 'invalid email or password', 400);
      return;
    }
    const token = jwt.sign({ _id: user.id }, jwtkey,{expiresIn:'14d'});
    this.response(res, 'successfully logged in', 200, { token });
  }
}

export const authController = new AuthController();
