const express = require('express');
const connect = require('./configs/db');

const app = express();
app.use(express.json());

const userController = require('./controllers/user.controller');
app.use('/users', userController);


const start = async () => {
    await connect();

    app.listen(1234, (err, res) => {
        console.log("listening on port 1234")
    })
}

module.exports = start;