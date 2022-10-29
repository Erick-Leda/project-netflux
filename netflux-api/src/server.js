require ('dotenv').config({path:'var.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Server connected: http://localhost:${process.env.PORT}`);
});