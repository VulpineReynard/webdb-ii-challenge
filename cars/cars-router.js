const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.route("/")
.get(function rootGetController(req, res) {
  res.status(200).json({ message: "Good to go."})
})

module.exports = router;