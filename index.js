// code away!

//npm install and then create index.js

const server = require("./server.js")

const port = 5000

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})