import * as express from 'express';

const BackendRouter = express.Router();

BackendRouter.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});


export default BackendRouter;