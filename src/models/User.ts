import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: String;
    year: Number;
    email: String;
    subjects: Array<String>;
    admin: Boolean;
    owner: Boolean;
    visible: Boolean;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    subjects: [{ type: String, required: true }],
    admin: { type: Boolean, default: false },
    owner: { type: Boolean, default: false },
    visible: { type: Boolean, default: true }
});

export default mongoose.model<IUser>('User', UserSchema);