import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";

export const RouterProducts = express.Router();

RouterProducts.use('/products', async(req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const data = pool.request().query(`SELECT * FROM Sch_Art.Produit`);
        data.then(result=>{
            return res.json(result);
        })
    }
    catch(err) {
        console.log(err);
    }
});