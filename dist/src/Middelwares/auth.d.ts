import type { Response, NextFunction } from 'express';
import { CustomRequest } from '../Routes/controller.js';
export declare function isLoggined(req: CustomRequest, res: Response, next: NextFunction): Promise<void>;
export declare function isAdmin(req: CustomRequest, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=auth.d.ts.map