import winston from 'winston';
import debug from 'debug';
const dbg = debug('app:main');
export default function loggingStartup() {
    process.on('uncaughtException', (ex) => {
        dbg(ex);
        winston.error(ex.message, ex);
        process.exit(1);
    });
    process.on('unhandledRejection', (ex) => {
        dbg(ex);
        const error = ex instanceof Error ? ex : new Error(String(ex));
        winston.error(error.message, error);
        process.exit(1);
    });
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
}
//# sourceMappingURL=logging.js.map