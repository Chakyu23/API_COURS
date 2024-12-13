import express from 'express';
import cors from 'cors';
import { RouterUser } from './router/RouterUsers.js';

const app = express();
app.use(cors());
app.use(RouterUser)

app.use('/', (req, res)=> {
    return res.json("I'm the backend !");
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})

