const express=require('express');
const cors= require('cors');
const server=express();
server.use(cors("*"));
server.use(express.json());


const usersRoutes = require("./controllers/users")
const authRoutes = require("./controllers/auth")


server.use("/users", usersRoutes);
server.use("/auth", authRoutes);

server.get('/', (req, res)=>{
    res.json('Hello world')
})


module.exports= server;
