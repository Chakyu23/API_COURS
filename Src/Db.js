export const dbConfig = {
    user: 'API_NodeJS',        // Nom d'utilisateur de la base de données
    password: 'Alpha1',      // Mot de passe
    server: 'localhost',         // Adresse du serveur SQL
    database: 'YannBourgeron_TP_SQL',   // Nom de la base
    options: {
        encrypt: true,                    // Si vous utilisez Azure SQL, mettez true
        trustServerCertificate: true,     // Sinon, vous pouvez le désactiver en local
    },
    port: 1443,
};