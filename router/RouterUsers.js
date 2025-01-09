import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterUsers = express.Router();

// POST - /users
RouterUsers.post('/users', jwtMiddleware, async(req, res) => {
    try {

    }
    catch(err) {
        console.log(err);
    }
});

// GET - /users/{role}
RouterUsers.get('/users/:RoleID', jwtMiddleware, async(req, res) => {
    try {
        const { RoleID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// GET - /users/{id}
RouterUsers.get('/users/:userID', jwtMiddleware, async(req, res) => {
    try {
        const { userID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /users/{id}
RouterUsers.put('/users/:userID', jwtMiddleware, async(req, res) => {
    try {
        const { userID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /users/{id}
RouterUsers.delete('/users/:userID', jwtMiddleware, async(req, res) => {
    try {
        const { userID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});