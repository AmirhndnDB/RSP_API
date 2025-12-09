import express, { Router } from 'express';
import authRouter from './auth/index.js';
import errorHandler from './../Middelwares/error.js';
import notFoundHandler from './../Middelwares/notFound.js';

const router: Router = express.Router();

router.use('/auth', authRouter);

// 404 handler
router.use(notFoundHandler)

//global error handler 
router.use(errorHandler);

export default router;
