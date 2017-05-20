var passport = require('passport');
var config = require('../config/appConfig');

var passportAuthenticator = passport.authenticate('jwt', { session: false });
var fakeAlwaysTrueAuthenticator = (req, res, next) => next();

var ensure = config.enableApiAuth
	? passportAuthenticator 
	: fakeAlwaysTrueAuthenticator;

module.exports = {
	ensure
};