import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from './../Module/user.js';
dotenv.config();
export async function isLoggined(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        res.status(401).send('access denied');
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        const user = await User.findById(decoded._id);
        if (!user) {
            res.status(404).send('user not found');
            return;
        }
        req.user = user;
        next();
    }
    catch (ex) {
        res.status(400).send('invalid token');
    }
}
//# sourceMappingURL=auth.js.map