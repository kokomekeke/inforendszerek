import "reflect-metadata"
import { DataSource } from "typeorm"
import { Keszlet } from "./entity/Keszlet"
import { Ugyfel } from "./entity/Ugyfel"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "kolcsonzo",
    multipleStatements: true,
    synchronize: true,
    logging: false,
    entities: [Keszlet, Ugyfel],
    migrations: [],
    subscribers: [],
})


