var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
