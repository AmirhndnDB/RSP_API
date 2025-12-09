import { logger } from '../../startup/logging.js';
export default function errorHandler(err, req, res, next) {
    logger.error(err.message, err);
    const status = err.status || 500;
    const message = process.env.NODE_ENV === 'production'
        ? 'Internal Server Error'
        : err.message;
    res.status(status).json({
        success: false,
        message,
    });
}
//# sourceMappingURL=error.js.map