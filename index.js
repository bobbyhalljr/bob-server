const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ hello: "hello"})
})

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`API is running on port ${port}`)
})