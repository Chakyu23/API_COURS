import jwt from 'jsonwebtoken';

export const jwtMiddleware = (req, res, next) => {
    // Récupérer le token de l'en-tête Authorization
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Token manquant.' });
    }

    try {
        // Vérifier le token
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Ajouter les informations du token au req pour les routes suivantes
        req.user = payload;

        // Passer à la prochaine fonction middleware ou route
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token invalide.' });
    }
};