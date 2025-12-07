import express from 'express';
import { adminController } from './controller.js';
const router = express.Router();
router.get('/', (req, res) => adminController.dashboard(req, res));
export default router;
//# sourceMappingURL=index.js.map