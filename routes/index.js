var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.amount = req.query.amount;
  res.render('index', { title: req.query.amount });

});

module.exports = router;
