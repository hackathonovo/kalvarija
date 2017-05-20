var Action = require('../models/Action');
var uq = require('../queries/userQueries');

var populateUsers = [
	{path: "leader", select: uq.userFields},
	{path: "participants", select: uq.userFields}
]

var actionFields = [
	"type",
	"leader",
	"startTime",
	"endTime",
	"location",
	"station",
	"description",
	"participants",
	"case",
	"alertLocation",
	"alertTime",
	"duration",
	"createdAt"
]

var addNew = function(type, leader, startTime, location, description, participants){
	var action = new Action({
		type: type,
		leader : leader,
		startTime : startTime,
		location : location,
		description : description,
		participants : participants
	});

	return action.save();
}

var getById = function(id){
	return Action.findById(id)
			.select(actionFields)
			.populate(populateUsers)
			.lean()
}

var getByLeader = function(leader){
	return Action.find({ leader: leader })
			.select(actionFields)
			.populate(populateUsers)
			.lean()
}

module.exports = {
	getById,
	getByLeader,
	addNew
}