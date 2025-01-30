import express from 'express';
import {jwtMiddleware} from "../Middle_Jwt.js";
import jwt from "jsonwebtoken";
import {Utilisateur} from "../Sequelize/models/Utilisateur.js";
import {QueryTypes} from "sequelize";
import {DB_Main} from "../Sequelize/DB_Main.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const RouterUsers = express.Router();

async function getNextUserId() {
    try {
        const [results, metadata] = await DB_Main.query(
            "SELECT (MAX(IdUtilisateur) + 1) AS NewID FROM Sch_User.Utilisateur"
        );

        // Récupération de la valeur
        return results[0].NewID ?? 1;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

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
        return res.status(501).json({message: 'Identifiants invalides.'});
    }
});

// POST - /register
RouterUsers.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
    }
    catch(err) {
        return res.status(501).json(err);
    }
});

// POST - /users
RouterUsers.post('/users', jwtMiddleware, async(req, res) => {
    try {
        const {Nom, Prenom, NumTelephone, Email, AddresseFact, AddresseLivr, Login, Mdp, Ville, IdGroupe, CP, ISO_Pays} = req.body;
        let Salted_MDP = ""

        await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10), (err, salt) => {
            if (err) {
                return res.status(501).json(err);
            }
            bcrypt.hash(Mdp, salt, (err, hash) => {
                if (err) {
                    // Handle error
                    return res.status(501).json(err);
                }
                Salted_MDP = hash
            });
        });
        console.log(Salted_MDP);
        let id = await getNextUserId()

        const newUser = await Utilisateur.create({
            IdUtilisateur : id,
            Nom : Nom,
            Prenom : Prenom,
            NumTelephone : NumTelephone,
            Email : Email,
            AddresseFact : AddresseFact,
            AddresseLivr : AddresseLivr,
            Login : Login,
            Mdp : Salted_MDP,
            Ville : Ville,
            CodePostal : CP,
            ISO_Pays : ISO_Pays,
            IdGroupe : IdGroupe,
            Suppr : false
        })
        return res.status(201).json(newUser);
    }
    catch(err) {
        console.log(err);
        return res.status(501).json(err);
    }
});

// GET - /users/roles/{role}
RouterUsers.get('/users/Roles/:RoleID', jwtMiddleware, async(req, res) => {
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
                const user = await Utilisateur.findOne({
            where: { IdUtilisateur: userID }
        });
        // 🔹 Vérifier si l'utilisateur existe
        if (!user) {
            return res.status(404).json("Utilisateur non trouvé");
        }

        // 🔹 Retourner l'utilisateur au format JSON
        return res.status(201).json(user);

    }
    catch(err) {
        return res.status(501).json(err);
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