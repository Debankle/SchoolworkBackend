import { Application } from "express";
import * as bodyParser from 'body-parser';
import BackendRouter from './/routes/router';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

class SchoolworkBackend {
    public express: Application;
    public port: number;

    constructor() {
        this.express = express();
        this.port = 4200;

        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: false
        }));

        this.initRoutes();
    }

    private initRoutes(): void {
        this.express.use('', BackendRouter);
    }
}

export default new SchoolworkBackend();