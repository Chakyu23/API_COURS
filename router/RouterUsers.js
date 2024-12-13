import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Src/Db.js";

export const RouterUser = express.Router();

RouterUser.use('/Users', async(req, res) => {
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