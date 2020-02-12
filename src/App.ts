import { Application } from "express";
import * as bodyParser from 'body-parser';
import BackendRouter from './/routes/router';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

class SchoolworkBackend {
    public backend: Application;
    public port: number;

    constructor() {
        this.backend = express();
        this.port = 4200;

        this.connectToMongo();
        this.initMiddleware();
        this.initRoutes();
    }

    public listen(): void {
        this.backend.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        }).on('error', (err: Error) => {
            console.log(err);
        });
    }

    private initMiddleware(): void {
        this.backend.use(cors());
        this.backend.use(bodyParser.json());
        this.backend.use(bodyParser.urlencoded({
            extended: false
        }));
    }

    private initRoutes(): void {
        this.backend.use('/api', BackendRouter);
    }

    private connectToMongo(): void {
        mongoose.connect('mongodb://localhost/schoolworkbackend', {
            promiseLibrary: require('bluebird'),
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).then(() => console.log('Connected to mongoDB')).catch((err: Error) => {
            console.error(err);
        });
    }
}

export default new SchoolworkBackend();