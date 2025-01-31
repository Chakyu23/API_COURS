import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';
import cors from 'cors';

import {LauchDAB} from "./dab.js";
import {RouterUsers} from './router/RouterUsers.js';
// import {RouterProducts} from "./router/RouterProducts.js";
// import {RouterOrders} from "./router/RouterOrders.js";
// import {RouterMessages} from "./router/RouterMessages.js";
// import {RouterDeliveryTours} from "./router/RouterDeliveryTour.js";
// import {RouterAssignmentRequests} from "./router/RouterAssignmentRequests.js";
// import {initRel} from "./Sequelize/models/init-Rel.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(RouterUsers);
// app.use(RouterProducts);
// app.use(RouterOrders);
// app.use(RouterMessages);
// app.use(RouterDeliveryTours);
// app.use(RouterAssignmentRequests);

const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        const cmd = msg.split(' ');

        if (cmd[0] === "/dab") {
            io.emit('chat message', LauchDAB(cmd[1], cmd[2]));
        } else {
            io.emit('chat message', msg);
        }
        console.log('message: ' + msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(process.env.LISTEN_PORT, () => {
    console.log(`server running at http://localhost:${process.env.LISTEN_PORT}`);
});
