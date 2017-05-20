var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/User');
var config = require('../config/appConfig');

module.exports = function(passport) {
    var opts = {};
    opts.secretOrKey = config.secret;
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findById(jwt_payload._id).then(function(user) {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        }).catch(function (err) {
            return done(err, false);
        });
    }));
};
