import { Response, Application, Request } from "express";

const express = require('express');

class SchoolworkBackend {
    public express: Application;
    public port: number;

    constructor() {
        this.express = express();
        this.port = 4200;
        this.initRoutes();
    }

    private initRoutes(): void {
        const router = express.Router();
        router.get('/', (req: Request, res: Response) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}

export default new SchoolworkBackend();