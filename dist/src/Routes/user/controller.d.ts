import type { Response } from 'express';
import Controller, { CustomRequest } from '../controller.js';
export default class UserController extends Controller {
    dashboard(req: CustomRequest, res: Response): Promise<void>;
    me(req: CustomRequest, res: Response): Promise<void>;
}
export declare const userController: UserController;
//# sourceMappingURL=controller.d.ts.map