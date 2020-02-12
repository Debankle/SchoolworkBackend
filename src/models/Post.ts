import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPost extends Document {
    title: String;
    text: String;
    userID: Schema.Types.ObjectId;
    subject: String;
    comments: Array<Schema.Types.ObjectId>;
    postDate: Date;
    lastEdit: Date;
    visible: Boolean;
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    userID: { type: Schema.Types.ObjectId, required: true },
    subject: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    postDate: { type: Date },
    lastEdit: { type: Date },
    visible: { type: Boolean, default: true }
});

export default mongoose.model<IPost>('Post', PostSchema);