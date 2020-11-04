const express = require('express');

//add cors
const cors = require("cors")

const server = express();

const userRouter = require("./users/userRouter.js")
const postRouter = require("./posts/postRouter.js")

server.use(express.json())
server.use(cors())
server.use(logger)

server.use("/api/users", userRouter)
server.use("/api/users/posts", postRouter)

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
//   - this middleware runs on every request made to the API

function logger(req, res, next) {
  console.log({
    "Request method": req.method,
    "Request URL": req.url,
    "Timestamp": Date.now()
  })
  next()
}

module.exports = server;
