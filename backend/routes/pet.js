var express = require('express');
var router = express.Router();

const pets = require('../test/pet.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({peterpet:pets[0]});
});

module.exports = router;
