import express, { Router } from 'express';
import authRouter from './auth/index.js';
import userRouter from './user/index.js';
import adminRouter from './admin/index.js';
import errorHandler from './../Middelwares/error.js';
import { isLoggined, isAdmin } from './../Middelwares/auth.js';

const router: Router = express.Router();

router.use('/auth', authRouter);

router.use('/user', isLoggined, userRouter);

router.use('/admin', isLoggined, isAdmin, adminRouter);

router.use(errorHandler);

export default router;
