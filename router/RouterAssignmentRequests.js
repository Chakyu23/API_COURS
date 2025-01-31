import express from 'express';
import sql from "mssql";
import { DB_Main } from "../Sequelize/DB_Main.js";
import {PERSONAL_MESSAGE_ID} from "../Const.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterAssignmentRequests = express.Router();

// GET - /assignment-requests
RouterAssignmentRequests.get('/assignment-requests', jwtMiddleware, async(req, res) => {
    try {
        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /assignment-requests
RouterAssignmentRequests.post('/assignment-requests', jwtMiddleware, async(req, res) => {
    try {
        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});

// GET - /assignment-requests/{id}
RouterAssignmentRequests.get('/assignment-requests/:assignmentRequestID', jwtMiddleware, async(req, res) => {
    try {
        const { assignmentRequestID } = req.params;


        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /assignment-requests/{id}
RouterAssignmentRequests.put('/assignment-requests/:assignmentRequestID', jwtMiddleware, async(req, res) => {
    try {
        const { assignmentRequestID } = req.params;


        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /assignment-requests/{id}
RouterAssignmentRequests.delete('/assignment-requests/:assignmentRequestID', jwtMiddleware, async(req, res) => {
    try {
        const { assignmentRequestID } = req.params;


        return 'Table not created for Assignment Requests';
    }
    catch(err) {
        console.log(err);
    }
});