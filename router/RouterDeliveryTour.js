import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Src/Db.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";

export const RouterDeliveryTours = express.Router();

RouterDeliveryTours.use('/delivery-tours', async(req, res) => {
    try {
       return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});