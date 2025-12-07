import type { Response } from 'express';
import Controller, { CustomRequest } from '../controller.js';

export default class AdminController extends Controller {
  async dashboard(req: CustomRequest, res: Response): Promise<void> {
    res.send('admin dashboard');
  }
}

export const adminController = new AdminController();
