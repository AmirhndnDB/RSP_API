import mongoose from 'mongoose';
import debug from 'debug';
import config from 'config';
const dbg = debug('app:main');
export default async function dbStartup() {
    try {
        await mongoose.connect(config.get('db.address'));
        dbg('connected to mongo db');
    }
    catch (error) {
        dbg('could not connect to db', error);
        process.exit(1);
    }
}
//# sourceMappingURL=db.js.map