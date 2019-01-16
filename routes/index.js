var express = require('express');
var router = express.Router();
var test_controller = require('../controllers/testController');

/* GET home page. */
router.get('/', test_controller.index);

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home Page' });
// });

router.post('/', test_controller.post);

router.get('/about', function(req, res, next) {
  res.render('about', { title: "About Me" });
});

router.get('/catalog', function(req, res, next) {
  res.render('catalog', { title: "Catalog of Items" });
});

module.exports = router;
