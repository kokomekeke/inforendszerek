import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'kolcsonzo',
    synchronize: true,
    logging: true,
    entities: [
       'src/entity/**/*.ts'
    ],
    migrations: [
       'src/migration/**/*.ts'
    ],
    subscribers: [
       'src/subscriber/**/*.ts'
    ],
 };

export { connectionOptions };