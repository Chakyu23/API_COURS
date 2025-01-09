import express from 'express';
import sql from "mssql";
import { dbConfig } from "../Db.js";
import {jwtMiddleware} from "../Middle_Jwt.js";

export const RouterProducts = express.Router();

// GET - /products
RouterProducts.get('/products', jwtMiddleware, async(req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const data = pool.request().query(`SELECT * FROM Sch_Art.Produit`);
        data.then(result=>{
            return res.json(result);
        })
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /products
RouterProducts.post('/products', jwtMiddleware, async(req, res) => {
    try {

    }
    catch(err) {
        console.log(err);
    }
});

// GET - /products/{id}
RouterProducts.get('/products/:productID', jwtMiddleware, async(req, res) => {
    try {
        const { productID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// GET - /products/{id}
RouterProducts.put('/products/:productID', jwtMiddleware, async(req, res) => {
    try {
        const { productID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /products/{id}
RouterProducts.delete('/products/:productID', jwtMiddleware, async(req, res) => {
    try {
        const { productID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// Commentaire
// POST - /products/{id}/comments
RouterProducts.post('/products/:productID/comments', jwtMiddleware, async(req, res) => {
    try {
        const { productID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /products/{id}/comments
RouterProducts.get('/products/:productID/comments', jwtMiddleware, async(req, res) => {
    try {
        const { productID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// GET - /products/{id}/comments/{id}
RouterProducts.get('/products/:productID/comments/:commentID', jwtMiddleware, async(req, res) => {
    try {
        const { productID, commentID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// PUT - /products/{id}/comments/{id}
RouterProducts.put('/products/:productID/comments/:commentID', jwtMiddleware, async(req, res) => {
    try {
        const { productID, commentID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});

// DELETE - /products/{id}/comments/{id}
RouterProducts.delete('/products/:productID/comments/:commentID', jwtMiddleware, async(req, res) => {
    try {
        const { productID, commentID } = req.params;
    }
    catch(err) {
        console.log(err);
    }
});
