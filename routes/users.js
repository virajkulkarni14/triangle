var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.post('/signup', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/signin', function(req, res, next) {
  res.render('signin');
});
router.post('/signin', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:id', function(req, res, next) {
  res.render('user');
});



module.exports = router;
