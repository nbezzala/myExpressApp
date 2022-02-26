var express = require('express');
var router = express.Router();

var fortune_controller = require('../controllers/fortuneController')

router.get('/', fortune_controller.random_fortune);

module.exports = router;
