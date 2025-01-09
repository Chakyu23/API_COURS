import express from 'express';
import sql from "mssql";
import { DB_Main } from "../Sequelize/DB_Main.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterDeliveryTours = express.Router();

// GET - /delivery-tours
RouterDeliveryTours.get('/delivery-tours', jwtMiddleware, async(req, res) => {
    try {
       return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /delivery-tours
RouterDeliveryTours.post('/delivery-tours', jwtMiddleware, async(req, res) => {
    try {
        return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});

// GET - /delivery-tours/{id}
RouterDeliveryTours.get('/delivery-tours/:deliveryTourID', jwtMiddleware, async(req, res) => {
    try {
        const { deliveryTourID } = req.params;


        return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /delivery-tours/{id}
RouterDeliveryTours.put('/delivery-tours/:deliveryTourID', jwtMiddleware, async(req, res) => {
    try {
        const { deliveryTourID } = req.params;


        return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /delivery-tours/{id}
RouterDeliveryTours.delete('/delivery-tours/:deliveryTourID', jwtMiddleware, async(req, res) => {
    try {
        const { deliveryTourID } = req.params;


        return 'Table not created for delivery tours';
    }
    catch(err) {
        console.log(err);
    }
});