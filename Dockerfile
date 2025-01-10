# Utiliser une image Node.js officielle
FROM node:18
LABEL authors="yannb"

# Définir le répertoire de travail
WORKDIR /root/API_COURS

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "App_Main.js"]