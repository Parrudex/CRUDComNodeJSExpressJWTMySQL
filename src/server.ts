require("dotenv-safe").config({silent: true});
const jwt = require('jsonwebtoken');

import express from 'express';
import cors from 'cors'
import 'reflect-metadata'

import { AppDataSource } from "./database/data-source";
import { routes } from './routes'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(cors())
    app.use(express.json())
    app.use(routes)

    app.listen(3000, () => {
        console.log('Running on port 3000')
    })
})