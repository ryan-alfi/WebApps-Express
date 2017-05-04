var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo1', function(req, res, next) {
	res.render('demo1',
	{
		message: 'Lorem ipsum dolor sit amet',
		user: {
			name: 'Ryan', email: 'mail@ryan.apokpak.com', website: 'http://ryanalfi.net/'
		}
	});
});

module.exports = router;
