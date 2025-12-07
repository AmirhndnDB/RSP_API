import express, { Router, Request, Response, NextFunction } from 'express';
import { authController } from './controller.js';
import { validator } from './validator.js';
import { CustomRequest } from '../controller.js';

const router: Router = express.Router();

router.post(
  '/register',
  ...validator.registerValidator(),
  (req: Request, res: Response, next: NextFunction) => authController.validate(req, res, next),
  (req: Request, res: Response) => authController.register(req as CustomRequest, res)
);

router.post(
  '/login',
  ...validator.loginValidator(),
  (req: Request, res: Response, next: NextFunction) => authController.validate(req, res, next),
  (req: Request, res: Response) => authController.login(req as CustomRequest, res)
);

export default router;
