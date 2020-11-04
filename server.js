const express = require('express');

//add cors
const cors = require("cors")

const server = express();

const userRouter = require("./users/userRouter.js")

server.use(express.json())
server.use(cors())

server.use("/api/users", userRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
