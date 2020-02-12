import mongoose, { Schema, Document } from 'mongoose';
import { isContext } from 'vm';

export interface IComment extends Document {
    userID: Schema.Types.ObjectId;
    message: String;
    postDate: Date;
    lastEdit: Date;
    visible: Boolean;
}

const CommentSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, required: true },
    message: { type: String, required: true },
    postDate: { type: Date, default: Date.now() },
    lastEdit: { type: Date, default: Date.now() },
    visible: { type: Boolean, default: true }
});

export default mongoose.model<IComment>('Comment', CommentSchema);