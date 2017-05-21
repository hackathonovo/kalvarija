var Action = require('../models/Action');
var uq = require('../queries/userQueries');

var actionFields = [
	"name",
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
	"createdAt",
	"finishedAt"
]

var populateUsers = [
	{path: "leader", select: uq.userFields},
	{path: "participants", select: uq.userFields}
]

var addNew = function(name, type, leader, startTime, description, location, station, participants){
	
	if(participants===undefined){ participants = []}
	
	var action = new Action({
		name: name,
		type: type,
		leader : leader,
		startTime : startTime,
		location : location,
		station: station,
		description : description,
		participants : participants 
	});

	return action.save();
}

var getAll = function(){
	return Action.find()
		.select(actionFields)
		.populate(populateUsers)
		.lean()
}

var getById = function(id){
	return Action.findById(id)
			.select(actionFields)
			.populate(populateUsers)
			.lean()
}

var closeAction = function(id){
	return Action.findByIdAndUpdate(id, {
			finishedAt: new Date()
		})
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
	getAll,
	getByLeader,
	closeAction,
	addNew
}