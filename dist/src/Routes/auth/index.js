import express from 'express';
import { authController } from './controller.js';
import { validator } from './validator.js';
const router = express.Router();
router.post('/register', ...validator.registerValidator(), (req, res, next) => authController.validate(req, res, next), (req, res) => authController.register(req, res));
router.post('/login', ...validator.loginValidator(), (req, res, next) => authController.validate(req, res, next), (req, res) => authController.login(req, res));
export default router;
//# sourceMappingURL=index.js.map