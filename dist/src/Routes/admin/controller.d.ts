import type { Response } from 'express';
import Controller, { CustomRequest } from '../controller.js';
export default class AdminController extends Controller {
    dashboard(req: CustomRequest, res: Response): Promise<void>;
}
export declare const adminController: AdminController;
//# sourceMappingURL=controller.d.ts.map