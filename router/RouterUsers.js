import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterUsers = express.Router();

RouterUsers.use('/users', jwtMiddleware, async(req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const data = pool.request().query(`SELECT * FROM Sch_User.Utilisateur`);
        data.then(result=>{
            return res.json(result);
        })
    }
    catch(err) {
        console.log(err);
    }
});