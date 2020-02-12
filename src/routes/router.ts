import * as express from 'express';
import User, { IUser } from '../models/User';
import Post, { IPost } from '../models/Post';
import { Schema } from 'mongoose';

const BackendRouter = express.Router();

BackendRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

BackendRouter.post('/register', (req: express.Request, res: express.Response) => {
    new User({
        "name": req.body.name,
        "email": req.body.email,
        "year": req.body.year,
        "subjects": req.body.subjects,
        "admin": req.body.admin,
        "owner": req.body.owner
    }).save().then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err).sendStatus(400);
    });
});

BackendRouter.post('/delete/name', (req: express.Request, res: express.Response) => {
    User.deleteOne({
        "name": req.body.name
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err).sendStatus(400);
    });
});

BackendRouter.post('/create/post', (req: express.Request, res: express.Response) => {
    new Post({
        "title": req.body.title,
        "text": req.body.text,
        "userID": req.body.userID,
        "subject": req.body.subject,
        "postDate": Date.now(),
        "lastEdit": Date.now()
    }).save().then(() => {
        res.sendStatus(200);
    }).catch(err => {
        res.send(err).sendStatus(400);
    });
});


BackendRouter.post('/delete/post', (req: express.Request, res: express.Response) => {

    // TODO: create seperate delete function so errors can be handled
    var admin: Boolean = false;
    var postID: Schema.Types.ObjectId = req.body.postID;
    var userID: Schema.Types.ObjectId = req.body.userID;

    User.findById(userID, (err: Error, data: IUser) => {
        admin = data.admin;
        Post.findById(postID, (err: Error, data: IPost) => {
            if (data.userID == userID) {
                admin = true;
            }
            if (admin) {
                Post.deleteOne({
                    "_id": postID
                }).then(() => {
                    res.send({ errorCode: 200, message: "Successfully deleted post" });
                }).catch(err => {
                    res.send({ errorCode: 400, message: err});
                });
            } else {
                res.send({ errorCode: 400, message: "Lacking permissions" });
            }
        });
    });

});

export default BackendRouter;