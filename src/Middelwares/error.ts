import type { Request, Response, NextFunction } from 'express';
import winston from 'winston';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  winston.error(err.message, err);

  const status = (err as any).status || 500;
  const message =
    process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message;

  res.status(status).json({
    success: false,
    message,
  });
}
