import express from 'express';
import {jwtMiddleware} from "../Middle_Jwt.js";
import jwt from "jsonwebtoken";
import {Utilisateur} from "../Sequelize/models/Utilisateur.js";
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
        const { username, password } = req.headers;

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
        return res.status(502).json({message: 'Erreur serveur.'});
    }
});

// POST - /register
RouterUsers.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
    }
    catch(err) {
        return res.status(502).json({message: 'Erreur serveur.'});
    }
});

// POST - /users
RouterUsers.post('/users', jwtMiddleware, async(req, res) => {
    try {
        const {Nom, Prenom, NumTelephone, Email, AddresseFact, AddresseLivr, Login, Mdp, Ville, IdGroupe, CP, ISO_Pays} = req.body;

        await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10), async (err, salt) => {
            if (err) {
                return res.status(501).json(err);
            }
            await bcrypt.hash(Mdp, salt, async (err, hash) => {
                if (err) {
                    // Handle error
                    return res.status(501).json(err);
                }
                // 🔹 Mise à jour du mot de passe
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
                    Mdp : hash,
                    Ville : Ville,
                    CodePostal : CP,
                    ISO_Pays : ISO_Pays,
                    IdGroupe : IdGroupe,
                    Suppr : false
                })
            });
        });

        return res.status(201).json(newUser);
    }
    catch(err) {

        return res.status(502).json({message: 'Erreur serveur.'});
    }
});

// GET - /users/roles/{role}
RouterUsers.get('/users/Roles/:RoleID', jwtMiddleware, async(req, res) => {
    try {
        const { RoleID } = req.params;
    }
    catch(err) {
        return res.status(502).json({message: 'Erreur serveur.'});
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
        if (!user || user.Suppr === true) {
            return res.status(404).json("Utilisateur non trouvé");
        }

        // 🔹 Retourner l'utilisateur au format JSON
        return res.status(201).json(user);

    }
    catch(err) {
        return res.status(502).json({message: 'Erreur serveur.'});
    }
});

// PUT - /users/{id}
RouterUsers.put('/users/:userID', jwtMiddleware, async(req, res) => {
    try {
        const { userID } = req.params;
        const {Mdp} = req.body;
        const new_Data = req.body;
        const user = await Utilisateur.findOne({ where: { IdUtilisateur: userID } });
        if (!user || user.Suppr === true) {
            return {error: "Utilisateur non trouvé"};
        }

        await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10), async (err, salt) => {
            if (err) {
                return res.status(501).json(err);
            }
            await bcrypt.hash(Mdp, salt, async (err, hash) => {
                if (err) {
                    // Handle error
                    return res.status(501).json(err);
                }
                // 🔹 Mise à jour du mot de passe
                await user.update(new_Data);
                await user.update({Mdp : hash});
            });

        });
        return res.status(201).json(user);
    }
    catch(err) {
        return res.status(502).json({message: 'Erreur serveur.'});
    }
});

// DELETE - /users/{id}
RouterUsers.delete('/users/:userID', jwtMiddleware, async(req, res) => {
    try {
        const { userID } = req.params;

        const user = await Utilisateur.findOne({ where: { IdUtilisateur: userID } });
        if (!user || user.Suppr === true) {
            return res.status(404).json("Utilisateur non trouvé");
        }
        const login = user.Login
        // 🔹 Supprimer l'utilisateur
        await user.update({ Suppr: true });

        return res.status(201).json("Utilisateur : " + login + " supprimé.");
    }
    catch(err) {
        return res.status(502).json({message: 'Erreur serveur.'});
    }
});