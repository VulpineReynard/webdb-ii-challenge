const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.route("/")
.get(function rootGetController(req, res) {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars.' })
    })
})
.post(function rootPostController(req, res) {
  const newCarData = req.body;
  db('cars').insert(newCarData)
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't create car." })
    })
})

module.exports = router;