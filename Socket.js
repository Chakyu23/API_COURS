import { Server } from "socket.io";
import { CORS_OPTIONS } from "./const.js";

let users = {}; // Stocke les utilisateurs connectés

export function setupSocket(server) {
    const io = new Server(server, { cors: CORS_OPTIONS });

    io.on("connection", (socket) => {
        console.log("Un utilisateur connecté :", socket.id);

        socket.on("join", (username) => {
            users[socket.id] = username;
            io.emit("userList", Object.values(users));
            console.log(`${username} a rejoint le chat.`);
        });

        socket.on("sendMessage", (message) => {
            const sender = users[socket.id] || "Anonyme";
            io.emit("receiveMessage", { sender, message });
        });

        socket.on("disconnect", () => {
            console.log(`${users[socket.id] || "Un utilisateur"} s'est déconnecté.`);
            delete users[socket.id];
            io.emit("userList", Object.values(users));
        });
    });
}