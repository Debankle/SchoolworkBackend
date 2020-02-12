import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: String;
    year: Number;
    email: String;
    subjects: Array<String>;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    subjects: { type: Array, required: true }
});

export default mongoose.model<IUser>('User', UserSchema);