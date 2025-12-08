import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  isadmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  isadmin: { type: Boolean, required: true, default: false },
},{timestamps:true});


const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
