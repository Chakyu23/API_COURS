import Sequelize from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

export const DB_Main = new Sequelize(process.env.DB_CREDENTIAL_DATABASE, process.env.DB_CREDENTIAL_USER, process.env.DB_CREDENTIAL_PASSWORD, {
    host: process.env.DB_CREDENTIAL_SERVEUR,
    port: process.env.DB_CREDENTIAL_PORT,
    dialect: 'mssql'
});

