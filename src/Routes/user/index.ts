import express, { Router } from 'express';
import { userController } from './controller.js';

const router: Router = express.Router();

router.get('/', (req, res) => userController.dashboard(req, res));

router.get('/me', (req, res) => userController.me(req, res));

export default router;
