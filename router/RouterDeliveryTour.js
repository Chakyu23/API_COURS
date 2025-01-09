import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterDeliveryTours = express.Router();

RouterDeliveryTours.use('/delivery-tours', jwtMiddleware, async(req, res) => {
    try {
       return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});