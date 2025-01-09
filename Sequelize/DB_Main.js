import Sequelize from 'sequelize';
import {DB_CREDENTIAL} from "../Src/Key.js";

export const DB_Main = new Sequelize(DB_CREDENTIAL.database, DB_CREDENTIAL.user, DB_CREDENTIAL.password, {
    host: DB_CREDENTIAL.server,
    port: DB_CREDENTIAL.port,
    dialect: 'mssql'
});

