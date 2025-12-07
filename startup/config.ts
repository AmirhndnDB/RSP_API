import type { Express } from 'express';

export default function configStartup(app: Express, express: typeof import('express')): void {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
}
