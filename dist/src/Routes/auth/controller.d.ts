import type { Response } from 'express';
import Controller, { CustomRequest } from './../controller.js';
export default class AuthController extends Controller {
    register(req: CustomRequest, res: Response): Promise<void>;
    login(req: CustomRequest, res: Response): Promise<void>;
}
export declare const authController: AuthController;
//# sourceMappingURL=controller.d.ts.map