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

module.exports = router;