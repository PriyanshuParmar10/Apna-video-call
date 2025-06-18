import dotenv from "dotenv";

if(process.env.NODE_ENV !== "production"){

    dotenv.config();

}


import express from "express";
import {createServer} from "node:http";

import { connectToSocket } from "./controllers/socketManager.js";

import {Server} from "socket.io";
import mongoose from "mongoose";

const db_url = process.env.ATLASDB_URL;

import cors from "cors";

import userRoutes from "./routes/users.routes.js";

const app = express();

const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:"true"}));

app.use("/api/v1/users", userRoutes);

async function main(){
    app.set("mongo_user")
        const connectionDb = await mongoose.connect(db_url); 

        console.log(`mongo connected Db host : ${connectionDb.connection.host}`);
}
main();


server.listen(app.get("port"),()=>{
    console.log("app is listening on port 8000");
});