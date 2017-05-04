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

router.get('/demo2/(:id)/(:category)', function(req, res, next){
	res.render('demo2',
	{
		id: req.params.id,
		category: req.params.category,
	});
});

router.get('/demo3', function(req, res, next) {
  res.json({ 
                message: 'Lorem ipsum sit dolor amet', 
                user: {name: 'Ryan', email: 'mail@ryan.apokpak.com', website: 'http://ryanalfi.net/'} 
        });
});

router.get('/demo4/', function (req, res, next){
  res.render('demo4');
});

router.post('/demo4/', function (req, res, next){
  res.json(
            {
              message: "request POST is executed",
              data: { 
                username: req.param('username'), 
                email: req.param('email'), 
                website: req.param('website'), 
                phone: req.param('phone'), 
              }
            }
        );
});

router.put('/demo5/', function (req, res, next){
  res.json(
            {
              message: "request PUT is executed",
              data: { 
                username: req.param('username'), 
                email: req.param('email'), 
                website: req.param('website'), 
                phone: req.param('phone'), 
              }
            }
        );
});

module.exports = router;
