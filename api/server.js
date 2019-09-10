const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../cars/cars-router.js');

const server = express();

server.use(express.json());
server.use(helmet());


server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h3>WORKING</h3>');
});

module.exports = server;
