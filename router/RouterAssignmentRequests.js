import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterAssignmentRequests = express.Router();

RouterAssignmentRequests.use('/assignment-requests', jwtMiddleware, async(req, res) => {
    try {
        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});