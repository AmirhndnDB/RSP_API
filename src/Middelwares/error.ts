import type { Request, Response, NextFunction } from 'express';
import { logger } from '../../startup/logging.js';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  logger.error(err.message, err);

  const status = (err as any).status || 500;
  const message =
    process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : err.message;

  res.status(status).json({
    success: false,
    message,
  });
}
