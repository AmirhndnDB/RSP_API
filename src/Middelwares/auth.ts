import type { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User, { IUser } from './../Module/user.js';
import { CustomRequest } from '../Routes/controller.js';


dotenv.config();

export async function isLoggined(
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const token = req.header('x-auth-token');
  if (!token) {
    res.status(401).send('access denied');
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { _id: string };
    const user = await User.findById(decoded._id);
    if(!user) {
      res.status(404).send('user not found');
      return;
    }
    req.user = user as IUser;
    next();
  } catch (ex) {
    res.status(400).send('invalid token');
  }
}
