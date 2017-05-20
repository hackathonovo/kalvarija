var Action = require('../models/Action');

var actionFields = [
	"leader",
	"startTime",
	"endTime",
	"baseStation",
	"description",
	"additionalNotes",
	"groups",
	"case",
	"alertLocation",
	"alertTime",
	"duration"
]

var addNew = function(type, leader, startTime, baseStation, description, groups){
	var action = new Action({
		type: type,
		leader : leader,
		startTime : startTime,
		baseStation : baseStation,
		description : description,
		groups : groups
	});

	return action.save();
}

var getById = function(id){
	return Action.findById(id)
			.select(actionFields)
			.lean()
}

var getByLeader = function(leader){
	return Action.find({ leader: leader })
			.select(actionFields)
			.lean()
}

module.exports = {
	getById,
	getByLeader,
	addNew
}