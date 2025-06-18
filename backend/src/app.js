import express from "express";
import {createServer} from "node:http";

import { connectToSocket } from "./controllers/socketManager.js";

import {Server} from "socket.io";
import mongoose from "mongoose";

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
        const connectionDb = await mongoose.connect("mongodb+srv://priyanshuparmar2022:8qdqxXN7v0yTxz9c@cluster0.8ywjg8j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); 

        console.log(`mongo connected Db host : ${connectionDb.connection.host}`);
}
main();


server.listen(app.get("port"),()=>{
    console.log("app is listening on port 8000");
});