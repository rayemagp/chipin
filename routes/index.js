var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var max = 200;
  var amount = (req.query.amount/max)*100;
  res.locals.amount = amount;
  res.locals.raised = req.query.amount;

  res.render('index', {
      title: req.query.amount,
  });

});

module.exports = router;
