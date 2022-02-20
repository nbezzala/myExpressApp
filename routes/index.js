var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My little Express' });
});


router.get('/blogs/', function(req, res, next) {
  res.json([
    {id: 1, title: 'one', summary: 'summary of one'},
    {id: 2, title: 'two', summary: 'summary of two'},
    {id: 3, title: 'three', summary: 'summary of three'},
  ])
});


module.exports = router;
