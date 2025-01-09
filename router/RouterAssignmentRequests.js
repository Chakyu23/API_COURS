import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";

export const RouterAssignmentRequests = express.Router();

RouterAssignmentRequests.use('/assignment-requests', async(req, res) => {
    try {
        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});