var express = require('express');
var router = express.Router();
var stripe = require("stripe")("sk_test_0oZII9zsOS1nYVIRCNMF6HsR");

/* GET dash and redirect to home */
router.get('/', function(req, res, next) {
    //render back to home
    res.render('index');
}).post('/',
    function(req, res, next) {
        //render back to home

        var stripeToken = req.body.stripeToken;

        var charge = stripe.charges.create({
            amount: 2000, // amount in cents, again
            currency: "aud",
            source: stripeToken,
            description: "Example charge"
        }, function(err, charge) {
            if (err && err.type === 'StripeCardError') {
                // The card has been declined
            }
        });

        res.render('index');
    }
);

module.exports = router;