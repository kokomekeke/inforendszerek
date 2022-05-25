import express = require('express');
import 'reflect-metadata';
import {ConnectionManager, createConnection} from 'typeorm';
import { connectionOptions } from '../ormconfig';
import { AppDataSource } from './data-source';
import { getRouter } from './router';

createConnection(connectionOptions).then(async connection => {
    console.log('Connected to database.');
    const app = express();

    
    app.use(express.json());
    app.use('/api', getRouter());

    app.listen(3000, () => {
        console.log('Listening on 3000 ...');
    });
    // TODO: set up server

}).catch(error => console.log(error));

/*AppDataSource.initialize()
    .then(async () => {
    
    const connection = await createConnection();
    console.log('Connected to database.');
    const app = express();

    
    app.use(express.json());
    app.use('/api', getRouter());

    app.listen(3000, () => {
        console.log('Listening on 3000 ...');
    });
    })
    .catch((error) => console.log(error))*/