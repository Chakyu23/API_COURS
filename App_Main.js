import express from 'express';
import cors from 'cors';
import {DB_Main} from './Sequelize/DB_Main.js';
import {RouterUsers} from './router/RouterUsers.js';
import {RouterProducts} from "./router/RouterProducts.js";
import {RouterOrders} from "./router/RouterOrders.js";
import {RouterMessages} from "./router/RouterMessages.js";
import {RouterDeliveryTours} from "./router/RouterDeliveryTour.js";
import {RouterAssignmentRequests} from "./router/RouterAssignmentRequests.js";
import {initRel} from "./Sequelize/models/init-Rel.js";
import {CORS_OPTIONS} from "./Const.js";
import { setupSocket } from "./socket.js";
import http from 'http'

const app = express();
const server = http.createServer(app);

app.use(cors(CORS_OPTIONS));
app.use(express.json());

app.use(RouterUsers);
app.use(RouterProducts);
app.use(RouterOrders);
app.use(RouterMessages);
app.use(RouterDeliveryTours);
app.use(RouterAssignmentRequests);

initRel();

try {
    await DB_Main.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

setupSocket(server);

app.use('/', (req, res)=> {
    return res.json("I'm the backend !");
});

app.listen(process.env.LISTEN_PORT, ()=>{
    console.log("Server started on port " + process.env.LISTEN_PORT);
})

