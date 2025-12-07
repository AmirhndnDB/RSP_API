import express, { Express } from 'express';
import dotenv from 'dotenv';
import router from './src/Routes/index.js';
import configStartup from './startup/config.js';
import dbStartup from './startup/db.js';
import loggingStartup from './startup/logging.js';

const app: Express = express();
dotenv.config();

// Initialize logging
loggingStartup();

// Initialize config
configStartup(app, express);

// Initialize database
dbStartup().catch((err) => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

// Use routes
app.use('/api', router);

const port: number = parseInt(process.env.PORT || '3000', 10);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
