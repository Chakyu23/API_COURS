import express from "express";
import jwt from 'jsonwebtoken';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {JWT_SECRET_KEY} from "../Src/Key.js";

export const RouterLogin = express.Router();

RouterLogin.post('/login', (req, res) => {
    console.log("Start" );
    const { username, password } = req.body;

    // Exemple de validation (vous devriez remplacer cela par une vraie vérification avec une base de données)
    if (username === 'admin' && password === 'password') {
        // Créer un token
        const token = jwt.sign(
            { name: username }, // Payload
            JWT_SECRET_KEY,         // Clé secrète
            { expiresIn: '1h' } // Options (ex. expiration)
        );

        return res.json({ token });
    }

    return res.status(401).json({message: 'Identifiants invalides.'});
});