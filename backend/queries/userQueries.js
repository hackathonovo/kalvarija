var User = require('../models/User');
var Action = require('../models/Action');

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

var getUserActiveActions = function(uid){
	return Action.find({
		participants: uid,
		finished: false,
		confirmedParticipants: {$ne: uid}
	})
	.populate([
		{path: "leader", select: uq.userFields},
		{path: "participants", select: uq.userFields}])
	.lean()
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

var editUser = function(id){
	var userToBeChanged = User.findById(id);
	userToBeChanged.name = user.name;

	return userToBeChanged.save();
}

module.exports = {
	userFields,
	getAll,
	getById,
	getByPhone,
	getByStation,
	getByGroup,
	addNew,
	editUser,
	setAvailability,
	getUserActiveActions
}