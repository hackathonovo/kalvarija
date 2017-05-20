var User = require('../models/User');
var mongoose = require('mongoose');

var userFields = [
	"firstName",
	"lastName",
	"phone"
	"type",
	"skills",
	"station",
	"job",
	"availability",
	"location"
]

var getUser = function(id){
	return User.findById(id)
			.select(userFields)
			.lean()
}

module.exports = {
	getUser
}