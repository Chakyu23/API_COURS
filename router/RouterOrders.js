import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";

export const RouterOrders = express.Router();

RouterOrders.use('/orders', async(req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const data = pool.request().query(`SELECT * FROM Sch_Cde.Commande`);
        data.then(result=>{
            return res.json(result);
        })
    }
    catch(err) {
        console.log(err);
    }
});