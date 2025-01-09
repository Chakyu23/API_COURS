import express from 'express';
import cors from 'cors';
import { RouterUsers } from './router/RouterUsers.js';
import {RouterProducts} from "./router/RouterProducts.js";
import {RouterOrders} from "./router/RouterOrders.js";
import {RouterMessages} from "./router/RouterMessages.js";
import {RouterDeliveryTours} from "./router/RouterDeliveryTour.js";
import {RouterAssignmentRequests} from "./router/RouterAssignmentRequests.js";
import {RouterLogin} from "./router/RouterLogin.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(RouterUsers)
app.use(RouterProducts)
app.use(RouterOrders)
app.use(RouterMessages)
app.use(RouterDeliveryTours)
app.use(RouterAssignmentRequests)
app.use(RouterLogin)

app.use('/', (req, res)=> {
    return res.json("I'm the backend !");
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})

