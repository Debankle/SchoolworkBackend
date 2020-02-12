import * as express from 'express';
import User, { IUser } from '../models/Schema';
const BackendRouter = express.Router();

BackendRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});

BackendRouter.post('/register', (req: express.Request, res: express.Response) => {
    new User({
        "name": req.body.name,
        "email": req.body.email,
        "year": req.body.year,
        "subjects": req.body.subjects
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

export default BackendRouter;