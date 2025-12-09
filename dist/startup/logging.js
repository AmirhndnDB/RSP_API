import winston from 'winston';
import debug from 'debug';
const dbg = debug('app:main');
export const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logfile.log' })
    ]
});
export default function loggingStartup() {
    process.on('uncaughtException', (ex) => {
        dbg(ex);
        logger.error(ex.message, ex);
        process.exit(1);
    });
    process.on('unhandledRejection', (ex) => {
        dbg(ex);
        const error = ex instanceof Error ? ex : new Error(String(ex));
        logger.error(error.message, error);
        process.exit(1);
    });
}
//# sourceMappingURL=logging.js.map