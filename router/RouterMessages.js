import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Src/Db.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";

export const RouterMessages = express.Router();

RouterMessages.use('/messages', async(req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const data = pool.request().query(`SELECT * FROM Sch_Msg.MSG WHERE IdSalon = ` + PERSONAL_MESSAGE_ID);
        data.then(result=>{
            return res.json(result);
        })
    }
    catch(err) {
        console.log(err);
    }
});