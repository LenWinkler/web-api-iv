require('dotenv').config();

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ hello: "web 23" })
})

console.log(process.env.MSG)

const port = process.env.PORT || 8014;

server.listen(port, () => {
    console.log(`\nServer running on port ${port}\n`)
})