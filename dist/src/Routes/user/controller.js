import Controller from '../controller.js';
import _ from 'lodash';
export default class UserController extends Controller {
    async dashboard(req, res) {
        res.send('user dashboard');
    }
    async me(req, res) {
        this.response(res, undefined, 200, _.pick(req.user, ['name', 'email']));
    }
}
export const userController = new UserController();
//# sourceMappingURL=controller.js.map