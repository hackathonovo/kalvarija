var express = require('express');
var passport = require('passport');
var router = express.Router();
var jwt = require('jwt-simple');
var uq = require('../queries/userQueries');
var config = require('../config/appConfig');
var _ = require('lodash');

router.post('/authenticate', function(req, res, next) {
	uq.getByPhone(req.body.phone)
		.then(user => {
			if(user[0]){
	            var token = jwt.encode(user[0], config.secret);
	            res.json({ success: true, token: 'JWT ' + token });
			}else{
				res.noAuth({ success: false, msg: 'User not found.' });
			}
		})
});

module.exports = router;