var express = require('express');
var router = express.Router();

var PaymentController = require ("../Controllers/PaymentsController");
var PaymentService = require ("../Services/PaymentsService");
var PaymentInstance = new PaymentController(new PaymentService());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  PaymentInstance.getPaymentLink(req,res);

});

router.get('/subscription', function(req, res, next) {
  PaymentInstance.getSubscriptionLink(req,res);

});

module.exports = router;
