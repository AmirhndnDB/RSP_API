import express, { Router } from 'express';
import authRouter from './auth/index.js';
import errorHandler from './../Middelwares/error.js';

const router: Router = express.Router();

router.use('/auth', authRouter);

router.use(errorHandler);

export default router;
