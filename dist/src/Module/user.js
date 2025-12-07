import mongoose, { Schema } from 'mongoose';
import timeStamp from 'mongoose-timestamp';
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true, default: false },
});
userSchema.plugin(timeStamp);
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=user.js.map