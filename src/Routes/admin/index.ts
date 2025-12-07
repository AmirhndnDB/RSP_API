import express, { Router } from 'express';
import { adminController } from './controller.js';

const router: Router = express.Router();

router.get('/', (req, res) => adminController.dashboard(req, res));

export default router;
