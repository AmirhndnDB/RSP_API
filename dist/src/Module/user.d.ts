import { Document, Model } from 'mongoose';
export interface IUser extends Document {
    email: string;
    name: string;
    password: string;
    isadmin: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const User: Model<IUser>;
export default User;
//# sourceMappingURL=user.d.ts.map