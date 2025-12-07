import express from 'express';
import authRouter from './auth/index.js';
import errorHandler from './../Middelwares/error.js';
const router = express.Router();
router.use('/auth', authRouter);
router.use(errorHandler);
export default router;
//# sourceMappingURL=index.js.map