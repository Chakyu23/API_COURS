import {DB_CREDENTIAL} from "./Src/Key.js";

export const dbConfig = {
    user: DB_CREDENTIAL.user,        // Nom d'utilisateur de la base de données
    password: DB_CREDENTIAL.password,      // Mot de passe
    server: DB_CREDENTIAL.server,         // Adresse du serveur SQL
    database: DB_CREDENTIAL.database,   // Nom de la base
    options: {
        encrypt: true,                    // Si vous utilisez Azure SQL, mettez true
        trustServerCertificate: true,     // Sinon, vous pouvez le désactiver en local
    },
    port: 1443,
};