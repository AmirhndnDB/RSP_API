import type { Request, Response, NextFunction } from 'express';
import { IUser } from './../Module/user.js';
export interface CustomRequest extends Request {
    user?: IUser;
}
export interface ResponsePayload {
    message?: string;
    data?: unknown;
}
export default class Controller {
    protected User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, any>;
    constructor();
    validationBody(req: Request, res: Response): boolean;
    validate(req: Request, res: Response, next: NextFunction): void;
    response(res: Response, message?: string, code?: number, data?: unknown): void;
}
//# sourceMappingURL=controller.d.ts.map