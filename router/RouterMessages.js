import express from 'express';
import sql from "mssql";
import { DB_Main } from "../Sequelize/DB_Main.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterMessages = express.Router();

// GET - /messages
RouterMessages.get('/messages', jwtMiddleware, async(req, res) => {
    try {
        // const pool = await sql.connect(dbConfig);
        // const data = pool.request().query(`SELECT * FROM Sch_Msg.MSG WHERE IdSalon = ` + PERSONAL_MESSAGE_ID);
        // data.then(result=>{
        //     return res.json(result);
        // })
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /messages/{id}
RouterMessages.post('/messages', jwtMiddleware, async(req, res) => {
    try {

    }
    catch(err) {
        console.log(err);
    }
});

// GET - /messages/{id}
RouterMessages.get('/messages/:messageID', jwtMiddleware, async(req, res) => {
    try {
        const { messageID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /messages/{id}
RouterMessages.put('/messages/:messageID', jwtMiddleware, async(req, res) => {
    try {
        const { messageID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /messages/{id}
RouterMessages.delete('/messages/:messageID', jwtMiddleware, async(req, res) => {
    try {
        const { messageID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});