import winston from 'winston';
import debug from 'debug';

const dbg = debug('app:main');


export const logger = winston.createLogger({
  transports:[
    new winston.transports.File({filename:'logfile.log'})
  ]
});
export default function loggingStartup(): void {
  process.on('uncaughtException', (ex: Error) => {
    dbg(ex);
    logger.error(ex.message,ex);
  });

  process.on('unhandledRejection', (ex: unknown) => {
    dbg(ex);
    const error = ex instanceof Error ? ex : new Error(String(ex));
    logger.error(error.message, error);
  });
}
