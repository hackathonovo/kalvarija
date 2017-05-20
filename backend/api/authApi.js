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
            var token = jwt.encode(user, config.secret);
            res.json({ success: true, token: 'JWT ' + token });
		})
		.catch(err => {
			res.noAuth({ success: false, msg: 'User not found.' });
		})
});

module.exports = router;