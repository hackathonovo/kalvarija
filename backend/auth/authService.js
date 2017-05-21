var passport = require('passport');
var config = require('../config/appConfig');

var passportAuthenticator = passport.authenticate('jwt', { session: false });
var fakeAlwaysTrueAuthenticator = (req, res, next) => next();

// var ensure = config.enableApiAuth
// 	? passportAuthenticator 
// 	: fakeAlwaysTrueAuthenticator;

var ensure = passportAuthenticator;

var isAdmin = function(req, res, next){
	if(req.user.isAdmin){ next() }
	else{ res.noAuth() }
}

module.exports = {
	ensure,
	isAdmin
};