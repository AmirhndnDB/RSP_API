import Controller from '../controller.js';
export default class AdminController extends Controller {
    async dashboard(req, res) {
        res.send('admin dashboard');
    }
}
export const adminController = new AdminController();
//# sourceMappingURL=controller.js.map