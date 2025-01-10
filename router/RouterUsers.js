import express from 'express';
import {jwtMiddleware} from "../Middle_Jwt.js";
import jwt from "jsonwebtoken";
import {Utilisateur} from "../Sequelize/models/Utilisateur.js";
import bcrypt from "bcrypt";
import {config} from 'dotenv'

export const RouterUsers = express.Router();

// POST - /login
RouterUsers.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;

        // Exemple de validation (vous devriez remplacer cela par une vraie vérification avec une base de données)
        if (username === 'admin' && password === 'password') {
            // Créer un token
            const token = jwt.sign(
                { name: username }, // Payload
                process.env.JWT_SECRET_KEY,         // Clé secrète
                { expiresIn: '1h' } // Options (ex. expiration)
            );

            return res.json({ token });
        }

        return res.status(401).json({message: 'Identifiants invalides.'});
    }
    catch (err) {
        console.log(err);
    }
});

// POST - /register
RouterUsers.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
    }
    catch(err) {
        console.log(err);
    }
});

// POST - /users
RouterUsers.post('/users', jwtMiddleware, async(req, res) => {
    try {
        const {Nom, Prenom, NumTelephone, Email, AddresseFact, AddresseLivr, Login, Mdp, Ville, IdGroupe} = req.body;

        bcrypt.genSalt(process.env.SALT_ROUNDS, (err, salt) => {
            if (err) {
                return res.status(501).json(err);
            }
            let Salted_MDP = ""
            bcrypt.hash(Mdp, salt, (err, hash) => {
                if (err) {
                    // Handle error
                    return res.status(501).json(err);
                }
                Salted_MDP = hash;
            });
        });





        const newUser = await Utilisateur.create({
            Nom : Nom,
            Prenom : Prenom,
            NumTelephone : NumTelephone,
            Email : Email,
            AddresseFact : AddresseFact,
            AddresseLivr : AddresseLivr,
            Login : Login,
            Mdp : Salted_MDP,
            IdVille : IdVille,
            IdGroupe : IdGroupe
        })
        return res.status(201).json(newUser.IdUtilisateur);
    }
    catch(err) {
        return res.status(501).json(err);
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