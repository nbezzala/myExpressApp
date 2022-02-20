var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController')
var article_controller = require('../controllers/articleController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource - blog');
});

router.get('/users/', user_controller.user_list);
router.get('/articles', article_controller.article_list);


module.exports = router;