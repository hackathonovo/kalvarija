var User = require('../models/User');

var userFields = [
	"name",
	"phone",
	"type",
	"groups",
	"station",
	"job",
	"currentAvailability",
	"availability",
	"location"
]

var addNew = function(name, phone, type, groups, station){
	var user = new User({
		name: name,
	 	phone : phone,
	 	type : type,
	 	groups : groups,
	 	station : station,
	 	currentAvailability: true
	})

	return user.save();
}

var setAvailability = function(uid, status){
	return User.findByIdAndUpdate(uid, { currentAvailability: status }).exec()
}

var getAll = function(){
	return User.find()
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
	getAll,
	getById,
	getByPhone,
	getByStation,
	getByGroup,
	addNew,
	setAvailability
}