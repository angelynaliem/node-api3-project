// code away!

//npm install and then create index.js
require("dotenv").config()

const server = require("./server.js")

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})