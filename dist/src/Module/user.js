import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    isadmin: { type: Boolean, required: true, default: false },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;
//# sourceMappingURL=user.js.map