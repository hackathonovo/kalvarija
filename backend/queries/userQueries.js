var User = require('../models/User');

var userFields = [
	"firstName",
	"lastName",
	"phone",
	"type",
	"skills",
	"station",
	"job",
	"availability",
	"location"
]

var addNew = function(firstName, lastName, phone, type, skills, station){
	var user = new User({
		firstName : firstName,
	 	lastName : lastName,
	 	phone : phone,
	 	type : type,
	 	skills : skills,
	 	station : station
	})

	return user.save();
}

var getById = function(id){
	return User.findById(id)
			.select(userFields)
			.lean()
}

var getByPhone = function(phone){
	return User.find({ phone: phone })
			.select(userFields)
			.lean()
}

var getByStation = function(station){
	return User.find({ station: station })
		.select(userFields)
		.lean()
}

var getByGroup = function(group, station){
	return User.find({groups: group, station: station})
		.select(userFields)
		.lean()
}


module.exports = {
	userFields,
	getById,
	getByPhone,
	getByStation,
	getByGroup,
	addNew
}