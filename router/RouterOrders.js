import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterOrders = express.Router();

// GET - /orders
RouterOrders.get('/orders', jwtMiddleware, async(req, res) => {
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

// POST - /orders
RouterOrders.post('/orders', jwtMiddleware, async(req, res) => {
    try {

    }
    catch(err) {
        console.log(err);
    }
});

// POST - /orders
RouterOrders.post('/orders', jwtMiddleware, async(req, res) => {
    try {

    }
    catch(err) {
        console.log(err);
    }
});

// GET - /orders/{id}
RouterOrders.get('/orders/:orderID', jwtMiddleware, async(req, res) => {
    try {
        const { orderID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /orders/{id}
RouterOrders.put('/orders/:orderID', jwtMiddleware, async(req, res) => {
    try {
        const { orderID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /orders/{id}
RouterOrders.delete('/orders/:orderID', jwtMiddleware, async(req, res) => {
    try {
        const { orderID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});


